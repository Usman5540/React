import React from 'react'
import { useState } from 'react';
import { usetodo } from '../Contexts/Context';
function TodoForm() {
    const [individual,setIndividual]=useState("")
    const {addtodo}=usetodo()
const addbutton=(e)=>{
      e.preventDefault()// prevents from page reload issue each time i press button 
      /* 
In a web browser, when you submit an HTML form, the default behavior is for the browser to send a request to the server and then refresh the entire page. This default behavior is often not desired in single-page applications (SPAs) built with frameworks like React.

In React, you typically handle form submissions using JavaScript and prevent the default form submission behavior to avoid a full page reload. The event.preventDefault() method is used for this purpose. Here's why it's used: */
      addtodo({id:Date.now(), completed:false,todo:individual})
      setIndividual("")
}
    return (
        <form 
        onSubmit={addbutton}
        className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={individual}
                onChange={(e)=>  setIndividual(e.target.value)}
            />
            <button
         
            type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
