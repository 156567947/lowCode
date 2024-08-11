import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
type PropsType = {
  total: number;
};

export default function ListPage(props: PropsType) {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const page = searchParams.get("pageNum") || 1;
    setCurrent(Number(page));
    const size = searchParams.get("pageSize") || 10;
    setPageSize(Number(size));
  }, [searchParams]);
  const nav = useNavigate();
  const { pathname } = useLocation();
  const onChange = (page: number, pageSize: number) => {
    searchParams.set("pageNum", page.toString());
    searchParams.set("pageSize", pageSize.toString());
    nav({
      pathname,
      search: searchParams.toString(),
    });
  };
  return (
    <Pagination
      total={props.total}
      pageSize={pageSize}
      current={current}
      onChange={onChange}
    />
  );
}
