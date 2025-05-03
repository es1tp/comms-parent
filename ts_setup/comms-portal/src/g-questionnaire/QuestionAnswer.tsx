import React from 'react';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';

import { ExamApi } from '@/api-exam';

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

export const QuestionAnswer: React.FC<{ answer: ExamApi.Answer, index: number }> = ({ answer, index }) => {
  const { selectAnswer } = ExamApi.useExam();
  const success = getSuccess(answer);
  const fail = getError(answer);

  return (
    <ListItemButton key={answer.id} onClick={() => selectAnswer(answer.id)} className={success ?? fail}>
      <ListItemIcon>{index + 1}.</ListItemIcon>
      <ListItemText primary={answer.text} />
    </ListItemButton>
  );
}