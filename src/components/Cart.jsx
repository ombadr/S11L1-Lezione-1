import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart.content);
  const dispatch = useDispatch();
  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cart.map((book, i) => {
            return (
              <li key={i} className='my-4'>
                <Button
                  variant='danger'
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', payload: i })
                  }
                >
                  <FaTrash />
                </Button>
                <img src={book.imageUrl} alt='Libro selezionato' />
                {book.title}
              </li>
            );
          })}
        </ul>
      </Col>
      <Row>
        <Col sm={12}>
          TOTALE:{' '}
          {cart.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}{' '}
          €
        </Col>
      </Row>
    </Row>
  );
};

export default Cart;
