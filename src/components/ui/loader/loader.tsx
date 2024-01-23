import s from './loader.module.scss'
import {ring} from 'ldrs'

ring.register()

type Props = {
    preLoader?: boolean
}


export const InitialLoader = ({preLoader}: Props) => {
    return (
        !preLoader
            ? <div className={s.container}></div>
            : <PreLoader/>
    );
};

export const PreLoader = () => {
    return (
        <div>
            <l-ring
                size="30"
                stroke="2"
                speed='2'
                bg-opacity='0'
                color="#8C61FFFF"
            ></l-ring>
        </div>
    );
};

