import React from 'react';

import { ExamApi } from '@/api-exam';
import { Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';



export const QuestionFooter: React.FC<{ question: ExamApi.Question }> = ({ question }) => {
  return (
    <div className='question-footer'>
      <Typography>
        {question.info.length ? (
          <>
            <FormattedMessage id='questionnaire-footer.extra' values={{src: question.info.join(', ')}}/>
            &nbsp;
          </>) : null}
        <FormattedMessage id='questionnaire-footer.questionid' values={{src: question.id}}/>
      </Typography>
    </div>
  );
}

