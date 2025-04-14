
import { alpha, generateUtilityClass, styled } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'



export const MUI_NAME = 'TopicsMenu';
export const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  };
  const getUtilityClass = (slot: string) => generateUtilityClass(MUI_NAME, slot);
  return composeClasses(slots, getUtilityClass, {});
}



export const TopicsMenuRoot = styled("div", {
  name: MUI_NAME,
  slot: 'Root',
  overridesResolver: (_props, styles) => {
    return [
      styles.root,
    ];
  },
})(({ theme }) => {
  return {
    '.MuiSimpleTreeView-root': {
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    '.MuiSimpleTreeView-root > .MuiTreeItem-root > .MuiTreeItem-content > .MuiTreeItem-label': {
      fontWeight: 500,
    },
    '.MuiCollapse-root': {
      marginLeft: theme.spacing(3),
      borderLeft: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    },
    '.MuiCollapse-root .MuiTreeItem-label': {
      ...theme.typography.body2,
    },
    '& .MuiCollapse-root .MuiTreeItem-content .MuiTreeItem-iconContainer': {
      display: 'none'
    },
    '.MuiTreeItem-content': {
      borderRadius: '0px'
    },
    '.MuiTreeItem-content .MuiTreeItem-iconContainer .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
      fontSize: '20pt'
    }
  };
});

