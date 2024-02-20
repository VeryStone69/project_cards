import { SignUp } from '@/components/forms/sign-up'
import { Card } from '@/components/ui/card'
import { useRegisterMutation } from '@/services/auth-api/auth'
import { RegisterForm } from '@/utils/zod-resolvers/file-update-resolver'

import styles from './register.module.scss'

export const Register = () => {
  const [register] = useRegisterMutation()

  const handleRegister = async ({ confirmPassword, ...rest }: RegisterForm) => {
    await register(rest).unwrap()
  }

  return (
    <Card className={styles.card}>
      <SignUp onSubmit={handleRegister} />
    </Card>
  )
}
