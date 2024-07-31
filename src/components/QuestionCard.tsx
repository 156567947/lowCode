import s from "./Question.module.scss";
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from "antd";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  LineChartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

type PropsType = {
  _id: string;
  title: string;
  isStar: boolean;
  isPublished: boolean;
  answerCount: number;
  createdAt: string;
};
const confirm = Modal.confirm;
export default function QuestionCard(props: PropsType) {
  const { _id, title, createdAt, answerCount, isPublished, isStar } = props;
  const nav = useNavigate();

  const copyHandler = () => {
    message.success("复制成功");
  };
  const delHandler = () => {
    confirm({
      title: "确定删除吗？",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        message.success("删除成功");
      },
    });
  };
  return (
    <div className={s.container}>
      <div className={s.title}>
        <div className={s.left}>
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStar && <StarOutlined style={{ color: "red" }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={s.right}>
          <Space>
            {isPublished ? <Tag color="blue">已发布</Tag> : <Tag>未发布</Tag>}
            <span>答卷：{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: "12px" }} />
      <div className={s["button-container"]}>
        <div className={s.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={s.right}>
          <Space>
            <Button icon={<StarOutlined />}>
              {isStar ? "取消标星" : "标星"}
            </Button>
            <Popconfirm
              title="确认复制该问卷？"
              okText="确定"
              cancelText="取消"
              onConfirm={copyHandler}
            >
              <Button icon={<CopyOutlined />}>复制</Button>
            </Popconfirm>

            <Button icon={<DeleteOutlined />} onClick={delHandler}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
}
