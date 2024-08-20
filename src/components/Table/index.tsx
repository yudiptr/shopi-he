import { Menu, Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { columns, data } from './const';
const MyTable = () => {
  
  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default MyTable;
