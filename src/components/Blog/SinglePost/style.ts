import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    fontFamily: 'DM Sans',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: colors.white.main,
    marginInline: 'auto',
    marginTop: 108,
    marginBottom: 100,
    maxWidth: 1200,

    [theme.breakpoints.down('lg')]: {
      paddingInline: 67
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 53,
      marginBottom: 57,
      paddingInline: 32
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: 43,
      marginBottom: 40,
      paddingInline: 26
    },

    '& img': {
      borderRadius: 20,
      maxWidth: 800,
      display: 'block',
      margin: '90px auto',
      width: '100%',

      [theme.breakpoints.down('md')]: {
        marginBlock: 55
      },

      [theme.breakpoints.down('sm')]: {
        marginBlock: 20
      }
    },

    '& p:first-child': {
      maxWidth: '100%'
    },

    '& p:first-child img': {
      marginTop: 0,
      maxWidth: '100%'
    },

    '& p, & ul': {
      fontSize: 22,
      lineHeight: '35px',
      marginBottom: 0,
      textAlign: 'justify',
      width: '100%',
      maxWidth: 800,

      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        lineHeight: '32px'
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: 15,
        lineHeight: '25px'
      }
    },

    '& p strong': {
      fontWeight: 600
    },

    '& a': {
      color: colors.navy.button,
      textDecoration: 'none'
    }
  },
  backButton: {
    backgroundColor: colors.green.actionButton,
    color: colors.navy.dark,
    fontSize: '22px',
    lineHeight: '40px',
    fontWeight: 700,
    padding: '8px 16px',
    borderRadius: '10px',
    marginTop: '50px',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#4ADFBA'
    }
  },
  divider: {
    background: colors.navy.darkGrey,
    width: '100%',
    marginTop: 36
  },
  shareText: {
    fontSize: 16,
    color: colors.navy.button,
    maxWidth: '100% !important',
    marginBlock: '7px !important'
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
    fontSize: 13,
    backgroundColor: colors.navy.info
  }
}))

export default useStyles
