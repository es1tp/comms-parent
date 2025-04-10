import { Theme, Components, alpha } from '@mui/material';
import remarkGfm from 'remark-gfm'
import user_logo_light from './es1tp-logo2.svg';
import tpt_building from './tpt_building.jpg';
import { DemoFooter } from './DemoFooter';

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
      height: '450px'
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
  },
  GPopoverButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .GPopoverButton-button': {
          border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
          boxShadow: `0 0 30px 10px ${alpha(theme.palette.primary.main, 0.3)}`,
          zIndex: 1,
          [theme.breakpoints.down('lg')]: {
            border: `1px solid ${theme.palette.primary.main}`,
            boxShadow: 'none',
            backgroundColor: alpha(theme.palette.background.paper, 0.3)
          }
        }
      })
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

  GArticleFeedback: {
    defaultProps: { enabled(view) { return false } }
  }
}

