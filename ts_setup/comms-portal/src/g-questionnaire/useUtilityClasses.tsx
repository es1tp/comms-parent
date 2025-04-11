
import { generateUtilityClass, styled, useMediaQuery } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'



export const MUI_NAME = 'QExam';


export const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  const getUtilityClass = (slot: string) => generateUtilityClass(MUI_NAME, slot);
  return composeClasses(slots, getUtilityClass, {});
}



export const GQuestionnaireRoot = styled("div", {
  name: MUI_NAME,
  slot: 'Root',
  overridesResolver: (_props, styles) => {
    return [
      styles.root
    ];
  },
})(({ theme }) => {
  return {
    '.MuiPaper-root': {
      '&.question': {
        marginBottom: theme.spacing(4)
      },
      '.question-actions': {
        marginTop: theme.spacing(1),
        display: 'flex',
        gap: theme.spacing(1),

        flexDirection: useMediaQuery(theme.breakpoints.down('sm')) ? 'column' : 'row',
        alignItems: useMediaQuery(theme.breakpoints.down('sm')) ? 'end' : undefined
      },
      '.translator-text.MuiTypography-root ': {
        fontSize: useMediaQuery(theme.breakpoints.down('sm')) ? theme.typography.caption.fontSize : '10pt', //TODO typography styles
        fontWeight: 'bold',
      },
      '&.questionnaire-results': {
        backgroundColor: theme.palette.success.dark,
        zIndex: 1000000
      }
    },

    '.MuiTextField-root': {
      '&.subject-select': {
        minWidth: '50%',
        maxWidth: '93vw',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
      }
    },

    '.MuiContainer-root': {
      [theme.breakpoints.up('md')]: {
        width: '75%'
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: theme.spacing(1)
      },

      '&.subject >.MuiTypography-root': {
        ...theme.typography.h5
      },
      '&.subject >.MuiDivider-root': {
        border: '1px solid',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
      },
      '&.questionnaire': {
      },
      '.scroll-top-button.MuiButton-root': {
        marginBottom: theme.spacing(5),
      },
      '&.questionnaire-results >.MuiTypography-root': {
        ...theme.typography.h6
      },
      '&.questionnaire-header': {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
    },
    
    '.MuiList-root': {
      backgroundColor: undefined,
      '.success': {
        color: theme.palette.success.light,
      },
      '.error': {
        color: theme.palette.error.light + '!important',
        textDecoration: 'line-through',
      },
      '.MuiButtonBase-root': {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0)
      },
      '.MuiListSubheader-root': {
        backgroundColor: 'unset',
        position: 'unset'
      },
      '.MuiListSubheader-root .MuiTypography-root': {
        ...theme.typography.h6
      },
    },

    '.MuiListItemButton-root': {
      userSelect: 'text'
    }
  };
});

