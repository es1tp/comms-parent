import React from 'react';
import { Container, Paper, Typography, ButtonGroup, Button, Box, MenuItem, TextField } from '@mui/material';

import Sticky from 'react-sticky-el';
import { FormattedMessage } from 'react-intl';
import { useExam } from '@/api-exam';
import { Subject } from './Subject';
import { useLocale } from '@dxs-ts/gamut';


export const GQuestionnaire: React.FC<{}> = ({ }) => {
  const { locale } = useLocale();


  const { value, shuffle, reset, all, selectSubject } = useExam();
  const subjects = Object.values(value.questionnaire.subjects);
  const { selectedSubject, stats, source } = value;
  const { correct, perc, total } = stats;
  const topRef = React.useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Container maxWidth='md' className='questionnaire-header'>
        <div ref={topRef} />
        <ButtonGroup variant='contained' fullWidth>
          <Button onClick={() => all()}><FormattedMessage id='questionnaire-header.all' /></Button>
          <Button onClick={() => reset()}><FormattedMessage id='questionnaire-header.reset' /></Button>
          <Button onClick={() => shuffle(3)}><FormattedMessage id='questionnaire-header.shuffle' /></Button>
          <Button onClick={() => shuffle(25)}><FormattedMessage id='questionnaire-header.shuffle.big' /></Button>
        </ButtonGroup>

        <TextField select value={selectedSubject?.tk ?? ''} className='subject-select' variant='filled' label={<FormattedMessage id='questionnaire.subject.select' />}>
          {source.map((subject) => (
            <MenuItem key={subject.id} value={subject.tk} onClick={() => selectSubject(subject)}>
              <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {subject.title[locale]?.substring(6)}{" "}({subject.questions.length})
              </div>
            </MenuItem>
          ))}
        </TextField>
      </Container>

      <Container className='questionnaire'>
        {subjects.map(s => (<Subject key={s.tk} subject={s} />))}
        <Box display='flex' justifyContent='center'>
          <Button className='scroll-top-button' variant='contained' onClick={scrollToTop}><FormattedMessage id='button.scroll-to-top' /></Button>
        </Box>
      </Container>
      <Sticky mode='bottom' boundaryElement={''}>
        <Paper className='questionnaire-results'>
          <Container className='questionnaire-results' maxWidth='md'>
            <Typography><FormattedMessage id='questionnaire-results.title' values={{ correct, perc, total }} /></Typography>
          </Container>
        </Paper>
      </Sticky>
    </>
  );
}