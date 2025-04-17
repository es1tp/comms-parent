import { ErauApi } from "@/api-erau";
import * as ctx from "./ExamContext";



// API for answering exam / aka UI state for the exam
export declare namespace ExamApi {
  export type LocaleCode = string;
  export type TranslatedText = string;

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
    reset(): ExamState;
    answer(answerId: string): ExamState;
    questionnaire: Questionnaire;
    stats: { 
      perc: string;
      total: number;
      correct: number;
    }
  }

  export interface ExamContextType {
    value: ExamState;
    source: ErauApi.ErauSubject[];
    selectedSubject: ErauApi.ErauSubject | undefined;

    selectAnswer(answerTk: string): void;
    selectSubject(selectedSubject: ErauApi.ErauSubject | undefined): void;
    shuffle(nextNQuestions: number): void;

    reset(): void;
    all(): void;
  }
}

export namespace ExamApi {
  export const ExamProvider = ctx.ExamProvider;
  export const useExam = ctx.useExam;
}