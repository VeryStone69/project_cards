import { PropsWithChildren } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Card } from '@/components/ui/card'
import { IconButton } from '@/components/ui/icon-button'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

type Props = {
  className?: string
  open: boolean
  setOpen?: (value: boolean) => void
  title?: string
} & PropsWithChildren

export const Modal = ({ children, className, open, setOpen, title }: Props) => {
  const classNames = clsx(s.card, className)

  return (
    <>
      <Dialog.Root onOpenChange={setOpen} open={open}>
        <Dialog.Portal>
          <Dialog.Overlay className={s.overlay} />
          <div className={s.root}>
            <Dialog.Content className={s.window} forceMount>
              <Card className={classNames}>
                <div className={s.header}>
                  <Dialog.Title asChild>
                    <Typography variant={'h2'}>{title}</Typography>
                  </Dialog.Title>

                  <Dialog.Close asChild>
                    <IconButton
                      className={s.crossButton}
                      icon={<Icon height={'20px'} name={'cross'} width={'20px'} />}
                    />
                  </Dialog.Close>
                </div>
                <div className={s.content}>{children}</div>
              </Card>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
