import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: colors.navy.veryLightGrey
  },
  articlesWrapper: {
    display: 'grid',
    width: 1615,
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: 80,
    rowGap: 88,
    justifyContent: 'center',
    marginBlock: 240,
    marginInline: 'auto',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr 1fr',
      width: 1050,
      rowGap: 97,
      marginBlock: 223
    },
    [theme.breakpoints.down('md')]: {
      width: 862,
      columnGap: 38,
      marginBlock: 163
    },
    [theme.breakpoints.down('sm')]: {
      width: 546,
      columnGap: 18,
      marginBlock: 102
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
      width: 313,
      rowGap: 38,
      justifyContent: 'center',
      marginBlock: 75
    }
  },
  desc: {
    position: 'relative',
    top: 7,
    fontSize: 13,
    fontWeight: 400,
    width: 'calc(100% - 3px)',
    maxWidth: 485,
    lineHeight: '16px',
    [theme.breakpoints.down('md')]: {
      maxWidth: 412
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '11px',
      fontSize: 9,
      maxWidth: 313
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  articleAndDesc: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
  }
}))

export default useStyles
