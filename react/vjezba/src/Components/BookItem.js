import React from 'react';

function BookItem (props) {
    const book = props.book;
  return (
    <div>
        <h1>Title:</h1>
        <h2>{book.title}</h2>
        <h1>Author:</h1>
        <h2>{book.author}</h2>
    </div>
  )
}

export default BookItem;