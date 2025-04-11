import { KbApi } from "../../src/api-kb";
import { DateTime } from 'luxon';


export const NOW = DateTime.now().toISO();


type ArticleObject = (
  {
    id: string;
    changeObject: 'article';
    value: KbApi.Article
  } |
  {
    id: string;
    changeObject: 'page';
    value: KbApi.Page
  } |
  {
    id: string;
    changeObject: 'material';
    value: KbApi.Material
  } |
  {
    id: string;
    changeObject: 'answer';
    value: KbApi.Answer
  } |
  {
    id: string;
    changeObject: 'question';
    value: KbApi.Question
  }
)

function flatOutArticle(article: KbApi.Article): Record<string, ArticleObject> {
  const allEntries: Record<string, ArticleObject> = {};
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

export function visitNewArticleChangeLog(article: KbApi.Article): KbApi.ArticleChange[] {
  const change_log: KbApi.ArticleChange[] = [];

  for(const entry of Object.values(flatOutArticle(article))) {
    change_log.push({
      id: entry.id,
      changeObject: entry.changeObject,
      changeType: 'add',
      comment: '',
      timestamp: NOW
    });
  }
  return change_log;
}

export function visitDiffArticleChangeLog(props: { prevArticle: KbApi.Article, newArticle: KbApi.Article, changelog: KbApi.ArticleChangeLog | undefined }): KbApi.ArticleChange[] {
  const change_log: KbApi.ArticleChange[] = [];
  const newData = flatOutArticle(props.newArticle);
  const prevData = flatOutArticle(props.prevArticle);

  const oldChangeLog = getChangelogEntries(props.prevArticle, props.changelog);

  for(const key of Object.keys(newData)) {
    const newVersion = newData[key];
    const prevVersion = prevData[key];

    if(prevVersion == null) {
      change_log.push({
        id: newVersion.id,
        changeObject: newVersion.changeObject,
        changeType: 'add',
        comment: '',
        timestamp: NOW
      });
      continue;
    } 
    
    const noChanges = JSON.stringify(newVersion.changeObject) === JSON.stringify(prevVersion.changeObject);
    const oldChange = oldChangeLog[key];

    if(noChanges && oldChange) {
      change_log.push(oldChange);
    } else {
      change_log.push({
        id: newVersion.id,
        changeObject: newVersion.changeObject,
        changeType: 'update',
        comment: '',
        timestamp: NOW
      });
    }

    
  }

  return change_log;
}


export function visitNoChangesArticleChangeLog(props: {current: KbApi.Article, changelog: KbApi.ArticleChangeLog | undefined}): KbApi.ArticleChange[] {
  const asIfNewAddition = visitNewArticleChangeLog(props.current);

  // old entries that are present
  const existing = getChangelogEntries(props.current, props.changelog);

  const missingEntries = asIfNewAddition.filter(newEntry => !existing.find(ex => ex.id === newEntry.id));

  return [...existing, ...missingEntries];
}


function getChangelogEntries(article: KbApi.Article, changelog: KbApi.ArticleChangeLog | undefined) {
  const logById = (changelog?.changes ?? []).reduce<Record<string, KbApi.ArticleChange>>((collector, next) => {
    collector[next.id] = next;
    return collector;
  }, {});
  return visitNewArticleChangeLog(article)
    .map(({id}) => logById[id])
    .filter(entry => entry!);
}