import React from 'react';
import { SiteApi, useLocale } from '@dxs-ts/gamut';
import { useDb } from '@/api-db';
import { ErauApi } from '@/api-erau';

import { ExamApi } from './exam-types';
import { ExamStateImpl } from "./exam-state";
import { generateExam } from './generate-exam-visitor';



export const ExamContext = React.createContext<ExamApi.ExamContextType>({} as any);

export const ExamProvider: React.FC<{ children: React.ReactNode, link: SiteApi.TopicLink }> = ({ children, link }) => {
  const datasource = useDb();
  const { locale } = useLocale();
  const qualification = link.value;
  const source: ErauApi.ErauSubject[] = React.useMemo(() => datasource.questionnaires({qualification, locale}), [qualification, locale]);

  return (<WithContext source={source}>{children}</WithContext>)
}

const WithContext: React.FC<{ children: React.ReactNode, source: ErauApi.ErauSubject[] }> = ({ children, source }) => {

  const [state, setState] = React.useState<ExamApi.ExamState>();
  const [selectedSubject, setSelectedSubject] = React.useState<ErauApi.ErauSubject | undefined>();

  React.useLayoutEffect(() => {
    const questionnaire: ExamApi.Questionnaire = generateExam(source, { type: 'all' });
    const init = new ExamStateImpl({ questionnaire, selectedAnswers: []});
    setState(init);
  }, []);

  const contextValue: ExamApi.ExamContextType | undefined = React.useMemo(() => {
    if(!state) {
      return undefined;
    }

    function selectAnswer(answerTk: string) {
      setState(prev => prev!.answer(answerTk));
    }
    function shuffle(nextNQuestions: number) {
      const questionnaire: ExamApi.Questionnaire = generateExam(source, { type: 'shuffle', nextNQuestions });
      const init = new ExamStateImpl({ questionnaire, selectedAnswers: []});
      setState(init);
      setSelectedSubject(undefined);
    }
    function reset() {
      setState(prev => prev!.reset());
    }
    function selectSubject(subject: ErauApi.ErauSubject | undefined) {
      const questionnaire: ExamApi.Questionnaire = generateExam(source, { type: 'all', subjectId: subject?.id });
      const init = new ExamStateImpl({ questionnaire, selectedAnswers: []});
      setState(init);
      setSelectedSubject(subject);
    }
    function all() {
      const questionnaire: ExamApi.Questionnaire = generateExam(source, { type: 'all' });
      const init = new ExamStateImpl({ questionnaire, selectedAnswers: []});
      setSelectedSubject(undefined);
      setState(init);
    }
    return { value: state, selectAnswer, shuffle, reset, all, selectSubject, source, selectedSubject };
  }, [state, source, selectedSubject]);
  
  if(!contextValue) {
    return (<>Loading ...</>)
  }
  
  return (<ExamContext.Provider value={contextValue}>{children}</ExamContext.Provider>);
}

export function useExam() {
  const result: ExamApi.ExamContextType = React.useContext(ExamContext);
  return result;
}