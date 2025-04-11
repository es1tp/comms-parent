import { Link } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { GTopicLinkProps, SiteApi, useSite } from '@dxs-ts/gamut';
import { findQualificiationLink } from '@/api-site';
import { useNavigate } from '@tanstack/react-router';



export const GTopicLink: React.FC<GTopicLinkProps> = (props) => {  
  const root: SiteApi.TopicView = props.children;
  const { topics } = useSite();
  const navigate = useNavigate();

  const childTopics = topics
    .filter(topic => topic.parent && topic.parent.id === root.id);

  function handleRootClick(event: React.MouseEvent<any, any>) {
    props.onClick && root.blob?.value ? props.onClick(props.children, event) : null
  }

  function handleChildClick(event: React.MouseEvent<any, any>, topic: SiteApi.TopicView) {
    const qualificationLink = findQualificiationLink(topic);

    if(qualificationLink) {
      navigate({
        form: '/public/$locale',
        // @ts-ignore
        to: '/public/$locale/pages/$pageId/products/$productId/offers/$offerId',
        params: {
          // @ts-ignore
          pageId: topic.id,
          productId: qualificationLink.name,
          offerId: qualificationLink.id
        }
      })

    } else {
      props.onClick ? props.onClick(topic, event) : null;
    }
  }


  return <>
    <Link onClick={handleRootClick}>{props.children.name}</Link>
    {childTopics.map(topic => (
      <Link key={topic.id} onClick={(event) => handleChildClick(event, topic)} className='child-topic'>
        <ArrowRightIcon/>{topic.name}
      </Link>
    ))}
  </>
}