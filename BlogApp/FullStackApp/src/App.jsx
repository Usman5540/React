import './App.css'
import { Outlet } from 'react-router-dom'// why this we putted here because rest of the will not render inside the app
// which we defined in main .jsx we need outlet by the way 
function App() {

  return (
    <>
    <main>  <Outlet/>    </main>
   
 
    </>
  )
}

export default App
