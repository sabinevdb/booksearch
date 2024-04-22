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
    <div>
      <div>
        <h3>{props.book.title}</h3>
          <p>
          {props.book.author} | {props.book.isbn}
          </p>
      </div>
      <button className="button" onClick={addBook}>Add to reading list</button>
    </div>
  );
};

export default BookAdd;