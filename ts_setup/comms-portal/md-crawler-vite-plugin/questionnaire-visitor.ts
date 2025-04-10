import { ExamApi } from '../src/api-exam';
import { Answer, Article, Page } from '../src/api-kb';



export class QuestionnaireVisitor {
  private _articles: Article[];
  private _subjects: Record<string, ExamApi.ErauSubject> = {};

  constructor(articles: Article[]) {
    this._articles = articles;
  }

  close(): ExamApi.ErauSubject[] {
    return Object.values(this._subjects);
  }

  visit() {
    this._articles.forEach(article => this.visitArticle(article));
    return this;
  }

  getOrCreateSubject(article: Article): ExamApi.ErauSubject {
    const current = this._subjects[article.id];
    if(current) {
      return current;
    }

    const newSubject: ExamApi.ErauSubject = {
      id: article.id,
      title: {},
      questions: [],
    }

    this._subjects[newSubject.id] = newSubject;
    return newSubject;
  }

  visitArticle(article: Article) {
    // article has not questions
    if(article.pages.flatMap(page => page.questionnaire).length === 0) {
      return;
    }

    const subject = this.getOrCreateSubject(article);

    const titles = article.pages
      .filter(e => e.questionnaire.length > 0)
      .reduce<ExamApi.Intl>((collector, current) => {
        collector[current.localeCode] = current.title;
        return collector;
      }, {});

    // merge locale based titles
    subject.title = {...subject.title, ...titles}

    subject.questions.push(...this.visitQuestions(article));

  }

  visitQuestions(article: Article): ExamApi.ErauQuestion[] {
    const result: Record<string, ExamApi.ErauQuestion> = {};

    for(const page of article.pages) {
      for(const { id, question, answers, qualifications } of page.questionnaire) {
        
        const entry: ExamApi.ErauQuestion = result[id] ?? { id, info: [], answers: [], text: {}, qualifications: [] };
        answers.forEach(answer => this.visitAnswer(answer, page, entry))

        entry.qualifications.push(...qualifications);
        entry.text[page.localeCode] = question;
        result[entry.id] = entry;
      }
    }
    return Object.values(result);
  }
  visitAnswer(answer: Answer, page: Page, question: ExamApi.ErauQuestion) { 
    let newEntry: ExamApi.ErauAnswer | undefined = question.answers.find(target => target.id === answer.id);
    if(!newEntry) {
      newEntry = {
        id: answer.id,
        value: {}
      }
      question.answers.push(newEntry);
    }
    newEntry.value[page.localeCode] = {
      text: answer.answer,
      isCorrect: answer.isCorrect,
    };
  }
}