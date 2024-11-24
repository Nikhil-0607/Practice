import React from 'react'
import { Card, Space } from "antd";
import Cards from './Cards';

const User = (d) => {

  // console.log(prop.d.key)
  return (
    <div>
      <h1>User component {d.name} </h1>

      {/* <Space direction="horizontal" size={20}>
      <Card title="user detail " extra={<a href="#">More</a>} style={{ width: 300, }}>
              <p>{d.key}</p>
              <p>{d.name}</p>
              <p>{d.address}</p>
              <p>{d.tags}</p>
            </Card>
      </Space>  */}
    </div>
  )
}

export default User