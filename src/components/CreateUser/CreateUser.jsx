import React, { useState } from "react";
import { Modal } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import useCreateUser from "../../hooks/useCreataUser";
const CreateUser = ({ open, onOk, confirmLoading, onCancel, modalText }) => {
  const { create } = useCreateUser();
  return (
    <Modal
      title="Create User"
      visible={open}
      onOk={onOk}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
    >
      <Form
        className="w-full"
        name="basic"
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={create}
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

        {/* <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password size="large" placeholder="Enter your password" />
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateUser;
