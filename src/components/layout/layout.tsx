import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { InitialLoader } from '@/components/ui/loader'
import { useMeQuery } from '@/services/auth-api/auth'

import s from './layout.module.scss'

type Props = {
  className?: string
}
export const Layout = ({ className }: Props) => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <InitialLoader />
  }

  return (
    <>
      <Header
        avatar={data?.avatar || ''}
        email={data?.email || ''}
        isAuthenticated={isAuthenticated}
        userName={data?.name || ''}
      />
      <div className={className ? className : s.container}>
        <Outlet />
      </div>
    </>
  )
}
