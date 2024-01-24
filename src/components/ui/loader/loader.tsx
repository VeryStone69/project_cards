import { ring } from 'ldrs'

import s from './loader.module.scss'

ring.register()

type Props = {
  preLoader?: boolean
}

export const InitialLoader = ({ preLoader }: Props) => {
  return !preLoader ? <div className={s.container}></div> : <PreLoader />
}

export const PreLoader = () => {
  return (
    <div>
      <l-ring bg-opacity={'0'} color={'#8C61FFFF'} size={'30'} speed={'2'} stroke={'2'}></l-ring>
    </div>
  )
}
