import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const MyMenu = () => {
    const router = useRouter();
  
    const handleMenuClick = (e: { key: string }) => {
      switch (e.key) {
        case '1':
          router.push('/'); 
          break;
        case '2':
          router.push('/about'); 
          break;
        default:
          break;
      }
    };
  
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
        onClick={handleMenuClick}
        items={items}
      />
    );
  };
  
  export default MyMenu;
  