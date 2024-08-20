import { FC } from 'react';
import { Layout, Card, Col, Row } from 'antd';
import MyLayout from '../../components/HomeLayout';

const { Content } = Layout;

const About: FC = () => {
  return (
    <MyLayout>
      <Content style={{ padding: '0 50px', marginTop: '64px' }}>
        <Row justify="center">
          <Col xs={24} sm={18} md={12} lg={8}>
            <Card
              title="About Me"
              bordered={false}
              style={{
                margin: '0 auto',
                padding: 24,
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p><strong>Nama:</strong> Yudi Putra Sabri</p>
              <p><strong>Kampus:</strong> Universitas Indonesia</p>
              <p><strong>Jurusan:</strong> Ilmu Komputer</p>
            </Card>
          </Col>
        </Row>
      </Content>
    </MyLayout>
  );
};

export default About;
