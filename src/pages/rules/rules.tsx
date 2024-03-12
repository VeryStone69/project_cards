import { useTranslation } from 'react-i18next'

import { BackButton } from '@/components/ui/back-button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './rules.module.scss'

export const Rules = () => {
  const { t } = useTranslation()

  return (
    <>
      <BackButton className={s.backButton} />
      <div className={s.wrapper}>
        <Card className={s.rulesPage}>
          <Typography className={s.title} variant={'h1'}>
            {t('rules.title')}
          </Typography>

          <Typography variant={'subtitle2'}>
            <ol>
              <li>{t('rules.1')}</li>
              <li>{t('rules.2')}</li>
              <li>{t('rules.3')}</li>
              <li>{t('rules.4')}</li>
              <li>{t('rules.5')}</li>
            </ol>
          </Typography>
        </Card>
      </div>
    </>
  )
}
