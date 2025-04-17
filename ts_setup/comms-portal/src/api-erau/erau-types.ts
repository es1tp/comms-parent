import { merge as _merge } from './merge-visitor';
import { shuffle as _shuffle } from './shuffle-visitor';


export namespace ErauApi {
  export const merge = _merge;
  export const shuffle = _shuffle;
}

export declare namespace ErauApi {
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
    formula?: string | undefined
    type?: 'formula' | undefined // dynamic question based on formula
  }
  export interface ErauAnswer {
    id: string;
    text: TranslatedText;
    isCorrect: boolean; 
  }
  export type ErauChangeLog = {
    timestamp: string;
    changes: ErauChange[];
  }
  export interface ErauChange {
    id: string;
    changeObject: 'question' | 'answer' | 'subject';
    changeType: 'add' | 'update';
    timestamp: string;
    comment: string;
  }
}