import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import React from 'react'
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


export default function Admin(props) {


    return (
        <Layout hasSider style={{backgroundColor:'white'}}>
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.index]} style={{marginTop:50}}>
                    <Menu.Item key="11" icon={<UserOutlined />}>
                        Tổng quan
                    </Menu.Item>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Đơn hàng phụ kiện
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        Đơn đặt cọc xe
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        Xe
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                        Phụ kiện
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CloudOutlined />}>
                        Showroom
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined />}>
                        Người dùng
                    </Menu.Item>
                    <Menu.Item key="7" icon={<TeamOutlined />}>
                        Đăng xuất
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <h1 style={{ color: 'white', margin: '10px' }} >{props.headName}</h1>
                    <h3 style={{ color: 'white', margin: '10px' }} >{props.userName}</h3>
                </Header>
                <Content>{props.children}</Content>
                <Footer style={{
                    textAlign: 'center',
                    // position: 'fixed',
                    // bottom: '0px',
                    // alignItems: 'center'
                }}>Seven ©2022 Created by Hiepdeptrai</Footer>
            </Layout>
        </Layout>
    )
}