import {
    PlusOutlined,
    BarsOutlined,
    StarOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import s from "./ManageLayout.module.scss";
export default function ManageLayout() {
    const nav=useNavigate()
    const {pathname}=useLocation()
    console.log(useLocation())
    return (
        <div className={s.container}>
            <div className={s.left}>
                <Space direction="vertical">
                    <Button type="primary" icon={<PlusOutlined />}>
                        创建问卷
                    </Button>
                    <Button icon={<BarsOutlined />} type={pathname.startsWith('/manage/list')?'default':'text'} onClick={()=>nav('/manage/list')}>我的问卷</Button>

                    <Button icon={<StarOutlined />} type={pathname.startsWith('/manage/star')?'default':'text'} onClick={()=>nav('/manage/star')}>星标问卷</Button>

                    <Button icon={<DeleteOutlined />} type={pathname.startsWith('/manage/trash')?'default':'text'} onClick={()=>nav('/manage/trash')}>回收站</Button>
                </Space>
            </div>

            <div className={s.right}>
                <Outlet />
            </div>
        </div>
    );
}
