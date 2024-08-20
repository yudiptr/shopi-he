import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const MyMenu = () => {
  // Define menu items
  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Home',
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: 'About',
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={items}
    />
  );
};

export default MyMenu;
