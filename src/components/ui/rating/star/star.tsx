import {Icon} from "@/components/icon/Icon";
import s from './star.module.scss'

type Props = {
    selected?: boolean
    setValue: (value: number) => void
    value: number
}
export const Star = ({selected, setValue, value}: Props) => {

    const selectedHandler = () => {
        if (selected) setValue(value - 1)
        if (!selected) setValue(value)
    }

    return <div className={s.star} onClick={selectedHandler}>
        {
            selected
                ? <Icon name={'star'}/>
                : <Icon name={'star-outline'}/>
        }
    </div>
};
