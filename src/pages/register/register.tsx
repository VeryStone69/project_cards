import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '@/common/consts/routes'
import { SignUp } from '@/components/forms/sign-up'
import { Card } from '@/components/ui/card'
import { useRegisterMutation } from '@/services/auth-api/auth'
import { errorNotification } from '@/utils/error-notification/error-notification'
import { RegisterForm } from '@/utils/zod-resolvers/file-update-resolver'

import s from './register.module.scss'

export const Register = () => {
  const [register] = useRegisterMutation()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleRegister: SubmitHandler<RegisterForm> = async ({ confirmPassword, ...rest }) => {
    try {
      await toast.promise(register(rest).unwrap(), {
        pending: t('register.toast.pending'),
        success: t('register.toast.success'),
      })
      navigate(PATH.login)
    } catch (err) {
      errorNotification(err)
    }
  }

  return (
    <Card className={s.card}>
      <SignUp onSubmit={handleRegister} />
    </Card>
  )
}
