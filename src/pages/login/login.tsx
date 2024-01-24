import { SignIn } from '@/components/forms/sign-in'
import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'

import styles from './login.module.scss'

export const Login = () => {
  return (
    <div className={styles.loginPage}>
      <Header data={null} />
      <Card className={styles.card}>
        <SignIn
          onSubmit={values => {
            alert(JSON.stringify(values))
          }}
        />
      </Card>
    </div>
  )
}
