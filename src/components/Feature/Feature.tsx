import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import useStyles from './style'

export interface IFeatureProps {
  title: string
  text: string
  icon: string
}

export const Feature: React.FC<IFeatureProps> = ({ title, text, icon }) => {
  const classes = useStyles()

  const firstWord = title.split(' ')[0]
  const restTitle = title.replace(firstWord, '')

  return (
    <Grid container direction='row' className={classes.root}>
      <Grid item>
        <img src={icon} alt={title} />
      </Grid>
      <Grid item className={classes.textPanel}>
        <Typography className={classes.title}>
          <span className={classes.bold}>{firstWord}</span> {restTitle}
        </Typography>
        <Typography className={classes.text}>{text}</Typography>
      </Grid>
    </Grid>
  )
}

export default Feature