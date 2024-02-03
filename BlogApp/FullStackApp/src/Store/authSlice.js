import {createSlice} from "@reduxjs/toolkit"
const initialState={
    status:false,
    userData:null
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
       login:(state,action)=> {  
        state.status=true;
           state.userData =action.payload.userData
           console.log(`dat state.userdata ${state.userData}`)
       },
       // state----> what is store actually right now 
       // actions are used to change the state or add something to store 
       logout:(state)  => {
           state.status=false;
           state.userData=null
       } 
    }
})
const {login,logout}=authSlice.actions;// this is all for onclick stuff
export default authSlice.reducer// obviously for store 

 