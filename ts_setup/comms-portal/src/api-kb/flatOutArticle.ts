import { KbApi } from "./kb-types";


export function flatOutArticle(article: KbApi.Article): Record<string, KbApi.ArticleObject> {
  const allEntries: Record<string, KbApi.ArticleObject> = {};
  allEntries[article.id] = {
    id: article.id,
    changeObject: 'article',
    value: article
  };

  for(const page of article.pages) {
    allEntries[page.id] = {
      id: page.id,
      changeObject: 'page',
      value: page
    };

    for(const material of page.materials) {
      allEntries[material.id] = {
        id: material.id,
        changeObject: 'material',
        value: material
      };
    }
    for(const question of page.questionnaire) {
      allEntries[question.id] = {
        id: question.id,
        changeObject: 'question',
        value: question
      };

      for(const answer of question.answers) {
        allEntries[answer.id] = {
          id: answer.id,
          changeObject: 'answer',
          value: answer
        };
        
      }
    }
  }
  return allEntries;
}