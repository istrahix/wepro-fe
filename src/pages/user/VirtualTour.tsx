import { Row, Col, Card, Button, Typography, Space } from 'antd';
import { CalendarOutlined, EyeOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface Tour {
  id: string;
  name: string;
  image?: string;
  date: string;
  description?: string;
}

const VirtualTour = () => {
  const navigate = useNavigate();

  // Sample tours data
  const tours: Tour[] = [
    {
      id: '1',
      name: 'TOKYO TOWER - B1 давхар үйлчилгээний талбай',
      date: '2024-01-15',
      description: '254м.кв STRIP CLUB шууд орох боломжтой үйлчилгээний талбай',
    },
    {
      id: '2',
      name: 'Рояал гарден - Ордон сууц',
      date: '2024-01-20',
      description: '3 унтлагын өрөө, 2 угаалгын өрөөтэй ордон сууц',
    },
    {
      id: '3',
      name: 'Хан-Уул дүүрэг - Гэр',
      date: '2024-02-01',
      description: '4 унтлагын өрөө, 2 угаалгын өрөөтэй гэр',
    },
    {
      id: '4',
      name: 'Баянгол дүүрэг - Оффис',
      date: '2024-02-10',
      description: '250м.кв зайтай оффисын талбай',
    },
    {
      id: '5',
      name: 'Сүхбаатар дүүрэг - Ордон сууц',
      date: '2024-02-15',
      description: '2 унтлагын өрөө, 1 угаалгын өрөөтэй ордон сууц',
    },
    {
      id: '6',
      name: 'Баянзүрх дүүрэг - Гэр',
      date: '2024-02-20',
      description: '3 унтлагын өрөө, 2 угаалгын өрөөтэй гэр',
    },
  ];

  const handleTourClick = (tourId: string) => {
    navigate(`/user/virtual-tour/${tourId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('mn-MN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      <Title level={1} style={{ fontSize: '32px', marginBottom: '32px' }}>
        Виртуал аялал
      </Title>
      <Row gutter={[24, 24]}>
        {tours.map((tour) => (
          <Col xs={24} sm={12} lg={8} key={tour.id}>
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
                    height: '250px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px',
                    position: 'relative',
                  }}
                >
                  {tour.image ? (
                    <img
                      src={tour.image}
                      alt={tour.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ textAlign: 'center' }}>
                      <EyeOutlined style={{ fontSize: '48px', marginBottom: '8px' }} />
                      <div>Виртуал аялал</div>
                    </div>
                  )}
                </div>
              }
              actions={[
                <div key="action" style={{ padding: '0 12px 12px' }}>
                  <Button
                    type="primary"
                    block
                    icon={<ArrowRightOutlined />}
                    onClick={() => handleTourClick(tour.id)}
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
                  <Title
                    level={4}
                    style={{
                      marginBottom: '12px',
                      fontSize: '18px',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      overflow: 'visible',
                      textOverflow: 'clip',
                    }}
                  >
                    {tour.name}
                  </Title>
                }
                description={
                  <Space
                    direction="vertical"
                    size="small"
                    style={{ width: '100%', flex: 1 }}
                  >
                    {tour.description && (
                      <Text type="secondary" style={{ display: 'block', marginBottom: '8px' }}>
                        {tour.description}
                      </Text>
                    )}
                    <div style={{ marginTop: 'auto' }}>
                      <CalendarOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                      <Text>{formatDate(tour.date)}</Text>
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

export default VirtualTour;

