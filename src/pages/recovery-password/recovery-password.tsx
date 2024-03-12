import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { htmlRecovery } from '@/common/consts/recovery-password'
import { PATH } from '@/common/consts/routes'
import { ForgotPassword } from '@/components/forms/forgot-password'
import { Card } from '@/components/ui/card'
import { useRecoverPasswordMutation } from '@/services/auth-api/auth'
import { errorNotification } from '@/utils/error-notification/error-notification'
import { FormValuesForgotPassword } from '@/utils/zod-resolvers/file-update-resolver'

import s from './recovery-password.module.scss'

export const RecoveryPassword = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const submitHandler: SubmitHandler<FormValuesForgotPassword> = async data => {
    try {
      await toast.promise(recoverPassword({ email: data.email, html: htmlRecovery }), {
        pending: t('recovery.toast.pending'),
        success: t('recovery.toast.success'),
      })
      navigate(`${PATH.check}/${data.email}`)
    } catch (err) {
      errorNotification(err)
    }
  }

  return (
    <Card className={s.card}>
      <ForgotPassword onSubmit={submitHandler} />
    </Card>
  )
}
