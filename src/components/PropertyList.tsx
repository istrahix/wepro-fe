import { Row, Col, Card, Button, Tag, Space } from 'antd';
import { EnvironmentOutlined, DollarOutlined, HomeOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  image?: string;
}

interface PropertyListProps {
  properties: Property[];
  type: 'sale' | 'rent';
}

const PropertyList = ({ properties, type }: PropertyListProps) => {
  const navigate = useNavigate();

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/user/property/${propertyId}`);
  };

  return (
    <div style={{ padding: '0 0px 24px', maxWidth: '1400px', margin: '0 auto' }}>
      <Row gutter={[24, 24]}>
        {properties.map((property) => (
          <Col xs={24} sm={12} lg={8} key={property.id}>
            <Card
              hoverable
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
                    height: '200px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                  }}
                >
                  {property.image ? (
                    <img
                      src={property.image}
                      alt={property.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <HomeOutlined style={{ fontSize: '48px' }} />
                  )}
                </div>
              }
              actions={[
                <div key="action" style={{ padding: '0 12px 12px' }}>
                  <Button
                    type="primary"
                    block
                    icon={<ArrowRightOutlined />}
                    onClick={() => handlePropertyClick(property.id)}
                    style={{
                      height: '40px',
                      fontSize: '15px',
                      fontWeight: 500,
                      borderRadius: '6px',
                    }}
                  >
                    Дэлгэрэнгүй харах
                  </Button>
                </div>,
              ]}
            >
              <Card.Meta
                title={
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                      {property.title}
                    </div>
                    <Tag color={type === 'sale' ? 'green' : 'blue'}>
                      {type === 'sale' ? 'Худалдаа' : 'Түрээс'}
                    </Tag>
                  </div>
                }
                description={
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ width: '100%', flex: 1, display: 'flex' }}
                  >
                    <div>
                      <EnvironmentOutlined /> {property.location}
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1890ff' }}>
                      <DollarOutlined /> {property.price}
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginTop: '8px', marginBottom: 'auto' }}>
                      {property.bedrooms && (
                        <span>
                          <HomeOutlined /> {property.bedrooms} Унтлагын өрөө
                        </span>
                      )}
                      {property.bathrooms && (
                        <span>
                          🛁 {property.bathrooms} Угаалгын өрөө
                        </span>
                      )}
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
  );
};

export default PropertyList;

