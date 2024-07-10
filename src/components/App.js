
import React, { useState } from "react";
import './../styles/App.css';

const[count,setCount]=useState(0);
const App = () => {
  return (
    <div>
      <p>Button Clicked {count} Timer</p>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default App
