

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


class PhysicsNumber {
  private _used: number[];
  private _upperLimit: number; //inclusive

  constructor(props: {
    upperLimit: number,
    used: number[] | undefined
  }) {
    this._used = props.used ?? [];
    if(props.upperLimit < 10) {
      throw new Error(`Min supported upper limit is 10, you entered: ${props.upperLimit}!`)
    }
    this._upperLimit = props.upperLimit;
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
      return 10;
    }
    return 100;
  }
  private base() {
    const base = randomIntFromInterval(1, 9);
    return base;
  }
}

export type PhysicsValueType = 'P' | 'p' | 'V' | 'v' | 'R' | 'r';

export class PhysicsEngine {

  private p_power = new PhysicsNumber({ upperLimit: 1000, used: [] });
  private v_voltage = new PhysicsNumber({ upperLimit: 99, used: [] });
  private r_resistance = new PhysicsNumber({ upperLimit: 1000, used: [] });

  constructor() {
  }
  nextValue(type: PhysicsValueType) {
    const cleaned = type.toLowerCase()
    if(cleaned === 'p'){
      return this.nextPower();
    } else if(cleaned === 'v'){
      return this.nextVoltage();
    } else if(cleaned === 'r'){
      return this.nextResistance()
    }
    throw Error(`Unknown value provided: ${type}!`)
  }

  reserveValue(value: number, type: PhysicsValueType): void {
    const cleaned = type.toLowerCase()
    if(cleaned === 'p'){
      this.p_power.reserve(value);
      return;
    } else if(cleaned === 'v'){
      this.v_voltage.reserve(value);
      return;
    } else if(cleaned === 'r'){
      this.r_resistance.reserve(value);
      return;
    }
    throw Error(`Unknown value provided: ${type}!`)
  }
  clear(): void {
    this.r_resistance.clear();
    this.v_voltage.clear();
    this.p_power.clear();
  }
  reserveAllValues(values: Record<string, number>): void {
    Object.entries(values).forEach(([key, value]) => {
      const type = this.isSupportedType(key);
      this.reserveValue(value, type);
    })
  }

  isSupportedType(type: string): PhysicsValueType {
    const cleaned = type.toLowerCase()
    if(cleaned === 'p'){
      return cleaned;
    } else if(cleaned === 'v'){
      return cleaned;
    } else if(cleaned === 'r'){
      return cleaned;
    }
    throw Error(`Unknown value provided: ${type}!`)
  }

  nextVoltage() {
    return this.v_voltage.nextValue();
  }
  nextResistance() {
    return this.p_power.nextValue();
  }
  nextPower() {
    return this.r_resistance.nextValue();
  }
  anyInt(start: number, end: number) {
    return randomIntFromInterval(start, end);
  }
}