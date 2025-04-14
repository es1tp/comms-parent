import { Typography, Divider, Container } from '@mui/material';
import { ExamApi } from '@/api-exam';
import { Question } from './Question';



export const Subject: React.FC<{ subject: ExamApi.Subject }> = ({ subject }) => {
  return (
    <Container className='subject' maxWidth='md'>
      <Typography>{subject.title}</Typography>
      <Divider />
      {subject.questions.map(q => <Question key={q.id} question={q}/>)}
    </Container>
  );
}