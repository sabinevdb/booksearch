import React from 'react';
import BookAdd from '../BookAdd/BookAdd'; 

const SearchResults = ({ searchResultBooks, onAdd }) => {
  return (
    <div className='SearchResults'>
      <h2>Search Results</h2>
      {searchResultBooks.map(book => (
        <BookAdd key={book.id} book={book} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default SearchResults;