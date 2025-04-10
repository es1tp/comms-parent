import { ExamApi } from './exam-types';


export class Shuffle {
  private _source_subjects: ExamApi.ErauSubject[];
  private _source_questions: ExamApi.ErauQuestion[];
  private _result: Record<string, ExamApi.ErauQuestion> = {};
  private _visited: number[] = [];
  private _stopAt: number;

  constructor(source: ExamApi.ErauSubject[], nextNQuestions: number) {
    this._source_subjects = source;
    this._source_questions = source.flatMap(({questions}) => questions);
    this._stopAt = Math.min(nextNQuestions, this._source_questions.length);
  }
  accept(): ExamApi.ErauSubject[] {
    while(Object.values(this._result).length < this._stopAt) {
      const next = this.visitNextQuestionId();
      this.visitQuestion(next);
    }
    const result: ExamApi.ErauSubject[] = [];
    for(const src of this._source_subjects) {
      const subject = this.visitSubject(src);
      if(subject) {
        result.push(subject);
      }
    }
    return result;
  }

  private visitSubject(src: ExamApi.ErauSubject): ExamApi.ErauSubject | undefined {
    const questionsTks = src.questions.map(({ tk }) => tk!);
    const questions = Object.values(this._result).filter(({tk}) => questionsTks.includes(tk!));
    if(questions.length) {
      const subject: ExamApi.ErauSubject = {...src};
      subject.questions = questions;
      return Object.freeze(subject);
    }
    return undefined;
  }

  private visitQuestion(next: number) {
    this._visited.push(next);

    const question: ExamApi.ErauQuestion = { ...this._source_questions[next] };
    const answers = Array.from(question.answers).sort(() => .5 - Math.random())
    question.answers = answers;
    this._result[question.tk!] = Object.freeze(question);
  }

  private visitNextQuestionId(): number {
    const max: number = this._source_questions.length;
    const next = Math.floor(Math.random() * max);
    if(this._visited.includes(next)) {
      return this.visitNextQuestionId();
    }
    return next;
  }

}