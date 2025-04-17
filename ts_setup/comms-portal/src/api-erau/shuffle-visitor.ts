import { ErauApi } from './erau-types';


class ShuffleVisitor {
  private _source_subjects: ErauApi.ErauSubject[];
  private _source_questions: ErauApi.ErauQuestion[];
  private _result: Record<string, ErauApi.ErauQuestion> = {};
  private _visited: number[] = [];
  private _stopAt: number;

  constructor(source: ErauApi.ErauSubject[], nextNQuestions: number) {
    this._source_subjects = source;
    this._source_questions = source.flatMap(({questions}) => questions);
    this._stopAt = Math.min(nextNQuestions, this._source_questions.length);
  }
  accept(): ErauApi.ErauSubject[] {
    while(Object.values(this._result).length < this._stopAt) {
      const next = this.visitNextQuestionId();
      this.visitQuestion(next);
    }
    const result: ErauApi.ErauSubject[] = [];
    for(const src of this._source_subjects) {
      const subject = this.visitSubject(src);
      if(subject) {
        result.push(subject);
      }
    }
    return result;
  }

  private visitSubject(src: ErauApi.ErauSubject): ErauApi.ErauSubject | undefined {
    const questionsTks = src.questions.map(({ id }) => id);
    const questions = Object.values(this._result).filter(({id}) => questionsTks.includes(id));
    if(questions.length) {
      const subject: ErauApi.ErauSubject = {...src};
      subject.questions = questions;
      return Object.freeze(subject);
    }
    return undefined;
  }

  private visitQuestion(next: number) {
    this._visited.push(next);

    const question: ErauApi.ErauQuestion = { ...this._source_questions[next] };
    const answers = Array.from(question.answers).sort(() => .5 - Math.random())
    question.answers = answers;
    this._result[question.id] = Object.freeze(question);
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


export function shuffle(source: ErauApi.ErauSubject[], nextNQuestions: number) {
  return new ShuffleVisitor(source, nextNQuestions).accept();
}