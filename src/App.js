import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BookStore from './components/BookStore';
import Cart from './components/Cart';
import CartIndicator from './components/CartIndicator';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Container className='main-container'>
        <Row>
          <Col className='text-center background-div'>
            <Link to="/">
              <h1>Book Store</h1>
            </Link>
          </Col>
          <CartIndicator />
        </Row>
        <Routes>
          <Route path='/' element={<BookStore />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
