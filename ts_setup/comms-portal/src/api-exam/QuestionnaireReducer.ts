import { ExamApi } from './exam-types';


export class QuestionnaireReducer {
  private _source: ExamApi.ErauSubject[];
  private _subjects: Record<string, ExamApi.Subject> = {};
  private _questions: Record<string, ExamApi.Question> = {};
  private _answers: Record<string, ExamApi.Answer> = {};
  private _selectedAnswers: string[];

  constructor(source: ExamApi.ErauSubject[], selectedAnswers: string[]) {
    this._source = source;
    this._selectedAnswers = selectedAnswers;
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

    const subject: ExamApi.Subject = {
      id: def.id,
      title: def.title,
      articleId: def.articleId,
      locale: def.locale,
      questions: def.questions.map(q => this.visitQuestion(def.id, q)),
    };

    this._subjects[def.id] = subject;
  }
    
  private visitQuestion(subjectId: string, src: ExamApi.ErauQuestion): ExamApi.Question {
    const questionId = src.id;

    const isQuestionAnswered = src.answers.filter(({id}) => this._selectedAnswers.includes(id)).length > 0;
    const [correctAnswer] = src.answers.filter(e => e.isCorrect).map(({id}) => id);
    const isQuestionAnsweredCorrectly = isQuestionAnswered ? this._selectedAnswers.includes(correctAnswer) : undefined;

    const answerProps = {subjectId, questionId, isQuestionAnswered, isQuestionAnsweredCorrectly};
    const answers: ExamApi.Answer[] = src.answers.map(a => this.visitAnswer(answerProps, a));
    const question: ExamApi.Question = {
      id: src.id,
      text: src.text,
      info: src.info,
      subjectId,
      answers,
      isAnsweredCorrectly: isQuestionAnsweredCorrectly,
      correctAnswer: correctAnswer,
      userAnswer: undefined,
      isAnswered: isQuestionAnswered,
      qualifications: src.qualifications,
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
    
    const isAnswered = this._selectedAnswers.includes(src.id);
    
    const answer: ExamApi.Answer = {
      id: src.id,
      questionId: props.questionId, 
      subjectId: props.subjectId,
      isQuestionAnswered: props.isQuestionAnswered,
      isQuestionAnsweredCorrectly: props.isQuestionAnsweredCorrectly,
      isCorrect: src.isCorrect,
      text: src.text,

      isAnswered, 
    };
    this._answers[src.id] = answer;
    return answer;
  }
}