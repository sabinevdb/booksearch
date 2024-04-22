import React from 'react';
import BookRemove from '../BookRemove/BookRemove';

const ReadingList = ( props ) => {
  return (
    <div className='ReadingList'>
      <h2>Reading List</h2>
      <div>
      {props.readingListBooks.map((book) => (
        <BookRemove key={book.id} book={book} onRemove={props.onRemove} />
    ))}
      </div>
    </div>
  );
};

export default ReadingList;