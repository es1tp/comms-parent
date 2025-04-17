import { ErauApi } from '../../src/api-erau';
import { DateTime } from 'luxon';


export const NOW = DateTime.now().toISO();


type ExamObject = (

  {
    id: string;
    changeObject: 'subject';
    value: ErauApi.ErauSubject
  } |
  {
    id: string;
    changeObject: 'answer';
    value: ErauApi.ErauAnswer
  } |
  {
    id: string;
    changeObject: 'question';
    value: ErauApi.ErauQuestion
  }
)

function flatOutArticle(article: ErauApi.ErauSubject): Record<string, ExamObject> {
  const allEntries: Record<string, ExamObject> = {};
  allEntries[article.id] = {
    id: article.id,
    changeObject: 'subject',
    value: article
  };

  for(const question of article.questions) {
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
  return allEntries;
}

export function visitNewArticleChangeLog(article: ErauApi.ErauSubject): ErauApi.ErauChange[] {
  const change_log: ErauApi.ErauChange[] = [];

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

export function visitDiffArticleChangeLog(props: { prevArticle: ErauApi.ErauSubject, newArticle: ErauApi.ErauSubject, changelog: ErauApi.ErauChangeLog | undefined }): ErauApi.ErauChange[] {
  const change_log: ErauApi.ErauChange[] = [];
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


export function visitNoChangesArticleChangeLog(props: {current: ErauApi.ErauSubject, changelog: ErauApi.ErauChangeLog | undefined}): ErauApi.ErauChange[] {
  const asIfNewAddition = visitNewArticleChangeLog(props.current);

  // old entries that are present
  const existing = getChangelogEntries(props.current, props.changelog);

  const missingEntries = asIfNewAddition.filter(newEntry => !existing.find(ex => ex.id === newEntry.id));

  return [...existing, ...missingEntries];
}


function getChangelogEntries(article: ErauApi.ErauSubject, changelog: ErauApi.ErauChangeLog | undefined) {
  const logById = (changelog?.changes ?? []).reduce<Record<string, ErauApi.ErauChange>>((collector, next) => {
    collector[next.id] = next;
    return collector;
  }, {});
  return visitNewArticleChangeLog(article)
    .map(({id}) => logById[id])
    .filter(entry => entry!);
}