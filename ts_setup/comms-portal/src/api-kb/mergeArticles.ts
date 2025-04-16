import { KbApi } from "./kb-types";



class ArticleMergeVisitor {

  private _all_entries: Record<string, KbApi.Article> = {};

  constructor() {

  }

  visitArticle(init_article: KbApi.Article) {
    const article: KbApi.Article = JSON.parse(JSON.stringify(init_article));
    const prev = this._all_entries[article.id];
    if(!prev) {
      // deep clone
      this._all_entries[article.id] = article;
      return;
    }

    article.pages.forEach(page => this.visitPage({ page, article }))
  }

  private visitPage(props: {article: KbApi.Article, page: KbApi.Page}) {
    const prevArticle = this._all_entries[props.article.id];
    const prevPage = prevArticle.pages.find(page => page.localeCode === props.page.localeCode);
    if(prevPage) {
      // sync
      prevPage.title = props.page.title;
      prevPage.materials.push(...props.page.materials);
      prevPage.questionnaire.push(...props.page.questionnaire);
      prevPage.qualification = props.page.qualification ?? prevPage.qualification;
    } else {
      prevArticle.pages.push(props.page);
    }
  }

  private visitMaterial(props: {article: KbApi.Article, page: KbApi.Page, material: KbApi.Material}) {

  }

  close(): KbApi.Article[] {
    return Object.values(this._all_entries);
  }
}


export function mergeArticles(articles: KbApi.Article[]): KbApi.Article[] {
  const visitor = new ArticleMergeVisitor();
  for(const entry of articles) {
    visitor.visitArticle(entry);
  }
  return visitor.close();
}