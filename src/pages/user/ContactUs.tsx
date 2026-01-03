import { Card, Row, Col, Typography, Form, Input, Button, Space, Divider } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  SendOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Contact form submitted:', values);
    // In a real app, you would send this to your backend
    form.resetFields();
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      <Title level={1} style={{ fontSize: '32px', marginBottom: '32px', textAlign: 'center' }}>
        Холбоо барих
      </Title>

      <Row gutter={[32, 32]}>
        {/* Contact Form */}
        <Col xs={24} lg={14}>
          <Card title="Бидэнтэй холбогдох">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Нэр"
                    name="name"
                    rules={[{ required: true, message: 'Нэрээ оруулна уу' }]}
                  >
                    <Input placeholder="Таны нэр" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Утас"
                    name="phone"
                    rules={[{ required: true, message: 'Утасны дугаараа оруулна уу' }]}
                  >
                    <Input placeholder="Утасны дугаар" size="large" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="И-мэйл"
                name="email"
                rules={[
                  { required: true, message: 'И-мэйл хаягаа оруулна уу' },
                  { type: 'email', message: 'Зөв и-мэйл хаяг оруулна уу' },
                ]}
              >
                <Input placeholder="И-мэйл хаяг" size="large" />
              </Form.Item>
              <Form.Item
                label="Сэдэв"
                name="subject"
                rules={[{ required: true, message: 'Сэдвийг оруулна уу' }]}
              >
                <Input placeholder="Сэдэв" size="large" />
              </Form.Item>
              <Form.Item
                label="Мессеж"
                name="message"
                rules={[{ required: true, message: 'Мессежээ оруулна уу' }]}
              >
                <TextArea
                  rows={6}
                  placeholder="Таны мессеж..."
                  style={{ resize: 'none' }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SendOutlined />}
                  size="large"
                  style={{ minWidth: '150px' }}
                >
                  Илгээх
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* Contact Information */}
        <Col xs={24} lg={10}>
          <Card title="Холбоо барих мэдээлэл">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <PhoneOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '12px' }} />
                <Text strong style={{ fontSize: '16px' }}>Утас:</Text>
                <br />
                <Text style={{ fontSize: '16px', marginLeft: '32px' }}>77777287</Text>
              </div>

              <Divider />

              <div>
                <MailOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '12px' }} />
                <Text strong style={{ fontSize: '16px' }}>И-мэйл:</Text>
                <br />
                <Text style={{ fontSize: '16px', marginLeft: '32px' }}>info@wepro.mn</Text>
              </div>

              <Divider />

              <div>
                <EnvironmentOutlined
                  style={{ fontSize: '20px', color: '#1890ff', marginRight: '12px' }}
                />
                <Text strong style={{ fontSize: '16px' }}>Хаяг:</Text>
                <br />
                <Text style={{ fontSize: '16px', marginLeft: '32px', lineHeight: '1.8' }}>
                  Улаанбаатар хот, Хан уул дүүрэг, 15-р хороо, Рояал гарден хотхон, 28/2-1 тоот
                  15141, Монгол улс
                </Text>
              </div>

              <Divider />

              <div>
                <GlobalOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '12px' }} />
                <Text strong style={{ fontSize: '16px' }}>Вэб сайт:</Text>
                <br />
                <Text style={{ fontSize: '16px', marginLeft: '32px' }}>www.wepro.mn</Text>
              </div>
            </Space>

            <Divider style={{ margin: '24px 0' }} />

            <div>
              <Title level={4} style={{ marginBottom: '16px' }}>
                Ажлын цаг
              </Title>
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <div>
                  <Text strong>Даваа - Баасан:</Text> <Text>09:00 - 18:00</Text>
                </div>
                <div>
                  <Text strong>Бямба:</Text> <Text>09:00 - 15:00</Text>
                </div>
                <div>
                  <Text strong>Ням:</Text> <Text>Амралтын өдөр</Text>
                </div>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;

