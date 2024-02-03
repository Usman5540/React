import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const Store=configureStore({
   reducer:{
    auth:authSlice,
   }
   // keep in mind the pictorial representation when dispatch state will dispatch the payload to reducer 
   // when action triggerd and eventually state will change in store 

})
export default Store
