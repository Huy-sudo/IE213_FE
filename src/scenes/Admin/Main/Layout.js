import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import CarTable from '../CarTable'
import AccessoryTable from '../AccessoryTable'
const { Header, Content, Footer, Sider } = Layout;


export default function LayoutAdmin(props) {
    return (
        <BrowserRouter>
            <Layout hasSider style={{ backgroundColor: 'white' }}>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} style={{ marginTop: 50 }}>
                        <Menu.Item key="0" icon={<UserOutlined />}>
                            <Link to={`/dashboard`}>Tổng quan</Link>

                        </Menu.Item>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to={`/accessory-bill`}>Đơn hàng phụ kiện</Link>
                        </Menu.Item>

                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to={`/car-order`}>Đơn đặt cọc xe</Link>
                        </Menu.Item>

                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <Link to='/car'>Xe</Link>
                        </Menu.Item>

                        <Menu.Item key="4" icon={<BarChartOutlined />}>
                            <Link to={`/accessory`}>Phụ kiện</Link>
                        </Menu.Item>

                        <Menu.Item key="5" icon={<CloudOutlined />}>
                            <Link to={`/showroom`}>Showroom</Link>
                        </Menu.Item>

                        <Menu.Item key="6" icon={<AppstoreOutlined />}>
                            <Link to={`/user`}>Người dùng</Link>
                        </Menu.Item>

                        <Menu.Item key="7" icon={<TeamOutlined />}>
                            <Link to={`/logout`}>Đăng xuất</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <h1 style={{ color: 'white', margin: '10px' }} >Trang Admin</h1>
                        <h3 style={{ color: 'white', margin: '10px' }} >{props.userName}</h3>
                    </Header>
                    <div>
                    {props.children} 
                    </div>                                            
                    <Footer style={{
                        textAlign: 'center',
                        // position: 'fixed',
                        // bottom: '0px',
                        // alignItems: 'center'
                    }}>Seven ©2022 Created by Hiepdeptrai</Footer>
                </Layout>
            </Layout>
        </BrowserRouter>
    )
}