import React, { useState,useCallback, useEffect,useMemo } from 'react'
import List from './List'

function CallBack() {
    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState("")
//  use Callback is used to memioze the whole function and only updates when the function changes 
// this means that the function will persist on re render 
// we only use useCallback or useMemo in term of referential equality problems
// the main difference between the useCallback and useMemo hook is that memo only memoizes the the result or return value of the function
// whereas useCallback hook memoizes the whole function. so when we need to create new functions that persist we use useCallback
// we can add parameters to the function and it will persist
// the increment parameter is given to this function which will increment the values in the function by the given increment number
// we couldn't do this with useMemo because it was only going to save the return value we wouldn't have been able to add parameters and save the whole function but useCallback uis useful for us in this scenario
// the only instance of using useCallback is creating a function is really really slow but it is never ever going to happen so no worries
    const getItems =useCallback( (increment)=>{
        return [number+increment,number+1+increment,number+2+ increment]
    },[number])
//  As the theme object was re rendering because of function value changing useMemo was used so that the object does not re render
    const theme = useMemo(()=>{
      return { backgroundColor:dark ? "black" : "white",
        color: dark ? "white" : 'black',
        height:"10vh",
        width:"10vw",
        borderRadius:"5px",
        textAlign:"center",
        marginTop:"10px",
        padding:"5px",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:'center'
    }
  },[dark])
  // for checking that function value change is causing re render of use Effect or not
    useEffect(()=>{
    console.log("theme is changing")
},[theme])
  return (
    <div>
        <h1>Use Callback</h1>
      
        <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>setDark(prevDark=>!prevDark)}>Toggle Change!</button>
        <div style={theme}>
      <List getItems={getItems}/>
        </div>
    </div>
  )
}

export default CallBack