import React, { Component } from 'react';
import { Affix, Menu, Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

class index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Layout>
                    <Affix offsetTop={0} >
                        <Header className="header" style={{ backgroundColor: '#A3D8E8' }}>
                            <div className="d-flex justify-content-between align-items-center w-40">
                                <Menu style={{ backgroundColor: '#A3D8E8', height: '65px' }} mode="horizontal" defaultSelectedKeys={['2']} >
                                    <Menu.Item key="home" className="text-white px-5 " icon={<image href="../../images/logo.png"></image>}>
                                        <Link to={`/home`} > </Link>
                                    </Menu.Item>
                                    <Menu.Item key="cars" className="text-white px-5 ">
                                        <Link to={`/cars`} > CÁC DÒNG XE </Link>
                                    </Menu.Item>
                                    <Menu.Item key="accessories" className="text-white px-5 ">
                                        <Link to={`/accessories`} > SHOWROOMS </Link>
                                    </Menu.Item >
                                    <Menu.Item key="news" className="text-white px-5 ">
                                        <Link to={`/news`} > TIN TỨC </Link>
                                    </Menu.Item >

                                    <Menu.Item key="about_us" className="text-white px-5 ">
                                        <Link to={`/about_us`} > VỀ CHÚNG TÔI </Link>
                                    </Menu.Item >

                                    <Menu.Item key="support" className="text-white px-5 ">
                                        <Link to={`/support`} > HỖ TRỢ </Link>
                                    </Menu.Item >

                                    <Menu.Item key="wishlist" className="text-white px-5 " icon={<FontAwesomeIcon icon="fa-solid fa-heart" />}>
                                        <Link to={`/wishlist`} ></Link>
                                    </Menu.Item >

                                    <Menu.Item key="cart" className="text-white px-5 " icon={<FontAwesomeIcon icon="fa-solid fa-cart-shopping" />}>
                                        <Link to={`/cart`} ></Link>
                                    </Menu.Item >

                                    <Menu.Item key="user" className="text-white px-5 " icon={<FontAwesomeIcon icon="fa-solid fa-user-tie" />}>
                                        <Link to={`/user`} ></Link>
                                    </Menu.Item >

                                </Menu>
                            </div>
                        </Header>
                    </Affix>
                    <Content style={{
                        width: '100%',
                        minHeight: '100vh'
                    }}>
                        {this.props.children}
                    </Content>

                    <Footer>
                    <div className='row'>
                        <div className='col-9'>
                            Công ty cổ phần SEVEN
                            <br></br>
                            Số GCNĐKDN: 20022001
                            <br></br>
                            Đăng ký lần đầu: Ngày 1/3/2022
                            <br></br>
                            Đăng ký thay đổi lần thứ 10: Ngày 20/3/2022
                            <br></br>
                            Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở Kế hoạch và Đầu tư tỉnh Nam Định
                            <br></br>
                            Địa chỉ: Đường Hàn Thuyên, khu phố 6, TP Thủ Đức, TP Hồ Chí Minh
                        </div>
                        <div className='col-3'>
                            Contact Us
                            <br></br>
                            <FontAwesomeIcon icon="fa-solid fa-envelope" /> Email: VeryCute@gm.uit.edu.vn
                            <br></br>
                            <FontAwesomeIcon icon="fa-solid fa-phone" /> Phone: 039 2022 001
                            <br></br>
                            Follow Us
                            <br></br>
                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </div>
                    </div>
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default index;
