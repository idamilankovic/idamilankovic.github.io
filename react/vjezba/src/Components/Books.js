import React from 'react';
import BookItem from './BookItem';

function Books (props) {

    const books = props.books;

  return (
    <div>
        <BookItem book={books[0]}/>
        <BookItem book={books[1]}/>
        <BookItem book={books[2]}/>
        <BookItem book={books[3]}/>

    </div>
  )
}

export default Books;