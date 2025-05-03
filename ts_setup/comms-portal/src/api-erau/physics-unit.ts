

export interface PhysicsUnitType {
  code: string;
  clear: () => void;
  reserve: (valueToReserve: number) => void;
  nextValue: () => number;
}

export interface PhysicsUnitValueType {
  anyNextValue(): number;
  divisor(): number;
  multiplier(): number;
  base(): number;
  reject(input: number): void;
  rejected: number[];
  upperLimit: number;
  lowerLimit: number;
}

export function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function isEven(input: number): boolean {
  return input % 2 === 0;
}
export function isWholeNumber(input: number): boolean {
  const asString = input + '';
  const afterComma = asString.indexOf('.')
  if(afterComma < 0) {
    return true;
  }
  return asString.substring(afterComma+1).replaceAll('0', '').trim().length === 0;
}

