import { KbApi } from '../../src/api-kb';


export function validateArticles(articles: KbApi.Article[]) {
  const uniqueIds: string[] = [];

  for(const article of articles) {
    if(uniqueIds.includes(article.id)) {
      throw new Error(`Article with id: ${article.id} is not unique!`);
    }
    uniqueIds.push(article.id);

    for(const page of article.pages) {
      if(uniqueIds.includes(page.id)) {
        throw new Error(`Page with id: ${page.id} is not unique!`);
      }
      uniqueIds.push(page.id);

      for(const material of page.materials) {
        if(uniqueIds.includes(material.id)) {
          throw new Error(`Material with id: ${material.id} is not unique!`);
        }
        uniqueIds.push(material.id);
      }

      // Question id-s are not globally unique
      /*
      for(const question of page.questionnaire) {
        if(uniqueIds.includes(question.id)) {
          throw new Error(`Question with id: ${question.id} is not unique!`);
        }
        uniqueIds.push(question.id);
      }
      */
    }
  }
}