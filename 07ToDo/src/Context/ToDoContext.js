import { createContext,useContext } from "react";

export const  ToDoContext = createContext({
  todos:[
    {
        id:1,
        todo:"message",
        completed:false
    },
  ],
  addtoDo:(toDo)=>{},
  updatetoDo:(id,toDo)=>{},
  deletetoDo:(id)=>{},
 toggleComplete:(id)=>{},
})

export const ToDoWrapper=ToDoContext.Provider
export const useToDo  = ()=>{
    return useContext(ToDoContext)
}