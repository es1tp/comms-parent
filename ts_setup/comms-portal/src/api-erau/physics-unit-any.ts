import { isWholeNumber, PhysicsUnitType, PhysicsUnitValueType, randomIntFromInterval } from "./physics-unit";

export class AnyPhysicsUnit implements PhysicsUnitType {
  private _used: number[];
  private _code: string;
  private _value: PhysicsUnitValueType;

  constructor(value: PhysicsUnitValueType, props: {
    used: number[] | undefined,
    code: string;
    
  }) {
    this._code = props.code;
    this._used = props.used ?? [];
    this._value = value;
  }
  get code() {
    return this._code;
  }
  clear() {
    this._used = [];
  }
  reserve(value: number) {
    this._used.push(value);
  }

  nextValue(): number {
    // between 1 - 9 * (10 | 100)
    let index = 0;
    // failsafe
    while(index++ < 100) {

      const nextValue = this._value.anyNextValue();
      if(this._used.includes(nextValue)) {
        this._value.reject(nextValue);
        continue;
      }
      if(nextValue > this._value.upperLimit) {
        this._value.reject(nextValue);
        continue;
      }
      if(nextValue < this._value.lowerLimit) {
        this._value.reject(nextValue);
        continue;
      }
      this._used.push(nextValue);
      return nextValue;
    }

    throw new Error(`Failed to generate next value for: ${this._code}, rejected: ${this._value.rejected.sort()}!`);

    //return this.anyNextValue();
  }
  get used() {
    return this._used;
  }
}

export class AnyPhysicsUnitValue implements PhysicsUnitValueType {
  private _upperLimit: number; //inclusive
  private _lowerLimit: number; //inclusive
  private _baseMultiplier: number; //inclusive
  private _wholeNumber: boolean;
  private _rejected: Set<number> = new Set();

  constructor (props: {
    lowerLimit?: number,
    wholeNumber?: boolean,
    upperLimit: number,
  }) {
    if(props.upperLimit < 10) {
      //throw new Error(`Min supported upper limit is 10, you entered: ${props.upperLimit}!`)
    }
    this._upperLimit = props.upperLimit;
    this._lowerLimit = props.lowerLimit ?? 1;
    this._wholeNumber = props.wholeNumber ?? false;
    this._baseMultiplier = 2 * Number.parseInt(1 + '0'.repeat(new String(props.lowerLimit ?? '10').length - 1));
  }

  get upperLimit() {
    return this._upperLimit;
  }
  get lowerLimit() {
    return this._lowerLimit;
  }

  get rejected() {
    return Array.from(this._rejected)
  }

  reject(input: number) {
    this._rejected.add(input);
  }
  anyNextValue(): number {
    const base = this.base();
    const multiplier = this.multiplier()
    const divisor = this.divisor()
    const result = base * multiplier / divisor;
    if(!isWholeNumber(result) && this._wholeNumber) {
      return base * multiplier;
    }
    return result;
  }
  divisor() {
    return randomIntFromInterval(1, 2);
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
  base(): number {
    const base = randomIntFromInterval(1, 9);
    return base;
  }
}