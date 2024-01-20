  import { useState ,useCallback, useEffect,useRef} from 'react';

  function App() {
    const [length, setLength] = useState(8);
    const [allowedCharacter, setAllowedCharacter] = useState(false);
    const [numberAllowed, setAllowedNumber] = useState(false);
    const [password,setpassword]=useState("")   // plays major role setpassword 
    const passref=useRef(null)
    const passwordGenerator = useCallback(()=>{
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // usecallback bieng used for optimization it stores the password in cache for further use 
    // in setpassword
  
    if (numberAllowed) {
      str += "0123456789";
    }
  
    if (allowedCharacter) {
      str += "!@#$%^&*()_-+=<>?/{}[]";
  }
  
    let password = "";
    for (let index = 1; index <= length; index++) {
      let charIndex =(Math.round(Math.random() * str.length));
      //It means you are generating a random 
      //index between 0 and 51 (inclusive), which covers all the characters in the str string.
      //same as core javascript project random number generator it will run 1 to length time which changes according to slide bar
      // str.length is 0 to 51 if numberallowed it 61 if special character then str.length goes accoring to that 

      console.log(str.length)
      password += str.charAt(charIndex);
    }

    setpassword(password)// vital role set each time using hook  the loop generated password 
  
  
  },[allowedCharacter,numberAllowed,length,setpassword]) 
  // [allowedCharacter,numberAllowed,length]) it can works like this as well but for the optimization purpose added setpassword
  // passwordGenerator() it can't be call like this 
    const copypass = useCallback(() => {
      // Assuming passref is a useRef to your input element
      passref.current?.select();
      passref.current?.setSelectionRange(0,8)
      // Adjust the start and end indices as needed
      window.navigator.clipboard.writeText(password);
    }, [passref,password]);
    useEffect(()=>{
      passwordGenerator()
    },[allowedCharacter,numberAllowed,length])
    //use effect responsible for calling function according to dependencies and page load as well as we know the 
    // the purpose of useEffect() hook which is responsible for changes on web page 
    return (
      <>
      <div className='flex items-center justify-center h-screen'>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
      <h2 className='text-white text-center my-4'>passwordGenerator</h2>
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={password} // it is responsible for showcase changes in input field 
          className='w-full outline-none py-2 px-4 mb-4 rounded'
          placeholder='Password'
          readOnly
          ref={passref}
        /><button
        
        onClick={copypass}// hare we passed reference as simple function
        className='bg-sky-700 text-white px-4 py-2 rounded outline-none hover:bg-blue-500'>Copy</button>
      </div>
      <div className="flex text-sm gap-x2">
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={8} // using this feature it can't be less then 8 
          max={100}// can't move above to 100
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
            /* hello 28
            hello 52
            hello 35
            hello 34
            hello 19
            hello 8
            hello 23      
            // console.log('hello',e.target.value)
            */
          //higher order function onchange

          />
          <label>  Length: {length}</label>

          <input type="checkbox"
          id='numberInput'
          defaultChecked={numberAllowed}
          onChange={()=>{
            setAllowedNumber((prev)=> !prev)}}
            />
            <label >NumbarSelct</label>
            <input type="checkbox"
            id='charInput'
            defaultChecked={allowedCharacter}
            onChange={()=>{
              setAllowedCharacter( ( prev ) =>!prev)
              // setAllowedNumber(true)
              // it can be used once so that is way its wrong -->like  interviw question 
            }}
            />
            <label >charSelect</label>
        </div>
      </div>
    </div>
  </div>


      </>
    );

    

    };



  export default App;
