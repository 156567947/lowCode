import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import s from './Logo.module.scss'
import { useNavigate } from 'react-router-dom'
const { Title } = Typography
export default function Logo() {
    const nav = useNavigate()
    return (

        <Space className={s.container} onClick={() => nav('/')}>
            <Title level={1}>
                <FormOutlined style={{ fontSize: '40px' }} />
            </Title>
            <Title level={1}>H问卷</Title>
        </Space>



    )
}
