import React, { useState } from 'react';
import "./App.css";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import ReadingList from '../ReadingList/ReadingList';


const allBooks = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    isbn: "1234567890",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
    isbn: "4567897654",
  },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
    isbn: "7652340956",
  },
];

const App = () => {
  const [searchResults, setSearchResult] = useState([]);
  const [readingListBooks, setReadingListBooks] = useState([]);

  const handleSearch = (search) => {
    const filteredBooks = allBooks.filter(book =>
      book.author.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredBooks);
  };

  const addBook = (book) => {
    if (!readingListBooks.find(savedBook => savedBook.id === book.id)) {
      setReadingListBooks([...readingListBooks, book]);
    }

  };

  const removeBook = (bookToRemove) => {
    setReadingListBooks(readingListBooks.filter(book => book.id !== bookToRemove.id));
  };

  return (
    <div>
      <h1>Book Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className='app-content'>
        <SearchResults searchResultBooks={searchResults} onAdd={addBook} />
        <ReadingList readingListBooks={readingListBooks} onRemove={removeBook} />
      </div>
     </div> 
  );
};

export default App;