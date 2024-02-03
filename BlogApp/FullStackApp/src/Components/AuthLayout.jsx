import React, { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Login from '../Pages/Login'
function Protected({children ,authentication}) {// just keep as it is for now 
  const authStatus=useSelector((state)=> state.auth)//auth in the store reducer name 
  const navigate=useNavigate()
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    // required mean passing true authentication
    //need to log in in this case 
      if (authentication && authStatus !== authentication) {
        navigate(<Login/>)
      }
   else if (!authentication && authStatus !==authentication){
    // i am logged in or not depends on authStatus 
     navigate("/")  //??
   }
   setLoader(false)
  },[authStatus,authentication ,navigate])
  return loader ? null :<>{children}</>
  return (
    <div>
      {children}
    </div>
  )
}

export default Protected   
