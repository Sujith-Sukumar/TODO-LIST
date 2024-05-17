import React, {useState,useEffect} from 'react';

function Counter() {
  useEffect(()=>{
    console.log('mounting....');
    return()=>{
      console.log('unmounting....');
    }
  })
  const [count,setCount] =useState(0);
  return (
    <div>
      <button onClick={() =>setCount(prevCount=> prevCount+1)}> increment</button>
      <h1>I'm component Count: {count}</h1>
    </div>
  );
}

export default Counter;