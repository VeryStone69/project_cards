import { ForgotPassword } from '@/components/forms/forgot-password'
import { Card } from '@/components/ui/card'

import s from './recovery-password.module.scss'

const RecoveryPassword = () => {
  return (
    <Card className={s.card}>
      <ForgotPassword
        onSubmit={values => {
          alert(JSON.stringify(values))
        }}
      />
    </Card>
  )
}

export default RecoveryPassword
