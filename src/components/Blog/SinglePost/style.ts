import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors, typography } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    fontFamily: 'Nunito Sans',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: colors.navy.lightGrey,
    marginInline: 'auto',
    marginTop: 80,
    marginBottom: 90,
    maxWidth: 1200,

    [theme.breakpoints.down('lg')]: {
      paddingInline: 67
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
      marginBottom: 60,
      paddingInline: 32
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
      marginBottom: 40,
      paddingInline: 26
    },

    '& p:first-child': {
      maxWidth: '100%'
    },
    '& p:first-child img': {
      marginTop: 0,
      maxWidth: '100%'
    },
    '& img': {
      borderRadius: 20,
      display: 'block',
      margin: '90px auto',
      pointerEvents: 'none',
      [theme.breakpoints.down('md')]: {
        marginBlock: 44
      },
      [theme.breakpoints.down('sm')]: {
        marginBlock: 27
      }
    },
    '& img[title=vertical]': {
      maxWidth: '100%',
      maxHeight: '700px',
      [theme.breakpoints.down('md')]: {
        maxHeight: '500px'
      },
      [theme.breakpoints.down('sm')]: {
        maxHeight: '400px'
      },
      [theme.breakpoints.down('xs')]: {
        maxHeight: '300px'
      }
    },
    '& img[title=horizontal]': {
      maxWidth: '100%',
      height: 'auto'
    },

    '& p, & ul, & ol': {
      ...typography.body2,
      marginBottom: 0,
      textAlign: 'justify',

      [theme.breakpoints.down('sm')]: {
        ...typography.subtitle2
      }
    },

    '& p': {
      width: '100%',
      maxWidth: 800
    },

    '& ul, & ol': {
      width: 'calc(100% - 20px)',
      maxWidth: 780,
      paddingInlineStart: 20
    },

    '& p strong': {
      fontWeight: 800,
      color: colors.white.main
    },

    '& a': {
      color: colors.navy.button,
      textDecoration: 'none'
    },

    '& a:hover': {
      color: '#7C76DA'
    }
  },
  backButton: {
    backgroundColor: colors.green.actionButton,
    color: colors.navy.dark,
    ...typography.body1,
    padding: '16px 24px',
    borderRadius: '10px',
    marginTop: '50px',
    textTransform: 'none',
    transition: 'transform 300ms linear, background-color 300ms linear',

    '&:hover': {
      backgroundColor: '#4ADFBA',
      transform: 'scale(1.065)'
    }
  },
  divider: {
    background: colors.navy.darkGrey,
    width: '100%',
    marginTop: 36
  },
  shareText: {
    ...typography.subtitle2,
    color: colors.navy.button,
    maxWidth: '100% !important',
    marginBlock: '12px !important'
  },
  shareIcon: {
    width: 42,
    height: 42,
    cursor: 'pointer',

    '&:not(:last-child)': {
      marginRight: 20
    }
  },
  tooltip: {
    ...typography.body4,
    backgroundColor: colors.navy.tooltip
  }
}))

export default useStyles
