import React, { useState } from 'react'
import { Button, Card, Space } from "antd";
import { useEffect } from 'react';
import axios from 'axios';

const TaskFive = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    newFunction();
  },[]);

  const newFunction=()=>{
    axios.get("http://localhost:8090/api/customers")
    .then((response)=>{
      // response.json();
      console.log(response);
      setData(response.data);
    })
    .catch((error)=>console.error("error fetching data",error));
  }

  const deletData = (id)=>{
    // axios.delete("http://localhost:8090/api/customers/"+id)
    // .then((response)=>{
    //   // response.json();
    //   console.log(response);
    //   setData(response.data);
    // })
    // .catch((error)=>console.error("error fetching data",error));
    console.log(id+"succesfully deleted")
    newFunction();
  };

  return (
    <div>
      <Space direction="horizontal" size={20}>
        {data.map((d) => (
          <Card title={d.name}  style={{ width: 300, }}>
            <p>{d.email}</p>
            <p>{d.name}</p>
            <p>{d.mobile}</p>
            <p>{d.gender}</p>
            <p>{d.state}</p>
            <p>{d.aadhar}</p>  
            <Button onClick={deletData(d.id)}>Delete</Button>
          </Card>
          
        ))}
      </Space> 
</div>
  );
};

export default TaskFive;