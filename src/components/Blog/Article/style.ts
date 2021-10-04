import { colors, typography } from '@static/theme'
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
    backgroundColor: 'transparent',
    borderRadius: 20,
    display: 'grid',
    overflow: 'hidden',
    justifyContent: 'end',
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
    flexDirection: 'column',
    zIndex: 2,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 47
    }
  },
  title: {
    ...typography.body1,
    alignSelf: 'flex-start',
    marginTop: 8,
    marginLeft: 8,
    color: colors.navy.veryLightGrey,
    [theme.breakpoints.down('sm')]: {
      ...typography.body3
    }
  },
  date: {
    ...typography.body4,
    alignSelf: 'baseline',
    textAlign: 'right',
    width: 'max-content',
    justifyContent: 'space-evenly',
    backgroundColor: colors.navy.lightGrey,
    color: colors.navy.background,
    zIndex: 2,
    padding: 8,
    display: 'grid',
    borderRadius: '0px 20px',
    [theme.breakpoints.down('md')]: {
      width: 160,
      textAlign: 'right'
    },
    [theme.breakpoints.down('xs')]: {
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
    transition: 'all .5s ease-out'
  },
  desc: {
    color: colors.navy.veryLightGrey,
    marginTop: 7,
    marginLeft: 7,
    ...typography.body4,
    [theme.breakpoints.down('sm')]: {
      ...typography.caption3
    }
  },
  articleAndDesc: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    '&:hover $image': {
      opacity: 1,
      transform: 'scale(1.1)'
    }
  }
}))

export default useStyles