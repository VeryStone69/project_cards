import { ForgotPassword } from '@/components/forms/forgot-password'
import { Card } from '@/components/ui/card'

import styles from './recovery-password.module.scss'

const RecoveryPassword = () => {
  return (
    <Card className={styles.card}>
      <ForgotPassword
        onSubmit={values => {
          alert(JSON.stringify(values))
        }}
      />
    </Card>
  )
}

export default RecoveryPassword
