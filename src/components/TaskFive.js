import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Modal,
  Form,
  Input,
  Select,
  notification,
  Space,
} from "antd";
import axios from "axios";

const { Option } = Select;

const TaskFive = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();


  useEffect(() => {
    fetchData();
  }, []);

  // Fetch customer data from the API
  const fetchData = () => {
    axios
      .get("http://localhost:8090/api/customers")
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        api.error({
          message: "Fetch Failed",
          description: "Failed to fetch customer data.",
        });
      });
  };

  // Delete a customer by ID
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8090/api/customers/${id}`)
      .then(() => {
        api.success({
          message: "Deleted Successfully",
          description: "Customer has been deleted.",
        });
        fetchData(); // Refresh the data
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  // Update customer data
  const handleUpdate = (values) => {
    if (!singleData?.id) return; // Ensure `singleData` has a valid ID

    axios
      .put(`http://localhost:8090/api/customers/${singleData.id}`, values)
      .then(() => {
        api.success({
          message: "Updated Successfully",
          description: "Customer data has been updated.",
        });
        fetchData(); // Refresh the data
        setIsModalOpen(false); // Close the modal
        setSingleData(null); // Reset selected data
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  const showModal = (user) => {
    setSingleData(user);
    setIsModalOpen(true);
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
            <Button type="primary" onClick={()=>showModal(user)}>
              Edit
            </Button>
          </Card>
        ))}
      </Space>

      {/* Modal for editing customer details */}
      <Modal
        title="Edit User"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null} // Remove default footer
      >
        <Form
          form={form} // Use the form instance
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
              {
                required: true,
                message: "Please input your mobile number!",
              },
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
            rules={[
              { required: true, message: "Please input your Aadhar!" },
              {
                pattern: /^\d{12}$/,
                message: "Aadhar number must be 12 digits!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Modal>
       )} 
    </div>
  );
};

export default TaskFive;
