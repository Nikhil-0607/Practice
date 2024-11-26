import React, { useState } from 'react'
import { Card, Space } from "antd";
import { useEffect } from 'react';
import axios from 'axios';

const TaskFive = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8090/api/customers")
    .then((response)=>{
      // response.json();
      console.log(response);
      setData(response.data);
    })
    .catch((error)=>console.error("error fetching data",error));
  },[]);
  
  //   const data = [
  //     {
  //         "email": "nikhilshrma0607@gmail.com",
  //         "name": "NIKHIL SHARMA",
  //         "mobile": "08538980844",
  //         "gender": "male",
  //         "state": "jharkhand",
  //         "aadhar": "55222445",
  //         "createdAt": "2024-11-24T03:32:16.374Z",
  //         "updatedAt": "2024-11-24T03:32:16.374Z",
  //         "id": "67429e40b991e2415907f16a"
  //     },
  //     {
  //         "email": "saurabhdhauria@gmail.com",
  //         "name": "SARAV DHAURIA",
  //         "mobile": "8538980844",
  //         "gender": "male",
  //         "state": "jharkhand",
  //         "aadhar": "55222445",
  //         "createdAt": "2024-11-24T03:41:03.443Z",
  //         "updatedAt": "2024-11-24T03:41:03.443Z",
  //         "id": "6742a04fb991e2415907f16e"
  //     },
  //     {
  //         "email": "saurabhdhauria@gmail.com",
  //         "name": "HANS MAHATO",
  //         "mobile": "8538980844",
  //         "gender": "male",
  //         "state": "jharkhand",
  //         "aadhar": "55222445",
  //         "createdAt": "2024-11-24T03:41:29.505Z",
  //         "updatedAt": "2024-11-24T03:41:29.505Z",
  //         "id": "6742a069b991e2415907f170"
  //     }
  // ];
  return (
    <div>
      <Space direction="horizontal" size={20}>
        {data.map((d) => (
          <Card title="user detail " extra={<a href="#">More</a>} style={{ width: 300, }}>
            <p>{d.email}</p>
            <p>{d.name}</p>
            <p>{d.mobile}</p>
            <p>{d.gender}</p>
            <p>{d.state}</p>
            <p>{d.aadhar}</p>  
          </Card>
        ))}
      </Space> 
</div>
  );
};

export default TaskFive;