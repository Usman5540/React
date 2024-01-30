import { useState, useEffect } from 'react'
import './App.css'
import TodoForm from './Components/todoform'
import {  TodoProvider } from './Contexts/Context'
import TodoItem from './Components/todoitem'

function App() {
  const [todoarr, setTodoarr] = useState([]); // Initialize with an empty array
  const addtodo=(todo)=>{
    setTodoarr((prevarr)=>([...prevarr,{...todo}]))
      // setTodoarr((prevarr)=>prevarr.map((prevtodo)=>([...prevarr,{objects.id === id ? todo: }])))
  }
  const deletetodo=(id)=>{
    // setTodoarr((prevarr)=>prevarr.filter((prevtodo)=>{prevtodo.id===id ? prevtodo !==prevtodo :prevtodo})) galt
    setTodoarr((prevarr)=>prevarr.filter((prevtodo)=>prevtodo.id !==id))
  }
  const togglecomplete=(id)=>{
    setTodoarr((prevarr)=> prevarr.map((prevtodo)=> prevtodo.id===id ? {...prevtodo,completed: !prevtodo.completed}:prevtodo))
  }
  const updatetodo=(id,todo)=>{
     setTodoarr((prevarr)=>prevarr.map((prevtodo)=>prevtodo.id===id ? todo:prevtodo))
  }

  useEffect(()=>{
    const to = JSON.parse(localStorage.getItem("todos"))
    if (to && to.length > 0) {
      setTodoarr(to)
    }

  },[])
  useEffect(() => {
    // Save data to localStorage whenever todoarr changes
    localStorage.setItem('todos', JSON.stringify(todoarr));
  }, [todoarr]);

  return (
    <TodoProvider value={{todoarr,deletetodo,addtodo,togglecomplete,updatetodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todoarr.map((todo)=>(
               <div key={todo.id} className='w-full'>
               <TodoItem todo={todo} />
             </div>
            ))}
          
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
