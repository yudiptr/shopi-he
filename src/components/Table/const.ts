import { TableDataType } from "./interface";

export const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

export const data: TableDataType[] = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 32,
      address: '10 Downing Street',
    },
    // Add more static data or use Faker.js to generate it
  ];