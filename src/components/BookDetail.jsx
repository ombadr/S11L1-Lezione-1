import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import FaShoppingCart from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch(); // funzione dispatch che sarà utilizzata per emettere l'azione ADD_TO_CART

  return (
    <div className='mt-3 mb-4 mb-lg-0'>
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h2>{bookSelected.title}</h2>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col sm={4}>
              <div className='mt-3'>
                <img src={bookSelected.imageUrl} alt='Libro selezionato' />
              </div>
            </Col>
            <Col sm={8}>
              <p>Description: {bookSelected.description}</p>
              <p>Price: {bookSelected.price} € </p>
              <Button
                className='d-flex align-items-center'
                onClick={() => {
                  dispatch({
                    type: 'ADD_TO_CART', // il type presente nello switch del reducer
                    payload: bookSelected, // il payload è l'elemento da passare all'azione
                  });
                }}
              >
                AGGIUNGI AL <FaShoppingCart />
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default BookDetail;
