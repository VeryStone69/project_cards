import { ChangeEvent, ComponentPropsWithoutRef, ElementType, useRef } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Button, ButtonProps } from '@/components/ui/button'

type Props<T extends ElementType = 'button'> = {
  as?: T
  name: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  variant?: ButtonProps['variant']
} & Omit<ComponentPropsWithoutRef<T>, 'className' | 'onChange'>

export const FileUploader = <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { as: Component = Button, asProp, children, name, onChange, ...rest } = props

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Component {...asProp} {...rest} onClick={() => inputRef?.current?.click()}>
        {children ?? <Icon fill={'white'} name={'edit'} size={'15px'} />}
      </Component>

      <input
        accept={'image/*'}
        hidden
        name={name}
        onChange={onChange}
        ref={inputRef}
        type={'file'}
      />
    </>
  )
}
