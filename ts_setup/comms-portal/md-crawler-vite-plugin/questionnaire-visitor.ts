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

  getOrCreateSubject(article: Article, page: Page): ExamApi.ErauSubject {
    const current = this._subjects[page.id];
    if(current) {
      return current;
    }

    const newSubject: ExamApi.ErauSubject = {
      id: page.id,
      articleId: article.id,
      locale: page.localeCode,
      title: page.title,
      questions: [],
    }

    this._subjects[newSubject.id] = newSubject;
    return newSubject;
  }

  visitArticle(article: Article) {
    // article has not questions

    for(const page of article.pages) {

      if(page.questionnaire.length === 0) {
        continue;
      }

      const subject = this.getOrCreateSubject(article, page);
      subject.questions.push(...this.visitQuestions(article, page));
    }
  }

  visitQuestions(article: Article, page: Page): ExamApi.ErauQuestion[] {
    const result: Record<string, ExamApi.ErauQuestion> = {};
    
    for(const { id, question, answers, qualifications } of page.questionnaire) {
      
      const entry: ExamApi.ErauQuestion = result[id] ?? { id, info: [], answers: [], text: {}, qualifications: [] };
      answers.forEach(answer => this.visitAnswer(answer, page, entry))

      entry.qualifications.push(...qualifications);
      entry.text = question;
      result[entry.id] = entry;
    }
    
    return Object.values(result);
  }

  visitAnswer(answer: Answer, page: Page, question: ExamApi.ErauQuestion) { 
    const exists: ExamApi.ErauAnswer | undefined = question.answers.find(target => target.id === answer.id);
    if(exists) {
      console.error(`${page.id} has answer with same id: ${answer.id}`);
    } else {
      question.answers.push({
        id: answer.id,
        text: answer.answer,
        isCorrect: answer.isCorrect,
      });
    }

  }
}