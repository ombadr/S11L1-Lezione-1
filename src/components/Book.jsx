import React from 'react';
import { Card } from 'react-bootstrap';

const Book = ({ book, changeBook, bookSelected }) => {
  return (
    <Card
      className={bookSelected.id === book.id ? 'custom-border mt-3' : 'mt-3'}
      onClick={() => changeBook(book)}
      style={{ cursor: 'pointer' }}
    >
      <Card.Body className='d-flex'>
        <img className='book-image' src={book.imageUrl} alt='Copertina' />
        <div>
          <Card.Text>{book.title}</Card.Text>
          <p>{book.price}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Book;
