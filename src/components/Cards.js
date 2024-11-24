import React from "react";
import { Card, Space } from "antd";
import { Link } from "react-router-dom";

const Cards = () => {
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <div>
      
        <h1>dynamic Routing</h1>

        <Space direction="horizontal" size={20}>


          {data.map((d) => (
            <Card title="user detail " extra={<a href="#">More</a>} style={{ width: 300, }}>
              <p><Link>{d.key}</Link></p>
              <p><Link to={"/User/"+d.key+"/"+d.name}>{d.name}</Link></p>
              <p><Link>{d.address}</Link></p>
              <p><Link>{d.tags}</Link></p>
            </Card>
          ))}


        </Space> 
      
    </div>
  );
};

export default Cards;
