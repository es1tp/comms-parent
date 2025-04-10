import { Link } from '@mui/material';
import { GTopicLinkProps, SiteApi, useSite } from "@dxs-ts/gamut";


export const GTopicLink: React.FC<GTopicLinkProps> = (props) => {  
  const root: SiteApi.TopicView = props.children;
  const { topics } = useSite();

  const childTopics = topics
    .filter(topic => topic.parent && topic.parent.id === root.id);

  return <>
    <Link onClick={(event) => {
        props.onClick && root.blob?.value ? props.onClick(props.children, event) : null;
      }}>

      {props.children.name}
    </Link>

    {childTopics.map(topic => (
      <Link key={topic.id} onClick={(event) => {
        props.onClick ? props.onClick(topic, event) : null;
      }}>
        -{topic.name}
      </Link>
    ))}
  </>
}