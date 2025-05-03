import { NormalizedFormula, parseFormula } from "./formula";
import { isWholeNumber, PhysicsUnitType } from "./physics-unit";
import { AnyPhysicsUnit, AnyPhysicsUnitValue } from "./physics-unit-any";
import { DecibelUnit } from "./physics-unit-decibel";
import { EvenNumberUnit } from "./physics-unit-even-number";
import { PowerRatioUnit } from "./physics-unit-power-ratio";
import { SequeceUnit } from "./physics-unit-sequence";

export interface UsedVariables {
  variables: Record<string, number>; // used variables to get the correct answer
  value: number; // the correct answer
  formula_to_what: PhysicsValueType;
  variable_index: number;
}


export type PhysicsValueType = (
  'dB' | 'db' | // decibels
  'P' | 'p' |   // power
  'V' | 'v' |   // voltage
  'R' | 'r' |   // resistence
  'I' | 'i' |   // current
  'Np'| 'np'|   // transformer turns on primary
  'Ns'| 'ns'|   // transformer turns on secondary
  'even_number'
);

export interface PhysicsEngineType {
  nextValue(type: PhysicsValueType): number;
  variables: UsedVariables;
}

function stringToHex(str: string): string {
  return str.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}
export class PhysicsEngine implements PhysicsEngineType {

  private all_units: Record<string, PhysicsUnitType> = {};
  private normalized_formula: NormalizedFormula;

  private formulaText: string;

  constructor(props: {
    formulaText: string 
  }) {
    //AnyPhysicsUnit
    this.formulaText = stringToHex(props.formulaText);

    const units: PhysicsUnitType[] = [
      new AnyPhysicsUnit(new AnyPhysicsUnitValue({ upperLimit: 99 }), { used: [], code: 'i' }),
      new AnyPhysicsUnit(new AnyPhysicsUnitValue({ upperLimit: 1000 }), { used: [], code: 'p' }),
      new AnyPhysicsUnit(new AnyPhysicsUnitValue({ lowerLimit: 10, upperLimit: 99 }), { used: [], code: 'v' }),
      new AnyPhysicsUnit(new AnyPhysicsUnitValue({ upperLimit: 1000 }), { used: [], code: 'r' }),
      new AnyPhysicsUnit(new AnyPhysicsUnitValue({ lowerLimit: 2000, upperLimit: 4000 }), { used: [], code: 'np' }),
      new AnyPhysicsUnit(new AnyPhysicsUnitValue({ lowerLimit: 100, upperLimit: 1000 }), { used: [], code: 'ns' }),
      new AnyPhysicsUnit(new EvenNumberUnit({ upperLimit: 20, lowerLimit: 2 }), { used: [], code: 'even_number' }),

      new AnyPhysicsUnit(new SequeceUnit({ upperLimit: 20, lowerLimit: 2  }), { used: [], code: 'seq_number' }),
      new AnyPhysicsUnit(new DecibelUnit({ upperLimit: 3*30, lowerLimit: 3 }), {  used: [], code: 'db' }),
      new AnyPhysicsUnit(new PowerRatioUnit({ upperLimit: 10_000, lowerLimit: 2 }), { used: [], code: 'power_ratio' }),
      new AnyPhysicsUnit(new EvenNumberUnit({ upperLimit: 20, lowerLimit: 2}), { used: [], code: 'component_seq' })
    ];
    for(const unit of units) {
      this.all_units[unit.code] = unit;
    }

    this.normalized_formula = parseFormula(props.formulaText)
    this.isSupportedType(this.normalized_formula.meta.name);
  }


  nextValue(type: PhysicsValueType) {
    const cleaned = type.toLowerCase()
    if(this.all_units[cleaned]){
      return this.all_units[cleaned].nextValue();
    }
    throw Error(`Unknown value provided: '${cleaned}', known values: ${Object.keys(this.all_units).join(', ')}!`)
  }

  

  private reserveValue(value: number, type: PhysicsValueType | string): void {
    const cleaned = type.toLowerCase()
    if(this.all_units[cleaned]){
      this.all_units[cleaned].reserve(value);
      return;
    }
    throw Error(`Unknown value provided: ${type}!`)
  }
  private clear(): void {
    Object.values(this.all_units).forEach(unit => unit.clear());
  }

  private reserveAllValues(values: Record<string, number>): void {
    Object.entries(values).forEach(([key, value]) => {
      const type = this.isSupportedType(key);
      this.reserveValue(value, type);
    })
  }

  private isSupportedType(type: string): PhysicsValueType {
    const cleaned = type.toLowerCase()
    if(this.all_units[cleaned]){
      return cleaned as PhysicsValueType;
    }
    throw Error(`Unknown value provided: ${type}!`)
  }

  private isOkForAnswer(input: number): boolean {
    const isSmall = input < 10000;
    return isSmall && isWholeNumber(input);
  }


  get variables(): UsedVariables {
    let variable_index = 0;

    // generate variable values until full figures
    let index = 0;
    while(index++ < 100000) {
      const { variables, evaluated } = this.normalized_formula.evaluate((key) => this.nextValue(key as any));
      
      if(this.isOkForAnswer(evaluated)) {
        const formulaToWhat = this.normalized_formula.meta.name as PhysicsValueType;

        this.clear();
        this.reserveAllValues(variables);
        this.reserveValue(evaluated, formulaToWhat);
        variable_index = index;
        return { variables, value: evaluated, variable_index, formula_to_what: formulaToWhat };
      }
    }
    throw Error(`Can't generate nice set of numbers for formula: ${this.formulaText}!`);
  }
}

