import { ExamApi } from "./exam-types";


class ErauSubjectMergeVisitor {

  private _all_entries: Record<string, ExamApi.ErauSubject> = {};

  constructor() {
  }

  visitSubject(init_article: ExamApi.ErauSubject) {
    const article: ExamApi.ErauSubject = JSON.parse(JSON.stringify(init_article));
    const prev = this._all_entries[article.id];
    if(!prev) {
      // deep clone
      this._all_entries[article.id] = article;
      return;
    }

    const prevArticle = this._all_entries[article.id];
    prevArticle.questions.push(...article.questions);
  }


  close(): ExamApi.ErauSubject[] {
    return Object.values(this._all_entries);
  }
}


export function mergeSubjects(subjects: ExamApi.ErauSubject[]): ExamApi.ErauSubject[] {
  const visitor = new ErauSubjectMergeVisitor();
  for(const entry of subjects) {
    visitor.visitSubject(entry);
  }
  return visitor.close();
}