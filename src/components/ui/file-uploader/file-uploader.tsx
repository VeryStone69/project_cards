import {Icon} from '@/components/icon/Icon'

import s from './file-uploader.module.scss'
import {clsx} from "clsx";
import {ComponentPropsWithoutRef} from "react";

type Props = {} & ComponentPropsWithoutRef<'div'>

export const FileUploader = ({className}: Props) => {

    const classNames = {
        root: clsx(s.root, className),
    }

    return (
        <div className={classNames.root}>
            <Icon className={s.editButton}
                  fill={'white'}
                  name={'edit'}
                  width={'15px'}
                  height={'15px'}
            />
        </div>
    )
}
