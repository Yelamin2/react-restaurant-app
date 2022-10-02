import { useState } from "react";
import Customer from "../Customer/Customer";
import Products from "../Products/Products";



const [state, setState] = [{Customer, Products}]

function Order() {

    return (
       <><Customer/>,
        <Products/>
        </>
        
    )
}

export default Order;
