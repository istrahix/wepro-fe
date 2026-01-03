import { useEffect, useState, useRef, useMemo } from 'react';
import { Card, Typography, Button, Space, Tag } from 'antd';
import { ArrowLeftOutlined, HomeOutlined, DollarOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PropertyFilter from '../../components/PropertyFilter';
import 'leaflet/dist/leaflet.css';

const { Title, Text } = Typography;

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'sale' | 'rent';
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  coordinates: [number, number]; // [lat, lng]
}

const RealEstateMap = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = (searchParams.get('type') as 'sale' | 'rent') || 'sale';
  const [isClient, setIsClient] = useState(false);
  const [MapComponents, setMapComponents] = useState<any>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState<any>({});

  useEffect(() => {
    setIsClient(true);
    // Dynamically import Leaflet components to avoid SSR issues
    Promise.all([
      import('react-leaflet'),
      import('leaflet'),
    ]).then(([reactLeaflet, L]) => {
      // Fix for default marker icons in React-Leaflet
      delete (L.default.Icon.Default.prototype as any)._getIconUrl;
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      setMapComponents({
        MapContainer: reactLeaflet.MapContainer,
        TileLayer: reactLeaflet.TileLayer,
        Marker: reactLeaflet.Marker,
        Popup: reactLeaflet.Popup,
      });
    });
  }, []);

  // Ulaanbaatar coordinates: approximately 47.8864° N, 106.9057° E
  const [properties] = useState<Property[]>([
    {
      id: '1',
      title: 'Ордон сууц',
      location: 'Улаанбаатар хот, Сүхбаатар дүүрэг',
      price: '₮ 850,000,000',
      type: 'sale',
      bedrooms: 3,
      bathrooms: 2,
      area: '120 м²',
      coordinates: [47.9204, 106.9175], // Sukhbaatar district
    },
    {
      id: '2',
      title: 'Гэр',
      location: 'Дархан хот',
      price: '₮ 450,000,000',
      type: 'sale',
      bedrooms: 4,
      bathrooms: 2,
      area: '180 м²',
      coordinates: [49.4867, 105.9228], // Darkhan city
    },
    {
      id: '3',
      title: 'Оффис',
      location: 'Улаанбаатар хот, Баянгол дүүрэг',
      price: '₮ 1,200,000,000',
      type: 'sale',
      area: '250 м²',
      coordinates: [47.9044, 106.9067], // Bayangol district
    },
    {
      id: '4',
      title: 'Ордон сууц',
      location: 'Эрдэнэт хот',
      price: '₮ 650,000,000',
      type: 'sale',
      bedrooms: 2,
      bathrooms: 1,
      area: '95 м²',
      coordinates: [49.0275, 104.0444], // Erdenet city
    },
    {
      id: '5',
      title: 'Гэр',
      location: 'Улаанбаатар хот, Баянзүрх дүүрэг',
      price: '₮ 550,000,000',
      type: 'sale',
      bedrooms: 3,
      bathrooms: 2,
      area: '150 м²',
      coordinates: [47.9144, 106.9208], // Bayanzurkh district
    },
    {
      id: '6',
      title: 'Ордон сууц',
      location: 'Дархан хот',
      price: '₮ 380,000,000',
      type: 'sale',
      bedrooms: 2,
      bathrooms: 1,
      area: '85 м²',
      coordinates: [49.4867, 105.9228], // Darkhan city
    },
    {
      id: '7',
      title: 'Ордон сууц',
      location: 'Улаанбаатар хот, Сүхбаатар дүүрэг',
      price: '₮ 1,500,000/сар',
      type: 'rent',
      bedrooms: 3,
      bathrooms: 2,
      area: '120 м²',
      coordinates: [47.9204, 106.9175],
    },
    {
      id: '8',
      title: 'Гэр',
      location: 'Улаанбаатар хот, Хан-Уул дүүрэг',
      price: '₮ 800,000/сар',
      type: 'rent',
      bedrooms: 4,
      bathrooms: 2,
      area: '180 м²',
      coordinates: [47.8864, 106.9057], // Khan-Uul district
    },
    {
      id: '9',
      title: 'Оффис',
      location: 'Улаанбаатар хот, Баянгол дүүрэг',
      price: '₮ 2,500,000/сар',
      type: 'rent',
      area: '250 м²',
      coordinates: [47.9044, 106.9067],
    },
  ]);

  // Helper function to extract numeric price from string
  const extractPrice = (priceStr: string): number => {
    // Remove all non-digit characters except commas and periods
    const cleaned = priceStr.replace(/[^\d,.]/g, '');
    // Remove commas and convert to number
    return parseFloat(cleaned.replace(/,/g, '')) || 0;
  };

  // Helper function to extract numeric area from string
  const extractArea = (areaStr: string): number => {
    const match = areaStr.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Helper function to check if location matches district
  const matchesDistrict = (location: string, districtValue: string): boolean => {
    if (!districtValue) return true;
    
    const districtMap: { [key: string]: string } = {
      '23': 'Багануур',
      '24': 'Багахангай',
      '25': 'Баянгол',
      '26': 'Баянзүрх',
      '27': 'Налайх',
      '28': 'Сонгино хайрхан',
      '29': 'Сүхбаатар',
      '30': 'Хан-Уул',
      '31': 'Чингэлтэй',
    };
    
    const districtName = districtMap[districtValue];
    return districtName ? location.includes(districtName) : true;
  };

  // Helper function to check if property type matches
  const matchesPropertyType = (title: string, propertyTypeValue: string): boolean => {
    if (!propertyTypeValue) return true;
    
    const typeMap: { [key: string]: string[] } = {
      '1': ['Орон сууц', 'Ордон сууц'],
      '2': ['Хашаа байшин'],
      '3': ['Хаус'],
      '4': ['Худалдаа үйлчилгээний талбай'],
      '5': ['Зогсоол'],
      '7': ['Газар'],
      '9': ['Хотхон'],
      '36': ['Зуслан'],
      '37': ['Обьект'],
      '50': ['Оффис'],
    };
    
    const types = typeMap[propertyTypeValue];
    return types ? types.some(t => title.includes(t)) : true;
  };

  // Filter properties based on all filter criteria
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Filter by type (sale/rent)
      if (property.type !== type) return false;

      // Keyword filter
      if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        const matchesKeyword =
          property.title.toLowerCase().includes(keyword) ||
          property.location.toLowerCase().includes(keyword) ||
          property.id.toLowerCase().includes(keyword);
        if (!matchesKeyword) return false;
      }

      // Property type filter
      if (filters.propertyType) {
        if (!matchesPropertyType(property.title, filters.propertyType)) return false;
      }

      // Status filter (should match the type from URL, but allow override)
      if (filters.status) {
        const statusType = filters.status === '1' ? 'sale' : 'rent';
        if (property.type !== statusType) return false;
      }

      // Price filter
      const propertyPrice = extractPrice(property.price);
      if (filters.minPrice) {
        const minPrice = parseFloat(filters.minPrice.replace(/,/g, '')) || 0;
        if (propertyPrice < minPrice) return false;
      }
      if (filters.maxPrice) {
        const maxPrice = parseFloat(filters.maxPrice.replace(/,/g, '')) || 0;
        if (propertyPrice > maxPrice) return false;
      }

      // District filter
      if (filters.district) {
        if (!matchesDistrict(property.location, filters.district)) return false;
      }

      // Area filter
      const propertyArea = extractArea(property.area);
      if (filters.minArea) {
        const minArea = parseFloat(filters.minArea);
        if (propertyArea < minArea) return false;
      }
      if (filters.maxArea) {
        const maxArea = filters.maxArea === '100+' ? Infinity : parseFloat(filters.maxArea);
        if (propertyArea > maxArea) return false;
      }

      // Bedrooms filter
      if (filters.bedrooms) {
        if (!property.bedrooms) return false;
        if (filters.bedrooms === '5+') {
          if (property.bedrooms < 5) return false;
        } else {
          const bedroomsFilter = parseFloat(filters.bedrooms);
          if (property.bedrooms < bedroomsFilter) return false;
        }
      }

      // Bathrooms filter
      if (filters.bathrooms) {
        if (!property.bathrooms) return false;
        if (filters.bathrooms === '5+') {
          if (property.bathrooms < 5) return false;
        } else {
          const bathroomsFilter = parseFloat(filters.bathrooms);
          if (property.bathrooms < bathroomsFilter) return false;
        }
      }

      return true;
    });
  }, [properties, type, filters]);

  const handleFilter = (filterValues: any) => {
    setFilters(filterValues);
  };

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/user/property/${propertyId}`);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      <Space style={{ marginBottom: '24px' }}>
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(`/user/${type === 'sale' ? 'sales' : 'rent'}`)}>
          Буцах
        </Button>
        <Title level={2} style={{ margin: 0 }}>
          {type === 'sale' ? 'Худалдаа' : 'Түрээс'} - Газрын зураг
        </Title>
      </Space>

      <PropertyFilter type={type} onFilter={handleFilter} />

      <Card
        style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}
        bodyStyle={{ height: '100%', padding: 0 }}
      >
        <div ref={mapRef} style={{ height: '100%', width: '100%', position: 'relative' }}>
          {isClient && MapComponents ? (
            <MapComponents.MapContainer
              center={[47.8864, 106.9057]} // Ulaanbaatar center
              zoom={12}
              style={{ height: '100%', width: '100%', borderRadius: '8px', zIndex: 0 }}
              scrollWheelZoom={true}
            >
            <MapComponents.TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredProperties.map((property) => (
              <MapComponents.Marker key={property.id} position={property.coordinates}>
                <MapComponents.Popup>
                  <div style={{ minWidth: '200px' }}>
                    <Title level={5} style={{ marginBottom: '8px' }}>
                      {property.title}
                    </Title>
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      <div>
                        <Text type="secondary">{property.location}</Text>
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1890ff' }}>
                        <DollarOutlined /> {property.price}
                      </div>
                      <div>
                        <Tag color={property.type === 'sale' ? 'green' : 'blue'}>
                          {property.type === 'sale' ? 'Худалдаа' : 'Түрээс'}
                        </Tag>
                      </div>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {property.bedrooms && (
                          <span>
                            <HomeOutlined /> {property.bedrooms} Унтлагын өрөө
                          </span>
                        )}
                        {property.bathrooms && (
                          <span>🛁 {property.bathrooms} Угаалгын өрөө</span>
                        )}
                        <span>📐 {property.area}</span>
                      </div>
                      <Button
                        type="primary"
                        size="small"
                        block
                        onClick={() => handlePropertyClick(property.id)}
                      >
                        Дэлгэрэнгүй
                      </Button>
                    </Space>
                  </div>
                </MapComponents.Popup>
              </MapComponents.Marker>
            ))}
            </MapComponents.MapContainer>
          ) : (
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text>Газрын зураг ачааллаж байна...</Text>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default RealEstateMap;

