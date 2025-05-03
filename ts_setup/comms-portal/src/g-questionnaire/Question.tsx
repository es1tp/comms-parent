import React from 'react';
import { Typography, List, Paper, Box, Divider } from '@mui/material';

import { ExamApi } from '@/api-exam';
import QuestionExplainer from './QuestionExplainer';
import { QuestionAnswer } from './QuestionAnswer';
import { QuestionFooter } from './QuestionFooter';


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
        <Divider />
        {question.answers.map((answer, index) => (<QuestionAnswer key={answer.id} index={index} answer={answer} />))}
        <Divider />
        
        <QuestionFooter question={question}/>
      </List>
    </Paper>
  );
}

