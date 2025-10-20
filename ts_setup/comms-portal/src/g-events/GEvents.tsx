import React from 'react';

import { useDb } from '@/api-db';
import { GMarkdown, SiteApi, useLocale, useSite } from '@dxs-ts/gamut';
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography, useTheme, Popover } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DateTime } from 'luxon';
import { Calendar, luxonLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { EventApi } from '@/api-events';
import { useIntl } from 'react-intl';

interface BigCalendarEvent {
  allDay?: boolean | undefined;
  title: React.ReactNode | undefined;
  start: Date | undefined;
  end: Date | undefined;
  resource?: any;
}

export const GEvents: React.FC<{ children: SiteApi.TopicView }> = (props) => {
  const intl = useIntl();
  const locale = intl.locale;
  const events = useDb().events();
  const localizer = luxonLocalizer(DateTime);
  
  const bigCalendarEvents: BigCalendarEvent[] = React.useMemo(() => events.map((event) => ({
    start: DateTime.fromISO(event.startAt).setLocale(locale).toJSDate(),
    end: event.endsAt ? DateTime.fromISO(event.endsAt).setLocale(locale).toJSDate() : undefined,
    title: (<Event value={event} />)
  })), [events]);

  return (
    <div style={{ width: '700px', height: '700px' }}>
      <Calendar
        culture={locale}
        localizer={localizer}
        events={bigCalendarEvents}
        startAccessor='start'
        endAccessor='end'
        messages={{ ...intl.messages, showMore: (total) => `+${total} ${intl.formatMessage({ id: 'showMore' })}`, }}
      />
    </div>
  )
}





const Event: React.FC<{ value: EventApi.CalendarEvent }> = ({ value }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  function handleExpand(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <>
      <Typography variant='body2' onClick={handleExpand}>{value.eventName}</Typography>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <EventDetails value={value}/>        
      </Popover>
    </>
  )
}


const EventDetails: React.FC<{ value: EventApi.CalendarEvent }> = ({ value }) => {
  const theme = useTheme();
  const { locale } = useLocale();
  const { topics } = useSite();
  const startsAt = DateTime.fromISO(value.startAt).setLocale(locale);
  const endsAt = value.endsAt ? DateTime.fromISO(value.endsAt).setLocale(locale) : undefined;
  const additionalInfo = topics.find(add => add.name === value.eventName || (
    add.topic.matchingPolicy && value.eventName.match(add.topic.matchingPolicy)
  ));

  return (<Card>
    <CardHeader
      avatar={<Avatar sx={{ bgcolor: theme.palette.secondary.main }}>{value.eventName.substring(0, 2)}</Avatar>}
      action={
        <IconButton aria-label="settings"><MoreVertIcon /></IconButton>
      }
      title={value.eventName}
      subheader={startsAt.toLocaleString(DateTime.DATETIME_FULL)}
    />

    <CardContent>
      {additionalInfo?.blob && <GMarkdown children={additionalInfo.blob.value} overrides={{
        h1: () => <></>,
        h2: (props) => <></>,
        h3: (props) => (<Typography variant={'h4'}>{props.children}</Typography>),
      }} />}
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {value.eventName}, {startsAt.toLocaleString(DateTime.TIME_24_SIMPLE)} - {endsAt?.toLocaleString(DateTime.TIME_24_SIMPLE)}
      </Typography>
    </CardContent>
  </Card>)
}