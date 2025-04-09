import { SiteApi } from '@dxs-ts/gamut';
import datasource from '@/datasource';
import { Article } from '@/api-kb';


function getPage(article: Article, locale: string) {
  return article.pages.find(p => p.localeCode === locale)!;
}

export function parseSite(locale: string): SiteApi.Site {
  const values: Article[] = Object.values(datasource);
  console.log("loading content", values);

  const source: Record<string, Article> = values.reduce<Record<string, Article>>((collector, next) => {
      collector[next.id] = next
      return collector;
    }, {});

  const articlesWithMaterial: Article[] = values.filter(article => {
    const pagesWithMaterial = article.pages
      .filter(p => p.localeCode === locale)
      .filter(p => p.materials.length > 0);
    return pagesWithMaterial.length > 0;
  });

  const topics = articlesWithMaterial
    .map(article => {
      const [page] = article.pages.filter(p => p.localeCode === locale);
      const parent = article.parentId ? getPage(source[article.parentId], locale) : undefined;
      const parentName = parent?.title ? `${parent.title}/` : '';
      const heading = `${parentName}${page.title}`;

      const topic: SiteApi.Topic = {
        id: article.id,
        name: heading,
        blob: `${page.id}_blob`,
        links: [],
        headings: [{
          id: article.id,
          level: 0,
          name: heading,
          order: 1,
        }]
      };
      return topic;
    })
    .reduce<Record<string, SiteApi.Topic>>((collector, next) => {
      collector[next.id] = next
      return collector;
    }, {});

  const blobs = articlesWithMaterial
    .map(article => {
      const [page] = article.pages.filter(p => p.localeCode === locale);
      const value = page.materials.map(p => p.text).join('\n\n');
      const blob: SiteApi.Blob = { id: `${page.id}_blob`, value };

      return blob;
    })
    .reduce<Record<string, SiteApi.Blob>>((collector, next) => {
      collector[next.id] = next
      return collector;
    }, {});

    console.log('BLOB', blobs)

  return {
    id: '',
    images: '',
    locale,
    topics,
    blobs,
    links: {}
  }
}