import { useState } from "react"


const Counter = () => {

    const [count,setCount] =  useState(0)
  
    const Increment = () => {
      setCount(count+1)
    }
    return(
      <>
      <h2>{count}</h2>
      <button onClick={Increment}>Increment</button>
      </>
    )
  }
  
  export default Counter