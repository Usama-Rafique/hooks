import React, {useState} from 'react';
import Message from './message.js'
import logo from './logo.svg';
import './App.css';


function App() {
  let [count,setcount]=useState(0)
  let [ismorning,setday]=useState(true)
  return (
  
    <div className='box'>
      <h1>daytime={ismorning ? 'morning':'night'}</h1>
      <Message counter={count} />
      <br></br>
      <button onClick={()=>setcount(count+1)}>update counter</button>
    </div>
  );
}

export default App;
