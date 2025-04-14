import { HTMLElement, parse } from 'node-html-parser';

import { EventApi } from '../src/api-events';
import { getMonthNames, toDateNumber, toStringUTC } from './date-utils'
import { allModes, TableDateOnly, TableRow, TableTimeOnly, TableTitle } from './event-table-types';
import { FilePath, writeFile } from './file-utils';


class HtmlVisitor {
  private _namesByNumber = getMonthNames();
  private _titles: TableTitle[] = [];
  private _rows: TableRow[] = [];
  
  visitHtml(calendar: string): HtmlVisitor {
    const dom = parse(calendar)
    const [main] = dom.getElementsByTagName('main');
    if(!main) {
      throw new Error("main not found!");
    }
    main.children.forEach(mainEntry => this.visitMainChild(mainEntry))
    return this;
  }

  visitMainChild(child : HTMLElement) {
    if(child.tagName === 'DIV') {
      child.children.forEach(mainEntry => this.visitMainChild(mainEntry))
      return;
    }

    if(child.tagName === 'P') {
      this.visitTableHeader(child);
    } else if(child.tagName === 'TABLE') {
      this.visitTable(child);
    }
  }

  visitTableHeader(possiblyTableHeader: HTMLElement) {
    const content = possiblyTableHeader.textContent?.trim();
    if(!content) {
      return;
    }

    const [monthName, year] = content.toLocaleLowerCase().split(' ').filter(entry => !!entry);
    const monthNumber = this._namesByNumber[monthName];
    if(!monthNumber) {
      return;
    }
    try {
      this._titles.push({
        year: parseInt(year),
        month: monthNumber,
      });
    } catch(error) {
      const msg = 'failed to parse month data from title';
      console.error(msg, error);
      throw new Error(msg);
    }
  }

  visitTable(table: HTMLElement) {
    table.getElementsByTagName('TR').forEach(row => {

      try {
        this.visitRow(row)
      } catch(e) {
        console.error(e, row.textContent);
        throw new Error('failed to parse table row')
      }
    })
  }


  visitRow(row: HTMLElement) {
    const [eventDate, eventName, startAndEnd, locationOrMode] = row.getElementsByTagName('TD');

    // tables headers are missing, identify if it's header row or not based on content
    if(eventDate.textContent.trim().toLocaleLowerCase() === 'kuupäev'){
      return;
    }
    
    const extracted: TableRow = {
      ...this.visitEventDate(eventDate),
      ...this.visitEventTime(startAndEnd),
      ...this.visitEventModesAndLocation(locationOrMode),

      name: this.visitEventName(eventName),
      priority: this.visitEventPriority(eventName),
    };

    this._rows.push(extracted);
  }


  visitEventDate(eventDate: HTMLElement): {
    startDate: TableDateOnly;
    endDate: TableDateOnly | undefined;
    durationType: EventApi.EventDurationType;
  } {
    const { year } = this._titles[this._titles.length-1];
    const cleaned: string = eventDate.textContent.trim();
    const [start, end = ''] = cleaned.split('-');

    const [startDay, startMonth] = start.split('.');
    const [endDay, endMonth] = end.split('.');

    const durationType: EventApi.EventDurationType = !!end ? 'MULTIPLE_DAYS' : 'ONE_DAY';

    return {
      durationType,
      startDate: {
        day: toDateNumber(startDay)!,
        month: (toDateNumber(startMonth) ?? toDateNumber(endMonth))!,
        year
      },
      endDate: durationType === 'MULTIPLE_DAYS' ? {
        day: toDateNumber(endDay)!,
        month: toDateNumber(endMonth)!,
        year
      } : undefined
    }
  }

  visitEventName(eventName: HTMLElement): string {
    return eventName.textContent.trim();
  }

  visitEventTime(eventDate: HTMLElement): {
    startTime: TableTimeOnly | undefined;
    endTime: TableTimeOnly | undefined;
  } {
    const cleaned: string = eventDate.textContent.trim()
      .replace('.', ':')
      .replace(/[^0-9:-]+/g, '');

    if(!cleaned) {
      return {
        startTime: undefined,
        endTime: undefined
      };

    }

    
    const [start, end = ''] = cleaned.split('-');
    const [startHour, startMinute] = start.split(':');
    const [endHour, endMinute] = end.split(':');

    return {
      startTime: {
        hour: parseInt(startHour),
        minute: parseInt(startMinute)
      },
      endTime: {
        hour: parseInt(endHour),
        minute: parseInt(endMinute)
      }
    }
  }

  visitEventModesAndLocation(element: HTMLElement): {
    location: string | undefined;
    modes: EventApi.WorkMode[];
  } {
    const cleaned: string[] = element.textContent
      .trim().toLocaleUpperCase()
      .split(',')
      .map(mode => mode.trim());

    const modes =  cleaned.filter(mode => allModes.includes(mode as EventApi.WorkMode))
      .map(mode => mode as EventApi.WorkMode);

    const location = cleaned.find(mode => !allModes.includes(mode as EventApi.WorkMode))
    return { modes, location };
  }
  visitEventPriority(eventDate: HTMLElement): EventApi.EventPriority {
    return 'NORMAL'
  }

  close(): EventApi.Calendar {
    const entries = this._rows.map(row => {
      const result: EventApi.CalendarEvent = { 
        eventName: row.name,
        location: row.location,
        priority: row.priority,
        duration: row.durationType,
        workModes: row.modes,

        startAt: toStringUTC(row.startDate, row.startTime ?? { hour: 0, minute: 1 }),
        endsAt: toStringUTC(row.endDate ?? row.startDate, { 
          hour: row.endTime?.hour ?? 23, 
          minute: row.endTime?.minute ?? 59 })
      }
      return result;
    });

    return entries;
  }
}


function toString(text: string | undefined) {
  if(text) {
    return `'${text}'`;
  }

  return undefined
}

function toJson(events: EventApi.CalendarEvent[]): string {
  return JSON.stringify(events, null, 2);
}
function toTs(events: EventApi.CalendarEvent[]): string {
  const entries = events.map(row => {
    return `
{ 
  eventName: '${row.eventName}',
  location: ${toString(row.location)},
  priority: '${row.priority}',
  duration: '${row.duration}',
  workModes: [${row.workModes.map(toString).join(',')}],

  startAt: ${row.startAt},
  endsAt: ${row.endsAt}
}`
  }).join(',\r\n')
  return [
    "import { EventApi } from '@/api-events'",
    "",
    "",
    "export const calendar: EventApi.Calendar = [",
    entries,
    "]"
  ].join('\r\n')
}


async function getCalendar(): Promise<string> {
  const url = 'https://www.erau.ee/et/kalender';
  console.log(`  - fetching events from: ${url}`);
  const response = await fetch(url);
  if(!response.ok) {
    throw Error('Failed to fetch calendar!')
  }
  const content = await response.text()
  return content;
}



export async function parseErauEvents(props: { 
  target: { 
    tsfilename: FilePath | undefined
    jsonfilename: FilePath | undefined
  }
}) {

  return getCalendar()
  .then(calendar => new HtmlVisitor().visitHtml(calendar).close())
  .then(calendar => {

    console.debug(`  - total events found: ${calendar.length}`);

    if(props.target.tsfilename) {
      console.log(`  - generating ts file: ${props.target.tsfilename.fullPath}`);
      writeFile({ fullPath: props.target.tsfilename.fullPath, content: toTs(calendar) });
    }
    
    if(props.target.jsonfilename) {
      console.log(`  - generating json file: ${props.target.jsonfilename.fullPath}`);
      writeFile({ fullPath: props.target.jsonfilename.fullPath, content: toJson(calendar) });
    }
  });
    
}