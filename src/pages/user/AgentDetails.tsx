import { Card, Row, Col, Avatar, Space, Typography, Button, Divider, Tag } from 'antd';
import {
  UserOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

interface Agent {
  id: string;
  name: string;
  image?: string;
  officeLocation: string;
  phone: string;
  email: string;
  propertiesForSale: number;
  propertiesForRent: number;
  bio?: string;
}

const AgentDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Sample agent data - in real app, fetch by id
  const agents: Agent[] = [
    {
      id: '1',
      name: 'Батбаяр',
      officeLocation: 'Улаанбаатар хот, Сүхбаатар дүүрэг',
      phone: '99112233',
      email: 'batbayar@wepro.mn',
      propertiesForSale: 12,
      propertiesForRent: 8,
      bio: '10+ жилийн туршлагатай үл хөдлөх хөрөнгийн зуучлагч. Таны мөрөөдлийн үл хөдлөх хөрөнгийг олох, худалдах, түрээслэхэд туслана.',
    },
    {
      id: '2',
      name: 'Сараа',
      officeLocation: 'Улаанбаатар хот, Баянгол дүүрэг',
      phone: '99223344',
      email: 'saraa@wepro.mn',
      propertiesForSale: 15,
      propertiesForRent: 10,
      bio: 'Мэргэжлийн үл хөдлөх хөрөнгийн зуучлагч. Ордон сууц, гэр, оффис зэрэг бүх төрлийн үл хөдлөх хөрөнгийн үйлчилгээ үзүүлнэ.',
    },
    {
      id: '3',
      name: 'Энхбаяр',
      officeLocation: 'Дархан хот',
      phone: '99334455',
      email: 'enkhabayar@wepro.mn',
      propertiesForSale: 9,
      propertiesForRent: 6,
      bio: 'Дархан хотын үл хөдлөх хөрөнгийн мэргэжилтэн. Орон сууц, гэрийн худалдаа, түрээслэлтэд туслана.',
    },
    {
      id: '4',
      name: 'Оюунцэцэг',
      officeLocation: 'Улаанбаатар хот, Баянзүрх дүүрэг',
      phone: '99445566',
      email: 'oyuntsetseg@wepro.mn',
      propertiesForSale: 20,
      propertiesForRent: 14,
      bio: 'Топ агент, 15+ жилийн туршлага. Улаанбаатар хотын бүх дүүрэгт үйлчилгээ үзүүлнэ.',
    },
  ];

  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Title>Агент олдсонгүй</Title>
        <Button onClick={() => navigate('/user/agent')}>Агент жагсаалт руу буцах</Button>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/user/agent')}
        style={{ marginBottom: '24px' }}
      >
        Буцах
      </Button>

      <Card>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <Avatar
            size={200}
            src={agent.image}
            icon={<UserOutlined />}
            style={{ flexShrink: 0 }}
          />
          <div style={{ flex: 1, minWidth: '300px' }}>
            <Title level={2} style={{ marginBottom: '24px' }}>
              {agent.name}
            </Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <EnvironmentOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text strong>Оффис:</Text> <Text>{agent.officeLocation}</Text>
              </div>
              <div>
                <PhoneOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text strong>Утас:</Text> <Text>{agent.phone}</Text>
              </div>
              <div>
                <MailOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text strong>Имэйл:</Text> <Text>{agent.email}</Text>
              </div>
              <Divider />
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <Tag color="green" style={{ padding: '8px 16px', fontSize: '16px' }}>
                  <HomeOutlined style={{ marginRight: '8px' }} />
                  Худалдаа: {agent.propertiesForSale}
                </Tag>
                <Tag color="blue" style={{ padding: '8px 16px', fontSize: '16px' }}>
                  <HomeOutlined style={{ marginRight: '8px' }} />
                  Түрээс: {agent.propertiesForRent}
                </Tag>
              </div>
            </Space>
          </div>
        </div>

        {agent.bio && (
          <>
            <Divider />
            <div>
              <Title level={4}>Биографи</Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                {agent.bio}
              </Paragraph>
            </div>
          </>
        )}

        <Divider />
        <div style={{ textAlign: 'center' }}>
          <Space size="large">
            <Button type="primary" size="large" icon={<PhoneOutlined />}>
              Утасдах
            </Button>
            <Button type="primary" size="large" icon={<MailOutlined />}>
              Имэйл илгээх
            </Button>
            <Button size="large" onClick={() => navigate(`/user/sales?agent=${agent.id}`)}>
              Агентын үл хөдлөх хөрөнгө харах
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default AgentDetails;

