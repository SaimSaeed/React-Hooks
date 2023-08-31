import React,{useState} from 'react'

function State() {
// States for count and show text
    const [count,setCount]= useState(0)
    const [showText,setShowText]= useState(true)

    const incrementCount = ()=>{
        // Set Count to increment Count
        setCount(count+1)
        // set Show Text to show text on click
        // when button will be clicked value will be false and text will not show but when button is clicked again the value is false and will be true due to using not operator
        setShowText(!showText)
    }

    const reset = ()=>{
        setCount(0)
        setShowText(false)
    }
  return (
    <div>
        <h1>useState Hook</h1>
        <h2>{count}</h2>
        {/* Button with on Click method to invoke function on click */}
        <button onClick={incrementCount}>Click Me!</button>
        {/* Button to reset Count */}
        <button onClick={reset}>Reset</button>
        {/* Text will only show if its values is true by default value is true */}
        {showText && <>


        <h2>This a Text</h2>
        
        
        
        </>}





    </div>
  )
}

export default State