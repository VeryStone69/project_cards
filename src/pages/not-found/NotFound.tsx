import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import styles from './NotFound.module.scss'

import notFound from '../../assets/images/not-found.png'

export const NotFound = () => {
  return (
    <div>
      <Header
        data={{
          avatar: '',
          email: 'junior.gmail.com',
          name: 'Artyom Korshykau',
        }}
      />
      <div className={styles.notfound}>
        <img alt={'page not found'} src={notFound} />
        <Typography variant={'body1'}>Page not found!</Typography>
        <Typography variant={'subtitle2'}>
          <Button variant={'primary'}>Back to home page</Button>
        </Typography>
      </div>
    </div>
  )
}
