import { SiteApi, useSite } from '@dxs-ts/gamut';
import { KbApi } from '@/api-kb';
import { datasource } from '@/api-db';


const QUALIFICATION_LINK = 'qualification';

function getPage(article: KbApi.Article, locale: string) {
  return article.pages.find(p => p.localeCode === locale);
}

class DatasourceVisitor {
  private _articles_by_id: Record<string, KbApi.Article>;
  private _articles: KbApi.Article[];
  private _locale: string;
  private _topics: Record<string, SiteApi.Topic> = {};
  private _blob: Record<string, SiteApi.Blob> = {};
  private _links: Record<string, SiteApi.TopicLink> = {};

  constructor(locale: string, articles: KbApi.Article[]) {
    this._articles = articles;
    this._articles_by_id = this._articles.reduce<Record<string, KbApi.Article>>((collector, next) => {
      collector[next.id] = next
      return collector;
    }, {});
    this._locale = locale;
  }

  visit() {
    // process children first
    this._articles
      .sort((a, b) => Number(!!b.parentId) - Number(!!a.parentId))
      .forEach(article => this.visitAnyArticle(article));
    return this;
  }

  visitAnyArticle(article: KbApi.Article) {
    const page = getPage(article, this._locale);
    if(!page) {
      return;
    }

    // any child article has learning material
    const isLearningArticle = page.materials.length > 0 || (
      !!this._articles
      .filter(child => child.parentId === article.id)
      .map(child => getPage(child, this._locale))
      .find(child => !!child && child.materials.length > 0)
    );

    // has learning material
    if(isLearningArticle) {
      this.visitTopic(article);  
    } else {
      // generate questionnaire only topic
      const isQualificationArticle = !!page.qualification || (
        !!this._articles
        .filter(child => child.parentId === article.id)
        .map(child => getPage(child, this._locale))
        .find(child => !!child && !!child.qualification && child.questionnaire.length > 0)
      );

      if(isQualificationArticle) {
        this.visitTopic(article)
      }
    }
  }

  visitQualificationLinks(article: KbApi.Article, page: KbApi.Page): string[] {
    const links: string[] = [];

    // article has questionnaire directly links to it, exam topic
    if(page.qualification) {
      const heading = `${page.title}`;
      const link: SiteApi.TopicLink = {
        id: `${page.id}_qualification_${page.qualification}`,
        name: heading,
        value: page.qualification,
        anon: true,
        type: 'workflow',
        path: QUALIFICATION_LINK,
        workflow: true
      };
      links.push(link.id);
      this._links[link.id] = link;

      // page is dedicated for specific type of qualification
    } else {

      // collect all links from from children
      const childQualifications = Object.values(this._topics)
        .filter(topic => topic.parent === article.id)
        .flatMap(topic => topic.links)
      links.push(...childQualifications);
    }

    return links;
  }

  visitTopic(article: KbApi.Article) {
    const page = getPage(article, this._locale)!;
    const heading = `${page.title}`;
    const blobId = `${page.id}_blob`;

    const topic: SiteApi.Topic = {
      id: article.id,
      name: heading,
      blob: blobId,
      matchingPolicy: page.matchingPolicy,
      links: this.visitQualificationLinks(article, page),
      parent: article.parentId,
      headings: [{
        id: article.id,
        level: 0,
        name: heading,
        order: 1,
      }]
    };

    const value = page.materials.map(p => p.text).join('\n\n') ?? page.title;
    const blob: SiteApi.Blob = { id: blobId, value };

    this._blob[blob.id] = blob;
    this._topics[topic.id] = topic;
  }

  close(): SiteApi.Site {
    return {
      id: '',
      images: '',
      locale: this._locale,
      topics: this._topics,
      blobs: this._blob,
      links: this._links
    }
  }
}

export function useQualifications() {
  const { topics } = useSite();
  
  function findQualificiation(init: SiteApi.TopicView | KbApi.QualificationType): SiteApi.TopicLink | undefined  {

    if((init as any).links) {
      const topic: SiteApi.TopicView = init as SiteApi.TopicView;
      const links = topic.links.filter(link => link.type === 'workflow' && link.path === QUALIFICATION_LINK);
      if(links.length !== 1) {
        return undefined
      }
      return links[0];
    } else {
      const [found] = topics.flatMap(t => t.links)
        .filter(link => link.type === 'workflow' && link.path === QUALIFICATION_LINK)
        .filter(link => link.value === init);
      return found;
    }
  }
  return { findQualificiation };
}


export function parseSite(locale: string): SiteApi.Site {
  const result = new DatasourceVisitor(locale, datasource.articles()).visit().close();
  console.debug(result);
  return result;
}