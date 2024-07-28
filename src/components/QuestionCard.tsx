import React from 'react'

import s from './Question.module.scss'

type PropsType = {
  _id: string,
  title: string,
  isStar: boolean,
  isPublished: boolean,
  answerCount: number,
  createdAt: string,
}
export default function QuestionCard(props: PropsType) {
  const { _id, title } = props
  return (
    <>
      <h1>{title}</h1>
      <button>编辑问卷</button>
      <button>数据统计</button>
    </>
  )
}
