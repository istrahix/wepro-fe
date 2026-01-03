import { Card, Form, Input, Button } from 'antd';

const UserProfile = () => {
  const onFinish = (values: any) => {
    console.log('Profile update:', values);
  };

  return (
    <div style={{ padding: '24px', minHeight: 'calc(100vh - 200px)' }}>
      <h1>User Profile</h1>
      <Card style={{ maxWidth: '600px' }}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            name: 'John Doe',
            email: 'john.doe@example.com',
          }}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default UserProfile;

