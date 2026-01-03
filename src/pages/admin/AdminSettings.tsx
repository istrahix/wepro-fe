import { Layout, Card, Form, Input, Button, Switch } from 'antd';

const { Content } = Layout;

const AdminSettings = () => {
  const onFinish = (values: any) => {
    console.log('Settings update:', values);
  };

  return (
    <Content style={{ padding: '24px' }}>
      <h1>Admin Settings</h1>
      <Card style={{ maxWidth: '800px' }}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            siteName: 'WePro',
            maintenanceMode: false,
            allowRegistration: true,
          }}
        >
          <Form.Item label="Site Name" name="siteName">
            <Input />
          </Form.Item>
          <Form.Item label="Maintenance Mode" name="maintenanceMode" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Allow User Registration" name="allowRegistration" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Settings
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};

export default AdminSettings;

