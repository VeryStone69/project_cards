import { ForgotPassword } from '@/components/forms/forgot-password'
import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'

import styles from './recovery-password.module.scss'

const RecoveryPassword = () => {
  return (
    <div className={styles.recoverPage}>
      <Header data={null} />
      <Card className={styles.card}>
        <ForgotPassword
          onSubmit={values => {
            alert(JSON.stringify(values))
          }}
        />
      </Card>
    </div>
  )
}

export default RecoveryPassword
