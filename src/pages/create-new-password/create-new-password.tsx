import { SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '@/common/consts/routes'
import { CreatePassword } from '@/components/forms/create-password'
import { Card } from '@/components/ui/card'
import { useResetPasswordMutation } from '@/services/auth-api/auth'
import { errorNotification } from '@/utils/error-notification/error-notification'
import { CreateNewPasswordForm } from '@/utils/zod-resolvers/file-update-resolver'

import styles from './create-new-password.module.scss'

export const CreateNewPassword = () => {
  const navigate = useNavigate()
  const { token } = useParams<{ token: string }>()
  const [resetPassword] = useResetPasswordMutation()
  const submitHandler: SubmitHandler<CreateNewPasswordForm> = async data => {
    try {
      if (token) {
        await toast.promise(resetPassword({ data, token }).unwrap(), {
          pending: 'password recovery',
          success: 'password changed successfully',
        })
        navigate(`${PATH.login}`)
      }
    } catch (err) {
      errorNotification(err)
    }
  }

  return (
    <Card className={styles.card}>
      <CreatePassword onSubmit={submitHandler} />
    </Card>
  )
}
