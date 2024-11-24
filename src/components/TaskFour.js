import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input, Select,  } from "antd";

const TaskFour = () => {
  const [formData, setFromData] = useState({
    email: "",
    name: "",
    mobile: "",
    gender: "",
    state: "",
    aadhar: "false",
  });

  // const submitData = (values) => {
  //   // e.preventDefault();
  //   // console.log(formData);
  //   console.log('Success:', values);
  // };


  const submitData = async (values) => {
    try {
      const response = await axios.post('http://localhost:8090/api/customers/', values); 
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


  const { Option } = Select;


  return (
    <div>
      <h1>TaskThree</h1>

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
        onFinish={submitData}
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
              message:"Please enter vlaid email"

            }
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
              message: 'Invalid Mobile Number',
            },
            {
              maxLength: 10,
              message: 'Invalid Mobile Number',
            }
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
            message: 'Please select gender!',
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
        {/* <input
          type="text"
          name="email"
          onChange={handleChange
          }
          placeholder="Enter E-mail"
          value={formData.email}
          required
        ></input> */}
        {/* <input
          type="text"
          name="name"
          onChange={
            handleChange
          }
          placeholder="Enter name"
          value={formData.name}
          required
        ></input>
        <input
          type="text"
          name="mobile"
          onChange={
            handleChange
          }
          placeholder="Enter mobile"
          value={formData.mobile}
          required
        ></input>
        <select
        name="state"
          onChange={
            handleChange
          }
        >
          <option value="JH">Jharkhand</option>
          <option value="OD">Odisa</option>
          <option value="BH">Bihar</option>
        </select>
        <textarea
        name="msg"
          onChange={
            handleChange
          }
        ></textarea>
        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          onChange={
            handleChange
          }
          value="Male"
          checked={formData.gender === "Male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          onChange={
            handleChange
          }
          value="Female"
          checked={formData.gender === "Female"}
        />
        Female */}
        {/* <label>Id</label>
        <input
          type="checkbox"
          name="aadhar"
          onChange={
            setFromData.aadhar(!formData.aadhar)
          }
          checked={formData.aadhar === true}
        />
        Aadhar */}

        {/* <button type="submit">Click Here</button> */}

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TaskFour;
