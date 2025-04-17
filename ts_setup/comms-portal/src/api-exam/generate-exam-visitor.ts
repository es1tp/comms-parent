import { ErauApi } from "@/api-erau";
import { ExamApi } from "./exam-types";



class ExamGenerator {
  private _subjects: Record<string, ExamApi.Subject> = {};
  private _questions: Record<string, ExamApi.Question> = {};
  private _answers: Record<string, ExamApi.Answer> = {};

  close(): ExamApi.Questionnaire {
    return {
      subjects: this._subjects,
      questions: this._questions,
      answers: this._answers
    };
  }
  visit(def: ErauApi.ErauSubject) {
    const subject: ExamApi.Subject = {
      id: def.id,
      title: def.title,
      articleId: def.articleId,
      locale: def.locale,
      questions: def.questions.map(q => this.visitQuestion(def.id, q)),
    };
    this._subjects[def.id] = subject;
  }
    
  private visitQuestion(subjectId: string, src: ErauApi.ErauQuestion): ExamApi.Question {
    const questionId = src.id;

    const isQuestionAnswered = false;
    const [correctAnswer] = src.answers.filter(e => e.isCorrect).map(({id}) => id);
    const isQuestionAnsweredCorrectly = false;

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
  src: ErauApi.ErauAnswer): ExamApi.Answer {
    const answer: ExamApi.Answer = {
      id: src.id,
      questionId: props.questionId, 
      subjectId: props.subjectId,
      isQuestionAnswered: props.isQuestionAnswered,
      isQuestionAnsweredCorrectly: props.isQuestionAnsweredCorrectly,
      isCorrect: src.isCorrect,
      text: src.text,
      isAnswered: false, 
    };
    this._answers[src.id] = answer;
    return answer;
  }
}

function getSubjects(init: ErauApi.ErauSubject[], options: ExamOptions): ErauApi.ErauSubject[] {
  const source = !!options.subjectId ? init.filter(e => e.id === options.subjectId) : init;
  if(options.type === 'all') {
    return source;
  } else if(options.type === 'shuffle') {
    return ErauApi.shuffle(source, options.nextNQuestions);
  }
  return source;
}

export type ExamOptions = (
  { type: 'all', subjectId?: string } |
  { type: 'shuffle', nextNQuestions: number, subjectId?: string}
)

export function generateExam(source: ErauApi.ErauSubject[], options: ExamOptions): ExamApi.Questionnaire {
  const gen = new ExamGenerator();
  getSubjects(source, options).forEach(view => gen.visit(view))
  return gen.close();
}