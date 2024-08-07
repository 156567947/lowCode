import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const nav = useNavigate();
  return (
    <Result
      status={"404"}
      title="404"
      subTitle="抱歉，您范文的页面不存在"
      extra={
        <Button type="primary" onClick={() => nav("/manage/list")}>
          返回首页
        </Button>
      }
    ></Result>
  );
}
