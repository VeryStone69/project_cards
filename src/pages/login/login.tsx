import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { SignIn } from '@/components/forms/sign-in'
import { Card } from '@/components/ui/card'
import { InitialLoader } from '@/components/ui/loader'
import { useLoginMutation } from '@/services/auth-api/auth'
import { errorNotification } from '@/utils/error-notification/error-notification'
import { FormValues } from '@/utils/zod-resolvers/file-update-resolver'

import s from './login.module.scss'

export const Login = () => {
  const [login, { isLoading }] = useLoginMutation()
  const { t } = useTranslation()
  const handleLogin: SubmitHandler<FormValues> = async data => {
    try {
      await login(data).unwrap()
      toast.success(t('login.toast.success'))
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
