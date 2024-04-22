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
    <div>
      <div>
        <h3>{props.book.title}</h3>
          <p>
          {props.book.author} | {props.book.isbn}
          </p>
      </div>
      <button className="button" onClick={removeBook}>Remove from reading list</button>
    </div>
  );
};

export default BookRemove;