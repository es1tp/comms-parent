import { DateTime } from 'luxon';
import { TableDateOnly, TableTimeOnly } from './event-table-types';

export function getMonthNames(): Record<string, number> {
  const monthNames: Record<string, number> = {};

  const formatter = new Intl.DateTimeFormat('et', { month: 'long' });
  for(let monthNumber = 1; monthNumber <= 12; monthNumber++) {
    const monthName = formatter.format(new Date(2003, monthNumber, 1))
    monthNames[monthName] = monthNumber;
  }
  return monthNames;
}

export function toDateNumber(text: string | undefined): number | undefined {
  if(!text) {
    return undefined;
  }
  return parseInt(text.replace('.', '').trim());
}


export function toStringUTC(date: TableDateOnly, time: TableTimeOnly) {
  DateTime.utc(2017, 5, 15, 17, 36)
  const {year, month, day} = date;
  const hour = time.hour;
  const minute = time.minute;

  return `'${DateTime.utc(year, month, day, hour, minute).toISO()}'`;
}