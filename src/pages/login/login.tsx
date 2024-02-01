import { SignIn } from '@/components/forms/sign-in'
import { Layout } from '@/components/layout'
import { Card } from '@/components/ui/card'
import { useLoginMutation } from '@/services/auth-api/auth'
import { LoginData } from '@/services/auth-api/auth.types'

import styles from './login.module.scss'

export const Login = () => {
  const [login] = useLoginMutation()

  const handleLogin = async (data: LoginData) => {
    try {
      await login(data).unwrap()

      alert(`${data.email} is authorized!`)
    } catch (error: any) {
      // toast.error(error?.data?.message)
    }
  }

  return (
    <Layout>
      <Card className={styles.card}>
        <SignIn onSubmit={handleLogin} />
      </Card>
    </Layout>
  )
}
