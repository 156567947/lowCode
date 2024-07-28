import { useNavigate } from 'react-router-dom'
import { Typography, Button } from 'antd'
import s from './Home.module.scss'
const { Title, Paragraph } = Typography
export default function Home() {
  const nav = useNavigate()
  return (
    <div className={s.container}>
      <Title level={2} >问卷调查 | 在线投票</Title>
      <Paragraph>欢迎来到问卷调查系统，请点击下方按钮开始您的问卷调查。</Paragraph>
      <div>
        <Button type='primary' onClick={() => nav()}>开始使用</Button>
      </div>
    </div>
  )
}
