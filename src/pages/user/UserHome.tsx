import { Row, Col, Card, Button, Typography, Space } from 'antd';
import { HomeOutlined, StarOutlined, PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const UserHome = () => {
  const navigate = useNavigate();

  // Sample featured properties
  const featuredProperties = [
    {
      id: '1',
      title: 'Ордон сууц',
      location: 'Улаанбаатар хот',
      price: '₮ 850,000,000',
      area: '120 м²',
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: '2',
      title: 'Гэр',
      location: 'Дархан хот',
      price: '₮ 450,000,000',
      area: '180 м²',
      bedrooms: 4,
      bathrooms: 2,
    },
    {
      id: '3',
      title: 'Оффис',
      location: 'Улаанбаатар хот',
      price: '₮ 1,200,000,000',
      area: '250 м²',
    },
  ];

  // Sample recent properties
  const recentProperties = [
    {
      id: '4',
      title: 'Ордон сууц',
      location: 'Эрдэнэт хот',
      price: '₮ 650,000,000',
      area: '95 м²',
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      id: '5',
      title: 'Гэр',
      location: 'Улаанбаатар хот',
      price: '₮ 550,000,000',
      area: '150 м²',
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: '6',
      title: 'Ордон сууц',
      location: 'Дархан хот',
      price: '₮ 380,000,000',
      area: '85 м²',
      bedrooms: 2,
      bathrooms: 1,
    },
  ];

  return (
    <div style={{ background: '#f5f5f5' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '120px 24px 80px',
          textAlign: 'center',
        }}
      >
        <Title level={1} style={{ color: 'white', fontSize: '48px', marginBottom: '24px' }}>
          Үндэсний үл хөдлөх эд хөрөнгө зуучлалын компани
        </Title>
        <Paragraph style={{ color: 'white', fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
          Таны мөрөөдлийн үл хөдлөх хөрөнгийг олох, худалдах, түрээслэхэд бид танд туслана
        </Paragraph>
        <Space size="large" style={{ marginTop: '32px' }}>
          <Button
            type="primary"
            size="large"
            style={{ height: '50px', fontSize: '18px', padding: '0 40px' }}
            onClick={() => navigate('/user/sales')}
          >
            Худалдаа харах
          </Button>
          <Button
            size="large"
            style={{
              height: '50px',
              fontSize: '18px',
              padding: '0 40px',
              background: 'rgba(255,255,255,0.2)',
              borderColor: 'white',
              color: 'white',
            }}
            onClick={() => navigate('/user/rent')}
          >
            Түрээс харах
          </Button>
        </Space>
      </div>

      {/* Featured Properties Section */}
      <div style={{ padding: '80px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '36px', marginBottom: '16px' }}>
            <StarOutlined style={{ color: '#ffc107', marginRight: '12px' }} />
            Онцох үл хөдлөх хөрөнгө
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#666' }}>
            Манай сонгосон шилдэг үл хөдлөх хөрөнгийг үзээрэй
          </Paragraph>
        </div>
        <Row gutter={[24, 24]}>
          {featuredProperties.map((property) => (
            <Col xs={24} sm={12} lg={8} key={property.id}>
              <Card
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                bodyStyle={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
                cover={
                  <div
                    style={{
                      height: '220px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    <HomeOutlined style={{ fontSize: '64px' }} />
                  </div>
                }
                actions={[
                  <div key="action" style={{ padding: '0 12px 12px' }}>
                    <Button
                      type="primary"
                      block
                      icon={<ArrowRightOutlined />}
                      onClick={() => navigate(`/user/property/${property.id}`)}
                      style={{
                        height: '40px',
                        fontSize: '15px',
                        fontWeight: 500,
                        borderRadius: '6px',
                        cursor: 'pointer',
                      }}
                    >
                      Дэлгэрэнгүй харах
                    </Button>
                  </div>,
                ]}
              >
                <Card.Meta
                  title={
                    <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                      {property.title}
                    </div>
                  }
                  description={
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%', flex: 1, display: 'flex' }}
                    >
                      <div>📍 {property.location}</div>
                      <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1890ff' }}>
                        💰 {property.price}
                      </div>
                      <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap', marginBottom: 'auto' }}>
                        {property.bedrooms && <span>🛏️ {property.bedrooms} Унтлагын өрөө</span>}
                        {property.bathrooms && <span>🛁 {property.bathrooms} Угаалгын өрөө</span>}
                        <span>📐 {property.area}</span>
                      </div>
                    </Space>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* CTA Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <Title level={2} style={{ color: 'white', fontSize: '40px', marginBottom: '24px' }}>
          ТА БИДЭНТЭЙ НЭГДЭХЭД БЭЛЭН ҮҮ?
        </Title>
        <Paragraph style={{ color: 'white', fontSize: '20px', marginBottom: '32px' }}>
          Манай багт нэгдэж, үл хөдлөх хөрөнгийн бизнест амжилт олоорой
        </Paragraph>
        <Button
          type="primary"
          size="large"
          style={{
            height: '50px',
            fontSize: '18px',
            padding: '0 40px',
            background: 'white',
            borderColor: 'white',
            color: '#f5576c',
          }}
        >
          Бидэнтэй холбогдох
        </Button>
      </div>

      {/* Recent Properties Section */}
      <div style={{ padding: '80px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={2} style={{ fontSize: '36px', marginBottom: '16px' }}>
            <PlusOutlined style={{ color: '#1890ff', marginRight: '12px' }} />
            Сүүлд нэмэгдсэн үл хөдлөх хөрөнгө
          </Title>
          <Paragraph style={{ fontSize: '18px', color: '#666' }}>
            Шинээр нэмэгдсэн үл хөдлөх хөрөнгийг үзээрэй
          </Paragraph>
        </div>
        <Row gutter={[24, 24]}>
          {recentProperties.map((property) => (
            <Col xs={24} sm={12} lg={8} key={property.id}>
              <Card
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                bodyStyle={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
                cover={
                  <div
                    style={{
                      height: '220px',
                      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    <HomeOutlined style={{ fontSize: '64px' }} />
                  </div>
                }
                actions={[
                  <div key="action" style={{ padding: '0 12px 12px' }}>
                    <Button
                      type="primary"
                      block
                      icon={<ArrowRightOutlined />}
                      onClick={() => navigate(`/user/property/${property.id}`)}
                      style={{
                        height: '40px',
                        fontSize: '15px',
                        fontWeight: 500,
                        borderRadius: '6px',
                        cursor: 'pointer',
                      }}
                    >
                      Дэлгэрэнгүй харах
                    </Button>
                  </div>,
                ]}
              >
                <Card.Meta
                  title={
                    <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                      {property.title}
                    </div>
                  }
                  description={
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: '100%', flex: 1, display: 'flex' }}
                    >
                      <div>📍 {property.location}</div>
                      <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1890ff' }}>
                        💰 {property.price}
                      </div>
                      <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap', marginBottom: 'auto' }}>
                        {property.bedrooms && <span>🛏️ {property.bedrooms} Унтлагын өрөө</span>}
                        {property.bathrooms && <span>🛁 {property.bathrooms} Угаалгын өрөө</span>}
                        <span>📐 {property.area}</span>
                      </div>
                    </Space>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('/user/sales')}
            style={{ height: '50px', fontSize: '18px', padding: '0 40px' }}
          >
            Бүх үл хөдлөх хөрөнгө харах
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
