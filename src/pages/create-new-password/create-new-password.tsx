import {Header} from "@/components/header";
import {Card} from "@/components/ui/card";
import {CreatePassword} from "@/components/forms/create-password";
import styles from './create-new-password.module.scss'

export const CreateNewPassword = () => {
    return (
        <div className={styles.recoverPage}>
            <Header data={null}/>
            <Card className={styles.card}>
                <CreatePassword onSubmit={(values) => {
                    alert(JSON.stringify(values))
                }}/>
            </Card>
        </div>
    );
};

