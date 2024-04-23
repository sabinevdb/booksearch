import React, { useCallback } from "react";
import "./BookAdd.css";

const BookAdd = (props) => {

  const addBook = useCallback(
    (event) => {
      props.onAdd(props.book);
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
      <button className="button" onClick={addBook}>Add to reading list</button>
    </div>
  );
};

export default BookAdd;