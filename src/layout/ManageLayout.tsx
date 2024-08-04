// import { useState } from "react";
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, message, Space } from "antd";
import { useRequest } from "ahooks";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { createQuestionService } from "@/services/question.ts";
import s from "./ManageLayout.module.scss";

export default function ManageLayout() {
  const nav = useNavigate();

  const { pathname } = useLocation();
  const {
    run: handleCreateClick,
    error,
    loading,
  } = useRequest(createQuestionService, {
    manual: true,
    onSuccess: (data) => {
      nav(`/question/edit/${data.id}`);
      message.success("创建成功");
    },
  });
  // console.log(useLocation());
  // const [loading, setLoading] = useState(false);
  // async function handleCreateClick() {
  //   if(loading) return;
  //   setLoading(true);
  //   const data = await createQuestionService();
  //   const { id } = data;
  //   if (id) {
  //     nav(`/question/edit/${id}`);
  //     message.success("创建成功");
  //   }
  // }
  return (
    <div className={s.container}>
      <div className={s.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            onClick={handleCreateClick}
            icon={<PlusOutlined />}
            disabled={loading}
            loading={loading}
          >
            创建问卷
          </Button>
          <Button
            icon={<BarsOutlined />}
            type={pathname.startsWith("/manage/list") ? "default" : "text"}
            onClick={() => nav("/manage/list")}
          >
            我的问卷
          </Button>

          <Button
            icon={<StarOutlined />}
            type={pathname.startsWith("/manage/star") ? "default" : "text"}
            onClick={() => nav("/manage/star")}
          >
            星标问卷
          </Button>

          <Button
            icon={<DeleteOutlined />}
            type={pathname.startsWith("/manage/trash") ? "default" : "text"}
            onClick={() => nav("/manage/trash")}
          >
            回收站
          </Button>
        </Space>
      </div>

      <div className={s.right}>
        <Outlet />
      </div>
    </div>
  );
}
