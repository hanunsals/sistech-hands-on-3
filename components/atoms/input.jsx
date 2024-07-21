import React from 'react';

const Input = ({ type, placeholder, className, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`p-2 rounded-md ${className}`}
    onChange={onChange}
  />
);

export default Input;
