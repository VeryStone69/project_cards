import { RegisterForm, SignUp } from '@/components/forms/sign-up'
import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'
import { useRegisterMutation } from '@/services/auth/auth'

import styles from './register.module.scss'

export const Register = () => {
  const [register] = useRegisterMutation()

  const handleRegister = async ({ confirmPassword, ...rest }: RegisterForm) => {
    console.log(rest.email)
    console.log(rest.password)
    await register(rest).unwrap()
  }

  return (
    <div className={styles.forgotPage}>
      <Header data={null} />
      <Card className={styles.card}>
        <SignUp onSubmit={handleRegister} />
      </Card>
    </div>
  )
}
