
import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-bg-white gap-3 rounded-xl px-3 py-2'>
          <button
            onClick={() => setColor("red")}// onlick expect  a call back
            className='outline-none text-white'
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className='outline-none text-white'
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className='outline-none text-white'
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("olive")}
            className='outline-none text-white'
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
