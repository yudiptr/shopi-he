import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Table } from 'antd';
import { columns, tableStyle } from './const';
import { TableDataType } from './interface';
import DetailModal from '../DetailModal';

const MyTable = () => {
  const [data, setData] = useState<TableDataType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TableDataType | null>(null);

  useEffect(() => {
    const generateData = (count: number): TableDataType[] => {
      return Array.from({ length: count }, (_, index) => ({
        key: index.toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 80 }),
        address: faker.location.streetAddress(),
      }));
    };

    setData(generateData(20));
  }, []);

  const handleRowClick = (record: TableDataType) => {
    setSelectedRow(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedRow(null);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 'max-content' }}
        size="middle"
        style={tableStyle}
        rowClassName="table-row"
        title={() => <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Hi</div>}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      <DetailModal
        visible={isModalVisible}
        data={selectedRow}
        onCancel={handleCancel}
      />
    </>
  );
};

export default MyTable;
