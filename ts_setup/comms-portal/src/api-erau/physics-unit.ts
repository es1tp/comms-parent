

export function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export interface PhysicsUnitType {
  code: string;
  clear: () => void;
  reserve: (valueToReserve: number) => void;
  nextValue: () => number;
}

export class PhysicsUnit implements PhysicsUnitType {
  private _used: number[];
  private _upperLimit: number; //inclusive
  private _lowerLimit: number; //inclusive
  private _baseMultiplier: number; //inclusive
  private _code: string;

  constructor(props: {
    lowerLimit?: number,
    upperLimit: number,
    used: number[] | undefined,
    code: string;
  }) {
    this._code = props.code;
    this._used = props.used ?? [];
    if(props.upperLimit < 10) {
      throw new Error(`Min supported upper limit is 10, you entered: ${props.upperLimit}!`)
    }
    this._upperLimit = props.upperLimit;
    this._lowerLimit = props.lowerLimit ?? 1;
    this._baseMultiplier = Number.parseInt(1 + '0'.repeat(new String(props.lowerLimit ?? '10').length - 1));
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
    while(index++ < 10000) {

      const nextValue = this.anyNextValue();
      if(this._used.includes(nextValue)) {
        continue;
      }
      if(nextValue > this._upperLimit) {
        continue;
      }
      if(nextValue < this._lowerLimit) {
        continue;
      }
      this._used.push(nextValue);
      return nextValue;
    }

    return this.anyNextValue();
  }
  get used() {
    return this._used;
  }

  private anyNextValue(): number {
    const base = this.base();
    const multiplier = this.multiplier()
    const divisor = this.divisor()
    const result = base * multiplier / divisor;
    return result;
  }

  private divisor() {
    return randomIntFromInterval(1, 2);
  }
  private multiplier() {
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
  private base() {
    const base = randomIntFromInterval(1, 9);
    return base;
  }
}
