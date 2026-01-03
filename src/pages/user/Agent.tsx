import { Card, Row, Col, Avatar, Typography, Tag, Divider, Button } from 'antd';
import { UserOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, HomeOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface Agent {
  id: string;
  name: string;
  image?: string;
  officeLocation: string;
  phone: string;
  email: string;
  propertiesForSale: number;
  propertiesForRent: number;
}

const Agent = () => {
  const navigate = useNavigate();

  // Sample agents data
  const agents: Agent[] = [
    {
      id: '1',
      name: 'Батбаяр',
      officeLocation: 'Улаанбаатар хот, Сүхбаатар дүүрэг',
      phone: '99112233',
      email: 'batbayar@wepro.mn',
      propertiesForSale: 12,
      propertiesForRent: 8,
    },
    {
      id: '2',
      name: 'Сараа',
      officeLocation: 'Улаанбаатар хот, Баянгол дүүрэг',
      phone: '99223344',
      email: 'saraa@wepro.mn',
      propertiesForSale: 15,
      propertiesForRent: 10,
    },
    {
      id: '3',
      name: 'Энхбаяр',
      officeLocation: 'Дархан хот',
      phone: '99334455',
      email: 'enkhabayar@wepro.mn',
      propertiesForSale: 9,
      propertiesForRent: 6,
    },
    {
      id: '4',
      name: 'Оюунцэцэг',
      officeLocation: 'Улаанбаатар хот, Баянзүрх дүүрэг',
      phone: '99445566',
      email: 'oyuntsetseg@wepro.mn',
      propertiesForSale: 20,
      propertiesForRent: 14,
    },
  ];

  const handleAgentClick = (agentId: string) => {
    navigate(`/user/agent/${agentId}`);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      <Title level={1} style={{ fontSize: '32px', marginBottom: '32px' }}>
        Агент
      </Title>
      <Row gutter={[24, 24]}>
        {agents.map((agent) => (
          <Col xs={24} sm={24} md={12} lg={12} xl={12} key={agent.id}>
            <Card
              hoverable
              style={{
                borderRadius: '12px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
              bodyStyle={{
                padding: '24px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  height: '100%',
                  flex: 1,
                }}
              >
                {/* Header Section: Avatar and Name */}
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                  }}
                >
                  <Avatar
                    size={100}
                    src={agent.image}
                    icon={<UserOutlined />}
                    style={{ flexShrink: 0 }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Title
                      level={3}
                      style={{
                        marginBottom: '12px',
                        marginTop: 0,
                        fontSize: '22px',
                        wordBreak: 'break-word',
                      }}
                    >
                      {agent.name}
                    </Title>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      <Tag color="green" style={{ margin: 0, padding: '4px 12px' }}>
                        <HomeOutlined style={{ marginRight: '4px' }} />
                        Худалдаа: {agent.propertiesForSale}
                      </Tag>
                      <Tag color="blue" style={{ margin: 0, padding: '4px 12px' }}>
                        <HomeOutlined style={{ marginRight: '4px' }} />
                        Түрээс: {agent.propertiesForRent}
                      </Tag>
                    </div>
                  </div>
                </div>

                <Divider style={{ margin: '12px 0' }} />

                {/* Contact Information */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                    flex: 1,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <EnvironmentOutlined
                      style={{
                        marginTop: '4px',
                        color: '#1890ff',
                        fontSize: '16px',
                        flexShrink: 0,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        wordBreak: 'break-word',
                      }}
                    >
                      {agent.officeLocation}
                    </Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <PhoneOutlined
                      style={{
                        color: '#1890ff',
                        fontSize: '16px',
                        flexShrink: 0,
                      }}
                    />
                    <Text style={{ fontSize: '14px' }}>{agent.phone}</Text>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      gridColumn: '1 / -1',
                    }}
                  >
                    <MailOutlined
                      style={{
                        marginTop: '4px',
                        color: '#1890ff',
                        fontSize: '16px',
                        flexShrink: 0,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: '14px',
                        wordBreak: 'break-all',
                      }}
                    >
                      {agent.email}
                    </Text>
                  </div>
                </div>
                <Divider style={{ margin: '16px 0' }} />
                <Button
                  type="primary"
                  block
                  icon={<ArrowRightOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAgentClick(agent.id);
                  }}
                  style={{
                    marginTop: 'auto',
                    height: '40px',
                    fontSize: '15px',
                    fontWeight: 500,
                    borderRadius: '6px',
                    margin: '0 8px',
                  }}
                >
                  Дэлгэрэнгүй харах
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Agent;
