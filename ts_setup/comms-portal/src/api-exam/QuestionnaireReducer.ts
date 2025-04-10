import { ExamApi } from './exam-types';


export class QuestionnaireReducer {
  private _source: ExamApi.ErauSubject[];
  private _subjects: Record<string, ExamApi.Subject> = {};
  private _questions: Record<string, ExamApi.Question> = {};
  private _answers: Record<string, ExamApi.Answer> = {};
  private _selectedAnswers: string[];
  private _locale: ExamApi.LocaleCode;

  constructor(source: ExamApi.ErauSubject[], selectedAnswers: string[], locale: ExamApi.LocaleCode) {
    this._source = source;
    this._selectedAnswers = selectedAnswers;
    this._locale = locale;
  }
  accept(): ExamApi.Questionnaire {
    this._source.forEach(view => this.visitDef(view))
    return {
      subjects: this._subjects,
      questions: this._questions,
      answers: this._answers
    };
  }
  private visitDef(def: ExamApi.ErauSubject) {
    const subjectId = def.tk!;
    const subject: ExamApi.Subject = {
      tk: subjectId,
      id: def.id,
      title: def.title,
      questions: def.questions.map(q => this.visitQuestion(subjectId, q)),
    };

    this._subjects[subjectId] = subject;
  }

  
  private visitQuestion(subjectId: string, src: ExamApi.ErauQuestion): ExamApi.Question {
    const questionId = src.tk!;

    const isQuestionAnswered = src.answers.filter(({tk}) => this._selectedAnswers.includes(tk!)).length > 0;
    const [correctAnswer] = src.answers.filter(e => e.value[this._locale].isCorrect).map(({tk}) => tk!);
    const isQuestionAnsweredCorrectly = isQuestionAnswered ? this._selectedAnswers.includes(correctAnswer) : undefined;

    const answerProps = {subjectId, questionId, isQuestionAnswered, isQuestionAnsweredCorrectly};
    const answers: ExamApi.Answer[] = src.answers.map(a => this.visitAnswer(answerProps, a));
    const question: ExamApi.Question = {
      tk: questionId,
      id: src.id,
      text: src.text,
      info: src.info,
      subjectId,
      answers,
      isAnsweredCorrectly: isQuestionAnsweredCorrectly,
      correctAnswer: correctAnswer,
      userAnswer: undefined,
      isAnswered: isQuestionAnswered,
    };
    this._questions[questionId] = question;
    return question;
  }
  private visitAnswer(props: {
    subjectId: string;
    questionId: string; 
    isQuestionAnswered: boolean;
    isQuestionAnsweredCorrectly: boolean | undefined;
  }, 
  src: ExamApi.ErauAnswer): ExamApi.Answer {
    const tk = src.tk!;
    const isAnswered = this._selectedAnswers.includes(tk);
    
    const answer: ExamApi.Answer = {
      questionId: props.questionId, 
      subjectId: props.subjectId,
      isQuestionAnswered: props.isQuestionAnswered,
      isQuestionAnsweredCorrectly: props.isQuestionAnsweredCorrectly,
      correct: src.value[this._locale].isCorrect,
      text: src.value[this._locale].text,

      tk, isAnswered, 
    };
    this._answers[tk] = answer;
    return answer;
  }



}