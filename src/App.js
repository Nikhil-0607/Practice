import React from 'react'
import './App.css';
import Jsr from './components/Jsr';
import NewFile from './components/NewFile';
import JsonData from './components/JsonData';
import Chart from './components/Chart';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import About from './components/About';
import Notfound from './components/Notfound';
import {Routes, Route, Link} from'react-router-dom'
import Home from './components/Home';
import { Card, Menu } from 'antd';
import { Flex, Layout, } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Cards from './components/Cards';
import Tabs from './components/Tabs';
import TimeLine from './components/TimeLine';


const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};

function App() {
  return (
    <div>

<Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
        <Menu>
      <Menu.Item key="1">  <Link to = "/Home"><HomeOutlined spin = "true" /> Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to = "/About">About</Link></Menu.Item>
      <Menu.Item key="3"><Link to = "/BarChart">BarChart</Link></Menu.Item>
      <Menu.Item key="4"><Link to = "/LineChart">LineChart</Link></Menu.Item>
      <Menu.Item key="5"><Link to = "/PieChart">circle chaft</Link></Menu.Item>
      <Menu.Item key="6"><Link to = "/Cards">Cards</Link></Menu.Item>
      </Menu>
        </Sider>
        <Content style={contentStyle}><Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Home" element = {<Home/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "BarChart" element = {<BarChart/>}/>
        <Route path = "LineChart" element = {<LineChart/>}/>
        <Route path = "PieChart" element = {<PieChart/>}/>
        <Route path = "Cards" element = {<Cards/>}/>
        <Route path = "*" element = {<Notfound/>}/>

      </Routes></Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </div>
  );
}

export default App;