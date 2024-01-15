import React from 'react';
import Book from './Book';

const BookList = ({ bookSelected, changeBook, books }) => {
  return (
    <div className='mb-3'>
      {books.map((book) => {
        console.log(book);
        return (
          <Book
            key={book.id}
            book={book}
            bookSelected={bookSelected}
            changeBook={changeBook}
          />
        );
      })}
    </div>
  );
};

export default BookList;
