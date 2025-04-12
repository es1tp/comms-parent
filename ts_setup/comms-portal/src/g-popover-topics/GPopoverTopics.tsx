import React from 'react';
import { Drawer } from '@mui/material';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

import { GAppBarSpacer, GPopoverTopicsSlotProps, GShell, GShellClassName, SiteApi } from '@dxs-ts/gamut';
import { useQualifications } from '@/api-site';
import { useExamLink } from '@/g-nav';


export const GPopoverTopics: React.FC<GPopoverTopicsSlotProps> = (props) => {

  const { navToExam } = useExamLink();
  const { findQualificiation } = useQualifications();

  const roots = props.groups.flatMap(group => group.topics);

  function handleTopicChange(topic: SiteApi.TopicView, event: React.MouseEvent<any, any>) {
    if(!topic.parent) {
      topic.blob?.value ? props.onTopic(topic, event) : null
      return;
    }

    const qualificationLink = findQualificiation(topic);

    if(qualificationLink) {
      navToExam(qualificationLink)
    } else {
      props.onTopic(topic, event);
    }
  }

  return (
    <Drawer open={props.open} onClose={props.onClose} className={GShellClassName}>
      <GShell>
        <GAppBarSpacer />

        <SimpleTreeView>
          {roots.map(root => (
            

            <TreeItem itemId={root.id} label={root.topic.name}>
              { root.blob?.value && <TreeItem itemId={root.id + '/index'} label={root.topic.name} onClick={(event) => handleTopicChange(root, event)}/> }
              {props.topics
                .filter(child => child.parent?.id === root.id)
                .map(child => (<TreeItem itemId={child.id} label={child.name} onClick={(event) => handleTopicChange(child, event)}/>))}
            </TreeItem>

          ))}

        </SimpleTreeView>
      </GShell>
    </Drawer>)
}