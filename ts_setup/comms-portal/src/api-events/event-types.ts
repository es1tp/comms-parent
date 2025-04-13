
export declare namespace EventApi {

  export type Calendar = CalendarEvent[];

  export interface CalendarEvent {
    eventName: string;
    location: string | undefined;
    priority: EventPriority;
    duration: EventDurationType;
    workModes: WorkMode[];

    startAt: string; // iso date formate
    endsAt: string | undefined; // iso date formate
  }
  export type WorkMode = 'CW' | 'SSB' | 'FM' | 'FT4' | 'FT8' | 'RTTY';
  export type EventPriority = 'NORMAL' | 'IMPORTANT';
  export type EventDurationType = 'ONE_DAY' | 'MULTIPLE_DAYS';
}