import {memo} from 'react'

import {Logo} from '@/assets/illustrations/logo'
import {Button} from '@/components/ui/button'
import {Typography} from '@/components/ui/typography'

import s from './header.module.scss'

import avatar from './avatar.jpg'

type Props = {
    data: ProfileData | null
    logout: () => void
}

type ProfileData = {
    avatar: string
    email: string
    name: string
}

export const Header = memo(({data}: Props) => {
    return (
        <div className={s.root}>
            <div className={s.container}>
                <Logo/>
                {data ? (
                    <div className={s.userInfo}>
                        <Typography variant={'subtitle1'} className={s.userName}>
                            {data.name || data.email}
                        </Typography>
                        <img alt={'avatar'} className={s.userPhoto} src={avatar}/>
                    </div>
                ) : (
                    <Button>
                        Sign in
                    </Button>
                )}
            </div>
        </div>
    )
})
