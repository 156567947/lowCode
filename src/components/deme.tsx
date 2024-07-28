import { FC } from 'react'
import useMouse from '../hooks/useMouse'
import { useGetInfo } from '../hooks/useGetInfo'
import s from './demo.module.css'
const Demo: FC = () => {
    const { x, y } = useMouse()
    const { info, loading } = useGetInfo()
    return (
        <>
            <div>{x}-{y}</div>
            <p className={s.text}>{info}</p>
            <p>{loading ? '加载中...' : '加载完成'}</p>
        </>
    )
}

export default Demo