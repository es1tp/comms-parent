import { NormalizedFormula, parseFormula } from "./formula";
import { PhysicsUnit, PhysicsUnitType } from "./physics-unit";

export interface UsedVariables {
  variables: Record<string, number>; // used variables to get the correct answer
  value: number; // the correct answer
  formula_to_what: PhysicsValueType;
  variable_index: number;
}


export type PhysicsValueType = (
  'P' | 'p' |   // power
  'V' | 'v' |   // voltage
  'R' | 'r' |   // resistence
  'I' | 'i' |   // current
  'Np'| 'np'|   // transformer turns on primary
  'Ns'| 'ns'    // transformer turns on secondary
);

export interface PhysicsEngineType {
  nextValue(type: PhysicsValueType): number;
  variables: UsedVariables;
}

function stringToHex(str: string): string {
  return str.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}
export class PhysicsEngine implements PhysicsEngineType {

  private i_current: PhysicsUnitType;
  private p_power: PhysicsUnitType;
  private v_voltage: PhysicsUnitType;
  private r_resistance: PhysicsUnitType;
  private ns_transformer_turns: PhysicsUnitType;
  private np_transformer_turns: PhysicsUnitType;

  private all_units: Record<string, PhysicsUnitType> = {};
  private normalized_formula: NormalizedFormula;

  private formulaText: string;

  constructor(props: {
    formulaText: string 
  }) {

    this.formulaText = stringToHex(props.formulaText);
    this.i_current = new PhysicsUnit({ upperLimit: 99, used: [], code: 'i' });
    this.p_power = new PhysicsUnit({ upperLimit: 1000, used: [], code: 'p' });
    this.v_voltage = new PhysicsUnit({ upperLimit: 99, used: [], code: 'v' });
    this.r_resistance = new PhysicsUnit({ upperLimit: 1000, used: [], code: 'r' });
    this.np_transformer_turns = new PhysicsUnit({ lowerLimit: 2000, upperLimit: 4000, used: [], code: 'np' });
    this.ns_transformer_turns = new PhysicsUnit({ upperLimit: 1000, used: [], code: 'ns' });

    this.all_units[this.i_current.code] = this.i_current;
    this.all_units[this.p_power.code] = this.p_power;
    this.all_units[this.v_voltage.code] = this.v_voltage;
    this.all_units[this.r_resistance.code] = this.r_resistance;
    this.all_units[this.ns_transformer_turns.code] = this.ns_transformer_turns;
    this.all_units[this.np_transformer_turns.code] = this.np_transformer_turns;

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
    return isSmall && isWholeNumber(input) && isEven(input);
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

function isEven(input: number): boolean {
  return input % 2 === 0;
}

function isWholeNumber(input: number): boolean {
  const asString = input + '';
  const afterComma = asString.indexOf('.')
  if(afterComma < 0) {
    return true;
  }
  return asString.substring(afterComma+1).replaceAll('0', '').trim().length === 0;
}