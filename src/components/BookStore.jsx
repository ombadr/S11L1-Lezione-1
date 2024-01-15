import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import BookList from './BookList';
import BookDetail from './BookDetail';

const BookStore = () => {
  const [books, setBooks] = useState([]);
  const [bookSelected, setBookSelected] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      );

      if (resp.ok) {
        let fetchedBooks = await resp.json();
        setBooks(fetchedBooks);
        console.log(fetchedBooks);
      } else {
        console.log('Errore nel recupero dei dati');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeBook = (book) => {
    setBookSelected(book);
  };

  return (
    <Row className='pb-3'>
      <Col lg={4}>
        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={books}
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  );
};

export default BookStore;
