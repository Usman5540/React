import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Product from './Component/Product';
import Cart from "./Component/Cart";
import Dashboard from "./Component/Dashboard";
import React from "react";

import {RouterProvider,createRoutesFromElements,createBrowserRouter, Route} from 'react-router-dom';
import RootLayout from "./Component/RootLayout";
function App() {
 const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<Dashboard/>}></Route>
    <Route path="/Cart" element={<Cart/>}></Route>
  </Route>
 ))


  return (
    <>
  
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
