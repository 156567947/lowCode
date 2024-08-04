import { useState } from "react";
import { Typography, Empty, Table, Tag, Space, Button, Modal } from "antd";
import styles from "./List.module.scss";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ListSearch from "@/components/ListSearch";

const { Title } = Typography;
const { confirm } = Modal;
const rowData = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: "12:52:25",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: "12:52:25",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: "12:52:25",
  },
];
const tableColumns = [
  {
    title: "问卷标题",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "是否发布",
    dataIndex: "isPublished",
    key: "isPublished",
    render: (text: boolean) =>
      text ? <Tag color="blue">已发布</Tag> : <Tag>未发布</Tag>,
  },
  {
    title: "是否收藏",
    dataIndex: "isStar",
    key: "isStar",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "回答人数",
    dataIndex: "answerCount",
    key: "answerCount",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "回答人数",
    dataIndex: "answerCount",
    key: "answerCount",
  },
  {
    title: "操作",
  },
];

export default function Trash() {
  const [trashData, setTrashData] = useState(rowData);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const del = () => {
    confirm({
      title: "确认删除选中问卷吗？",
      icon: <ExclamationCircleOutlined />,
      content: "删除后不可恢复",
      onOk: () => {
        console.log(selectedIds);
      },
    });
  };
  const element = (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button onClick={del} danger disabled={selectedIds.length === 0}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={trashData}
        columns={tableColumns}
        pagination={false}
        rowKey={(record) => record._id}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            setSelectedIds(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className="content">
        {trashData.length === 0 && <Empty description="暂无数据" />}
        {trashData.length > 0 && element}
      </div>
    </>
  );
}
