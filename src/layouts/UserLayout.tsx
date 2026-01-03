import { Layout, Menu, Button, Space, Row, Col, Typography, Divider } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import logo from '/logo-new.png';

const { Text, Title } = Typography;

const { Header, Content, Footer } = Layout;

const UserLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/user/sales',
      label: 'Худалдаа',
    },
    {
      key: '/user/rent',
      label: 'Түрээс',
    },
    {
      key: '/user/agent',
      label: 'Агент',
    },
    {
      key: '/user/virtual-tour',
      label: 'Виртуал аялал',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <style>
        {`
          .ant-menu-dark.ant-menu-horizontal .ant-menu-item-selected {
            background-color: transparent !important;
          }
          .ant-menu-dark.ant-menu-horizontal .ant-menu-item:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
          }
        `}
      </style>
      {/* Top Info Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '29px',
          zIndex: 1001,
          background: '#1e3c6b',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '14px',
            color: '#9e9e9e',
            width: '100%',
          }}
        >
          <Space size="large">
            <Space size="small">
              <PhoneOutlined />
              <span>77777287</span>
            </Space>
            <Space size="small">
              <MailOutlined />
              <span>info@wepro.mn</span>
            </Space>
          </Space>
          <Space size="large">
            <Button
              type="link"
              style={{ color: '#9e9e9e', padding: 0 }}
              onClick={() => navigate('/user/about')}
            >
              Бидний тухай
            </Button>
            |
            <Button
              type="link"
              style={{ color: '#9e9e9e', padding: 0 }}
              onClick={() => navigate('/user/contact')}
            >
              Холбоо барих
            </Button>
            <Button
              type="link"
              icon={<GlobalOutlined />}
              style={{ color: '#9e9e9e', padding: 0 }}
            >
              🇲🇳
            </Button>
          </Space>
        </div>
      </div>
      {/* Divider Line */}
      <div
        style={{
          position: 'fixed',
          top: '29px',
          width: '100%',
          height: '1px',
          zIndex: 1001,
          background: '#1a2f5a',
        }}
      />
      <Header
        style={{
          position: 'fixed',
          top: '30px',
          width: '100%',
          height: '76px',
          zIndex: 1000,
          background: '#234271',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          padding: '0',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <img
              src={logo}
              alt="WePro Logo"
              style={{ height: '50px', cursor: 'pointer' }}
              onClick={() => navigate('/user')}
            />
            <Menu
              mode="horizontal"
              theme="dark"
              selectedKeys={[location.pathname]}
              items={menuItems}
              onClick={handleMenuClick}
              style={{
                // flex: 1,
                borderBottom: 'none',
                lineHeight: '64px',
                background: 'transparent',
              }}
            />
          </div>
        </div>
      </Header>
      <Content style={{ marginTop: '106px', minHeight: 'calc(100vh - 106px)' }}>
        <Outlet />
      </Content>
      <Footer
        style={{
          background: '#1e3c6b',
          color: 'white',
          padding: '48px 24px 24px',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Row gutter={[32, 32]}>
            {/* Logo and Social Media */}
            <Col xs={24} sm={24} md={6} lg={6}>
              <div style={{ marginBottom: '24px' }}>
                <img
                  src={logo}
                  alt="WePro Logo"
                  style={{ height: '60px', marginBottom: '16px' }}
                />
              </div>
              <Space size="large">
                <Button
                  type="link"
                  icon={<FacebookOutlined />}
                  style={{ color: 'white', fontSize: '20px', padding: 0 }}
                  href="https://facebook.com"
                  target="_blank"
                />
                <Button
                  type="link"
                  icon={<TwitterOutlined />}
                  style={{ color: 'white', fontSize: '20px', padding: 0 }}
                  href="https://twitter.com"
                  target="_blank"
                />
                <Button
                  type="link"
                  icon={<InstagramOutlined />}
                  style={{ color: 'white', fontSize: '20px', padding: 0 }}
                  href="https://instagram.com"
                  target="_blank"
                />
                <Button
                  type="link"
                  icon={<LinkedinOutlined />}
                  style={{ color: 'white', fontSize: '20px', padding: 0 }}
                  href="https://linkedin.com"
                  target="_blank"
                />
              </Space>
            </Col>

            {/* Contact Information */}
            <Col xs={24} sm={12} md={6} lg={6}>
              <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
                Холбоо барих
              </Title>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div>
                  <PhoneOutlined style={{ marginRight: '8px', color: '#9e9e9e' }} />
                  <Text style={{ color: '#9e9e9e' }}>77777287</Text>
                </div>
                <div>
                  <MailOutlined style={{ marginRight: '8px', color: '#9e9e9e' }} />
                  <Text style={{ color: '#9e9e9e' }}>info@wepro.mn</Text>
                </div>
              </Space>
            </Col>

            {/* Address */}
            <Col xs={24} sm={12} md={6} lg={6}>
              <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
                Хаяг/байршил
              </Title>
              <div>
                <EnvironmentOutlined style={{ marginRight: '8px', color: '#9e9e9e' }} />
                <Text style={{ color: '#9e9e9e', lineHeight: '1.8' }}>
                  Улаанбаатар хот, Хан уул дүүрэг, 15-р хороо, Рояал гарден хотхон, 28/2-1 тоот
                  15141, Монгол улс
                </Text>
              </div>
            </Col>

            {/* Email */}
            <Col xs={24} sm={12} md={6} lg={6}>
              <Title level={5} style={{ color: 'white', marginBottom: '16px' }}>
                И-мэйл
              </Title>
              <div>
                <MailOutlined style={{ marginRight: '8px', color: '#9e9e9e' }} />
                <Text style={{ color: '#9e9e9e' }}>info@wepro.mn</Text>
              </div>
            </Col>
          </Row>

          <Divider style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '32px 0 24px' }} />

          {/* Copyright */}
          <div style={{ textAlign: 'center' }}>
            <Text style={{ color: '#9e9e9e' }}>
              © 2021. WEPRO.mn, Бүх эрх хамгаалагдсан
            </Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default UserLayout;
