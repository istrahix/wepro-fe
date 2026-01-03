import { Layout, Card, Table, Button, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Content } = Layout;

interface UserType {
  key: string;
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const AdminUsers = () => {
  const columns: ColumnsType<UserType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
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
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => (
        <Tag color={role === 'Admin' ? 'red' : 'blue'}>{role}</Tag>
      ),
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
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button size="small">Edit</Button>
          <Button size="small" danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const data: UserType[] = [
    {
      key: '1',
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'User',
      status: 'Active',
    },
    {
      key: '2',
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Admin',
      status: 'Active',
    },
  ];

  return (
    <Content style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1>User Management</h1>
        <Button type="primary">Add New User</Button>
      </div>
      <Card>
        <Table columns={columns} dataSource={data} />
      </Card>
    </Content>
  );
};

export default AdminUsers;

