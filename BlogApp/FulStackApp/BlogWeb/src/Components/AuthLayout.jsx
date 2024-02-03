import React, { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Login from '../Pages/Login'
function AuthLayout({children ,authentication  = true}) {// just keep as it is for now 
  const authStatus=useSelector((state)=> state.auth)//auth in the store reducer name 
  const navigate=useNavigate()
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    console.log('AuthLayout: useEffect - authStatus:', authStatus);
    console.log('AuthLayout: useEffect - authentication:', authentication);

    if (authentication) {
      console.log('AuthLayout: useEffect - Authentication Required');
    } else {
      console.log('AuthLayout: useEffect - No Authentication Required');
    }
    // required mean passing true authentication
    //need to log in in this case 
      if (authentication && authStatus !== authentication) {
        navigate('/login')
      }
   else if (!authentication && authStatus !==authentication){
    // i am logged in or not depends on authStatus 
     navigate("/")  //??
   }
   setLoader(false)
  },[authStatus,authentication ,navigate])

  console.log('AuthLayout: Rendering - loader:', loader);
  return loader ? null :<>{children}</>
 
}

export default AuthLayout   
