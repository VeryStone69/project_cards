import { ForgotPassword } from '@/components/forms/forgot-password'

export function App() {
  return (
    <div>
      <ForgotPassword
        onSubmit={(values: { email: string }) => {
          console.log(values)
        }}
      />
    </div>
  )
}
