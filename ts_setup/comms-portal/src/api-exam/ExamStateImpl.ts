import { ErauApi } from '@/api-erau';

/*
import { ExamApi } from './exam-types';
import { QuestionnaireReducer } from './QuestionnaireReducer';



export class ExamStateImpl implements ExamApi.ExamState {
  private _source: ErauApi.ErauSubject[];
  private _selectedSubject: ErauApi.ErauSubject | undefined;
  
  private _questionnaire: ExamApi.Questionnaire;
  private _selectedAnswers: string[];


  constructor(props: {
    source: ErauApi.ErauSubject[],
    subject?: ErauApi.ErauSubject | undefined,

    selectedAnswers?: { values: string[], questionnaire: ExamApi.Questionnaire },
    nextNQuestions?: number
  }) {
    this._source = props.source;    
    this._selectedSubject = props.subject;


    // ongoing exam
    if (props.selectedAnswers) {
      this._selectedAnswers = [...props.selectedAnswers.values];
      const subjects = Object.values(props.selectedAnswers.questionnaire.subjects);
      this._questionnaire = new QuestionnaireReducer(subjects, this._selectedAnswers).accept(); 
    } else {
      // new exam
      const source = !!props.subject ? props.source.filter(e => e.id === props.subject?.id) : props.source;
      this._selectedAnswers = [];
      
      const nextQuesions = props.nextNQuestions ? ErauApi.shuffle(source, props.nextNQuestions): source;
      this._questionnaire = new QuestionnaireReducer(nextQuesions, []).accept();    
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

    const selectedQuestionAnswers = selectedQuestion.answers.map(({id}) => id);
    const values = this._selectedAnswers.filter(id => !selectedQuestionAnswers.includes(id));    
    values.push(answerTk);
    return new ExamStateImpl({ source, subject: this._selectedSubject, selectedAnswers: { values, questionnaire } });
  }

  suffle(nextNQuestions: number): ExamApi.ExamState {
    const source = this._source;
    return new ExamStateImpl({ source, nextNQuestions, subject: this._selectedSubject });
  }

  reset(): ExamApi.ExamState {
    const source = this._source;
    const questionnaire = this._questionnaire;
    return new ExamStateImpl({ subject: this._selectedSubject, source, selectedAnswers: { values: [], questionnaire } });
  }

  all(): ExamApi.ExamState {
    const source = this._source;
    return new ExamStateImpl({ source });
  }

  get source() { return this._source }
  get questionnaire() { return this._questionnaire }
  get stats() {
    const total: number = Object.values(this._questionnaire.questions).length;
    const correct: number = Object.values(this._questionnaire.answers)
      .filter(({isCorrect, isAnswered}) => isAnswered && isCorrect)
      .length;
    const perc: string = correct === 0 ? '0' : (100 / total * correct).toFixed(0);
    return { perc, total, correct }
  }

  get selectedSubject(): ErauApi.ErauSubject | undefined {
    return this._selectedSubject;
  }

  selectSubject(subject: ErauApi.ErauSubject | undefined): ExamApi.ExamState {
    const source = this._source;
    return new ExamStateImpl({ source, subject });
  }
}*/