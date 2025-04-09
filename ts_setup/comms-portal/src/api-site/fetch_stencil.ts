import { SiteApi } from '@dxs-ts/gamut';
import { getVirtualResponse } from './response_builder';
import { parseSite } from './parse-site';

export function createSiteFetch() {
  const fetchSiteGet: SiteApi.FetchSiteGET = async (locale: string) => {
    return {
      ...getVirtualResponse(),
      json: async function () {
        return parseSite(locale);
      }
    };
  }

  const fetchFeedbackGet: SiteApi.FetchSiteGET = async (locale: string) => {
    //const feedback: SiteApi.CustomerFeedback[] = await response.json();
    return {
      ...getVirtualResponse(),
      json: async function () {
        return [];
      }
    };
  }

  const fetchFeedbackRatingPut: SiteApi.FetchFeedbackRatingPUT = async (body) => {
    return getVirtualResponse();
  }

  return { fetchSiteGet, fetchFeedbackGet, fetchFeedbackRatingPut };
}
