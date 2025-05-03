import React from 'react';
import { Container, Paper, Typography, ButtonGroup, Button, Box, MenuItem, TextField, useTheme } from '@mui/material';

import Sticky from 'react-sticky-el';
import { FormattedMessage } from 'react-intl';
import { ExamApi } from '@/api-exam';

import { Subject } from './Subject';
import { GQuestionnaireRoot } from './useUtilityClasses';
import { useMediaQuery } from '@mui/system';



export const GQuestionnaire: React.FC<{}> = ({ }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { value, shuffle, reset, all, selectSubject, selectedSubject, source } = ExamApi.useExam();
  const subjects = Object.values(value.questionnaire.subjects);
  const { stats } = value;
  const { correct, perc, total } = stats;
  const topRef = React.useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <GQuestionnaireRoot>
      <Container maxWidth='md' className='questionnaire-header'>
        <div ref={topRef} />
        <ButtonGroup variant='contained' fullWidth orientation={smallScreen ? 'vertical' : 'horizontal'}>
          <Button onClick={() => all()}><FormattedMessage id='questionnaire-header.all' /></Button>
          <Button onClick={() => reset()}><FormattedMessage id='questionnaire-header.reset' /></Button>
          <Button onClick={() => shuffle(3)}><FormattedMessage id='questionnaire-header.shuffle' /></Button>
          <Button onClick={() => shuffle(25)}><FormattedMessage id='questionnaire-header.shuffle.big' /></Button>
        </ButtonGroup>

        <Box className='subject'>
          <TextField select value={selectedSubject?.id ?? ''} className='subject-select' variant='outlined' label={<FormattedMessage id='questionnaire.subject.select' />}>
            {source.map((subject) => (
              <MenuItem key={subject.id} value={subject.id} onClick={() => selectSubject(subject)}>
                <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                  {subject.title}{" "}({subject.questions.length})
                </div>
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Container>

      <Container className='questionnaire'>
        {subjects.map(s => (<Subject key={s.id} subject={s} />))}

        <Box display='flex' justifyContent='center'>
          <Button className='scroll-top-button' variant='contained' onClick={scrollToTop}><FormattedMessage id='buttons.scroll-to-top' /></Button>
        </Box>
      </Container>

      <Sticky mode='bottom' boundaryElement={''}>
        <Paper className='questionnaire-results'>
          <Container maxWidth='md'>
            <Typography><FormattedMessage id='questionnaire-results.title' values={{ correct, perc, total }} /></Typography>
          </Container>
        </Paper>
      </Sticky>

    </GQuestionnaireRoot>
  );
}