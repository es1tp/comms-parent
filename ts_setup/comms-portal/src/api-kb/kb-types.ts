type Letter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'

export type LocaleCode = `${Letter}${Letter}`
export type ArticleId = string;
export type PageId = string;
export type QualificationType = string;

// root 'topic' that contains subject and all of the localized contents(question/answer/reading materials)
export interface Article {
  id: ArticleId;
  parentId?: ArticleId | undefined;
  pages: Page[];
}

// Article content in single locale
export interface Page {
  id: PageId;
  localeCode: LocaleCode; // two letter 
  title: string; 
  qualification?: QualificationType | undefined;

  materials: Material[]
  questionnaire: Question[];
}

export interface Material {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  question: string;
  answers: Answer[];
  qualifications: QualificationType[];
}

export interface Answer {
  id: string;
  isCorrect: boolean;
  answer: string;
}

