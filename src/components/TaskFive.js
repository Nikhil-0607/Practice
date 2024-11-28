import React, { useState, useEffect } from "react";
import { Card, Space } from "antd";
import axios from "axios";
import { useMemo } from 'react';
import { RadiusUprightOutlined } from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
const Context = React.createContext({
  name: 'Default',
});

const TaskFive = () => {
  const [data, setData] = useState([]);

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
        fetchData();
      })
      .catch((error) => console.error("Error deleting data", error));
  };

  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  return (
    <div>
      <Space direction="horizontal" size={20}>
        {data.map((d) => (
          <Card title={d.name} style={{ width: 300 }}>
            <p>{d.email}</p>
            <p>{d.name}</p>
            <p>{d.mobile}</p>
            <p>{d.gender}</p>
            <p>{d.state}</p>
            <p>{d.aadhar}</p>
            <Button
              onClick={() => handleDelete(d.id)}
              type="primary"
              onClick={() => openNotification("topRight")}
              icon={<RadiusUprightOutlined />}
            >
              Delete
            </Button>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default TaskFive;
