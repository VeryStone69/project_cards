import { toast } from 'react-toastify'

export const errorNotification = (err: unknown) => {
  if (
    typeof err === 'object' &&
    err !== null &&
    'data' in err &&
    typeof err.data === 'object' &&
    err.data !== null &&
    'status' in err &&
    typeof err.status === 'number'
  ) {
    if (
      'status' in err &&
      err.status >= 400 &&
      'message' in err.data &&
      typeof err.data.message === 'string'
    ) {
      toast.error(err.data.message)
    }
  }

  if (err instanceof Error) {
    toast.error(err.message)
  }
}
