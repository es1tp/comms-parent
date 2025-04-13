import { useDb } from "@/api-db";
import { GMarkdown, SiteApi, useLocale, useSite } from "@dxs-ts/gamut";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography, Stack } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { DateTime } from "luxon";
import { EventApi } from "@/api-events";


const Event: React.FC<{ value: EventApi.CalendarEvent }> = ({ value }) => {
  const { locale } = useLocale();
  const { topics } = useSite();
  const startsAt = DateTime.fromISO(value.startAt).setLocale(locale);
  const endsAt = value.endsAt ? DateTime.fromISO(value.endsAt).setLocale(locale) : undefined;
  const additionalInfo = topics.find(add => add.name === value.eventName);

  return (<Card>
    <CardHeader
      avatar={<Avatar sx={{ bgcolor: red[500] }}>{value.eventName.substring(0, 2)}</Avatar>}
      action={
        <IconButton aria-label="settings"><MoreVertIcon /></IconButton>
      }
      title={value.eventName}
      subheader={startsAt.toLocaleString(DateTime.DATETIME_FULL)}
    />

  <CardContent>
    {additionalInfo?.blob && <GMarkdown children={additionalInfo.blob.value} overrides={{
      h1: () => <></>,
      h2: (props) => (<Typography variant={'h4'}>{props.children}</Typography>),
      h3: (props) => (<Typography variant={'h4'}>{props.children}</Typography>),
    }}/>}
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {value.eventName}, {startsAt.toLocaleString(DateTime.TIME_24_SIMPLE)} - {endsAt?.toLocaleString(DateTime.TIME_24_SIMPLE)}
    </Typography>
  </CardContent>
</Card>)
} 


export const GEvents: React.FC<{ children: SiteApi.TopicView }> = (props) => {  
  const { } = useSite();
  const events = useDb().events();

  const now = DateTime.now();
  const nowAfterOneWeek = now.plus({ days: 7 });


  const upcomingEvents = events.filter(event => {
    const startsAt = DateTime.fromISO(event.startAt)
    const isInFuture = startsAt >= now;
    const isInOneWeek = startsAt <= nowAfterOneWeek;
    return isInFuture && isInOneWeek;
  }).sort((a, b) => {
    return DateTime.fromISO(a.startAt).toMillis() - DateTime.fromISO(b.startAt).toMillis();
  });
  

  return (
    <Stack spacing={1}>
      {upcomingEvents.map((event, index) => <Event key={index} value={event}/>)}
    </Stack>
  )
}