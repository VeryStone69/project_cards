import { ReactNode } from 'react'

import { Header } from '@/components/header'

import s from './layout.module.scss'

import avatar from '../../assets/images/avatar.jpg'

type Props = {
  children: ReactNode
  className?: string
}
export const Layout = ({ children, className }: Props) => {
  const profileData = {
    avatar: avatar,
    email: 'ololo@mail.com',
    name: 'Zipulya',
  }

  return (
    <>
      <Header data={profileData} />
      <div className={className ? className : s.container}>{children}</div>
    </>
  )
}
