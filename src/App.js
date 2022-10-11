import React from 'react';
import { useState } from 'react';
import Customer from './components/Customer/Customer';
import Products from './components/Products/Products';
import Order from './components/Order/Order';
// import Form from 'react-bootstrap/Form';
// import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  const [selection, setSelection] = useState("a");
  const [order, setOrder] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const addToOrder = (item) => {
    setOrder([...order, item]);
    setSubtotal(subtotal + item.price);
  }

  return (
    <>
    <div className="container">
      
            
            {/* <Container fluid="md-4 w-50">
              <Row>
                <Col className= "products_list" md={{ span: 3, offset: 3 }}>
                <div><Products/></div>
                
                </Col>
                <Col className= "products_list" md={{ span: 3, offset: 3 }}>
                <div><Order/></div>
  
                </Col>
              </Row>
            </Container>*/}
            <nav> 
        <ul>
          <li>
            <button value="a" onClick={(e) => setSelection(e.target.value)}>
              Customer
            </button>
          
            <button value="b" onClick={(e) => setSelection(e.target.value)}>
              Products
            </button>
            <button value="c" onClick={(e) => setSelection(e.target.value)}>
              Order
            </button>
          </li>
        </ul>
      </nav>
      {selection === "a" && <Customer/>}
      {selection === "b" && <Products addToOrder={addToOrder}/>}
      {selection === "c" && <Order order={order} setSubtotal={subtotal}/>}
          
            
       
      {/* {selection === "a" && <Customer/>}
      {selection === "b" && <Products/>}
      {selection === "c" && <Order/>} */}
    </div>
    </>
  );
}

export default App;
