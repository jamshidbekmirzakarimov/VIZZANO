import React from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const { login } = useAuth();
 
  return (
    <>
      <section className="login h-screen flex items-center justify-center">
        <div>
          <h2 className="text-[#000] font-semibold text-[30px]">Sign in</h2>
          <p className="text-[#000] text-[16px]">
            Do not you have an account?{" "}
            <Link className="text-[#549FF9]" to="/register">
              Sign up
            </Link>
          </p>
          <Form
            className="w-full"
            name="basic"
            initialValues={{ remember: true }}
            layout="vertical"
            onFinish={login}
          >
            <Form.Item
              name="text"
              rules={[
                {
                  type: "text",
                  required: true,
                  message: "fullname`da xatolik bor",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your fullname" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Kirish
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;
