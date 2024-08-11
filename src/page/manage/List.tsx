import { useEffect, useRef, useState } from "react";
import QuestionCard from "@/components/QuestionCard.tsx";
import ListSearch from "@/components/ListSearch";

import styles from "./List.module.scss";
import { Space, Typography, Spin } from "antd";
import { useSearchParams } from "react-router-dom";
import { useDebounceFn, useRequest } from "ahooks";
import { getQuestionListService } from "@/services/question";
// import axios from "axios";
// import "../../_mock/index";
const { Title } = Typography;

export default function List() {
  const [list, setList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(0);
  const canSee = useRef(false);
  const haveMore = total > list.length;
  const [searchParams] = useSearchParams();
  const more = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>(null);

  const { run: load, loading } = useRequest(
    async () => {
      const res = await getQuestionListService({
        pageNum,
        pageSize: 10,
        keyword: searchParams.get("keyword") || "",
      });
      return res;
    },
    {
      manual: true,
      onSuccess: (res) => {
        const { list: l = [], total = 0 } = res;
        setList((old) => {
          console.log(old);
          return old.concat(l);
        });
        setTotal(total);
        setPageNum((p) => p + 1);
      },
    }
  );

  const { run: loadMore } = useDebounceFn(
    () => {
      const elem = more.current;
      if (!elem) return;
      if (!observer.current) {
        const options = {
          root: null, // 观察者根元素，默认为浏览器视口
          threshold: 0, // 触发回调的交叉比例，默认为 0 (完全进入视口时触发)
        };

        const observer = new IntersectionObserver((entries) => {
          // 回调函数中的 entries 包含被观察元素的信息
          if (entries[0].isIntersecting) {
            canSee.current = true;
          } else {
            canSee.current = false;
          }
        }, options);
        observer.observe(elem);
      }
      if (canSee.current) {
        load();
      } else {
        console.log("不刷新");
      }
    },
    { wait: 1000 }
  );
  useEffect(() => {
    // fetch("/api/test").then((res) => {
    //   return res.json();
    // }).then((data) => {
    //   console.log(data)
    // })
    // axios.get("/api/question").then((res) => {
    //   console.log(res);
    // })
    loadMore();
    load();
  }, [searchParams]);

  useEffect(() => {
    if (haveMore) {
      window.addEventListener("scroll", loadMore);
    }
    window.addEventListener("scroll", loadMore);

    return () => {
      window.removeEventListener("scroll", loadMore);
      if (observer.current && more.current) {
        observer.current.unobserve(more.current);
      }
    };
  }, [searchParams]);

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
          {list.length > 0 &&
            list.map((item: any) => <QuestionCard key={item.id} {...item} />)}
        </Space>
      </div>
      <div className={styles.footer}>
        <div ref={more}>加载更多...</div>
      </div>
    </>
  );
}
