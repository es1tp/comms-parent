import { ExamApi } from './exam-types';


export class ExamStateImpl implements ExamApi.ExamState {
  private _questionnaire: ExamApi.Questionnaire;
  private _selectedAnswers: string[];


  constructor(props: {
    questionnaire: ExamApi.Questionnaire;
    selectedAnswers: string[];
  }) {
    this._questionnaire = props.questionnaire;    
    this._selectedAnswers = props.selectedAnswers;
  }

  get questionnaire() { return this._questionnaire }
  get stats() {
    const total: number = Object.values(this._questionnaire.questions).length;
    const correct: number = Object.values(this._questionnaire.answers)
      .filter(({isCorrect, isAnswered}) => isAnswered && isCorrect)
      .length;
    const perc: string = correct === 0 ? '0' : (100 / total * correct).toFixed(0);
    return { perc, total, correct }
  }

  answer(answerId: string): ExamApi.ExamState {
    
    const selectedAnswer = this._questionnaire.answers[answerId];
    const selectedQuestion = this._questionnaire.questions[selectedAnswer.questionId];
    if(selectedQuestion.isAnswered) {
      // block corrections
      return this;
    }

    const selectedQuestionAnswers = selectedQuestion.answers.map(({id}) => id);
    const selectedAnswers = this._selectedAnswers.filter(id => !selectedQuestionAnswers.includes(id));    
    selectedAnswers.push(answerId);
    const questionnaire = this.withAnswers(selectedAnswers);
    return new ExamStateImpl({ selectedAnswers, questionnaire });
  }

  reset(): ExamApi.ExamState {
    const selectedAnswers: string[] = [];
    const questionnaire = this._questionnaire;
    return new ExamStateImpl({ selectedAnswers, questionnaire });
  }

  private withAnswers(selectedAnswers: string[]): ExamApi.Questionnaire {

    const subjects = Object.values(this._questionnaire.subjects)
      .map(subject => ({ ...subject, questions: [] }))
      .reduce<Record<string, ExamApi.Subject>>((collector, subject) => {
        collector[subject.id] = subject;
        return collector
      }, {});

    const next: ExamApi.Questionnaire = {
      subjects,
      questions: {},
      answers: {}
    };

    for(const question of Object.values(this._questionnaire.questions)) {
      const isQuestionAnswered = question.answers.filter(({id}) => selectedAnswers.includes(id)).length > 0;
      const [correctAnswer] = question.answers.filter(e => e.isCorrect).map(({id}) => id);
      const isQuestionAnsweredCorrectly = isQuestionAnswered ? selectedAnswers.includes(correctAnswer) : undefined;
      
      const answers: ExamApi.Answer[] = question.answers.map(answer => {
        const nextAnswer: ExamApi.Answer = {
          ...answer,
          isQuestionAnswered,
          isQuestionAnsweredCorrectly,
          isAnswered: selectedAnswers.includes(answer.id), 
        };
        next.answers[nextAnswer.id] = nextAnswer; 
        return nextAnswer;
      });

      const nextQuestion: ExamApi.Question = {
        ...question,
        isAnsweredCorrectly: isQuestionAnsweredCorrectly,
        isAnswered: isQuestionAnswered,

        correctAnswer: correctAnswer,
        userAnswer: undefined,
        answers
      }

      next.questions[nextQuestion.id] = nextQuestion;
      next.subjects[nextQuestion.subjectId].questions.push(nextQuestion);
    }

    return next;
  }
}