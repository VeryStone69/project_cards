import { useNavigate } from 'react-router-dom'

import { SignIn } from '@/components/forms/sign-in'
import { Card } from '@/components/ui/card'
import { useLoginMutation } from '@/services/auth-api/auth'
import { LoginData } from '@/services/auth-api/auth.types'

import styles from './login.module.scss'

export const Login = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const handleLogin = async (data: LoginData) => {
    try {
      await login(data).unwrap()
      navigate('/')
      alert(`${data.email} is authorized!`)
    } catch (error: any) {
      // toast.error(error?.data?.message)
    }
  }

  return (
    <Card className={styles.card}>
      <SignIn onSubmit={handleLogin} />
    </Card>
  )
}
