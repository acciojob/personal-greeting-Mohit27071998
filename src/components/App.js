
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let ans = ""
  const[name,setName]  = useState(ans)

  const inputChangeHandler =(e)=>{
    ans = 'Hello ' + e.target.value + "!"
    setName(ans)
  } 
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter Your Name:</label><br/>
        <input type="text" onChange={inputChangeHandler}/><br/>
        <p>{name}</p>
    </div>
  )
}

export default App
