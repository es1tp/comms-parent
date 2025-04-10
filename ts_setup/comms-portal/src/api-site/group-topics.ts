import { SiteApi } from "@dxs-ts/gamut";


export function groupTopics(topics: SiteApi.TopicView[], itemsInColumn?: number | undefined): SiteApi.TopicGroup[] {
  const roots = topics.filter(t => !t.parent)
  const result: SiteApi.TopicGroup[] = [];
  
  for(let column = 0; column < roots.length; column++) {
    const topic = roots[column];
    const next = !!roots[column+1];
    const group: SiteApi.TopicGroup = {column, next, topics: [topic] };
    result.push(group);
  }

  return result;
}