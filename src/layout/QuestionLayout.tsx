
import { Outlet } from 'react-router-dom'
import s from './QuestionLayout.module.scss'
export default function QuestionLayout() {
    return (
        <div >
            <p>question layout</p>
            <div ><Outlet /></div>

        </div>
    )
}
