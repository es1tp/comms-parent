import * as ctx from "./ExamContext";
import { ExamStateImpl } from "./ExamStateImpl";


export declare namespace ExamApi {
  export type LocaleCode = string;
  export type TranslatedText = string;

  export interface ErauSubject {
    id: string;
    articleId: string;
    title: TranslatedText;
    questions: ErauQuestion[];
    locale: LocaleCode;
  }
  
  export interface ErauQuestion {
    id: string;
    text: TranslatedText;
    info: TranslatedText[];
    answers: ErauAnswer[];
    qualifications: string[];
  }
  export interface ErauAnswer {
    id: string;
    text: TranslatedText;
    isCorrect: boolean; 
  }

  export interface Subject {
    
    id: string;
    articleId: string;
    title: TranslatedText;
    questions: Question[];
    locale: LocaleCode;
  }
  export interface Question {
    id: string;
    subjectId: string;
    text: TranslatedText;
    info: TranslatedText[];
    answers: Answer[];
    qualifications: string[];
    correctAnswer: string | undefined;
    userAnswer: string | undefined;
    isAnsweredCorrectly: boolean | undefined;
    isAnswered: boolean;
  }
  export interface Answer {
    id: string;
    questionId: string;
    subjectId: string;
    text: TranslatedText;
    isCorrect: boolean;
    isAnswered: boolean;
    isQuestionAnswered: boolean  | undefined;
    isQuestionAnsweredCorrectly: boolean | undefined;
  }

  export interface Questionnaire {
    subjects: Record<string, Subject>; 
    questions: Record<string, Question>;
    answers: Record<string, Answer>;
  }

  export interface ExamState {
    selectSubject(subject: ErauSubject | undefined): ExamState;
    selectAnswer(answerTk: string): ExamState;
    suffle(nextNQuestions: number): ExamState;
    reset(): ExamState;
    all(): ExamState;


    source: ErauSubject[];
    questionnaire: Questionnaire;
    selectedSubject: ErauSubject | undefined;
    stats: { 
      perc: string;
      total: number;
      correct: number;
    }
  }

  export interface ExamContextType {
    value: ExamState;

    selectAnswer(answerTk: string): void;
    selectSubject(selectedSubject: ErauSubject | undefined): void;
    shuffle(nextNQuestions: number): void;
    reset(): void;
    all(): void;
  }
}

export namespace ExamApi {
  export const ExamProvider = ctx.ExamProvider;
  export const useExam = ctx.useExam;
  export const getInstance = (props: { source: ErauSubject[] }): ExamState => new ExamStateImpl(props);
}