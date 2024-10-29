import React, { useLayoutEffect, useState } from 'react'

function LayoutEffect() {
  const [count,setCount] = useState(0)
  // Use Effect is Asyncronous means it is non blocking and it runs with the react dom meaning when react dom is calculating changes it is running in the background and renders with it
  // Use Layout Effect is synchronous meaning that it is blocking and after the react dom finishes calcualtion only then it will run meaning the Dom is updated but the changes are not visually represented to the user
  // Use Effect is always use first because it is fast use useLayoutEffect only when needed 
  useLayoutEffect(()=>{
    console.log(count)
  },[count])
  return (
    <div>
        <h1>Use Layout Effect</h1>
        <button onClick={()=>setCount(count+1)}>Increment!</button>
        <button onClick={()=>setCount(0)}>Reset!</button>

        <p>{count}</p>
    </div>
  )
}

export default LayoutEffect