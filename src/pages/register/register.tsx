import {Header} from "@/components/header";
import {Card} from "@/components/ui/card";
import {SignUp} from "@/components/forms/sign-up";
import styles from './register.module.scss'

export const Register = () => {
    return (
        <div className={styles.forgotPage}>
            <Header data={null}/>
            <Card className={styles.card}>
                <SignUp onSubmit={(values) => {
                    alert(JSON.stringify(values))
                }}/>
            </Card>
        </div>
    );
};

