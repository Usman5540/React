import React from "react";  
// top lavel card like in pictorial representation 
// it farword data to global variable  
import contextVariable from "./userContext";

function UserContextProvider({children}) {
    const [user,setUser]=React.useState(null)
  return (
    //props downHere
        <contextVariable.Provider value={{user,setUser}}> 
        
              {children}
        </contextVariable.Provider>
  )
}

export default UserContextProvider
