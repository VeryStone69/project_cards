import {memo} from 'react'

import {Logo} from '@/assets/illustrations/logo'
import avatar from './avatar.jpg'

import s from './header.module.scss'

type Props = {
    data: null
    logout: () => void
}

export const Header = memo(({data}: Props) => {
    return (
        <div className={s.header}>
            <Logo/>
            {!data ? (
                <div className={s.userInfo}>
                    <div className={s.userName}>User name</div>
                    <img src={avatar} alt="avatar" className={s.userPhoto}/>
                </div>
            ) : (
                <button>Sign in</button>
            )}
        </div>
    )
})
