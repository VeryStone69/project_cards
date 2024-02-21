import { CreatePassword } from '@/components/forms/create-password'
import { Card } from '@/components/ui/card'

import styles from './create-new-password.module.scss'

export const CreateNewPassword = () => {
  return (
    <Card className={styles.card}>
      <CreatePassword
        onSubmit={values => {
          alert(JSON.stringify(values))
        }}
      />
    </Card>
  )
}
