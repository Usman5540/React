import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
const  Store=configureStore({ // does lot of things for us enable redux toolkit extension 
    reducer:{
        cart:CartSlice, // we can access state using reducer basically it responsible to change the state 
        Product :ProductSlice,
     
    },
});
console.log(Store.getState())
export default Store;
// it will enable communication between  reducer and actions  on other words between states and function  
/* To use the product hook from Product.jsx in the Cart.jsx file, you need to ensure that the data you are fetching in Product.jsx is stored in the Redux store  */

/* // Action creator for adding a new item to the cart
const addItemToCart = (item) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: item,
  };
};

// Dispatching the action with a payload
const action = addItemToCart({ id: 1, name: 'Product A', price: 20 });
{
  type: 'ADD_ITEM_TO_CART',
  payload: {
    id: 1,
    name: 'Product A',
    price: 20
  }
}

console.log(action);

*/
