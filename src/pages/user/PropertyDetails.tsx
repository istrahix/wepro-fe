import {
  Card,
  Row,
  Col,
  Typography,
  Tag,
  Space,
  Button,
  Divider,
  Form,
  Input,
  Descriptions,
  Image,
  Carousel,
} from 'antd';
import {
  HeartOutlined,
  ShareAltOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import PropertyList from '../../components/PropertyList';

const { Title, Text, Paragraph } = Typography;

interface Property {
  id: string;
  title: string;
  description: string;
  pricePerM2: string;
  totalPrice: string;
  propertyId: string;
  type: string;
  status: string;
  area: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  agentName: string;
  agentPhone: string;
  mainIndicators: {
    buildingFloors: string;
    propertyFloor: string;
    distanceFromCenter: string;
    paymentTerms: string;
    yearBuilt: string;
  };
  additionalIndicators: string[];
  images?: string[];
}

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [form] = Form.useForm();

  // Sample property data - in real app, fetch by id
  const property: Property = {
    id: '1',
    title:
      'ХУД 19-р хороо Туул голын хойно байрших TOKYO TOWER-ийн B1 давхарт 254м.кв STRIP CLUB шууд орох боломжтой үйлчилгээний талбайг ХУДАЛДАНА.',
    description:
      'ХУД 19-р хороо Туул голын хойно байрших TOKYO TOWER-ийн B1 давхарт 254м.кв STRIP CLUB шууд орох боломжтой үйлчилгээний талбайг ХУДАЛДАНА.',
    pricePerM2: '4,721,993₮/м2',
    totalPrice: '1,200,000,000₮',
    propertyId: '#01066728',
    type: 'Худалдаа үйлчилгээний талбай',
    status: 'Худалдаа',
    area: '254.1м2',
    address: 'Улаанбаатар хот, Хан-Уул дүүрэг, 18-р хороо, Рояал гарден 28/2-1',
    phone: '9980 8390',
    email: 'myangaam169@gmail.com',
    website: 'www.wepro.mn',
    agentName: 'О.Мянганбаяр',
    agentPhone: '9980 8390',
    mainIndicators: {
      buildingFloors: '20',
      propertyFloor: 'B1',
      distanceFromCenter: 'Хотын төвөөс 3-5 км',
      paymentTerms: 'Бэлэн мөнгөөр',
      yearBuilt: '2020',
    },
    additionalIndicators: [
      'Цэвэр бохир усны бие даасан системтэй',
      'Төвийн цэвэр бохир усны системд холбогдсон',
      'Лифттэй',
      'Урсдаг шаттай',
      'Өөрийн зогсоолтой',
      'Үйл ажиллагааны чиглэл заах',
      'Нэгдсэн харуул хамгаалалттай',
      'Төвийн дулаанд холбогдсон',
    ],
  };

  const similarProperties = [
    {
      id: '2',
      title: 'Ордон сууц',
      location: 'Улаанбаатар хот, Сүхбаатар дүүрэг',
      price: '₮ 850,000,000',
      type: 'sale',
      bedrooms: 3,
      bathrooms: 2,
      area: '120 м²',
    },
    {
      id: '3',
      title: 'Гэр',
      location: 'Дархан хот, Хан-Уул дүүрэг',
      price: '₮ 450,000,000',
      type: 'sale',
      bedrooms: 4,
      bathrooms: 2,
      area: '180 м²',
    },
    {
      id: '4',
      title: 'Оффис',
      location: 'Улаанбаатар хот, Баянгол дүүрэг',
      price: '₮ 1,200,000,000',
      type: 'sale',
      area: '250 м²',
    },
  ];

  const onFinish = (values: any) => {
    console.log('Contact form:', values);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could show a notification here
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header with Title and Actions */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <Title level={1} style={{ fontSize: '28px', margin: 0, flex: 1, marginRight: '16px' }}>
            {property.title}
          </Title>
          <Space>
            <Button
              icon={<HeartOutlined />}
              danger={isFavorite}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? 'Хасагдсан' : 'Хадгалах'}
            </Button>
            <Button icon={<ShareAltOutlined />} onClick={handleShare}>
              Хуваалцах
            </Button>
          </Space>
        </div>
        <Space size="large">
          <Text strong style={{ fontSize: '24px', color: '#1890ff' }}>
            {property.pricePerM2}
          </Text>
          <Text strong style={{ fontSize: '24px', color: '#52c41a' }}>
            {property.totalPrice}
          </Text>
        </Space>
      </div>

      <Row gutter={[24, 24]}>
        {/* Left Column - Main Content */}
        <Col xs={24} lg={16}>
          {/* Image/Video Section */}
          <Card style={{ marginBottom: '24px' }}>
            <Carousel autoplay>
              {[1, 2, 3].map((item) => (
                <div key={item}>
                  <div
                    style={{
                      height: '500px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '24px',
                    }}
                  >
                    Зураг {item}
                  </div>
                </div>
              ))}
            </Carousel>
          </Card>

          {/* Property Info */}
          <Card title="Үндсэн мэдээлэл" style={{ marginBottom: '24px' }}>
            <Descriptions column={1} bordered>
              <Descriptions.Item label="ID">{property.propertyId}</Descriptions.Item>
              <Descriptions.Item label="Төрөл">{property.type}</Descriptions.Item>
              <Descriptions.Item label="Төлөв">
                <Tag color="green">{property.status}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Талбай">{property.area}</Descriptions.Item>
            </Descriptions>
          </Card>

          {/* Description */}
          <Card title="Танилцуулга" style={{ marginBottom: '24px' }}>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              {property.description}
            </Paragraph>
          </Card>

          {/* Main Indicators */}
          <Card title="Үндсэн үзүүлэлт" style={{ marginBottom: '24px' }}>
            <Descriptions column={1}>
              <Descriptions.Item label="Хэдэн давхар барилга">
                {property.mainIndicators.buildingFloors}
              </Descriptions.Item>
              <Descriptions.Item label="Хэдэн давхарт байрлалтай">
                {property.mainIndicators.propertyFloor}
              </Descriptions.Item>
              <Descriptions.Item label="Хотын төвөөс хэдэн км зайтай">
                {property.mainIndicators.distanceFromCenter}
              </Descriptions.Item>
              <Descriptions.Item label="Төлбөрийн нөхцөл">
                {property.mainIndicators.paymentTerms}
              </Descriptions.Item>
              <Descriptions.Item label="Ашиглалтад орсон он">
                {property.mainIndicators.yearBuilt}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          {/* Additional Indicators */}
          <Card title="Нэмэлт үзүүлэлт" style={{ marginBottom: '24px' }}>
            <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '2' }}>
              {property.additionalIndicators.map((indicator, index) => (
                <li key={index}>{indicator}</li>
              ))}
            </ul>
          </Card>
        </Col>

        {/* Right Column - Contact Info */}
        <Col xs={24} lg={8}>
          {/* Agent Contact */}
          <Card title="Агенттай холбогдох" style={{ marginBottom: '24px' }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <Text strong>{property.agentName}</Text>
              </div>
              <div>
                <PhoneOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text>{property.agentPhone}</Text>
              </div>
            </Space>
          </Card>

          {/* Contact Form */}
          <Card title="Холбоо барих" style={{ marginBottom: '24px' }}>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Таны нэр"
                name="name"
                rules={[{ required: true, message: 'Нэрээ оруулна уу' }]}
              >
                <Input placeholder="Таны нэр" />
              </Form.Item>
              <Form.Item
                label="Таны и-мэйл"
                name="email"
                rules={[
                  { required: true, message: 'И-мэйл хаягаа оруулна уу' },
                  { type: 'email', message: 'Зөв и-мэйл хаяг оруулна уу' },
                ]}
              >
                <Input placeholder="Таны и-мэйл" />
              </Form.Item>
              <Form.Item
                label="Мессеж"
                name="message"
                initialValue={`Би [ID:${property.propertyId}] энэ үл хөдлөх хөрөнгийг сонирхож байна, би илүү дэлгэрэнгүй мэдээлэл авмаар байна.`}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Илгээх
                </Button>
              </Form.Item>
            </Form>
          </Card>

          {/* Contact Details */}
          <Card title="Холбоо барих мэдээлэл">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <EnvironmentOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text strong>Хаяг:</Text>
                <br />
                <Text>{property.address}</Text>
              </div>
              <div>
                <PhoneOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text strong>Утас:</Text> <Text>{property.phone}</Text>
              </div>
              <div>
                <MailOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text strong>И-мэйл:</Text> <Text>{property.email}</Text>
              </div>
              <div>
                <GlobalOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text strong>Вэб сайт:</Text> <Text>{property.website}</Text>
              </div>
              <div>
                <HomeOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                <Text strong>Талбай:</Text> <Text>{property.area}</Text>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Similar Properties */}
      <Divider />
      <div style={{ marginTop: '48px' }}>
        <Title level={2} style={{ marginBottom: '32px' }}>
          Санал болгож буй
        </Title>
        <PropertyList properties={similarProperties} type="sale" />
      </div>
    </div>
  );
};

export default PropertyDetails;

