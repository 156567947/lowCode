import { useState } from 'react'
import QuestionCard from '@/components/QuestionCard.tsx'
import styles from './List.module.scss'
export default function List() {
  const [list, setList] = useState([
    { _id: 'q1', title: '问卷1', isPublished: false, isStar: false, answerCouynt: 5, createdAt: '12:52:25' },
    { _id: 'q2', title: '问卷2', isPublished: false, isStar: true, answerCouynt: 5, createdAt: '12:52:25' },
    { _id: 'q3', title: '问卷3', isPublished: true, isStar: false, answerCouynt: 5, createdAt: '12:52:25' },
  ])
  return (

    <>
      <div className={styles.header}>
        <div className={styles.left}><h3>我的问卷</h3></div>
        <div className={styles.right}>搜索 </div>
      </div>
      <div>{list.map(item=><QuestionCard key={item._id} {...item} />)}</div>
      <div>footer</div>
    </>




  )
}
