import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  mainContainer: {
    fontFamily: 'Inter',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    color: colors.white.main,
    marginInline: 'auto',
    marginTop: 128,
    marginBottom: 100,
    maxWidth: 1380,

    [theme.breakpoints.down('lg')]: {
      paddingInline: 67
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: 96,
      marginBottom: 57,
      paddingInline: 32
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: 88,
      marginBottom: 40,
      paddingInline: 26
    },

    '& h2': {
      textAlign: 'center',
      lineHeight: '120px',
      fontWeight: 700,
      fontSize: 100,
      margin: '30px 0px 30px 0',

      [theme.breakpoints.down('sm')]: {
        fontSize: '67px'
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: '50px'
      }
    },

    '& h3': {
      textAlign: 'center',
      color: colors.navy.info,
      fontSize: '32px',
      lineHeight: '40px',
      marginBottom: '15px',

      [theme.breakpoints.down('sm')]: {
        fontSize: '20px'
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: '15px'
      }
    },

    '& p img': {
      borderRadius: '20px',
      width: '880px',
      margin: '30px 0 30px 0',
      [theme.breakpoints.down('md')]: {
        width: '88%'
      }
    },

    '&> blockquote': {
      fontSize: '22px',
      fontWeight: 400,
      width: '1300px',

      margin: 0,

      '& p': {
        marginBottom: 0,
        textAlign: 'justify'
      },

      [theme.breakpoints.down('md')]: {
        width: '88%'
      }
    },

    '& h4': {
      margin: 0
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
  }
}))

export default useStyles
