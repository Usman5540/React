import { useState ,useEffect} from 'react'
import './App.css'

function App() {
const [exchange,setExchange]=useState({})
const [amount,setAmount]=useState(1)
const[fromCurrency,setFromCurrency]=useState('USD')
const[toCurrency,setToCurrency]=useState('PKR')
const [convertedAmount,setConvertedAmount]=useState(null)
// console.log(amount)
// console.log(exchange)
// console.log(fromCurrency)
useEffect(()=>{
console.log('resourse 1 type changed')
  const apii=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(apii)
       .then((response) => response.json())
       .then(response=>{
              setExchange(response.rates);
       }).catch(error=> console.log(error))

},[fromCurrency])// whenver this array changes useEffect will run
// fromCurrency becausse fromcurrency changes in dropdown manue each time 
useEffect(()=>{
     console.log('resourse two type changed')
            const conversionRate=exchange[toCurrency]// ab smajh aya exchange set hota hai from down sy wahan sy jo toCurrency ki value kya hai isko multiply amount sy kraty hen 

            // console.log(`Exchange rate for ${toCurrency}: ${exchange[toCurrency]}`);//Exchange rate for PKR: 3.8
            const converted=amount*conversionRate;
            setConvertedAmount(converted.toFixed(2))
},[amount,fromCurrency,toCurrency,exchange])
function handleChange(e){
  const {value,name}=e.target

  switch(name){
    case 'amount':
  setAmount(value);
      break;           
   case 'from':
    setFromCurrency(value);
     break;
     case 'to':
      setToCurrency(value);
       break;
}
    }
  return (
   <div className="card">
      
    <div className='wrapper'>
    <h1>Currency Converter </h1>
        <div    className='input_container' >
          <label>amount</label>
          <input 
           type="number"
           name="amount"
           className="input_field"
           value={amount}
           onChange={handleChange}
          />
        </div>
        <div className='input_container'>
          <label > From </label>
          <select
            name="from"
            onChange={handleChange}
            value={fromCurrency}
          >
            {
            // exchange &&
            //key (necessary for React) 
              Object.keys(exchange).map((curr) => (  
                <option key={curr}
                //  value={curr}
                 >
                  {curr}
                </option>
              ))}
          </select>
        </div>
        <div className='input_container'>
          <label > To </label>
          <select 
            name='to'
            onChange={handleChange}
            value={toCurrency}
          >
               {
            // exchange &&
              Object.keys(exchange).map((curr) => (
                <option 
                key={curr} 
                // value={curr}
                >
                  {curr}
                </option>
              ))}
          </select>
        </div>
        <div className="output">
          converted amount :{convertedAmount}
        </div>
    </div>

   </div>
  )
}

export default App
