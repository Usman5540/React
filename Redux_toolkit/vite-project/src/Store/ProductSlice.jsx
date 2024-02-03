import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data:[],
}

const  ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
         products:(state,action)=>{
             state.data= action.payload
         }  
         // we can't write slice logic hare because slice don't know how to write async operation 
           // this area alos called reducer creater 
  },
});


export const  getProducts=()=>{
     return async function getProductsThunk(dispatch,getState)
     {
          const data = await  fetch('https://fakestoreapi.com/products')
           const result= await data.json()  // we need to wait for converting in jason 
           dispatch(products(result));
     }
}
export const  {products}=ProductSlice.actions
export default  ProductSlice.reducer // export for store 