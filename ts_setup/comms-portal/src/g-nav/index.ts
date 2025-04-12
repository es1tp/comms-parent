import { SiteApi, useSite } from '@dxs-ts/gamut';
import { useNavigate } from '@tanstack/react-router';



export function useExamLink() {
  const { topics } = useSite();
  const navigate = useNavigate();

  function navToExam(qualificationLink: SiteApi.TopicLink) {
    const found = topics
      .find((topic) => topic.links.filter(link => link.id === qualificationLink.id).length === 1);

    navigate({
      from: '/public/$locale',
      to: '/public/$locale/pages/$pageId/products/$productId/offers/$offerId',
      params: {
        pageId: found?.id ?? qualificationLink.id,
        productId: qualificationLink.name,
        offerId: qualificationLink.id
      }
    })
  }


  return { navToExam }
}