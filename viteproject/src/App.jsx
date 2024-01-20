import Chai from "./chai"
 import { useState } from "react"


function App() {
  const [counter,setCounter]=useState(12)
  // let [counter,setRemover]=useState(12)
  // let counter=12
const addvalue = ()=>{
  setCounter(counter+1) //  diff algorithm (fiber)  sent state to virtual dom in batches  
  setCounter(counter+1)// that will see that eventually here will be performed same work 
  setCounter(counter+1)// state will be update one time 
  // to change state we have to use call backs one call back sent state to next call back 
  setCounter((counter)=> counter+1)
  // setCounter((counter)=> counter+1)



  
}
const removeValue=()=>{
  if (counter > 0) {
    
    setCounter(counter-1)
  }
}
  return (
  <>
    
   <h1>chai aur react</h1>
   <h2>counter value: {counter}</h2>
     <button onClick={addvalue}>add value to {counter} </button>
     <br />
     <button onClick={removeValue}>remove value {counter}</button>
     
   
   </>

    
  )
}

export default App
