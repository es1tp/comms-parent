import { SiteApi } from '@dxs-ts/gamut';
import { Article } from '@/api-kb';
import { datasource } from '@/api-db';


const QUALIFICATION_LINK = 'qualification';

function getPage(article: Article, locale: string) {
  return article.pages.find(p => p.localeCode === locale);
}

class DatasourceVisitor {
  private _articles_by_id: Record<string, Article>;
  private _articles: Article[];
  private _locale: string;
  private _topics: Record<string, SiteApi.Topic> = {};
  private _blob: Record<string, SiteApi.Blob> = {};
  private _links: Record<string, SiteApi.TopicLink> = {};

  constructor(locale: string, articles: Article[]) {
    this._articles = articles;
    this._articles_by_id = this._articles.reduce<Record<string, Article>>((collector, next) => {
      collector[next.id] = next
      return collector;
    }, {});
    this._locale = locale;
  }

  visit() {
    this._articles.forEach(article => this.visitAnyArticle(article));
    return this;
  }

  visitAnyArticle(article: Article) {
    const page = getPage(article, this._locale);
    if(!page) {
      return;
    }
    this.visitLearningArticle(article);
    this.visitQuestionnaireArticle(article);
    this.visitQualificationArticle(article);
  }

  visitQualificationArticle(article: Article) {
    const page = getPage(article, this._locale)!;

    // any child article has learning material
    const isQualificationArticle = !!page.qualification || (
      !!this._articles
      .filter(child => child.parentId === article.id)
      .map(child => getPage(child, this._locale))
      .find(child => !!child && !!child.qualification)
    );

    if(!isQualificationArticle) {
      return;
    }


    this.visitQualificationTopic(article);
  }

  visitQualificationTopic(article: Article) {
    const page = getPage(article, this._locale)!;
    const heading = `${page.title}`;
    const blobId = `${page.id}_blob`;

    const link: SiteApi.TopicLink | undefined = page.qualification ? {
      id: `${page.id}_qualification_${page.qualification}`,
      name: heading,
      value: page.qualification,
      anon: true,
      type: QUALIFICATION_LINK
    } : undefined;

    const topic: SiteApi.Topic = {
      id: article.id,
      name: heading,
      blob: blobId,
      links: link ? [link.id] : [],
      parent: article.parentId,
      
      headings: [{
        id: article.id,
        level: 0,
        name: heading,
        order: 1,
      }]
    };

    const value = page.title;
    const blob: SiteApi.Blob = { id: blobId, value };

    if(link) {
      this._links[link.id] = link;
    }
    this._blob[blob.id] = blob;
    this._topics[topic.id] = topic;
  }


  visitQuestionnaireArticle(article: Article) {
    const page = getPage(article, this._locale)!;
    if(page.questionnaire.length === 0) {
      return;
    }
  }

  visitLearningArticle(article: Article) {
    const page = getPage(article, this._locale)!;

    // any child article has learning material
    const isLearningArticle = page.materials.length > 0 || (
      !!this._articles
      .filter(child => child.parentId === article.id)
      .map(child => getPage(child, this._locale))
      .find(child => !!child && child.materials.length > 0)
    );

    // no materials 
    if(!isLearningArticle) {
      return;
    }

    this.visitLearningTopic(article);
  }

  visitLearningTopic(article: Article) {
    const page = getPage(article, this._locale)!;
    const heading = `${page.title}`;
    const blobId = `${page.id}_blob`;

    const topic: SiteApi.Topic = {
      id: article.id,
      name: heading,
      blob: blobId,
      links: [],
      parent: article.parentId,
      headings: [{
        id: article.id,
        level: 0,
        name: heading,
        order: 1,
      }]
    };

    const value = page.materials.map(p => p.text).join('\n\n');
    const blob: SiteApi.Blob = { id: blobId, value };

    this._blob[blob.id] = blob;
    this._topics[topic.id] = topic;
  }

  close(): SiteApi.Site {
    console.log(this._topics);

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

export function findQualificiationLink(topic: SiteApi.TopicView): SiteApi.TopicLink | undefined {
  const links = topic.links.filter(link => link.type === QUALIFICATION_LINK);
  if(links.length !== 1) {
    return undefined
  }
  return links[0];
}


export function parseSite(locale: string): SiteApi.Site {
  return new DatasourceVisitor(locale, datasource.articles()).visit().close();
}