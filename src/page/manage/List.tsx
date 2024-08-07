import { useEffect } from "react";
import QuestionCard from "@/components/QuestionCard.tsx";
import ListSearch from "@/components/ListSearch";

import styles from "./List.module.scss";
import { Space, Typography, Spin } from "antd";
import useLoadQuestionListData from "@/hooks/useLoadQuestionListData";
// import axios from "axios";
// import "../../_mock/index";
const { Title } = Typography;

export default function List() {
  const { data = {}, loading } = useLoadQuestionListData();
  const { list = [], total = 0 } = data;
  useEffect(() => {
    // fetch("/api/test").then((res) => {
    //   return res.json();
    // }).then((data) => {
    //   console.log(data)
    // })
    // axios.get("/api/question").then((res) => {
    //   console.log(res);
    // })
  }, []);

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
      <div
        style={{
          width: "100%",
        }}
      >
        {loading && (
          <div style={{ textAlign: "center" }}>
            <Spin></Spin>
          </div>
        )}
        <Space direction="vertical">
          {!loading &&
            list.length > 0 &&
            list.map((item: any) => <QuestionCard key={item.id} {...item} />)}
        </Space>
      </div>
      <div className={styles.footer}>加载更多</div>
    </>
  );
}
