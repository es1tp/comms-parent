import { ExamApi } from './exam-types';
import { QuestionnaireReducer } from './QuestionnaireReducer';
import { Shuffle } from './Shuffle';


export class ExamStateImpl implements ExamApi.ExamState {
  private _locale: ExamApi.LocaleCode;
  private _source: ExamApi.ErauSubject[];
  private _questionnaire: ExamApi.Questionnaire;
  private _selectedAnswers: string[];
  private _selectedSubject: ExamApi.ErauSubject | undefined;


  constructor(props: {
    locale: ExamApi.LocaleCode,
    source: ExamApi.ErauSubject[],
    subject?: ExamApi.ErauSubject | undefined,
    selectedAnswers?: { values: string[], questionnaire: ExamApi.Questionnaire },
    nextNQuestions?: number
  }) {
    this._locale = props.locale;
    this._source = props.source;    
    this._selectedSubject = props.subject;

    if (props.selectedAnswers) {
      this._selectedAnswers = [...props.selectedAnswers.values];
      const subjects = Object.values(props.selectedAnswers.questionnaire.subjects);
      //this._questionnaire = new QuestionnaireReducer(subjects, this._selectedAnswers, this._locale).accept(); 
      this._questionnaire = {} as any;
    } else {
      const source = !!props.subject ? props.source.filter(e => e.tk === props.subject?.tk) : props.source;
      this._selectedAnswers = [];
      const nextQuesions = props.nextNQuestions ? new Shuffle(source, props.nextNQuestions).accept() : source;
      this._questionnaire = new QuestionnaireReducer(nextQuesions, this._selectedAnswers, this._locale).accept();    
    }
  }
  selectAnswer(answerTk: string): ExamApi.ExamState {
    const source = this._source;
    const questionnaire = this._questionnaire;
    const selectedAnswer = questionnaire.answers[answerTk];
    const selectedQuestion = questionnaire.questions[selectedAnswer.questionId];
    if(selectedQuestion.isAnswered) {
      // block corrections
      return this;
    }

    const selectedQuestionAnswers = selectedQuestion.answers.map(({tk}) => tk);
    const values = this._selectedAnswers.filter(tk => !selectedQuestionAnswers.includes(tk));    
    values.push(answerTk);
    return new ExamStateImpl({ source, subject: this._selectedSubject, selectedAnswers: { values, questionnaire }, locale: this._locale });
  }

  suffle(nextNQuestions: number): ExamApi.ExamState {
    const source = this._source;
    return new ExamStateImpl({ source, nextNQuestions, subject: this._selectedSubject, locale: this._locale });
  }

  reset(): ExamApi.ExamState {
    const source = this._source;
    const questionnaire = this._questionnaire;
    return new ExamStateImpl({ subject: this._selectedSubject, source, selectedAnswers: { values: [], questionnaire }, locale: this._locale });
  }

  all(): ExamApi.ExamState {
    const source = this._source;
    return new ExamStateImpl({ source, locale: this._locale });
  }

  get source() { return this._source }
  get questionnaire() { return this._questionnaire }
  get stats() {
    const total: number = Object.values(this._questionnaire.questions).length;
    const correct: number = Object.values(this._questionnaire.answers)
      .filter(({correct, isAnswered}) => isAnswered && correct)
      .length;
    const perc: string = correct === 0 ? '0' : (100 / total * correct).toFixed(0);
    return { perc, total, correct }
  }

  get selectedSubject(): ExamApi.ErauSubject | undefined {
    return this._selectedSubject;
  }

  selectSubject(subject: ExamApi.ErauSubject | undefined): ExamApi.ExamState {
    const source = this._source;
    return new ExamStateImpl({ source, subject, locale: this._locale });
  }
}