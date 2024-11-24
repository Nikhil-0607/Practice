import React, {useEffect, useState} from 'react'



function New() {

  const [count, setCount] = useState(0);



  useEffect(()=>{
    console.log("useEffect")
  })
  return (
    <div>
      <h1>UseEffect in React {count}</h1>
      <button onClick={()=>setCount(count+1)}>Update Counter</button>
    </div>
  )
}

export default New

