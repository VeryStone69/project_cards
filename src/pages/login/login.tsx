import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '@/components/forms/sign-in'
import { Card } from '@/components/ui/card'
import { InitialLoader } from '@/components/ui/loader'
import { useLoginMutation } from '@/services/auth-api/auth'
import { LoginData } from '@/services/auth-api/auth.types'
import { errorNotification } from '@/utils/error-notification/error-notification'

import s from './login.module.scss'

export const Login = () => {
  const [login, { isLoading }] = useLoginMutation()

  const navigate = useNavigate()
  const handleLogin: SubmitHandler<LoginData> = async data => {
    try {
      await login(data).unwrap()
      navigate('/')
      toast.success(`You are successful authorized!`)
    } catch (err) {
      errorNotification(err)
    }
  }

  return (
    <Card className={s.card}>
      {isLoading && <InitialLoader />}
      <SignIn onSubmit={handleLogin} />
    </Card>
  )
}
