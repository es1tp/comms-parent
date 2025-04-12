import { Link } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { GTopicLinkProps, SiteApi, useLocale, useSite } from '@dxs-ts/gamut';
import { useQualifications } from '@/api-site';
import { useExamLink } from '@/g-nav';
import { useDb } from '@/api-db';



export const GTopicLink: React.FC<GTopicLinkProps> = (props) => {  
  const root: SiteApi.TopicView = props.children;
  const { topics } = useSite();

  const { navToExam } = useExamLink();
  const { findQualificiation } = useQualifications();
  
  const childTopics = topics
    .filter(topic => topic.parent && topic.parent.id === root.id);

  function handleRootClick(event: React.MouseEvent<any, any>) {
    props.onClick && root.blob?.value ? props.onClick(props.children, event) : null
  }

  function handleChildClick(event: React.MouseEvent<any, any>, topic: SiteApi.TopicView) {
    const qualificationLink = findQualificiation(topic);

    if(qualificationLink) {
      navToExam(qualificationLink)
    } else {
      props.onClick ? props.onClick(topic, event) : null;
    }
  }
  return <>
    <Link onClick={handleRootClick}>{props.children.name}</Link>
    
    {childTopics.map(topic => (
      <Link key={topic.id} onClick={(event) => handleChildClick(event, topic)} className='child-topic'>
        <ArrowRightIcon/>{`${topic.name}`} 
      </Link>
    ))}
  </>
}