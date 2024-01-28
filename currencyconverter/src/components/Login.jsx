import React,{ useState,useContext } from "react";
import contextVariable from "../Context/userContext";
/*  imported hare to use global variable we wanted access of the 
    setUser()  method that holded by global variable  we accessed this using useContext Hook
*/

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

 const {setUser}=useContext(contextVariable) // uses hare setuser of the contextVariable
    const handleButton=(e)=>{
      setUser({password,username}) // these pass and username set into user in provider file 
         e.preventDefault()
         if(e.target.value){
        }
           <h2>please write somthing in boxes</h2>
         }
       
  return (
    <div>

          <h2>  login   </h2>
    
          <input 
          value={username}
         onChange={(e)=> setUsername(e.target.value)}
          type="text" placeholder="username" />
          <input 
          value={password}
           onChange={(e)=> setPassword(e.target.value)}
                type="text"   placeholder="password"/>
          <button onClick={handleButton}>Submit</button>


    </div>

     
  )
}

export default Login
