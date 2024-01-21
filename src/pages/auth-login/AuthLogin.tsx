import {Header} from "@/components/header";
import {SignIn} from "@/components/forms/sign-in";
import {Card} from "@/components/ui/card";
import styles from './AuthLogin.module.scss'

export const AuthLogin = () => {
    return (
        <div className={styles.loginPage}>
            <Header data={null}/>
            <Card className={styles.card}>
                <SignIn onSubmit={() => {
                }}/>
            </Card>

        </div>
    );
};

