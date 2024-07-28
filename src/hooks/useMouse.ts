import { useState, useEffect } from 'react'

export default function useMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const mousemoveHandler = (e: MouseEvent) => {

        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {

        //监听鼠标事件
        window.addEventListener('mousemove', mousemoveHandler)

        return () => {
            //移除事件监听
            window.removeEventListener('mousemove', mousemoveHandler)
        }
    }, [])
    return { x, y }
}