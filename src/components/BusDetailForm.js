import React from "react";
import { Form, Input, Button, Select, DatePicker, TimePicker, InputNumber, Checkbox, Row, Col } from "antd";
import axios from "axios";
import { useState } from "react";

const { Option } = Select;

const BusDetailForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8090/api/buses/', values);
      if (response.status === 200) {
        console.log("Bus created:", response.data);
        form.resetFields(); // Reset form after successful submission
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 20,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* <h2 style={{ textAlign: "center", marginBottom: 10 }}>Bus Detail Form</h2> */}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ capacity: 50, type: "Regular", days: [] }}
      >
        <Form.Item
          name="busName"
          label="Bus Name"
          rules={[{ required: true, message: "Please enter the bus name!" }]}
        >
          <Input placeholder="Bus name" />
        </Form.Item>

        <Form.Item
          name="busNumber"
          label="Bus Number"
          rules={[{ required: true, message: "Please enter the bus number!" }]}
        >
          <Input placeholder="Bus number (e.g., MH12-1234)" />
        </Form.Item>

        <Form.Item
          name="route"
          label="Route"
          rules={[{ required: true, message: "Please enter the route!" }]}
        >
          <Input placeholder="Route (e.g., City A - City B)" />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="departure"
              label="Departure"
              rules={[{ required: true, message: "Select departure time!" }]}
            >
              <TimePicker format="HH:mm" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="arrival"
              label="Arrival"
              rules={[{ required: true, message: "Select arrival time!" }]}
            >
              <TimePicker format="HH:mm" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="date"
              label="Travel Date"
              rules={[{ required: true, message: "Select travel date!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="days"
              label="Days"
              rules={[{ required: true, message: "Select running days!" }]}
            >
              <Checkbox.Group>
                <Row>
                  {daysOfWeek.map((day) => (
                    <Col key={day} style={{ marginBottom: 5 }}>
                      <Checkbox value={day}>{day}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="capacity"
              label="Capacity"
              rules={[{ required: true, message: "Enter capacity!" }]}
            >
              <InputNumber min={1} max={100} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="type"
              label="Type"
              rules={[{ required: true, message: "Select type!" }]}
            >
              <Select>
                <Option value="Regular">Regular</Option>
                <Option value="AC">AC</Option>
                <Option value="Sleeper">Sleeper</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="ticketPrice"
          label="Ticket Price (₹)"
          rules={[{ required: true, message: "Enter ticket price!" }]}
        >
          <InputNumber min={0} prefix="₹" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BusDetailForm;