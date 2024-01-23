import {Header} from "@/components/header";
import {Card} from "@/components/ui/card";
import s from './profile.module.scss'
import {Typography} from "@/components/ui/typography";
import avatar from '../../assets/images/avatar.jpg'
import {Button} from "@/components/ui/button";
import {Icon} from "@/components/icon/Icon";

export const Profile = () => {
    return (
        <div className={s.profilePage}>
            <Header data={{name: 'Artyom Korshykau', email: '', avatar: ''}}/>
            <Card className={s.card}>
                <Typography variant={'h1'} className={s.title}>Personal Information</Typography>
                <div className={s.avatarBlock}>
                    <img src={avatar} alt="avatar" className={s.avatar}/>
                    <div className={s.editButtonBlock}></div>
                    <Icon name={'edit'} fill={'white'} width={'20px'} className={s.editButton}/>

                </div>
                <div className={s.nameBlock}>
                    <Typography variant={'h2'}>Artyom</Typography>
                    <Icon name={'edit'} fill={'white'} width={'20px'}/>
                </div>
                <Typography variant={'body2'} className={s.email}>example@gmail.com</Typography>
                <Typography variant={'subtitle2'}>
                    <Button variant={'secondary'}>Logout</Button>
                </Typography>
            </Card>
        </div>
    );
};

