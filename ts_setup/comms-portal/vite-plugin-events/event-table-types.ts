import { EventApi } from '../src/api-events';

export interface TableTimeOnly {
  hour: number
  minute: number;
}

export interface TableDateOnly {
  year: number;
  month: number;
  day: number;
} 


export const allModes: EventApi.WorkMode[] = ['CW', 'SSB', 'FM', 'FT4', 'FT8', 'RTTY'];

export interface TableTitle {
  year: number;
  month: number; // starts from 1 - 12 
}


export interface TableRow {
  startDate: TableDateOnly;
  endDate: TableDateOnly | undefined;
  startTime: TableTimeOnly | undefined; 
  endTime: TableTimeOnly | undefined;

  priority: EventApi.EventPriority;
  name: string;
  location: string | undefined;
  modes: EventApi.WorkMode[];
  durationType: EventApi.EventDurationType;
}