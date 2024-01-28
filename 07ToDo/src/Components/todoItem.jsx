import React, { useState } from 'react'
import { useToDo } from '../Context';
function TodoItem({ todo }) // paap nahi ye porp
 {
    // console.log(todo)// all values of todos recieved throug this prop in order to get id and todo:messages 
const [isTodoEditable,setTodoEditable]   =  useState(false)  
    console.log(isTodoEditable)
    // console.log(todo.completed)
      
    const [todoMsg,setTodoMsg]=useState(todo.todo)
    
    // console.log(todoMsg)
    const {updatetoDo,deletetoDo,toggleComplete}=useToDo()
    const editTodo = () => {
        updatetoDo(todo.id, {...todo, todo: todoMsg });   //  map ka kamal hai sari values dy raha hai and all values pass hongi as it is and todo:message update hoga 
        setTodoEditable(false);///revrese false ✏️
    };
    
  const toggle=()=>{
    toggleComplete(todo.id)// id will pass of those who will call toggle 
  }
    return (
        <
            div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"// if true ? else :   ---> color implementation on div 
            }`}
            >
            <input  // toggle functionality 
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}//false set as default in global object checked will be true functionality is defined in app.jsx
                onChange={toggle} // !eachobj.id
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
               isTodoEditable ? "border-black/10 px-2" : "border-transparent"// box line when you press button for edit 
                } 
            
                ${todo.completed ? "line-through" : ""}`}//in true case line through function toggle value reflect here due to prop and iplemented on input field
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}/* deals with input field */
                readOnly={!isTodoEditable}//editable field by this line it is connected with button
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => { //changes !istodoeditable to istodoeditable
                    if (todo.completed) return;// if true 
                    if (isTodoEditable) {

                        editTodo();
                    } else setTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}//if true disabled the ✏️ this editable okkkkkkkhyy jab check boxx ho jaye to pencil disable kardo 
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetoDo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;