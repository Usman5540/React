import { useEffect, useState } from 'react'
import './App.css'
import { ContextProvider } from './Context/theme'
import ThemeBtn from './Components/button'
import Card from './Components/card'
// console for knowing functionality that will we show you  sequence of the calling 
function App() {
  const [theme,setTheme]=useState()// setTheme cause to run useEffect 
  function DarkMode(){
     setTheme('dark')
     console.log(' run dark function ')
  }
  function WhiteMode(){
     setTheme('light')
     console.log('run white function ')
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")// it removes all previous implementation 
    document.querySelector('html').classList.add(theme)
    //<!DOCTYPE html> it implements on whole html page 
    console.log('your array came accross a change resultantly  state has been changed  ')
  },[theme])// it will run  whenever value changes in theme array or variable ohhh yes 
  /* useEffect Hook:

The useEffect hook in React is used for performing side effects in functional components. It runs after every render and is commonly used for tasks like data fetching, subscriptions, or manual DOM manipulations. */
  return (
   <ContextProvider value={{theme,DarkMode,WhiteMode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
</ContextProvider>
// jsx wrapper  according to pictorial representation 
// values are defined this time in global variable instead in provider file and directly accessed by wrapper like separate file 
// in previous method we declared values in contexprovider file and defined in separate file this time we declared in global variable and accessed in wrapper
// we also minimize name of the wrapper by holding in variable like 
// cosnt ContextProvider=Contextvariable.provider instead
/*    down below is a global variable holder we directly imporat that variable which holds global variable 
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


 */
  )
}

export default App
