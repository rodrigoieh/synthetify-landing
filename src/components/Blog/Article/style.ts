import { colors } from '@static/theme'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  aspectRatioBox: {
    overflow: 'hidden',
    height: 0,
    paddingTop: '58.6%',
    width: '100%',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
      paddingTop: '68.9%'
    },

    [theme.breakpoints.down('xs')]: {
      paddingTop: '58.1%'
    }
  },
  root: {
    width: '100%',
    backgroundColor: '#40BFA0',
    borderRadius: 20,
    display: 'flex',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%'
  },
  infoBar: {
    alignSelf: 'flex-end',
    width: '100%',
    height: 74,
    backgroundColor: '#1D1D49',
    color: colors.navy.veryLightGrey,
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 2,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 47
    }
  },
  title: {
    fontSize: 22,
    alignSelf: 'flex-start',
    fontWeight: 600,
    lineHeight: '25px',
    marginTop: 7,
    marginLeft: 7,
    color: colors.navy.veryLightGrey,
    [theme.breakpoints.down('md')]: {
      fontSize: 20
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      lineHeight: '13px'
    }
  },
  date: {
    fontSize: 13,
    alignSelf: 'flex-end',
    textAlign: 'right',
    fontWeight: 400,
    lineHeight: '15.73px',
    marginBottom: 5,
    marginRight: 16,
    width: 206,
    color: colors.navy.veryLightGrey,
    [theme.breakpoints.down('md')]: {
      width: 160,
      textAlign: 'right'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 9
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: '10.89px',
      width: 120
    }
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    zIndex: 1,
    position: 'absolute',
    opacity: 0.8,
    transition: 'all .5s ease-out',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.1)'
    }
  },
  desc: {
    color: colors.navy.veryLightGrey,
    marginTop: 7,
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '16px',
    [theme.breakpoints.down('sm')]: {
      lineHeight: '13px',
      fontSize: 12
    }
  },
  articleAndDesc: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
}))

export default useStyles
