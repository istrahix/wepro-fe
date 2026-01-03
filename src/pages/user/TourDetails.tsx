import {
  Card,
  Row,
  Col,
  Typography,
  Space,
  Button,
} from 'antd';
import {
  ShareAltOutlined,
  CalendarOutlined,
  ArrowLeftOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const { Title, Text, Paragraph } = Typography;

interface Tour {
  id: string;
  name: string;
  image?: string;
  date: string;
  description: string;
  fullDescription: string;
}

const TourDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);

  // Sample tour data - in real app, fetch by id
  const tours: Tour[] = [
    {
      id: '1',
      name: 'TOKYO TOWER - B1 давхар үйлчилгээний талбай',
      date: '2024-01-15',
      description: '254м.кв STRIP CLUB шууд орох боломжтой үйлчилгээний талбай',
      fullDescription:
        'ХУД 19-р хороо Туул голын хойно байрших TOKYO TOWER-ийн B1 давхарт 254м.кв STRIP CLUB шууд орох боломжтой үйлчилгээний талбай. Энэхүү талбай нь бүрэн тохижуулалттай, үйл ажиллагаа явуулахад бэлэн байрлалд байрладаг. Төвийн байршил, хүртээмжтэй газар, орчин үеийн дэд бүтэцтэй.',
    },
    {
      id: '2',
      name: 'Рояал гарден - Ордон сууц',
      date: '2024-01-20',
      description: '3 унтлагын өрөө, 2 угаалгын өрөөтэй ордон сууц',
      fullDescription:
        'Улаанбаатар хотын төвд байрлах Рояал гарден хотхонд байрлах 3 унтлагын өрөө, 2 угаалгын өрөөтэй ордон сууц. Бүрэн тохижуулалттай, орчин үеийн дизайн, аюулгүй байдал, цэвэрхэн орчин.',
    },
    {
      id: '3',
      name: 'Хан-Уул дүүрэг - Гэр',
      date: '2024-02-01',
      description: '4 унтлагын өрөө, 2 угаалгын өрөөтэй гэр',
      fullDescription:
        'Хан-Уул дүүрэгт байрлах 4 унтлагын өрөө, 2 угаалгын өрөөтэй гэр. Өөрийн зогсоолтой, цэцэрлэгтэй, аюулгүй байдал, цэвэрхэн орчин.',
    },
    {
      id: '4',
      name: 'Баянгол дүүрэг - Оффис',
      date: '2024-02-10',
      description: '250м.кв зайтай оффисын талбай',
      fullDescription:
        'Баянгол дүүрэгт байрлах 250м.кв зайтай оффисын талбай. Орчин үеийн дэд бүтэц, интернэт, утасны шугам, лифттэй, аюулгүй байдал.',
    },
    {
      id: '5',
      name: 'Сүхбаатар дүүрэг - Ордон сууц',
      date: '2024-02-15',
      description: '2 унтлагын өрөө, 1 угаалгын өрөөтэй ордон сууц',
      fullDescription:
        'Сүхбаатар дүүрэгт байрлах 2 унтлагын өрөө, 1 угаалгын өрөөтэй ордон сууц. Төвийн байршил, хүртээмжтэй газар, бүрэн тохижуулалттай.',
    },
    {
      id: '6',
      name: 'Баянзүрх дүүрэг - Гэр',
      date: '2024-02-20',
      description: '3 унтлагын өрөө, 2 угаалгын өрөөтэй гэр',
      fullDescription:
        'Баянзүрх дүүрэгт байрлах 3 унтлагын өрөө, 2 угаалгын өрөөтэй гэр. Өөрийн зогсоолтой, цэцэрлэгтэй, аюулгүй байдал.',
    },
  ];

  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Title>Виртуал аялал олдсонгүй</Title>
        <Button onClick={() => navigate('/user/virtual-tour')}>
          Виртуал аялал жагсаалт руу буцах
        </Button>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('mn-MN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = tour.name;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: tour.name,
            text: tour.description,
            url: url,
          });
        }
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/user/virtual-tour')}
        style={{ marginBottom: '24px' }}
      >
        Буцах
      </Button>

      <Row gutter={[24, 24]}>
        {/* Left Column - Main Content */}
        <Col xs={24} lg={16}>
          {/* Title and Date */}
          <div style={{ marginBottom: '24px' }}>
            <Title level={1} style={{ fontSize: '32px', marginBottom: '16px' }}>
              {tour.name}
            </Title>
            <Space>
              <CalendarOutlined style={{ color: '#1890ff' }} />
              <Text strong>{formatDate(tour.date)}</Text>
            </Space>
          </div>

          {/* Google 3D Tour Placeholder */}
          <Card style={{ marginBottom: '24px' }}>
            <div
              style={{
                height: '600px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                borderRadius: '8px',
                position: 'relative',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>🗺️</div>
                <Title level={3} style={{ color: 'white', marginBottom: '8px' }}>
                  Google 3D Tour
                </Title>
                <Text style={{ fontSize: '16px', opacity: 0.9 }}>
                  Виртуал аяллын 3D харагдац энд байрлана
                </Text>
                <div style={{ marginTop: '24px' }}>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      borderColor: 'white',
                      color: 'white',
                    }}
                  >
                    Аялал эхлүүлэх
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Description */}
          <Card title="Танилцуулга">
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              {tour.fullDescription}
            </Paragraph>
          </Card>
        </Col>

        {/* Right Column - Share Section */}
        <Col xs={24} lg={8}>
          <Card title="Хуваалцах">
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Button
                block
                icon={<FacebookOutlined />}
                onClick={() => handleShare('facebook')}
                style={{ height: '45px', fontSize: '16px' }}
              >
                Facebook
              </Button>
              <Button
                block
                icon={<TwitterOutlined />}
                onClick={() => handleShare('twitter')}
                style={{ height: '45px', fontSize: '16px' }}
              >
                Twitter
              </Button>
              <Button
                block
                icon={<LinkedinOutlined />}
                onClick={() => handleShare('linkedin')}
                style={{ height: '45px', fontSize: '16px' }}
              >
                LinkedIn
              </Button>
              <Button
                block
                icon={<ShareAltOutlined />}
                onClick={() => handleShare('native')}
                style={{ height: '45px', fontSize: '16px' }}
              >
                Бусад
              </Button>
              <Button
                block
                icon={<CopyOutlined />}
                onClick={() => handleShare('copy')}
                style={{ height: '45px', fontSize: '16px' }}
              >
                {copied ? 'Хуулагдсан!' : 'Холбоос хуулах'}
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TourDetails;

