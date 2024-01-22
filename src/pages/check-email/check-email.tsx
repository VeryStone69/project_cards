import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import {Header} from "@/components/header";
import {Button} from "@/components/ui/button";
import checkEmail from '../../assets/images/check-email.png'
import styles from './check-email.module.scss'
import s from "@/components/forms/sign-in/sign-in.module.scss";

export const CheckEmail = () => {
    return (
        <div className={styles.checkEmailPage}>
            <Header data={null}/>

            <Card className={styles.card}>

                <Typography variant={"h1"} className={s.title}>Check Email</Typography>

                <img src={checkEmail} alt="check-email"/>

                <Typography variant={"body2"} className={styles.text}>
                    We’ve sent an Email with instructions to example@mail.com
                </Typography>

                <Button>Back to Sig In</Button>

            </Card>
        </div>
    );
};

