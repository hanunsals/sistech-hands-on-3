import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search Course..."
        className="bg-blue-700 text-white placeholder-gray-300"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-700 text-white"
        onClick={() => onSearch(query)}
      >
        <i className="fa-solid fa-search"></i>
      </Button>
    </div>
  );
};

export default SearchBar;
