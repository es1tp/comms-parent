import { KbApi } from '@/api-kb';
import { ExamApi } from '@/api-exam';

import datasource_1 from './datasource-1'
import datasource_2 from './datasource-2'
import questionnaire_1 from './questionnaire-1'



const articles: KbApi.Article[] = [
  ...Object.values(datasource_1),
  ...Object.values(datasource_2)
];

const questionnaires: ExamApi.ErauSubject[] = [
  ...Object.values(questionnaire_1),
];



const datasource = {
  articles: () => [...articles], 
  questionnaires: (props: { locale: string, qualification: string }) => {
    return questionnaires
      .filter(({ locale }) => locale === props.locale)
      .map((subject) => {
        
        return {
          ...subject,
          questions: subject.questions.filter(question => question.qualifications.includes(props.qualification))
        }
      })
      .filter(({ questions }) => questions.length > 0);
  }
};

//@ts-ignore backdoor for console
window.__datasource = datasource;

export {datasource};