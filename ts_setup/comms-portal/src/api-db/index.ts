import { Article } from '@/api-kb';
import { ExamApi } from '@/api-exam';

import datasource_1 from './datasource-1'
import datasource_2 from './datasource-2'
import questionnaire_1 from './questionnaire-1'



const articles: Article[] = [
  ...Object.values(datasource_1),
  ...Object.values(datasource_2)
];

const questionnaires: ExamApi.ErauSubject[] = [
  ...Object.values(questionnaire_1),
];
export const datasource = {
  articles: () => [...articles], 
  questionnaires: () => [...questionnaires]
};