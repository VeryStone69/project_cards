import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import styles from './check-email.module.scss'

import checkEmail from '../../assets/images/check-email.png'

export const CheckEmail = () => {
  return (
    <div className={styles.checkEmailPage}>
      <Header data={null} />

      <Card className={styles.card}>
        <Typography className={styles.title} variant={'h1'}>
          Check Email
        </Typography>

        <img alt={'check-email'} src={checkEmail} />

        <Typography className={styles.text} variant={'body2'}>
          We’ve sent an Email with instructions to example@mail.com
        </Typography>

        <Button>Back to Sig In</Button>
      </Card>
    </div>
  )
}
