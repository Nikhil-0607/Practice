import React, { useState, useEffect } from 'react';
import { Input, Button, Card, Row, Col, Typography, Select, Space, message, DatePicker, Form, Modal } from 'antd';
import axios from 'axios';

const { Title } = Typography;
const { Option } = Select;

const Home = () => {
  const [busData, setBusData] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);

  // Fetch bus data from your API
  useEffect(() => {
    axios.get('/api/bus')  // Make sure to set up your backend for this API
      .then((response) => {
        setBusData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bus data:', error);
      });
  }, []);

  // Handle bus selection
  const handleBookTicket = (bus) => {
    setSelectedBus(bus);
    setModalVisible(true);
  };

  // Handle the bus search
  const handleSearchBus = () => {
    if (!selectedRoute || !selectedDate) {
      message.error('Please select a route and date');
      return;
    }
    // Perform the search logic based on selected route and date
    // Example: filter the busData based on route and date
    const filteredBuses = busData.filter(bus => bus.route.includes(selectedRoute) && bus.available);
    setBusData(filteredBuses);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Where is My Bus?</Title>

      <Space direction="vertical" style={{ width: '100%' }}>
        {/* Search Section */}
        <Row gutter={[16, 16]} justify="center">
          <Col span={6}>
            <Input
              placeholder="Enter route (e.g., City A to City B)"
              onChange={(e) => setSelectedRoute(e.target.value)}
            />
          </Col>
          <Col span={6}>
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date) => setSelectedDate(date)}
              placeholder="Select Date"
            />
          </Col>
          <Col span={6}>
            <Button type="primary" onClick={handleSearchBus}>Search Buses</Button>
          </Col>
        </Row>

        {/* Featured Buses */}
        <Title level={4} style={{ textAlign: 'center' }}>Available Buses</Title>

        <Row gutter={[16, 16]} justify="center">
          {busData.length === 0 ? (
            <Col span={24} style={{ textAlign: 'center' }}>
              <p>No buses available</p>
            </Col>
          ) : (
            busData.map((bus) => (
              <Col key={bus._id} span={8}>
                <Card
                  hoverable
                  cover={<img alt="Bus" src={bus.image || 'https://via.placeholder.com/300'} />}
                  onClick={() => handleBookTicket(bus)}
                >
                  <Title level={5}>{bus.name}</Title>
                  <p>{bus.route}</p>
                  <p>{bus.available ? 'Available' : 'Not Available'}</p>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Space>

      {/* Booking Modal */}
      <Modal
        title={`Book Ticket for ${selectedBus ? selectedBus.name : ''}`}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        {selectedBus && (
          <Form
            onFinish={() => {
              // Logic for booking a ticket (e.g., submit a form)
              message.success('Ticket booked successfully!');
              setModalVisible(false);
            }}
          >
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Confirm Booking
            </Button>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default Home;
