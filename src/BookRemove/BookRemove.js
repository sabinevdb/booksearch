import React, { useCallback } from "react";
import "./BookRemove.css";

const BookRemove = (props) => {
  const removeBook = useCallback(
    (event) => {
      props.onRemove(props.book);
    },
    [props]
  );

  return (   
    <div className="book-details">
      <div>
        <h3>{props.book.title}</h3>
        <p>Author: {props.book.author}</p>
        <p>ISBN: {props.book.isbn} | First publish year: {props.book.first_publish_year}</p>
      </div>
      <button className="button" onClick={removeBook}>Remove from reading list</button>
    </div>
  );
};

export default BookRemove;