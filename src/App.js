import React from "react";
import "./App.css";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import About from "./components/About";
import Notfound from "./components/Notfound";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { Card, Menu } from "antd";
import { Flex, Layout } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Cards from "./components/Cards";
import TaskOne from "./components/TaskOne";
import TaskTwo from "./components/TaskTwo";
import TaskThree from "./components/TaskThree";
import TaskFour from "./components/TaskFour";
import BusRegForm from "./components/BusRegForm";
import New from "./components/New";
import DynamicRouting from "./components/DynamicRouting";
import User from "./components/User";
import BusDetailForm from "./components/BusDetailForm";
import TaskFive from "./components/TaskFive";
import TaskSix from "./components/TaskSix";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};

function App() {

  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <BusRegForm />
        </Header>

        <Layout>
          <Sider width="25%" style={siderStyle}>
            <Menu>
              <Menu.Item key="1">
                {" "}
                <Link to="/Home">
                  <HomeOutlined spin="true" /> Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/About">About</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/BarChart">BarChart</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/LineChart">LineChart</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/PieChart">circle chaft</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/Cards">Cards</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/TaskOne">TaskOne</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/TaskTwo">TaskTwo</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to="/TaskThree">TaskThree</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/TaskFour">TaskFour</Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="/New">New</Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/DynamicRouting">DynamicRouting</Link>
              </Menu.Item>
              <Menu.Item key="13">
                <Link to="/BusDetailForm">BusDetailForm</Link>
              </Menu.Item>
              <Menu.Item key="14">
                <Link to="/TaskFive">TaskFive</Link>
              </Menu.Item>
              <Menu.Item key="15">
                <Link to="/TaskSix">TaskSix</Link>
              </Menu.Item>
            </Menu>
          </Sider>

          <Content style={contentStyle}>
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="BarChart" element={<BarChart />} />
              <Route path="LineChart" element={<LineChart />} />
              <Route path="PieChart" element={<PieChart />} />
              <Route path="Cards" element={<Cards />} />
              <Route path="*" element={<Notfound />} />
              <Route path="TaskOne" element={<TaskOne />} />
              <Route path="TaskTwo" element={<TaskTwo />} />
              <Route path="TaskThree" element={<TaskThree />} />
              <Route path="TaskFour" element={<TaskFour />} />
              <Route path="New" element={<New />} />
              <Route path="DynamicRouting" element={<DynamicRouting />} />
              <Route path="/user/:key/:name" element={<User />}></Route>
              <Route path="BusDetailForm" element={<BusDetailForm />} />
              <Route path="TaskFive" element={<TaskFive />} />
              <Route path="TaskSix" element={<TaskSix />} />

            </Routes>
          </Content>
        </Layout>

        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
