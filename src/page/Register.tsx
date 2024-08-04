import { UserAddOutlined } from "@ant-design/icons";
import { Typography, Space, Form, Input, Button } from "antd";
import s from "./Register.module.scss";
import { Link } from "react-router-dom";
const { Title } = Typography;
export default function () {
  const submitHandle = (value: any) => {
    console.log(value);
  };
  return (
    <div className={s.container}>
      <div>
        <Space>
          <Title level={3}>
            <UserAddOutlined />
          </Title>
          <Title level={3}>注册新用户</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          style={{ width: "300px" }}
          onFinish={submitHandle}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: "请输入用户名!" },
              {
                type: "string",
                min: 5,
                max: 20,
                message: "用户名长度为5-20位",
              },
              {
                pattern: /^[a-zA-Z0-9]+$/,
                message: "用户名只能包含字母和数字",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="confirmPassword"
            rules={[
              { required: true, message: "请输入密码!" },

              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("两次输入的密码不一致!"));
                },
              }),
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item label="昵称" name="nickName">
            <Input></Input>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to="/login">已有账号？去登录</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
