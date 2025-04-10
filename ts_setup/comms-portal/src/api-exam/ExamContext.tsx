import React from 'react';
import { SiteApi, useLocale } from '@dxs-ts/gamut';
import { datasource } from '@/api-db';

import { ExamApi } from './exam-types';



export const ExamContext = React.createContext<ExamApi.ExamContextType>({} as any);

export const ExamProvider: React.FC<{ children: React.ReactNode, link: SiteApi.TopicLink }> = ({ children, link }) => {
  const source: ExamApi.ErauSubject[] = datasource.questionnaires();
  const qualification = link.value;
  return (<WithContext source={source} qualification={qualification}>{children}</WithContext>)
}


const WithContext: React.FC<{ children: React.ReactNode, source: ExamApi.ErauSubject[], qualification: string }> = ({ children, source, qualification }) => {

  const { locale } = useLocale();

  const init = React.useMemo(() => ExamApi.getInstance({source, locale, qualification}), [source, locale, qualification]);
  const [state, setState] = React.useState(init);

  const contextValue: ExamApi.ExamContextType = React.useMemo(() => {
    function selectAnswer(answerTk: string) {
      setState(prev => prev.selectAnswer(answerTk));
    }
    function shuffle(nextNQuestions: number) {
      setState(prev => prev.suffle(nextNQuestions));
    }
    function reset() {
      setState(prev => prev.reset());
    }
    function selectSubject(subject: ExamApi.ErauSubject | undefined) {
      setState(prev => prev.selectSubject(subject));
    }
    function all() {
      setState(prev => prev.all());
    }
    return { value: state, selectAnswer, shuffle, reset, all, selectSubject };
  }, [state]);
  return (<ExamContext.Provider value={contextValue}>{children}</ExamContext.Provider>);
}

export function useExam() {
  const result: ExamApi.ExamContextType = React.useContext(ExamContext);
  return result;
}