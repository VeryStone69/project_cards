import { Layout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './NotFound.module.scss'

import notFound from '../../assets/images/not-found.png'

export const NotFound = () => {
  return (
    <Layout>
      <div className={s.notfound}>
        <img alt={'page not found'} src={notFound} />
        <Typography variant={'body1'}>Page not found!</Typography>
        <Typography variant={'subtitle2'}>
          <Button variant={'primary'}>Back</Button>
        </Typography>
      </div>
    </Layout>
  )
}
