import React, { useState, useEffect } from "react";
import { Card, Space, Rate, Collapse } from "antd";
import axios from "axios";


const TaskSix = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Space direction="horizontal" size={20} wrap>
        {data.map((d) => (
          <Card
            key={d.id} // Use unique id as the key
            title={d.title} // Product title
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
            cover={
              <img
                alt={d.title}
                src={d.image}
                style={{ height: 200, objectFit: "cover" }}
              />
            }
          >
            <p>
              <strong>Price:</strong> ${d.price}
            </p>
            <p>
              <strong>Category:</strong> {d.category}
            </p>
            {/* <p><strong>Description:</strong> {d.description}</p> */}
            {/* <Collapse>
              <Panel header="Description" key="1">
                <p>
                  <strong>Description:</strong> {d.description}
                </p>
              </Panel>
            </Collapse> */}

            <Collapse
              items={[
                {
                  key: "1",
                  label: "Description",
                  children: <p>{d.description}</p>,
                },
              ]}
            />
            <p>
              <strong>Rating:</strong>{" "}
              <Rate allowHalf disabled defaultValue={d.rating?.rate} />(
              {d.rating?.count} reviews)
            </p>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default TaskSix;
