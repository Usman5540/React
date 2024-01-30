import { useContext,createContext } from "react";
const Todocontext=  createContext({
    todoarr:[
        {
           id:1,    
           todo:"msg",
           completed:false
        }
    ],
    addtodo:(todo)=>{},
     updatetodo:(id,todo)=>{},
     deletetodo:(id)=>{},
     togglecomplete:(id)=>{}
})

 export  const TodoProvider =  Todocontext.Provider
 export const  usetodo = ()=>{
    return useContext(Todocontext)
 }

// something to notice that we have to name Context file with capital and  variable name also must be with capital start
