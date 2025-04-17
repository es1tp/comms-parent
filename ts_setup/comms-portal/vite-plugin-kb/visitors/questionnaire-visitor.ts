import { ErauApi } from '../../src/api-erau';
import { KbApi } from '../../src/api-kb';



class QuestionnaireVisitor {
  private _articles: KbApi.Article[];
  private _subjects: Record<string, ErauApi.ErauSubject> = {};

  constructor(articles: KbApi.Article[]) {
    this._articles = articles;
  }

  close(): ErauApi.ErauSubject[] {
    return Object.values(this._subjects);
  }
  visit() {
    this._articles.forEach(article => this.visitArticle(article));
    return this;
  }

  getOrCreateSubject(article: KbApi.Article, page: KbApi.Page): ErauApi.ErauSubject {
    const current = this._subjects[page.id];
    if(current) {
      return current;
    }

    const newSubject: ErauApi.ErauSubject = {
      id: page.id,
      articleId: article.id,
      locale: page.localeCode,
      title: page.title,
      questions: [],
    }

    this._subjects[newSubject.id] = newSubject;
    return newSubject;
  }

  visitArticle(article: KbApi.Article) {
    // article has not questions

    for(const page of article.pages) {

      if(page.questionnaire.length === 0) {
        continue;
      }

      const subject = this.getOrCreateSubject(article, page);
      subject.questions.push(...this.visitQuestions(article, page));
    }
  }

  visitQuestions(article: KbApi.Article, page: KbApi.Page): ErauApi.ErauQuestion[] {
    const result: Record<string, ErauApi.ErauQuestion> = {};
    
    for(const { id, question, answers, qualifications, formula, type } of page.questionnaire) {
      
      const entry: ErauApi.ErauQuestion = result[id] ?? { id, info: [], answers: [], text: {}, qualifications: [] };
      answers.forEach(answer => this.visitAnswer(answer, page, entry))

      entry.qualifications.push(...qualifications);
      entry.text = question;
      entry.formula = formula;
      entry.type = type;
      result[entry.id] = entry;
    }
    
    return Object.values(result);
  }

  visitAnswer(answer: KbApi.Answer, page: KbApi.Page, question: ErauApi.ErauQuestion) { 
    const exists: ErauApi.ErauAnswer | undefined = question.answers.find(target => target.id === answer.id);
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

export function visitQuestions(articles: KbApi.Article[]): ErauApi.ErauSubject[] {
  return new QuestionnaireVisitor(articles).visit().close();
}