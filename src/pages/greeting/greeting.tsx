import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { PATH } from '@/common/consts/routes'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './greeting.module.scss'

export const Greeting = () => {
  const { t } = useTranslation()

  return (
    <div className={s.wrapper}>
      <Card className={s.greetingCard}>
        <Typography className={s.title} variant={'h1'}>
          {t('greeting.title')}
        </Typography>

        <Icon
          className={s.logo}
          height={'100px'}
          name={'logo'}
          viewBox={'0 0 1400 2200'}
          width={'60px'}
        />

        <Typography className={s.description} variant={'subtitle2'}>
          {t('greeting.description')}
        </Typography>

        <Button as={Link} className={s.login} id={'login'} to={PATH.login} variant={'primary'}>
          <Typography variant={'subtitle2'}>{t('greeting.login')}</Typography>
        </Button>

        <Typography className={s.rules} variant={'caption'}>
          <Trans i18nKey={'greeting.rules'}>
            You can also learn the of
            <Link className={s.rulesLink} to={PATH.rules}>
              rules
            </Link>
            the game.
          </Trans>
        </Typography>
      </Card>
    </div>
  )
}
