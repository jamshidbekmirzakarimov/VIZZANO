import React from "react";
import { Modal } from "antd";
import { Button, Form, Input } from "antd";
import useCreateUser from "../../hooks/useCreataUser";

const CreateUser = ({ open, onOk, confirmLoading, onCancel, modalText }) => {
  const { create } = useCreateUser(onCancel); // Replace "your-token-value" with the actual token value

  return (
    <Modal
      title="Create User"
      visible={open}
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
              message: "Full name is required",
            },
          ]}
        >
          <Input size="large" placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          name="flowType"
          rules={[
            {
              type: "text",
              required: true,
              message: "Flow type is required",
            },
          ]}
        >
          <Input size="large" placeholder="Enter the flow type" />
        </Form.Item>

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
