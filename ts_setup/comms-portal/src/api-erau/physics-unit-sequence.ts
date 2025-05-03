import { PhysicsUnitValueType, randomIntFromInterval } from "./physics-unit";


export class SequeceUnit implements PhysicsUnitValueType {
  private _upperLimit: number; //inclusive
  private _lowerLimit: number; //inclusive
  private _baseMultiplier: number; //inclusive
  private _rejected: Set<number> = new Set();
  
  constructor(props: {
    lowerLimit?: number,
    upperLimit: number,
    
  }) {
    if(props.upperLimit < 1) {
      throw new Error(`Min supported upper limit is 1, you entered: ${props.upperLimit}!`)
    }
    this._upperLimit = props.upperLimit;
    this._lowerLimit = props.lowerLimit ?? 2;
    this._baseMultiplier = 2 * Number.parseInt(1 + '0'.repeat(new String(props.lowerLimit ?? '10').length - 1));
  }

  divisor(): number {
    return 1;
  }
  get upperLimit() {return this._upperLimit};
  get lowerLimit() {return this._lowerLimit};
  get rejected() {
    return Array.from(this._rejected)
  }
  reject(input: number) {
    this._rejected.add(input);
  }

  anyNextValue(): number {
    const base = this.base();
    const multiplier = this.multiplier()
    const result = base * multiplier;
    return result;
  }

  multiplier() {
    const multiplier = randomIntFromInterval(1, 2);
    if(multiplier === 1) {
      return this._baseMultiplier;
    }
    const next = this._baseMultiplier * 10;
    if(this._upperLimit < next) {
      return this._baseMultiplier;
    }
    return next;
  }
  base() {
    const base = randomIntFromInterval(1, 9);
    return base;
  }
}
