import { Card, Row, Col, Input, Select, Button, Collapse, Form, Space } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Panel } = Collapse;

interface PropertyFilterProps {
  type: 'sale' | 'rent';
  onFilter: (filters: any) => void;
}

const PropertyFilter = ({ type, onFilter }: PropertyFilterProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    onFilter(values);
  };

  const handleReset = () => {
    form.resetFields();
    onFilter({});
  };

  return (
    <Card style={{ padding: 0, marginBottom: '24px' }}>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        {/* Primary Search Inputs */}
        <div style={{ padding: '24px', background: 'white', borderRadius: '8px 8px 0 0' }}>
          <Row gutter={[16, 16]}>
            {/* Keyword Search */}
            <Col xs={24} md={8}>
              <Form.Item name="keyword" style={{ marginBottom: 0 }}>
                <Input
                  placeholder="Код, байршил, дүүрэг, төрөл, ангилал..."
                  style={{ height: '40px' }}
                />
              </Form.Item>
            </Col>

            {/* Other Filters */}
            <Col xs={24} md={16}>
              <Row gutter={[16, 16]}>
                {/* Type */}
                <Col xs={24} sm={8} md={6}>
                  <Form.Item name="propertyType" style={{ marginBottom: 0 }}>
                    <Select
                      placeholder="Төрөл..."
                      style={{ height: '40px' }}
                      allowClear
                    >
                      <Option value="1">Орон сууц</Option>
                      <Option value="2">Хашаа байшин</Option>
                      <Option value="3">Хаус</Option>
                      <Option value="4">Худалдаа үйлчилгээний талбай</Option>
                      <Option value="5">Зогсоол</Option>
                      <Option value="7">Газар</Option>
                      <Option value="9">Хотхон</Option>
                      <Option value="36">Зуслан</Option>
                      <Option value="37">Обьект</Option>
                      <Option value="50">Оффис</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* Status */}
                <Col xs={24} sm={8} md={6}>
                  <Form.Item name="status" style={{ marginBottom: 0 }}>
                    <Select
                      placeholder="Төлөв..."
                      style={{ height: '40px' }}
                      defaultValue={type === 'sale' ? '1' : '2'}
                      allowClear
                    >
                      <Option value="1">Худалдаа</Option>
                      <Option value="2">Түрээс</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* Min Price */}
                <Col xs={24} sm={8} md={6}>
                  <Form.Item name="minPrice" style={{ marginBottom: 0 }}>
                    <Input
                      placeholder="Доод үнэ"
                      suffix="₮"
                      style={{ height: '40px' }}
                    />
                  </Form.Item>
                </Col>

                {/* Max Price */}
                <Col xs={24} sm={8} md={6}>
                  <Form.Item name="maxPrice" style={{ marginBottom: 0 }}>
                    <Input
                      placeholder="Дээд үнэ"
                      suffix="₮"
                      style={{ height: '40px' }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Search Button */}
          <Row style={{ marginTop: '16px' }}>
            <Col span={24}>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SearchOutlined />}
                  style={{ height: '40px', minWidth: '120px' }}
                >
                  ХАЙХ
                </Button>
                <Button onClick={handleReset} style={{ height: '40px' }}>
                  Цэвэрлэх
                </Button>
              </Space>
            </Col>
          </Row>
        </div>

        {/* Advanced Search - Collapsible */}
        <div style={{ background: '#f5f5f5', padding: '16px 24px', borderTop: '1px solid #e8e8e8' }}>
          <Collapse
            ghost
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
          >
            <Panel
              header={
                <span style={{ fontWeight: 500 }}>
                  {/* <DownOutlined style={{ marginRight: '8px' }} /> */}
                  Дэлгэрэнгүй хайлт
                </span>
              }
              key="1"
            >
              <Row gutter={[16, 16]} style={{ paddingTop: '16px' }}>
                {/* District */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item label="Дүүрэг" name="district" style={{ marginBottom: 0 }}>
                    <Select placeholder="Бүх дүүрэг" allowClear>
                      <Option value="23">Багануур</Option>
                      <Option value="24">Багахангай</Option>
                      <Option value="25">Баянгол</Option>
                      <Option value="26">Баянзүрх</Option>
                      <Option value="27">Налайх</Option>
                      <Option value="28">Сонгино хайрхан</Option>
                      <Option value="29">Сүхбаатар</Option>
                      <Option value="30">Хан-Уул</Option>
                      <Option value="31">Чингэлтэй</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* Min Area */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item label="Доод талбайн хэмжээ" name="minArea" style={{ marginBottom: 0 }}>
                    <Select placeholder="Доод талбайн хэмжээ" allowClear>
                      <Option value="1">1м²</Option>
                      <Option value="31">31м²</Option>
                      <Option value="51">51м²</Option>
                      <Option value="81">81м²</Option>
                      <Option value="100">100м² +</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* Max Area */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item label="Дээд талбайн хэмжээ" name="maxArea" style={{ marginBottom: 0 }}>
                    <Select placeholder="Дээд талбайн хэмжээ" allowClear>
                      <Option value="30">30м²</Option>
                      <Option value="50">50м²</Option>
                      <Option value="80">80м²</Option>
                      <Option value="100">100м²</Option>
                      <Option value="100+">100м² +</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* Rooms */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item label="Өрөөний тоо" name="rooms" style={{ marginBottom: 0 }}>
                    <Select placeholder="Бүх өрөө" allowClear>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                      <Option value="5">5</Option>
                      <Option value="5+">5+</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* Bedrooms */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item label="Унтлагын өрөө" name="bedrooms" style={{ marginBottom: 0 }}>
                    <Select placeholder="Унтлагын" allowClear>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                      <Option value="5">5</Option>
                      <Option value="5+">5+</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* Bathrooms */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item label="Ариун цэврийн өрөө" name="bathrooms" style={{ marginBottom: 0 }}>
                    <Select placeholder="АЦӨ" allowClear>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                      <Option value="5">5</Option>
                      <Option value="5+">5+</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </div>
      </Form>
    </Card>
  );
};

export default PropertyFilter;

