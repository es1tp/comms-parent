import { KbApi } from '@/api-kb';
import { ExamApi } from '@/api-exam';

import datasource_1 from './datasource-1'
import datasource_2 from './datasource-2'
import datasource_3 from './datasource-3'
import questionnaire_1 from './questionnaire-1'
import questionnaire_3 from './questionnaire-3'
import { calendar as erau_calendar } from './events-1/erau_events'
import { EventApi } from '@/api-events';




const all_articles: KbApi.Article[] = KbApi.mergeArticles([
  ...Object.values(datasource_1),
  ...Object.values(datasource_2),
  ...Object.values(datasource_3)
]);

const all_subjects: ExamApi.ErauSubject[] = ExamApi.mergeSubjects([
  ...Object.values(questionnaire_1),
  ...Object.values(questionnaire_3),
]);



const datasource = {
  articles: () => [...all_articles], 
  questionnaires: (props: { locale: string, qualification: string }) => {
    const subjects =  all_subjects.filter(({ locale }) => locale === props.locale)
      .map((subject) => {
        const questions = subject.questions.filter(question => question.qualifications.includes(props.qualification));
        return { ...subject, questions }
      })
      .filter(({ questions }) => questions.length > 0);
    return subjects;
  },
  events: (): EventApi.Calendar => {
    return erau_calendar
  }
};

//@ts-ignore backdoor for console
window.__datasource = datasource;
export { datasource };

export function useDb() {
  return datasource;
}

