import { Button } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import PropertyList from '../../components/PropertyList';
import PropertyFilter from '../../components/PropertyFilter';

const Rent = () => {
  const navigate = useNavigate();

  const handleFilter = (filterValues: any) => {
    // In a real app, you would filter the properties based on these values
    console.log('Filter values:', filterValues);
  };

  // Sample properties for rent
  const properties = [
    {
      id: '1',
      title: 'Ордон сууц',
      location: 'Улаанбаатар хот, Сүхбаатар дүүрэг',
      price: '₮ 1,500,000/сар',
      type: 'rent',
      bedrooms: 3,
      bathrooms: 2,
      area: '120 м²',
    },
    {
      id: '2',
      title: 'Гэр',
      location: 'Дархан хот, Хан-Уул дүүрэг',
      price: '₮ 800,000/сар',
      type: 'rent',
      bedrooms: 4,
      bathrooms: 2,
      area: '180 м²',
    },
    {
      id: '3',
      title: 'Оффис',
      location: 'Улаанбаатар хот, Баянгол дүүрэг',
      price: '₮ 2,500,000/сар',
      type: 'rent',
      area: '250 м²',
    },
    {
      id: '4',
      title: 'Ордон сууц',
      location: 'Эрдэнэт хот',
      price: '₮ 1,200,000/сар',
      type: 'rent',
      bedrooms: 2,
      bathrooms: 1,
      area: '95 м²',
    },
    {
      id: '5',
      title: 'Гэр',
      location: 'Улаанбаатар хот, Баянзүрх дүүрэг',
      price: '₮ 1,000,000/сар',
      type: 'rent',
      bedrooms: 3,
      bathrooms: 2,
      area: '150 м²',
    },
    {
      id: '6',
      title: 'Ордон сууц',
      location: 'Дархан хот',
      price: '₮ 700,000/сар',
      type: 'rent',
      bedrooms: 2,
      bathrooms: 1,
      area: '85 м²',
    },
  ];

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', margin: 0 }}>Түрээс</h1>
        <Button
          type="primary"
          icon={<EnvironmentOutlined />}
          size="large"
          onClick={() => navigate('/user/real-estate-map?type=rent')}
        >
          Газрын зураг дээр харах
        </Button>
      </div>
      <PropertyFilter type="rent" onFilter={handleFilter} />
      <PropertyList properties={properties} type="rent" />
    </div>
  );
};

export default Rent;
