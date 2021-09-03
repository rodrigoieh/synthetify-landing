import { CardMedia, Grid, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React from 'react'
import logo from '@static/svg/sol-logo.svg'
import text from '@static/svg/sol-text.svg'
import useStyles from './style'

export const TopBanner: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.photoWrapper}>
        <CardMedia
          playsInline
          autoPlay
          muted
          loop
          disablePictureInPicture
          preload='auto'
          image='animation.mp4'
          className={classes.photo}
          component='video'
        />
      </Grid>
      <Grid item container className={classes.right} direction='column' justifyContent='center'>
        <Grid container alignItems='center'>
          <Typography className={classes.builtOn}>{translate('home.banner.builtOn')}</Typography>
          <CardMedia
            image={logo.src}
            className={classes.solLogo}
          />
          <CardMedia
            image={text.src}
            className={classes.solText}
          />
        </Grid>
        <Typography className={classes.title}>{translate('home.banner.header')}</Typography>
        <Typography className={classes.intro}>{translate('home.banner.intro')}</Typography>
        <Typography className={classes.description}>{translate('home.banner.description')}</Typography>
      </Grid>
    </Grid>
  )
}

export default TopBanner