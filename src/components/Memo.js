import React, { useState, useMemo, useEffect } from 'react'

function Memo() {
  // when ever we use function that are complex and take time to load it makes the whole component slow because react re renders every time
  // state changes and because it re renders the function also rerenders and that cause the other function to also slow down
  // we use usememo so that it memoises the result so that it does not have to re render the whole function
  // it means that when the value is same and not changed for the slow function the result is already saved and we don't need to re render the slow function 
  // slow function will only re render when the value changes
  // this will not affect the other functions as their speed will not be compromised
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  // use memo also takes dependency array like use Effect so that it can only work when something changed
  // this will save the value until change of value and our darkmode function speed will not be compromised
  // you cannot use useMemo everywhere with every function because it consume more memory and decrease performance we only use it for complex or bigger functions because it is itself a function
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const darkModeHandler = useMemo(() => {
    return {
      backgroundColor: dark ? " black" : "white",
      color: dark ? "white" : "black",
      height:"10vh",
      width:"10vw",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:"10px",
      marginTop:"10px"


    }
  }, [dark])



// There is a second use case of this hook as we can se this use effect will only re render when style object changes
// meaning when only the dark mode is changed but the updation of numbers is also causing this use effect to re render 
// other than the theme change because when ever a change happen in the function every function is going to be re rendered again
// which causes the darkmodehandler to re render which cause use Effect to re render so we memoize it using use memo so that it stops updating unnessecary
  useEffect(() => {
    console.log("Theme Updated!")
  }, [darkModeHandler])

  return (
    <div>
      {/* in this example dark mode is being affected due to the slow function as dark mode function is alos slowing down
       and the value that we get from the slow function is also rendered slowly */}
      <h1>Use Memo</h1>
      <input type='number' onChange={e => setNumber(e.target.value)} value={number} />
      <button onClick={() => setDark(!dark)}>Change Mode</button>
      <div style={darkModeHandler}>
        {doubleNumber}
      </div>
    </div>
  )
}

function slowFunction(num) {
  for (let i = 0; i <= 10000000000; i++) {
    return num * 2
  }
}

export default Memo