import React, { useState } from 'react'
import { useToDo } from '../Context';
function TodoForm() {
    const [todo,setTo ]=useState("") // is state is 
    const{addtoDo}=useToDo()
    
   const add=(e)=>{
    e.preventDefault()
    // 
    if (!todo) return 
    
    else {
      
        addtoDo ({todo, completed:false  }) // same names can be write once  Todo:Todo------> Todo one perameter is already given there 
        // value will pass from here to addtoDo function
        setTo("")// it will free input field for next input 
       
          } 
   }
    return (
        <form    onSubmit={add}   className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}// input value ---> mean wiring with state 
                onChange={e=>((setTo(e.target.value)))}// definately on change allows us to enter values in input field by using e.target.value
                
            
            />
            
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;