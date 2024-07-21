import React from 'react';
import Header from '../organisms/Header';
import Sidebar from '../organisms/Sidebar';

const MainTemplate = ({ children, onSearch }) => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 bg-gray-100 p-8">
      <Header onSearch={onSearch} />
      {children}
    </main>
  </div>
);

export default MainTemplate;
