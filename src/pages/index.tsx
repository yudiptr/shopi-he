import MyLayout from '../components/HomeLayout';
import React from "react";
import MyTable from '../components/HomeTable';

export default function Home() {
  return (
    <MyLayout>
      <MyTable/>
    </MyLayout>
  );
}
