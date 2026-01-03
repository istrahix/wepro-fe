import { Layout, Card, Row, Col, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Content } = Layout;

interface DataType {
  key: string;
  name: string;
  email: string;
  status: string;
  role: string;
}

const AdminDashboard = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active',
      role: 'User',
    },
    {
      key: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Active',
      role: 'Admin',
    },
  ];

  return (
    <Content style={{ padding: '24px' }}>
      <h1>Admin Dashboard</h1>
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <h3>Total Users</h3>
            <p style={{ fontSize: '24px', margin: 0 }}>1,234</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <h3>Active Users</h3>
            <p style={{ fontSize: '24px', margin: 0 }}>1,100</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <h3>Pending</h3>
            <p style={{ fontSize: '24px', margin: 0 }}>50</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <h3>Inactive</h3>
            <p style={{ fontSize: '24px', margin: 0 }}>84</p>
          </Card>
        </Col>
      </Row>
      <Card title="User Management">
        <Table columns={columns} dataSource={data} />
      </Card>
    </Content>
  );
};

export default AdminDashboard;

