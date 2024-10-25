import React, { useEffect, useRef, useState } from 'react'

function Ref() {
  const [name,setName] = useState('')
  const renderCount = useRef(1)
  const inputRef = useRef()
  const prevName = useRef()
// Use Ref has three use Cases 
// In First use case we use use ref to persists the values that are changes instead of re render 
// the method used in use Effect could have been done by use State but it would have rendered every time 
// use Ref is similar to use state it has an object {current:0} with its current state we can change it but it will not cause re render 
// it value will persist
  useEffect(()=>{
    renderCount.current = renderCount.current +1
    prevName.current = name
  })


  // Second use Case is that we can use refs to access any element in dom bacically we can directly access any element like input and make changes to it 
  // but we don't have to use refs commonly but only when needed otherwise it is considered bad practice
  // every html element has a ref method
  // we should not abuse use refs as it is easy to use and updated elements like some people use refs instead of onchange methods and state which is considered bad practice
  const focus = ()=>[
    // inputRef.current.value = "some value variable"
    inputRef.current.focus()
  ]

  // Third usecase is what if you want to save the previous value of your state
  // we can use useState to store a previous value of a state but it will re render but we want to persist the value
// we can do it by using useRef anf the value will persist
// the above code in use Effect will use prevName and assign the name variable the previious state of name variable will be saved
  return (
    <div>
   <h1>Use Ref</h1>
   <div className="inputcontainer">
    <input ref={inputRef} type='text' onChange={(e)=>setName(e.target.value)} placeholder='Write Name...' style={{borderRadius:"5px"}}/>
    <p>My Name is {name} and it used to be {prevName.current}</p>
    <p>I have rendered {renderCount.current} times</p>
    <button onClick={focus}>Focus!</button>
   </div>
    </div>
  )
}

export default Ref