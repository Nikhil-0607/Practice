import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import { Button, notification, Space, Modal, Form, Input, Select } from "antd";
const { Option } = Select;

const TaskFive = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8090/api/customers")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8090/api/customers/" + id)
      .then(() => {
        openNotificationWithIcon("success");
        fetchData();
      })
      .catch((error) => console.error("Error deleting data", error));
  };

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Deleted Successfully",
      description: "Customer Deleted Successfully",
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUpdate = async (values) => {
    try {
      const response = await axios.put('http://localhost:8090/api/customers/'+id, values); 
      if (response.status === 200) {
        // message.success('User add successfully!');
        console.log('User add successfully')
      }
    } catch (error) {
      // message.error('Failed to submit user data');
      console.error('Error submitting data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <div>
      {contextHolder}
      <Space direction="horizontal" size={20} wrap>
        {data.map((d) => (
          <Card key={d.id} title={d.name} style={{ width: 300 }}>
            <p>{d.email}</p>
            <p>{d.name}</p>
            <p>{d.mobile}</p>
            <p>{d.gender}</p>
            <p>{d.state}</p>
            <p>{d.aadhar}</p>
            <Button onClick={() => handleDelete(d.id)}>Delete</Button>
            <>
              <Button type="primary" onClick={showModal(data)}>
                Edit
              </Button>
              <Modal
                title="Edit User"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
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
                  autoComplete="off"
                  onFinish={handleUpdate}
                >
                  <Form.Item
                    label="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                      {
                        type: "email",
                        message: "Please enter vlaid email",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    rules={[
                      {
                        required: true,
                        message: "Please Enter your name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="mobile"
                    name="mobile"
                    onChange={handleChange}
                    value={formData.mobile}
                    rules={[
                      {
                        required: true,
                        message: "Please input your mobile!",
                      },
                      {
                        minLength: 10,
                        message: "Invalid Mobile Number",
                      },
                      {
                        maxLength: 10,
                        message: "Invalid Mobile Number",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                      {
                        required: true,
                        message: "Please select gender!",
                      },
                    ]}
                  >
                    <Select placeholder="select your gender">
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="state"
                    name="state"
                    onChange={handleChange}
                    value={formData.state}
                    rules={[
                      {
                        required: true,
                        message: "Please input your state!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="aadhar"
                    name="aadhar"
                    onChange={handleChange}
                    value={formData.aadhar}
                    rules={[
                      {
                        required: true,
                        message: "Please input your aadhar!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form>
              </Modal>
            </>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default TaskFive;
