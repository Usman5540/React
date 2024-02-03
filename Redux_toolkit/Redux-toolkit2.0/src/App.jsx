import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import React from 'react';
import NavBar from './Components/NavBar';

function App() {

  return (
    <>
           <BrowserRouter>
           <NavBar/>
           <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route  path='/cart' element={<Cart/>}></Route>

           </Routes>
           
           </BrowserRouter>
    </>
  )
}
// we have to put out of the routes scope our nav because we need to show on each page 

// path="/cart"  after slash name for search whatever you want
export default App
