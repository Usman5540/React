import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { remove } from '../Store/CartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatcher=useDispatch()
  // console.log(cartItems);
const nikal =(id)=>{
  console.log('Removing item:', id);
   dispatcher(remove(id));
}
  const cards = cartItems.map((each, index) => (
    <div className='col-md-3' key={index} style={{ marginBottom: '20px' }}>
      <Card style={{ width: '18rem', margin:"40px" }} className="h-100">
        <div className="text-center">
          <Card.Img variant="top" src={each.image} style={{ width: '100px', height: '130px' }} />
        </div>

        <Card.Body>
          <Card.Title>{each.title}</Card.Title>
          <Card.Text>
            USD : {each.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button  style={{backgroundColor: 'red'}}   onClick={()=>nikal(each.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className='row'>
      <h1>Cart</h1>
      {cards}
    </div>
  );
}

export default Cart;
