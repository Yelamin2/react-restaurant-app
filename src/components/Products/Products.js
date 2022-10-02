import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';





const PRODUCTS= [
        {
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
           },
           {
            type:"pizza",
            description: "supreme",
            price: 16.39,
            id:3,
            picture: "/pizza_supreme.jpg",
           },
           {
            type:"pizza",
            description: "flatSheet",
            price: 21.49,
            id:4,
            picture: "/pizza_flat.jpg",
           },
           {
            type:"appetizer",
            description: "breadSticks",
            price: 3.26,
            id:5,
            picture: "/breadsticks.jpg",
           },  {
            type:"appetizer",
            description: "wings",
            price: 7.49,
            id:6,
            picture:"/chicken_wings.jpg",
           }
           
       


]

function Products(){
const [state, setState] = useState(PRODUCTS);
const [product, setProduct] = useState([]);

// setProduct([...product, state]);
// console.log(products);


const productsList =   state.map((product, index)=>  {
    // console.log(product.picture);
    var image = require(`./Images${product.picture}`);
    // console.log({image});
    
    // const image = require(product.picture);
    // console.log(image);
   
    return(<div key={index}>
        <Container fluid="md-4 w-50">
      <Row>
        <Col md={{ span: 3, offset: 3 }}><p></p>
         <p>{product.description} {product.type}</p>
         {/* <p>{image}</p> */}
        <p><img className="img-fluid img-w-30" src={image} width = {600}></img></p>
        <p>Unit Price: ${product.price} <Button 
        vatiant ="danger"
        as ="input"
        type= "submit"
        value = "Order"  ></Button></p> 
        </Col>
      </Row>
    </Container>
        
        
    </div>)

}
    )
    // console.log(product.description)


    

    return (
        <>

       {productsList}
       This is the product output


      

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

export default Products;