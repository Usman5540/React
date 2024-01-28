import { useState,useEffect } from 'react'
import './App.css'
import CurrencyRow from './CurrencyRow'

const Con_api='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'


function App() {
  // useState functin going to return an array of options
  const [Currencyoptions,setCurrencyOptions]=useState([])// i passed an empty array because i don't have any array when page first loads
  


  useEffect(()=>{
    fetch(Con_api).
    then((response)=>{
   return response.json()
    }).then((data)=> console.log(data)).catch((error)=> console.log(error))
  }
  ,[])
  // passed array in useEffect whenver items in that array change we want to re run useEffect
  // but in this case we need to run useeffect only once so that is way array  is empty there is no dependencies



  return (
    <>
    <h1>Currency Convertor</h1>
    <CurrencyRow/>
    <div >=</div>
      <CurrencyRow/>
    </>
  )
}

export default App
