import { useState } from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PRODUCTS = [
  {
    type: "pizza",
    name: "cheese",
    price: 10.99,
    id: 1,
    picture: "/pizza_cheese.jpg",
  },
  {
    type: "pizza",
    name: "vegetarian",
    price: 14.59,
    id: 2,
    picture: "/pizza_vegetarian.jpg",
  },
  {
    type: "pizza",
    name: "supreme",
    price: 16.39,
    id: 3,
    picture: "/pizza_supreme.jpg",
  },
  {
    type: "pizza",
    name: "flatSheet",
    price: 21.49,
    id: 4,
    picture: "/pizza_flat.jpg",
  },
  {
    type: "appetizer",
    name: "breadSticks",
    price: 3.26,
    id: 5,
    picture: "/breadsticks.jpg",
  },
  {
    type: "appetizer",
    name: "wings",
    price: 7.49,
    id: 6,
    picture: "/chicken_wings.jpg",
  },
];

function Products(props) {
  const [state, setState] = useState(PRODUCTS);
  const [product, setProduct] = useState([]);
  const [orderList, setOrderList] = useState([]);

  // setProduct([...product, state]);
  // console.log(products);
  function handleClick(product) {
    props.addToOrder({
      name: product.name,
      price: product.price,
    })
  }

  const productsList = state.map((product, index) => {
    // console.log(product.picture);
    var image = require(`./Images${product.picture}`);
    // console.log({image});

    // const image = require(product.picture);
    // console.log(image);

    return (
      <div key={index}>
        <Container fluid="md-8 w-500">
          <Row>
            <Col md={{ span: 10 }}>
              <p></p>
              <p>
                {product.name} {product.type}
              </p>
              {/* <p>{image}</p> */}
              <p>
                <img className="img-fluid " src={image} width={700}></img>
              </p>
              <p>
                Unit Price: ${product.price}{" "}
                <Button
                  onClick={() => handleClick(product)}
                  vatiant="danger"
                  as="input"
                  type="submit"
                  value="Order"
                ></Button>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  });
  // console.log(product.description)

  return (
    <>
      {productsList},
      {/* This is the Products list.
        <Form.Control 
        type="text" 
        placeholder={state.description} 
        controlId="formPlaintextid"
        readOnly />
        </> */}
    </>
  );
}

// function Orders(type, description,  price,  picture){
//   const [state, setState] = useState(PRODUCTS);
//   const [orderList, setOrderList] = useState([])

//    function handleClick(index){

//     console.log(PRODUCTS[index].description)

//    }

//   orderList =   state.map((product, index)=>  {
//       var image = require(`./Images${product.picture}`);

//       return(<div key={index}>
//           <Container fluid="md-8 w-500">
//         <Row>
//           <Col md={{ span: 10 }}><p></p>
//            <p>{product.description} {product.type}</p>
//            {/* <p>{image}</p> */}
//           <p><img className="img-fluid " src={image} width = {700}></img></p>
//           <p>Unit Price: ${product.price} <Button onClick={()=> handleClick(index)}
//           vatiant ="danger"
//           as ="input"
//           type= "submit"
//           value = "Order"  ></Button></p>
//           </Col>
//         </Row>
//       </Container>

//       </div>)

//   }
//       )

//       return (
//           <>

//          {orderList},

//           </>

//       );

//   }

export default Products;
