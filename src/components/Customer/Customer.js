import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const DATA = {
    id:"",
    firstName:"",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    state:"",
    zipeCode:"", 
    phone:""
}


function Customer(){

    const [state, setState]= useState(DATA);
    const [customerList, setCustomerList] = useState([]);

    const handleInput = (e) => { 
        setState({...state, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCustomerList([...customerList, state]);
        setState(DATA);
    }

    const customerListHTML = customerList.map((customer, index)=>(
        <div key={index}>
            <p>{customer.firstName}
            {customer.lastName}
            {customer.address}
            {customer.phone}</p>
        </div>
    ));

    return (

        <div>
        This is the customer input
        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridfirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="First name"
            name= "firstName"
            value = {state.firstName}
            onChange = {handleInput} />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridlastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Last name"
            name= "lastName"
            value = {state.lastName}
            onChange = {handleInput} />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridaddress">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name"
            name= "address"
            value = {state.address}
            onChange = {handleInput} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridaddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control 
            placeholder="Apartment, studio, or floor" 
            type="text"
            name= "address2"
            value = {state.address2}
            onChange = {handleInput} />
        </Form.Group>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridcity">
            <Form.Label>City</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="City"
            name= "city"
            value = {state.city}
            onChange = {handleInput} />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridstate">
            <Form.Label>State</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="State"
            name= "state"
            value = {state.state}
            onChange = {handleInput} />
          
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridzip">
            <Form.Label>Zip</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="12345"
            name= "zip"
            value = {state.zip}
            onChange = {handelInput} />
          </Form.Group> */}
  
          <Form.Group as={Col} controlId="formGridphone">
            <Form.Label>Phone</Form.Label>
            <Form.Control 
            type="tel" 
            placeholder="123-654-9999"
            name= "phone"
            value = {state.phone}
            onChange = {handleInput} />
          </Form.Group>
        </Row>
  
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {customerList.length> 0 && <ul className ="col-6">{customerListHTML}</ul>}

      </div>

    

    );

}

export default Customer;