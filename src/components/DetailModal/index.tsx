import React from 'react';
import { Modal } from 'antd';
import { DetailModalProps } from './interface';

const DetailModal: React.FC<DetailModalProps> = ({ visible, data, onCancel }) => {
  if (!data) return null;

  return (
    <Modal
      title="Details"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <p><strong>First Name:</strong> {data.firstName}</p>
      <p><strong>Last Name:</strong> {data.lastName}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Address:</strong> {data.address}</p>
    </Modal>
  );
};

export default DetailModal;
