import { ForgotPassword } from '@/components/forms/forgot-password'
import { Layout } from '@/components/layout'
import { Card } from '@/components/ui/card'

import styles from './recovery-password.module.scss'

const RecoveryPassword = () => {
  return (
    <Layout>
      <Card className={styles.card}>
        <ForgotPassword
          onSubmit={values => {
            alert(JSON.stringify(values))
          }}
        />
      </Card>
    </Layout>
  )
}

export default RecoveryPassword
