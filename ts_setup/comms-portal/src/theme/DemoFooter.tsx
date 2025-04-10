
import React from 'react';
import { Box, Link, Typography, generateUtilityClass, styled } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useIntl } from 'react-intl';
import { GLogo } from '@dxs-ts/gamut';
import composeClasses from '@mui/utils/composeClasses';

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    spacing: ['spacing'],
    logoColumnSpacing: ['logoColumnSpacing'],
    heading: ['heading'],
    links: ['links']
  };
  const getUtilityClass = (slot: string) => generateUtilityClass('DemoFooter', slot);
  return composeClasses(slots, getUtilityClass, {});
}

export const DemoFooter: React.FC = () => {
  const intl = useIntl();
  const classes = useUtilityClasses();

  return (
    <DemoFooterRoot className={classes.root}>
      <div className={classes.spacing}>
        <GLogo variant='black_lg' />
      </div>
      <div className={classes.spacing}>
        <Typography className={classes.heading}>{intl.formatMessage({ id: 'footer.column2.title' })}</Typography>
        <Link href='https://www.erau.ee/et/kuidas-saada-raadioamatoeoeriks' target="_blank" >
          <Typography>{intl.formatMessage({ id: 'footer.column2.become.amateur' })}</Typography>
        </Link>
      </div>
      <div className={classes.links}>
        <Typography className={classes.heading}>{intl.formatMessage({ id: 'footer.column3.title' })}</Typography>
        <Link href='https://www.erau.ee/et/' target="_blank">
          <Typography>{intl.formatMessage({ id: 'footer.column3.link.erau' })}</Typography>
        </Link>
        <Link href='https://www.tptlive.ee/' target="_blank">
          <Typography>{intl.formatMessage({ id: 'footer.column3.link.tpt' })}</Typography>
        </Link>
        <Link href='https://www.qrz.com/db/ES1TP' target="_blank">
          <Typography>{intl.formatMessage({ id: 'footer.column3.link.es1tp.qrz' })}</Typography>
        </Link>
      </div>
      <div className={classes.spacing}>
        <Typography className={classes.heading}>{intl.formatMessage({ id: 'footer.column4.title' })}</Typography>
        <Box className='email-container'><EmailOutlinedIcon /><Typography>{intl.formatMessage({ id: 'footer.column4.email' })}</Typography></Box>
        <Typography>{intl.formatMessage({ id: 'footer.column4.address1' })}</Typography>
        <Typography>{intl.formatMessage({ id: 'footer.column4.address2' })}</Typography>
        <Typography>{intl.formatMessage({ id: 'footer.column4.postalCode' })}</Typography>
      </div>
    </DemoFooterRoot>
  )
}


const DemoFooterRoot = styled("div", {
  name: 'DemoFooter',
  slot: 'Root',
  overridesResolver: (_props, styles) => {
    return [
      styles.root,
      styles.spacing,
      styles.heading,
      styles.links
    ];
  },
})(({ theme }) => {
  return {
    display: 'flex',
    paddingBottom: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      fontSize: theme.typography.caption.fontSize,
      textAlign: 'center',
      paddingBottom: theme.spacing(5)
    },
    '& .DemoFooter-heading': {
      fontVariant: theme.typography.h4.fontVariant,
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        marginTop: theme.spacing(2)
      }
    },
    '& .DemoFooter-links': {
      [theme.breakpoints.up('lg')]: {
        width: '25%',
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center',
      },
    },
    '& .DemoFooter-spacing': {
      [theme.breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center'
      },
      [theme.breakpoints.up('lg')]: {
        width: '24%',
      },
    },
    '.email-container': {
      display: 'inline-flex',
      alignItems: 'center',
      '.MuiSvgIcon-root': {
        marginRight: theme.spacing(1),
        color: theme.palette.secondary.main
      }
    }
  };
});