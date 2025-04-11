import React from 'react';
import { Typography, List, ListSubheader, ListItemButton, ListItemText, ListItemIcon, Paper, Box, Divider } from '@mui/material';

import { useExam, ExamApi } from '@/api-exam';
import { QuestionExplainer } from './QuestionExplainer';


function getSuccess(answer: ExamApi.Answer): string | undefined {
  if (!answer.isQuestionAnswered) {
    return;
  }

  if (answer.isCorrect) {
    return 'success';
  }
}

function getError(answer: ExamApi.Answer): string | undefined {
  if (!answer.isQuestionAnswered || answer.isQuestionAnsweredCorrectly) {
    return;
  }
  if (!answer.isCorrect) {
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
const Answer: React.FC<{ answer: ExamApi.Answer, index: number }> = ({ answer, index }) => {
  const { selectAnswer } = useExam();
  const success = getSuccess(answer);
  const fail = getError(answer);

  return (
    <ListItemButton key={answer.id} onClick={() => selectAnswer(answer.id)} className={success ?? fail}>
      <ListItemIcon>{index + 1}.</ListItemIcon>
      <ListItemText primary={answer.text} />
    </ListItemButton>
  );
}

export const Question: React.FC<{ question: ExamApi.Question }> = ({ question }) => {
  return (
    <Paper className='question'>
      <List component='nav' subheader={
        <Box className='question-title'>
          <Typography>{question.text}</Typography>
            <Box flexGrow={1} />
            <Box className='question-actions'>
              <QuestionExplainer question={question} />
            </Box>
        </Box>
      }>
        <Divider sx={{ my: 1 }} />
        {question.answers.map((answer, index) => (<Answer key={answer.id} index={index} answer={answer} />))}
      </List>
    </Paper>
  );
}

