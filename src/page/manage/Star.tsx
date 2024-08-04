import { useState } from "react";
import styles from "./List.module.scss";
import QuestionCard from "@/components/QuestionCard.tsx";
import ListSearch from "@/components/ListSearch";

import { Space, Typography, Empty } from "antd";
const { Title } = Typography;
const rowData = [
  // {
  //   _id: "q1",
  //   title: "问卷1",
  //   isPublished: false,
  //   isStar: true,
  //   answerCount: 5,
  //   createdAt: "12:52:25",
  // },
  // {
  //   _id: "q2",
  //   title: "问卷2",
  //   isPublished: false,
  //   isStar: true,
  //   answerCount: 5,
  //   createdAt: "12:52:25",
  // },
  // {
  //   _id: "q3",
  //   title: "问卷3",
  //   isPublished: true,
  //   isStar: true,
  //   answerCount: 5,
  //   createdAt: "12:52:25",
  // },
];
export default function Star() {
  const [data, setData] = useState(rowData);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Space direction="vertical">
          {data.length === 0 && <Empty description="暂无星标问卷"></Empty>}
          {data.length > 0 &&
            data.map((item) => <QuestionCard key={item._id} {...item} />)}
        </Space>
      </div>
      <div className={styles.footer}> 分页</div>
    </>
  );
}
