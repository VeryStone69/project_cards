import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'

type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  // old version
  // const { handleSubmit, register } = useForm<FormValues>()
  // new version for deploy
  const { handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name={'email'} />
      <input name={'password'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
