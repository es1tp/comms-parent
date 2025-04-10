import { Typography, Divider, Container } from '@mui/material';

import { ExamApi } from '@/api-exam';
import { useLocale } from '@dxs-ts/gamut';

import { Question } from './Question';



export const Subject: React.FC<{ subject: ExamApi.Subject }> = ({ subject }) => {
  const { locale } = useLocale();
  return (
    <Container className='subject' maxWidth='md'>
      <Typography>{subject.title[locale]}</Typography>
      <Divider />
      {subject.questions.map(q => <Question key={q.id} question={q}/>)}
    </Container>
  );
}