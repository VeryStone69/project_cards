import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import styles from './check-email.module.scss'

import checkEmail from '../../assets/images/check-email.png'

export const CheckEmail = () => {
  return (
    <Card className={styles.card}>
      <Typography className={styles.title} variant={'h1'}>
        Check your email
      </Typography>

      <img alt={'check-email'} src={checkEmail} />

      <Typography className={styles.text} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>

      <Button>Back to login</Button>
    </Card>
  )
}
