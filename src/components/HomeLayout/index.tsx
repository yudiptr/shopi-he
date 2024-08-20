import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import MyMenu from '../SideBar';
import { LayoutProps } from './interface';

const { Header, Content, Footer, Sider } = Layout;

const MyLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible theme="dark" className="sider">
        <div className="logo">
          <h2 style={{ color: '#fff', textAlign: 'center', padding: '16px' }}>Logo</h2>
        </div>
        <MyMenu />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <h1 style={{ margin: 0 }}>My Application</h1>
        </Header>
        <Content style={{ margin: '16px', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#f0f2f5', padding: '10px 50px', boxShadow: '0 -2px 8px rgba(0,0,0,0.1)' }}>
          My Application ©2024
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;