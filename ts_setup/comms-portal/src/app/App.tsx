import { RouterProvider } from '@tanstack/react-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SiteBackendProvider, GComponents, router, LocaleProvider, IamBackendProvider } from '@dxs-ts/gamut';


import { en } from '../intl/en';
import { et } from '../intl/et';

import { DemoTheme } from '@/theme';
import { createSiteFetch } from './fetch_stencil';
import { createIamFetch } from './fetch_iam';


const siteFetch = createSiteFetch();
const iamFetch = createIamFetch();
const queryClient = new QueryClient()

const localeOptions = {
  'document.title': 'ES1TP'
}

export const App: React.FC<{}> = ({ }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider disableErrors options={{
        et: et,
        en: en,
        fi: localeOptions,
      }}>
        <IamBackendProvider liveness={900000} onExpire={() => { }}
          fetchUserGET={iamFetch.fetchUserGET}
          fetchUserLivenessGET={iamFetch.fetchUserLivenessGET}
          fetchUserProductsGET={iamFetch.fetchUserProductsGET}
          fetchUserRolesGET={iamFetch.fetchUserRolesGET}>

          <SiteBackendProvider
            fetchSiteGet={siteFetch.fetchSiteGet}
            fetchFeedbackGet={siteFetch.fetchFeedbackGet}
            fetchFeedbackRatingPut={siteFetch.fetchFeedbackRatingPut}>

            <DemoTheme>
              <RouterProvider router={router} />
            </DemoTheme>
          </SiteBackendProvider>
        </IamBackendProvider>
      </LocaleProvider>
    </QueryClientProvider>);
}


// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Register gamut components
declare module '@mui/material' {
  export interface Components<Theme = unknown> extends GComponents<Theme> { }
}
