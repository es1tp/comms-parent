
import { createFilePath } from '../utils'
import { KbApi } from '../../src/api-kb';

import { visitArticles } from './article-visitor';
import { generateArticleFiles } from './article-file-gen-visitor'
import { generateQuestionnaireFiles } from './questionnaire-file-gen-visitor';




export async function visitAssets(
  config: { 
    src: string[], 
    target: {
      questionnaire: string,
      site: string
    } 
}) {
  const root = process.cwd();
  const fullPath = config.src
    .map(src => createFilePath([root], src))
    .map(src => src.fullPath);
  
  try {  
    const articles: KbApi.Article[] = visitArticles(fullPath)

    generateArticleFiles({
      targetDirectory: createFilePath([root], config.target.site).fullPath, 
      articles
    });
    
    generateQuestionnaireFiles({
      targetDirectory: createFilePath([root], config.target.questionnaire).fullPath, 
      articles
    })

  } catch (err) {
    console.error(`\u{1F30D} failed to generate files from: ${fullPath}`, err)
  }
}

