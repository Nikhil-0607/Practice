import React, { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const BusRegForm = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
  return (
    <div>
      <>
      <Button type="primary" onClick={showModal}>
        Login 
      </Button>
      <Modal title="Bus Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Bus Name"
      name="Bus Name"
      rules={[
        {
          required: true,
          message: 'Please input your Bus Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Bus Id"
      name="Bus Id"
      rules={[
        {
          required: true,
          message: 'Please input your Bus Id!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
    </>
    </div>
  )
}

export default BusRegForm


