import { RouterProvider, createHashHistory, createRouter } from '@tanstack/react-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SiteBackendProvider, GComponents, routeTree, LocaleProvider, IamBackendProvider } from '@dxs-ts/gamut';




import { en } from '../intl/en';
import { et } from '../intl/et';

import { DemoTheme } from '@/theme';
import { createSiteFetch } from './fetch_stencil';
import { createIamFetch } from './fetch_iam';

import {  } from '@tanstack/react-router'

const hashHistory = createHashHistory()
const router = createRouter({ routeTree, history: hashHistory })

const siteFetch = createSiteFetch();
const iamFetch = createIamFetch();
const queryClient = new QueryClient()

const localeOptions = {
  'document.title': 'ES1TP'
}

const staleTime = 900000;

export const App: React.FC<{}> = ({ }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider disableErrors defaultLocale={() => 'et'} options={{
        et: et,
        en: en,
        fi: localeOptions,
      }}>
        <IamBackendProvider 
          liveness={staleTime} 
          staleTime={staleTime} 
          onExpire={() => { }}
          fetchUserGET={iamFetch.fetchUserGET}
          fetchUserLivenessGET={iamFetch.fetchUserLivenessGET}
          fetchUserProductsGET={iamFetch.fetchUserProductsGET}
          fetchUserRolesGET={iamFetch.fetchUserRolesGET}>

          <SiteBackendProvider 
            staleTime={staleTime}
            refetchTime={staleTime}
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
