import { Typography, Space, Form, Input, Button, Checkbox } from "antd";
import s from "./Login.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Title } = Typography;
export default function Login() {
  
  const [form] = Form.useForm();
  const onFinsish = (values: any) => {console.log(form,'form')};
  return (
    <div className={s.container}>
      <div>
        <Space>
          <Title level={3}>
            <UserOutlined />
          </Title>
          <Title level={3}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinsish}
          style={{ width: "300px" }}
          initialValues={{ remember: true }}
          form={form}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 24 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to="/register">注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
