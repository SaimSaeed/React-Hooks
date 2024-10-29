import React, { useEffect, useState } from 'react'

function List({getItems}) {
    const [list,setList] = useState([])
    useEffect(()=>{
      // this parameter is given to the function
        setList(getItems(1))
        console.log("Updating Items!")
    },[getItems])
  return (
    list.map((item)=><div key={item}>{item}</div>)
  )
}

export default List