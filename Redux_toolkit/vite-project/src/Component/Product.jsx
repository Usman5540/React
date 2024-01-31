
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { add } from '../Store/CartSlice';
import {  useDispatch } from 'react-redux';
function Product() {
  const pass=useDispatch()
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) =>(setProduct(data)));
      
    
  }, []);
const addbutton=(pro)=>{
     pass(add(pro))
}  // dispatcher(function(payload)) here is product
  const cards = product.map((each, index) => (
    <div className='col-md-3' key={index}  style={{marginBottom:'20px'}}>
    <Card style={{ width: '18rem' }} className="h-100">
      <div className="text-center">
      <Card.Img variant="top" src={each.image} style={{width: '100px', height: '130px',}} />
      </div>
      
      <Card.Body >
        <Card.Title >{each.title}</Card.Title>
        <Card.Text>
         USD : {each.price}
        </Card.Text>   
       
      </Card.Body>
      <Card.Footer>
      <Button variant='primary' style={{backgroundColor: "blue"}} onClick={()=>addbutton(each)}>add to cart</Button>
      {/* issue i am passing entire array   onClick={()=>addbutton(product)} */}
      </Card.Footer>
    </Card>
    </div>
  ));

  return (
    <div>
      <div className='row'>{cards}</div>
    </div>
  );
}
//onClick={addbutton(product)} wrong way it will render all time 
// on click take a call back always remember in this case 
// I used an arrow function as a callback to ensure that addbutton(each) is not immediately invoked during rendering but rather when the button is clicked.
export default Product;
