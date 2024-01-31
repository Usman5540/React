


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
  },
});


export const  getProducts=()=>{
     return async function getProductsThunk(dispatch,getState)
     {
          const data = await  fetch('https://fakestoreapi.com/products')
           const result= data.json()
           dispatch(products(result));
     }
}
export const  {products}=ProductSlice.actions
export default  ProductSlice.reducer