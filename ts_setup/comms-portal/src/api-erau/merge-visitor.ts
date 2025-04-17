import { ErauApi } from "./erau-types";


class ErauSubjectMergeVisitor {

  private _all_entries: Record<string, ErauApi.ErauSubject> = {};

  constructor() {
  }

  visitSubject(init_article: ErauApi.ErauSubject) {
    const article: ErauApi.ErauSubject = JSON.parse(JSON.stringify(init_article));
    const prev = this._all_entries[article.id];
    if(!prev) {
      // deep clone
      this._all_entries[article.id] = article;
      return;
    }

    const prevArticle = this._all_entries[article.id];
    prevArticle.questions.push(...article.questions);
  }


  close(): ErauApi.ErauSubject[] {
    return Object.values(this._all_entries);
  }
}


export function merge(subjects: ErauApi.ErauSubject[]): ErauApi.ErauSubject[] {
  const visitor = new ErauSubjectMergeVisitor();
  for(const entry of subjects) {
    visitor.visitSubject(entry);
  }
  return visitor.close();
}