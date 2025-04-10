import {
  Typography, List, ListSubheader, ListItemButton, ListItemText, ListItemIcon,
  Paper, Box, Divider, Button
} from '@mui/material';

import { useExam, ExamApi } from '@/api-exam';
import { QuestionExplainer } from './QuestionExplainer';


import React from 'react';
import { useLocale } from '@dxs-ts/gamut';


function getSuccess(answer: ExamApi.Answer): string | undefined {
  if (!answer.isQuestionAnswered) {
    return;
  }

  if (answer.correct) {
    return 'success';
  }
}

function getError(answer: ExamApi.Answer): string | undefined {
  if (!answer.isQuestionAnswered || answer.isQuestionAnsweredCorrectly) {
    return;
  }
  if (!answer.correct) {
    return 'error';
  }
}

/*

function handleTranslate(text: string) {
  const encodedText = encodeURIComponent(text);
  const googleTranslateUrl = `https://translate.google.com/?sl=auto&tl=en&text=${encodedText}&op=translate`;
  window.open(googleTranslateUrl, '_blank');
};

*/
const Answer: React.FC<{ answer: ExamApi.Answer, index: number, locale: string }> = ({ answer, index, locale }) => {
  const { selectAnswer } = useExam();
  const success = getSuccess(answer);
  const fail = getError(answer);

  return (
    <ListItemButton key={answer.tk} onClick={() => selectAnswer(answer.tk)} className={success ?? fail}>
      <ListItemIcon>{index + 1}.</ListItemIcon>
      <ListItemText primary={answer.text} />
    </ListItemButton>
  );
}

export const Question: React.FC<{ question: ExamApi.Question }> = ({ question }) => {
  const { locale: defaultLocale } = useLocale();
  const [locale, setLocale] = React.useState(defaultLocale);


  const toggleLocale = () => {
    //setLocale(prevLocale => (prevLocale === 'en' ? defaultLocale : 'en'));
  }


  return (
    <Paper className='question'>
      <List component='nav' subheader={
        <ListSubheader>
          <Box display='flex' alignItems='flex-start'>
            <Typography>{question.text[locale]}</Typography>
            <Box flexGrow={1} />
            <Box className='question-actions'>
              <QuestionExplainer question={question} />
              <Button variant="outlined" size="small" onClick={toggleLocale} sx={{ minWidth: 'auto' }}>
                EN
              </Button>
            </Box>
          </Box>
        </ListSubheader>
      }>
        <Divider sx={{ my: 1 }} />
        {question.answers.map((answer, index) => (<Answer key={answer.tk} index={index} answer={answer} locale={locale} />))}
      </List>
    </Paper>
  );
}

