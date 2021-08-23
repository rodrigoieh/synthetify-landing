import React from 'react'
import { CardMedia, Divider, Grid, Hidden, Typography } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import snyIcon from '@static/svg/sny_white.svg'
import snyName from '@static/svg/sny_name.svg'
import linkedin from '@static/svg/linkedin-circle.svg'
import github from '@static/svg/github-circle.svg'
import discord from '@static/svg/discord-circle.svg'
import twitter from '@static/svg/twitter-circle.svg'
import links from '@static/constants/links'
import Link from 'next/link'
import classNames from 'classnames'
import { SoonMark } from '@components/LinkMarks/LinkMarks'
import useStyles from './style'

interface ILinkProps {
  href: string
  name: string
  description: string
}

export const InsideLink: React.FC<ILinkProps> = ({ href, name, description }) => {
  const classes = useStyles()

  return (
    <a className={classes.a}>
      <Link href={href} passHref>
        <Grid className={classes.linkWrapper}>
          <Typography className={classes.link}>{name}</Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Grid>
      </Link>
    </a>
  )
}

export const OutsideLink: React.FC<ILinkProps> = ({ href, name, description }) => {
  const classes = useStyles()

  return (
    <a href={href} className={classes.a}>
      <Grid className={classes.linkWrapper}>
        <Typography className={classes.link}>{name}</Typography>
        <Typography className={classes.description}>{description}</Typography>
      </Grid>
    </a>
  )
}

export const SoonLink: React.FC<Omit<ILinkProps, 'href'>> = ({ name, description }) => {
  const classes = useStyles()

  return (
    <Grid className={classNames(classes.linkWrapper, classes.blockHover)}>
      <Grid className={classes.linkWithMarkWrapper}>
        <Typography className={classNames(classes.link, classes.blocked)}>{name}</Typography>
        <SoonMark className={classes.mark} />
      </Grid>
      <Typography className={classes.description}>{description}</Typography>
    </Grid>
  )
}

export const Footer: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <>
      <Divider className={classes.divider} />
      <Grid container className={classes.logos} wrap='nowrap' alignItems='center' justifyContent="space-between">
        <Grid className={classes.logo} container item wrap='nowrap' alignItems='center'>
          <CardMedia className={classes.snyLogo} image={snyIcon.src} />
          <CardMedia className={classes.snyName} image={snyName.src}/>
        </Grid>
        <Hidden mdUp>
          <Grid className={classes.socials} container item wrap='nowrap' alignItems='center' justifyContent="flex-end">
            <CardMedia className={classes.circle} image={github.src} onClick={() => window.open(links.socialMedia.github)} />
            <CardMedia className={classes.circle} image={linkedin.src} onClick={() => window.open(links.socialMedia.linkedin)} />
            <CardMedia className={classes.circle} image={twitter.src} onClick={() => window.open(links.socialMedia.twitter)} />
            <CardMedia className={classes.circle} image={discord.src} onClick={() => window.open(links.socialMedia.discord)} />
          </Grid>
        </Hidden>
      </Grid>
      <Grid container className={classes.routes} wrap='nowrap' justifyContent="space-between">
        <Hidden smDown>
          <Grid container item className={classes.column} direction='column'>
            <Link href='/' passHref>
              <a className={classes.a}><Typography className={classes.columnHeader} style={{ cursor: 'pointer' }}>{translate('header.home')}</Typography></a>
            </Link>
          </Grid>
        </Hidden>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{translate('header.aboutUs')}</Typography>
          <OutsideLink
            href={links.whitepaper}
            name={translate('header.whitepaper')}
            description={translate('header.whitepaperDescription')}
          />
          <SoonLink
            name={translate('header.faq')}
            description={translate('header.faqDescription')}
          />
          <SoonLink
            name={translate('header.brand')}
            description={translate('header.brandDescription')}
          />
        </Grid>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{translate('header.community')}</Typography>
          <OutsideLink
            href={links.socialMedia.discord}
            name={translate('header.discord')}
            description={translate('header.discordDescription')}
          />
          <OutsideLink
            href={links.socialMedia.twitter}
            name={translate('header.twitter')}
            description={translate('header.twitterDescription')}
          />
          <OutsideLink
            href={links.socialMedia.telegram}
            name={translate('header.telegram')}
            description={translate('header.telegramDescription')}
          />
          <OutsideLink
            href={links.socialMedia.github}
            name={translate('header.github')}
            description={translate('header.githubDescription')}
          />
        </Grid>

        <Hidden smDown>
          <Grid container item className={classes.column} direction='column'>
            <Grid className={classNames(classes.linkWithMarkWrapper, classes.headerWithMark)}>
              <Typography className={classNames(classes.columnHeader, classes.blocked)}>{translate('header.blog')}</Typography>
              <SoonMark className={classes.mark} />
            </Grid>
          </Grid>
        </Hidden>

        <Grid container item className={classes.column} direction='column'>
          <Typography className={classes.columnHeader}>{translate('header.trade')}</Typography>
          <OutsideLink
            href={links.app.staking}
            name={translate('footer.staking')}
            description={translate('footer.stakingDescription')}
          />
          <OutsideLink
            href={links.app.exchange}
            name={translate('footer.exchange')}
            description={translate('footer.exchangeDescription')}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.copyrightWrapper} wrap='nowrap' alignItems='center'>
        <Typography className={classes.copyright}>© 2021 Synthetify Labs</Typography>
      </Grid>
    </>
  )
}
export default Footer
