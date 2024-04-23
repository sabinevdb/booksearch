import React, { useState } from 'react';
import "./App.css";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import ReadingList from '../ReadingList/ReadingList';

const allBooks = [
  {
    key: 1,
    title: "Book 1",
    author: "Author 1",
    isbn: "1234567890",
  },
  {
    key: 2,
    title: "Book 2",
    author: "Author 2",
    isbn: "4567897654",
  },
  {
    key: 3,
    title: "Book 3",
    author: "Author 3",
    isbn: "7652340956",
  },
];

const searchOpenLibary = async (query) => {
  const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`);
  const data = await response.json();
  return data.docs.map(book => ({
    key: book.key,
    title: book.title,
    author: book.author_name && book.author_name[0],
    isbn: book.isbn && book.isbn[0],
    first_publish_year: book.first_publish_year,
  }));
};

const App = () => {
  const [searchResults, setSearchResult] = useState([]);
  const [readingListBooks, setReadingListBooks] = useState([]);

  const handleSearch = (search) => {
    const filteredBooks = allBooks.filter(book =>
      book.author.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredBooks);
  };

  const handleSearchOnline = async (search) => {
    const filteredBooks = await searchOpenLibary(search);
    setSearchResult(filteredBooks);
  };

  const addBook = (book) => {
    if (!readingListBooks.find(savedBook => savedBook.key === book.key)) {
      setReadingListBooks([...readingListBooks, book]);
    }

  };

  const removeBook = (bookToRemove) => {
    setReadingListBooks(readingListBooks.filter(book => book.key !== bookToRemove.key));
  };

  return (
    <div>
      <h1>Book Search</h1>
      <SearchBar onSearch={handleSearchOnline} />
      <div className='app-content'>
        <SearchResults searchResultBooks={searchResults} onAdd={addBook} />
        <ReadingList readingListBooks={readingListBooks} onRemove={removeBook} />
      </div>
     </div> 
  );
};

export default App;