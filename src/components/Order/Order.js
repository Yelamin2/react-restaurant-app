import { useState } from "react";
import Customer from "../Customer/Customer";
import Products from "../Products/Products";
// import PRODUCTS from "../Products";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ORDERS= [{
  type:"pizza",
  description: "cheese",
  price: 10.99,
  id:1,
  picture: "/pizza_cheese.jpg",
 },
 {
     type:"pizza",
     description: "vegetarian",
     price: 14.59,
     id:2,
     picture: "/pizza_vegetarian.jpg",
    }]

const [state, setState] = [{Customer, Products}]

function Order(props){

  const [state, setState] = useState(props.order);
  
   function handleClick(index){
    
  
    console.log(Products[index].description)
  
   }
  
  
  const orderList =   state.map((order, index)=>  {
     
   
      return(<div key={index}>
          <Container fluid="md-8 w-500">
        <Row>
          <Col md={{ span: 10 }}><p></p>
           <p>{order.name}</p>
          <p>Unit Price: ${order.price} </p> 
          </Col>
        </Row>
      </Container>
          
          
      </div>)
  
  }
      )
     
  
      return (
          <>
  
         {orderList},

          </>
  
      );
  
  }

// function Order() {


//     return (

//       <Container>
//         <Row>
//           <Col><Customer/></Col>
//           <Col><Products/></Col>
//         </Row>
//         <Row>
          
//         </Row>
//       </Container>
       
        
//     );
// }

export default Order;
