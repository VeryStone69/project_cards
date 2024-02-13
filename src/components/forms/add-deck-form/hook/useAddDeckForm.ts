import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { PackFormType, addNewDeckSchema } from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'

export const useAddDeckForm = () => {
  const {
    control,
    formState: { errors },
    getFieldState,
    getValues,
    handleSubmit,
    reset,
    trigger,
    watch,
  } = useForm<PackFormType>({
    defaultValues: {
      cover: null,
      isPrivate: false,
      name: '',
    },

    resolver: zodResolver(addNewDeckSchema),
  })

  const file = watch('cover')

  const img = file && !errors.cover ? URL.createObjectURL(file) : null

  const deleteCover = async () => {
    reset({ ...getValues(), cover: null })
    toast.warning('You deleted cover')
  }
  const toastError = async () => {
    const success = await trigger('cover')
    const { error } = getFieldState('cover')

    if (!success && error?.message) {
      toast.error(error.message)
      reset({ ...getValues(), cover: null })
    }
  }

  return {
    control,
    deleteCover,
    errors,
    handleSubmit,
    img,
    toastError,
  }
}
