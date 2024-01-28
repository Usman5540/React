import { useEffect, useState } from 'react'
import './App.css'
import { ToDoWrapper } from './Context';
import TodoForm from './Components/todoForm';
import TodoItem from './Components/todoItem';

function App() {
  const [todos, setTodo] = useState([]);// addtodo will add values to todos in [{}]
  // console.log(todos)// all values in array [{}]
  const addtoDo = (todo) => {
    // setTodo(todo)// it will remove all values from array n will set this todo object in array
    const obj = { ...todo }//complete comming new object without id which defines down below
    // console.log(obj)

    setTodo((prev) => ([{ id: Date.now(), ...todo }, ...prev])) // object destructuring and array destructuring id date.now
  }
  const updatetoDo = (id, todo) => {// this will work on todos array [{}] when map encounter with expected id it will replace todo msg with existing msg
    setTodo((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))// map will get each object of the array we will console.log
    //  individual todo in map call back and prev refering to array  
  }

  const deletetoDo = (id) => {
    setTodo((prev) => prev.filter((eachval) => eachval.id !== id))//it works on true statement it will filter all values instead fo condition value that will be skipped and all remaining values will return 
  }
  const toggleComplete = (id) => {// again this iterate on todos array   
    setTodo((prev) => prev.map((eachObj) => eachObj.id === id ? { ...eachObj, completed: !eachObj.completed } : eachObj))// default value for complete property is false 
    // it will took all values from specific object and overwrite the completed property  take care ternary operator 
  }
  useEffect(() => {// this use effect will run when pageloads 
    // we need values in jason because it preserve the structure jason can alos be [{ an:array}]
    // this method is responsible for getting values from localstorage those are inserted in local storage already 
    // this not responsible for insertion of the local storage 
    // we are checking array length [{}]
    const to = JSON.parse(localStorage.getItem("todos"))
    if (to && to.length > 0) {
      setTodo(to)
    }
  }, [])
  // now we need to add each add of the todo in local storage 
  // we can do in above use effect but problem is that when add new one useffect will get values each tiem as well  this is a problem 
  useEffect(() => {
    // this method is responsible for storing values in local storage each time when addtodo adds the values and updatetodo updates the values

    localStorage.setItem("todos", JSON.stringify(todos))//key  and string 
  }, [todos])// this use effect will run when we changes todos[{ array}]
  // note each time when we get  values in string in Javascript we use jason()
  // we send values those can be send in string format 

  return (<ToDoWrapper value={{ todos, updatetoDo, deletetoDo, addtoDo, toggleComplete }}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/* Loop and Add TodoItem here */}
          {todos.map((todo) => {
            // console.log(todo); // Log each 'todo' object
            return (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </ToDoWrapper>
  )
}

export default App
// Errors keys should be matched in localStorage code area