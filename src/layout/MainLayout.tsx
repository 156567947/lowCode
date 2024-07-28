import React from 'react'
import UserInfo from '../components/UserInfo/UserInfo'
import { Outlet } from 'react-router-dom'
import { Flex, Layout } from 'antd';
import s from './MainLayout.module.scss'
import Logo from '../components/Logo/Logo'
const { Header, Footer, Sider, Content } = Layout;

export default function MainLayout() {
    return (
        <>
            <Layout >
                <Header className={s.header}>
                    <div className={s.left}><Logo/></div>
                    <div className={s.right}><UserInfo/></div>
                </Header>
                <Layout className={s.main}>                <Content><Outlet /></Content>
                </Layout>
                <Footer className={s.footer}>
                    问卷 &copy; 2023
                </Footer>
            </Layout>

        </>

    )
}
