import React, { useEffect, useState } from 'react'

function Effect() {
  const [resourceType,setResourceType] = useState("posts")
  const [windowWidth,setWindowWidth] = useState(window.innerWidth)
  const [items,setItems] = useState([])
  const newItems = [items[0]]
  // UseEffect is commonly used to fetch responses
  //  it uses a dependency array which holds a value. when the value changes useEffect will only run the code in it.
  // if we keep the dependency array empty then our code will be mounted for the first time after that it won't re render
  // if we do not write the dependency array and use useEffect directly then it will re render every time a change happens
  // there is also an return function in useEffect that is used as a clean up of the code that has run and remove it or unmount it from the memory
  // console.log("render")
  useEffect(() => {
    
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
    // console.log(items)
    // this is used to demonstrate that every time we use our useEffect with cleanup in it. whenever our state changes its going to
    // cleanup the previous state and load the present state
  // console.log("on Mount")
  // return ()=>{
  //   console.log("unmount")
  // }
  },[resourceType])

  const changeWidth = ()=>{
    setWindowWidth(window.innerWidth)
  }
// This second use Effext is only used for example but you should only use single use Effect and write code that is changing
// In this example we are using eventListners in Use Effect which we might have to use based on project
// we want that every time the window width is change we use useEffect hook to handle change and refresh our state so that we wont have
// to referesh our page
// we are also using a cleanup function and the function of the cleanup  is to unmount the data . In this case the event listener is going
// to be mounted even when the pages changes but we won't want that so we use cleanup to remove the event listner that has been loaded
// we can also use cleanup for different purposes like if we want have subsciption of an api and we want to remove the api after the desired function loaded
// so that we dont overuse it etc.
  useEffect(()=>{
  window.addEventListener("resize",changeWidth)
  return ()=>{
    window.removeEventListener("resize",changeWidth)
  }
  },[])
  
  return (
  <>
  <h1>Use Effect Hook</h1>
  <button onClick={()=>setResourceType("posts")}>Posts</button>
  <button onClick={()=>setResourceType("users")}>Users</button>
  <button onClick={()=>setResourceType("comments")}>Comments</button>
  <h1>{resourceType.toUpperCase()}</h1>
  {newItems.map((item)=>{
    return <div key={item?.id}>
       <p> <strong>Title:</strong>  {item?.title ? item?.title : item?.name}</p> 
       <p><strong>Description:</strong>  {item?.body ? item?.body : item?.email}</p>  
    </div>
  })}
  <h2>Windows Resize</h2>
  <p>{windowWidth}</p>
  </>
  )
}

export default Effect