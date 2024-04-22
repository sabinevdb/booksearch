import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSearchSubmit} className='search-bar'>
      <input className='search-input'
        type="text"
        placeholder="Search for books"
        value={search}
        onChange={handleSearchChange}
      />
      <button className='search-button' type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
