import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form, Input, Select, notification, Space } from "antd";
import axios from "axios";

const { Option } = Select;

const TaskFive = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState(null); 
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = () => {
    axios
      .get("http://localhost:8090/api/customers")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8090/api/customers/${id}`)
      .then(() => {
        api.success({ message: "Deleted Successfully", description: "Customer Deleted Successfully" });
        fetchData();
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  
  const showModal = (user) => {
    setSingleData(user);
    setIsModalOpen(true);
  };

  
  const handleUpdate = (values) => {
    axios
      .put(`http://localhost:8090/api/customers/${singleData.id}`, values)
      .then(() => {
        api.success({ message: "Updated Successfully", description: "Customer Updated Successfully" });
        fetchData();
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  return (
    <div>
      {contextHolder}
      <Space direction="horizontal" size={20} wrap>
        {data.map((user) => (
          <Card key={user.id} title={user.name} style={{ width: 300 }}>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mobile}</p>
            <p>Gender: {user.gender}</p>
            <p>State: {user.state}</p>
            <p>Aadhar: {user.aadhar}</p>
            <Button onClick={() => handleDelete(user.id)}>Delete</Button>
            <Button type="primary" onClick={() => showModal(user)}>
              Edit
            </Button>
          </Card>
        ))}
      </Space>

      {singleData && (
        <Modal
          title="Edit Customer"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Form
            initialValues={singleData}
            onFinish={handleUpdate}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mobile"
              name="mobile"
              rules={[
                { required: true, message: "Please input your mobile number!" },
                { len: 10, message: "Mobile number must be 10 digits!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: "Please input your state!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Aadhar"
              name="aadhar"
              rules={[{ required: true, message: "Please input your aadhar!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default TaskFive;
