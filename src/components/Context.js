import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Context() {
  // use the context
  // but to use the context first import the context you want to use and then write it inside of useContext and then import the state or functions
  const {setDarkMode,darkMode} = useContext(ThemeContext)
  // This could also be used in context but in this example it is not 
  const changeMode = {
   backgroundColor: darkMode ? "black" : "white",
   color: darkMode ? "white" : "black",
   height:"20vh",
   width:"20vw",
   float:"right",
   display:'flex',
   justifyContent:"center",
   alignItems:"center",
   flexDirection:"column",
   borderRadius:"10px"
  }
  return (
    <>
        <h1>Use Context</h1>

    <div  style={changeMode}>
      <h3>Change Mode!</h3>
    <button onClick={()=>setDarkMode(!darkMode)} style={{borderRadius:"5px",outline:"none",border:"none",backgroundColor:darkMode ? "white" :"black",color:darkMode? "black" : "white"}}>Toggle Change!</button>

    </div>
    </>
    
 
  )
}

export default Context