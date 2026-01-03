import { Card, Row, Col, Typography } from 'antd';
import { TeamOutlined, TrophyOutlined, GlobalOutlined, HeartOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      <Title level={1} style={{ fontSize: '32px', marginBottom: '32px', textAlign: 'center' }}>
        Бидний тухай
      </Title>

      {/* Mission Section */}
      <Card style={{ marginBottom: '32px' }}>
        <Title level={2} style={{ fontSize: '28px', marginBottom: '16px' }}>
          Бидний зорилго
        </Title>
        <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
          WePro нь Монгол улсын тэргүүлэх үл хөдлөх хөрөнгийн зуучлалын компани бөгөөд бид
          үйлчлүүлэгчдэдээ найдвартай, мэргэжлийн үйлчилгээ үзүүлэхэд анхаарч ажилладаг. Бидний
          зорилго бол таны мөрөөдлийн үл хөдлөх хөрөнгийг олох, худалдах, түрээслэхэд туслах явдал
          юм.
        </Paragraph>
      </Card>

      {/* Values Section */}
      <Card style={{ marginBottom: '32px' }}>
        <Title level={2} style={{ fontSize: '28px', marginBottom: '24px' }}>
          Бидний үнэт зүйлс
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <TeamOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
              <Title level={4}>Мэргэжлийн баг</Title>
              <Paragraph>
                Бид туршлагатай, мэргэжлийн багтай бөгөөд танд хамгийн сайн зөвлөгөө өгөхөд бэлэн.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <TrophyOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
              <Title level={4}>Чанартай үйлчилгээ</Title>
              <Paragraph>
                Бид үйлчлүүлэгчдийн сэтгэл ханамжийг эн тэргүүнд тавьж, чанартай үйлчилгээ үзүүлдэг.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <GlobalOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
              <Title level={4}>Өргөн сүлжээ</Title>
              <Paragraph>
                Бид Монгол улсын бүх бүс нутагт үйл ажиллагаа явуулж, өргөн сүлжээтэй.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <HeartOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
              <Title level={4}>Хариуцлагатай</Title>
              <Paragraph>
                Бид үйлчлүүлэгчдийнхээ итгэлийг хүлээж, хариуцлагатай ажилладаг.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </Card>

      {/* History Section */}
      <Card style={{ marginBottom: '32px' }}>
        <Title level={2} style={{ fontSize: '28px', marginBottom: '16px' }}>
          Бидний түүх
        </Title>
        <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
          WePro компани 2021 онд байгуулагдсан бөгөөд түүхээс хойш олон мянган үйлчлүүлэгчдэд
          үйлчилж, мянга мянган үл хөдлөх хөрөнгийн гүйлгээг амжилттай хэрэгжүүлсэн. Бид
          тасралтгүй хөгжиж, орчин үеийн технологи ашиглан үйлчлүүлэгчдэдээ илүү сайн үйлчилгээ
          үзүүлэхэд анхаарч байна.
        </Paragraph>
      </Card>

      {/* Statistics Section */}
      <Card>
        <Title level={2} style={{ fontSize: '28px', marginBottom: '24px', textAlign: 'center' }}>
          Бидний амжилт
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={12} sm={6}>
            <div style={{ textAlign: 'center' }}>
              <Title level={1} style={{ color: '#1890ff', marginBottom: '8px' }}>
                1000+
              </Title>
              <Paragraph strong>Амжилттай гүйлгээ</Paragraph>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div style={{ textAlign: 'center' }}>
              <Title level={1} style={{ color: '#1890ff', marginBottom: '8px' }}>
                500+
              </Title>
              <Paragraph strong>Сэтгэл ханамжтай үйлчлүүлэгч</Paragraph>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div style={{ textAlign: 'center' }}>
              <Title level={1} style={{ color: '#1890ff', marginBottom: '8px' }}>
                50+
              </Title>
              <Paragraph strong>Мэргэжлийн агент</Paragraph>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div style={{ textAlign: 'center' }}>
              <Title level={1} style={{ color: '#1890ff', marginBottom: '8px' }}>
                10+
              </Title>
              <Paragraph strong>Жилийн туршлага</Paragraph>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AboutUs;

