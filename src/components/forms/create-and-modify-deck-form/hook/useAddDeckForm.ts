import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { DefaultValueType } from '@/components/forms/create-and-modify-deck-form'
import { addNewDeckSchema, PackFormType } from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'

export const useAddDeckForm = (defaultValue?: DefaultValueType) => {
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState<null | string>(defaultValue?.cover || null)

  const { control, getFieldState, getValues, handleSubmit, reset, setValue, trigger, watch } =
    useForm<PackFormType>({
      defaultValues: {
        cover: null,
        isPrivate: defaultValue?.isPrivate || false,
        name: defaultValue?.name || '',
      },

      resolver: zodResolver(addNewDeckSchema),
    })

  const deleteCover = async () => {
    reset({ ...getValues(), cover: null })
    toast.warning('You deleted cover')
    setOpen(false)
    setImg(null)
  }
  const toastError = async () => {
    const success = await trigger('cover')
    const file = watch('cover')

    const { error } = getFieldState('cover')

    if (file && success) {
      setValue('cover', file)
      setImg(URL.createObjectURL(file))
    }
    if (!success && error?.message) {
      toast.error(error.message)
      reset({ ...getValues(), cover: null })
    }
  }

  return {
    control,
    deleteCover,
    handleSubmit,
    img,
    open,
    setOpen,
    toastError,
  }
}
