
import { generateUtilityClass, styled, useMediaQuery } from '@mui/material'
import { fontSize, textAlign } from '@mui/system';
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

    '& .MuiDivider-root': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },

    '& .question-footer': {
      textAlign: 'end',
      paddingRight: theme.spacing(1)
    },

    '& .question-footer .MuiTypography-root': {
      ...theme.typography.body2,
      fontSize: '10px',
    },

    '& .question-title': {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(2)
    },

    '& .question .question-title .MuiTypography-root': {
      color: theme.palette.text.primary,
      fontWeight: '500 !important',
    },

    '.MuiPaper-root': {
      paddingTop: theme.spacing(1),

      '&.question': {
        marginBottom: theme.spacing(4),
        color: theme.palette.text.primary
      },
      '.question-actions': {
        marginTop: theme.spacing(1),
        display: 'flex',
        gap: theme.spacing(1),

        flexDirection: useMediaQuery(theme.breakpoints.down('sm')) ? 'column' : 'row',
        alignItems: useMediaQuery(theme.breakpoints.down('sm')) ? 'end' : undefined
      },
      '&.questionnaire-results': {
        backgroundColor: theme.palette.success.dark,
        color: theme.palette.background.default,
        zIndex: 1000000,
        padding: theme.spacing(1),
        textAlign: 'center'
      },
    },

    '.MuiTextField-root': {
      '&.subject-select': {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
          width: '100%'
        },
        width: '90%',
        display: 'flex',
        justifySelf: 'center'
      }
    },


    '.MuiContainer-root': {
      [theme.breakpoints.up('sm')]: {
        width: '90%',
        padding: theme.spacing(1)
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: theme.spacing(1)
      },

      '&.subject >.MuiTypography-root': {
        ...theme.typography.h2,
        [theme.breakpoints.down('sm')]: {
          ...theme.typography.h3,
        },
        textAlign: 'center'
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
    },
    '.MuiListItemIcon-root': {
      minWidth: 'unset',
      marginRight: theme.spacing(2),
      color: theme.palette.primary.main
    },
    '&.questionnaire-header .MuiButtonGroup-root': {
      orientation: 'vertical'
    }
  };
});

