import React from 'react'
import { Card, Space } from 'antd';

const Cards = () => {
  var data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }
  ]
  
  return (
    <Space direction="horizontal" size={20}>
      {
        data.map(d=>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>{d.key}</p>
      <p>{d.name}</p>
      <p>{d.name}</p>
      <p>{d.name}</p>
      <p>{d.age}</p>
      <p>{d.age}</p>
      <p>{d.address}</p>
      <p>{d.tags}</p>
    </Card>
        )
}
    </Space>
  )
}

export default Cards