import { KbApi } from '@/api-kb';
import { ExamApi } from '@/api-exam';

import datasource_1 from './datasource-1'
import datasource_2 from './datasource-2'
import questionnaire_1 from './questionnaire-1'
import { calendar as erau_calendar } from './events-1/erau_events'
import { EventApi } from '@/api-events';


const all_articles: KbApi.Article[] = [
  ...Object.values(datasource_1),
  ...Object.values(datasource_2)
];

const all_subjects: ExamApi.ErauSubject[] = [
  ...Object.values(questionnaire_1),
];



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

