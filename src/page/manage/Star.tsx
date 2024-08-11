import styles from "./List.module.scss";
import QuestionCard from "@/components/QuestionCard.tsx";
import ListSearch from "@/components/ListSearch";
import useLoadQuestionListData from "@/hooks/useLoadQuestionListData";
import ListPage from "@/components/ListPage";
import { Space, Typography, Empty, Spin } from "antd";
const { Title } = Typography;

export default function Star() {
  const { data = {}, loading } = useLoadQuestionListData({ isStar: true });
  const { list = [], total = 0 } = data;
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
        {loading && (
          <div style={{ textAlign: "center" }}>
            <Spin></Spin>
          </div>
        )}
        <Space direction="vertical">
          {list.length === 0 && !loading && (
            <Empty description="暂无星标问卷"></Empty>
          )}
          {list.length > 0 &&
            !loading &&
            list.map((item: any) => <QuestionCard key={item.id} {...item} />)}
        </Space>
      </div>
      <div className={styles.footer}>
        <ListPage total={total} />
      </div>
    </>
  );
}
