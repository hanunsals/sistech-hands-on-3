import React from 'react';
import SearchBar from '../molecules/SearchBar';

const Header = ({ onSearch }) => (
  <header className="bg-blue-600 p-4 flex justify-between items-center text-white">
    <h2>Hi, Hanun!</h2>
    <div className="flex items-center space-x-4">
      <SearchBar onSearch={onSearch} />
      <button className="p-2 rounded-full bg-blue-700 hover:bg-blue-800">
        <i className="fas fa-bell"></i>
      </button>
      <button className="p-2 rounded-full bg-blue-700 hover:bg-blue-800">
        <i className="fas fa-user"></i>
      </button>
    </div>
  </header>
);

export default Header;
