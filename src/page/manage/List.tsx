import { useState } from "react";
import QuestionCard from "@/components/QuestionCard.tsx";
import styles from "./List.module.scss";
import { Space, Typography } from "antd";
const { Title } = Typography;
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
export default function List() {
  const [list, setList] = useState(rowData);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>搜索 </div>
      </div>
      <div style={{ width: "100%" }}>
        <Space direction="vertical">
          {list.length > 0 &&
            list.map((item) => <QuestionCard key={item._id} {...item} />)}
        </Space>
      </div>
      <div className={styles.footer}>加载更多</div>
    </>
  );
}
