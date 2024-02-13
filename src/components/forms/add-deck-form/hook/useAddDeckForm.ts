import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { addNewDeckSchema } from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'

export const useAddDeckForm = () => {
  const [imgT, setImg] = useState<null | string>(null)
  const {
    control,
    formState: { defaultValues, errors },
    getFieldState,
    getValues,
    handleSubmit,

    trigger,
    watch,
  } = useForm({
    defaultValues: {
      cover: null,
      isPrivate: false,
      name: '',
    },
    mode: 'onChange',
    resolver: zodResolver(addNewDeckSchema),
  })

  // const file = getValues('cover')

  // const file = watch('cover')

  // const img = file && !errors.cover && dirtyFields.cover ? URL.createObjectURL(file) : null

  // console.log(img)
  const deleteCover = async () => {
    // reset({ ...getValues(), cover: null })
    // watch('cover')
    toast.warning('You deleted cover')
    setImg('')
  }
  const toastError = async () => {
    const success = await trigger('cover')
    const { error } = getFieldState('cover')
    const file = getValues('cover')

    if (file) {
      const badCase = defaultValues?.cover ?? null
      const img = success ? URL.createObjectURL(file) : badCase

      setImg(img)
    }
    // const img = file && !errors.cover && dirtyFields.cover ? URL.createObjectURL(file) : null
    //
    // if (success) {
    //   setImg(img)
    // }
    // const file = watch('cover')

    // if (success) {
    //   setValue('cover', file)
    // }
    // resetField('cover')
    if (!success && error?.message) {
      toast.error(error.message)
      setImg(null)
      // resetField('cover')
    }
  }

  return {
    control,
    deleteCover,
    errors,
    handleSubmit,
    imgT,
    toastError,
  }
}
