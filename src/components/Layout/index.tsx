import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import MyMenu from '../SideBar';

interface LayoutProps {
    children: ReactNode;
  }

const { Header, Content, Footer, Sider } = Layout;

const MyLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <MyMenu />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
          <h1>My Application</h1>
        </Header>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>My Application ©2024</Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
