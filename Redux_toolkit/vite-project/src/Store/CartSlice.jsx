import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {    
       // my bag ki halat state is ---> reducer have ability to change state  
      state.push(action.payload);  
       // actually button.product 
      // here we do not need to maintain states through set function redux will automatically update the state
// reducer is function through which we can change state 
    },
    remove:(state,action)=>{
      console.log('Action payload:', action.payload);// here we are passing only id okkkkkkkkkk
      return state.filter((p)=>  p.id !==action.payload)
    
      // id will passed using dispatcher to remove specific product from cart explicity
      // remove karny ky baad state update krdy ga 

    }
    // removeIte:(state,action)=>{
    //   state.splice(action.payload)
    // },
  },
});

// action is trigger by perfoming action like hitting button reducer will activate will change the state in store 
// keep in mind cart example when you hit the button it is actoin it activates reducer it will change the state and we can take how many number of times state changed by using
//useSelector hook   
export const{remove}=cartSlice.actions;
export const { add } = cartSlice.actions;//  function are actions 
export default cartSlice.reducer;// states 
