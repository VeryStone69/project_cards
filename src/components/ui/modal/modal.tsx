import * as Dialog from '@radix-ui/react-dialog'

import {Typography} from "@/components/ui/typography";
import {Icon} from "@/components/icon/Icon";
import {Card} from "@/components/ui/card";
import {PropsWithChildren} from "react";
import s from './modal.module.scss'

type Props = {
    open: boolean
    setOpen?: (value: boolean) => void
    title?: string
} & PropsWithChildren

export const Modal = ({title, setOpen, open, children}: Props) => (
    <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
            <Dialog.Overlay className={s.overlay}/>
            <div className={s.root}>
                <Dialog.Content className={s.window}>
                    <Card className={s.card}>
                        <div className={s.header}>

                            <Dialog.Title asChild>
                                <Typography variant={'h2'}>
                                    {title}
                                </Typography>
                            </Dialog.Title>

                            <Dialog.Close asChild>
                                <button className={s.button}>
                                    <Icon name={'cross'} width={'22px'}/>
                                </button>
                            </Dialog.Close>

                        </div>
                        <div className={s.content}>
                            {children}
                        </div>
                    </Card>
                </Dialog.Content>
            </div>
        </Dialog.Portal>
    </Dialog.Root>
)

export default Modal
