import { SignIn } from '@/components/forms/sign-in'
import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'
import { useLoginMutation } from '@/services/auth/auth'
import { LoginData } from '@/services/auth/auth.types'

import styles from './login.module.scss'

export const Login = () => {
  const [login] = useLoginMutation()

  const handleLogin = async (data: LoginData) => {
    try {
      await login(data).unwrap()
      alert(`${data.email} is authorized!`)
    } catch (error: any) {
      // toast.error(error?.data?.message)
      console.log(error)
    }
  }

  return (
    <div className={styles.loginPage}>
      <Header data={null} />
      <Card className={styles.card}>
        <SignIn onSubmit={handleLogin} />
      </Card>
    </div>
  )
}
