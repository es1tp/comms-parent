import { Theme, Components, alpha } from '@mui/material';
import remarkGfm from 'remark-gfm'
import user_logo_light from './es1tp-logo1.svg';
import tpt_building from './tpt_building.jpg';
import { DemoFooter } from './DemoFooter';
import { groupTopics } from '@/api-site';
import { GTopicLink } from '@/g-popover-topics';
import { GForm } from '@/g-form';



export const components_g: Components<Omit<Theme, 'components'>> = {

  GLogo: {
    variants: [
      {
        props: { variant: 'black_lg', img: user_logo_light },
        style: { width: '200px', height: '70px' }
      },
      {
        props: { variant: 'black_sm', img: user_logo_light },
        style: { width: '150px', height: '50px' }
      },
      {
        props: { variant: 'black_sm_mob', img: user_logo_light },
        style: { width: '120px', height: '40px' }
      }
    ]
  },
  GShell: {
    defaultProps: {
      footerHeight: 300,
      drawerWidth: 350,
      toolbarHeight: {
        xs: 155,
        sm: 150,
        md: 90,
        lg: 90,
        xl: 90
      }
    }
  },
  GRouterUnsecured: {
    defaultProps: {
      backgroundImage: tpt_building,
      height: '470px',
      defaultPageId: 'extra'
    }
  },

  GLogin: {
    defaultProps: {
      component: () => <></>
    }
  },

  GLogout: {
    defaultProps: {
      component: () => <></>
    }
  },
  GFooter: {
    defaultProps: {
      children: <DemoFooter />
    },
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.up('md')]: {
          borderTop: `1px solid ${theme.palette.divider}`,
        },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      })
    }
  },
  GLocales: {
    defaultProps: {
      locales: ['et', 'en']
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '.MuiButtonBase-root': {
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.text.primary}`,
          borderRadius: 'unset',
          paddingRight: theme.spacing(2),
          paddingLeft: theme.spacing(2),
          ':hover': {
            color: theme.palette.text.primary,
          }
        }
      })
    }
  },
  GAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .GLayout-root.GLayout-toolbar-n-rows-2-columns.GLayout-root': {

        }
      })
    }
  },

  GPopoverButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .GPopoverButton-button': {
          '.MuiIconButton-root': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.paper,
            ':hover': {
              backgroundColor: theme.palette.primary.dark,
            }
          },
          border: `1px solid ${alpha(theme.palette.text.primary, 0.4)}`,
          boxShadow: `0 0 30px 10px ${alpha(theme.palette.text.primary, 0.3)}`,
          zIndex: 1,
          [theme.breakpoints.down('lg')]: {
            border: `1px solid ${theme.palette.text.primary}`,
            boxShadow: 'none',
            backgroundColor: alpha(theme.palette.background.paper, 0.3)
          }
        }
      })
    }
  },

  GArticle: {
    defaultProps: {
      slots: {
        pageLinks: undefined
      }
    }
  },

  GMarkdown: {
    defaultProps: {
      children: "# Portal under maintainence",
      remarkPlugins: [remarkGfm]
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiTypography-h1': {
          ...theme.typography.h1
        },
        '& :is(h1, h2, h3, h4, h5, p)': {
          marginBottom: theme.spacing(2)
        }
      })
    }
  },

  GPopoverTopics: {
    defaultProps: {
      groupTopics,
      slots: {
        link: GTopicLink
      }
    },
    styleOverrides: {
      //@ts-ignore
      topics: ({ theme }) => ({
        '& .child-topic': {
          display: 'flex', 
          alignItems: 'center'
        },
      }),
    }
  },
  GArticleFeedback: {
    defaultProps: { enabled(view) { return false } }
  },

  GRouterOffer: {
    defaultProps: {
      
    }
  },
  GForm: {
    defaultProps: {
      component: GForm
    }
  }
}

