import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { useMeQuery } from '@/services/auth-api/auth'

import s from './layout.module.scss'

type Props = {
  className?: string
}
export const Layout = ({ className }: Props) => {
  const { data } = useMeQuery()

  return (
    <>
      <Header avatar={data?.avatar || undefined} email={data?.email} userName={data?.name} />
      <div className={s.wrapper}>
        <div className={className ? className : s.container}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
