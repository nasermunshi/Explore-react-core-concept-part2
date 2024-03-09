import { useState } from "react"

export default function Counter(){
   const [count, setCount] = useState(0) ;  
   
   const handleadd =()=>{
   const newCount = count + 1;
   setCount(newCount)
   }

   const handleReduce =() =>{
    const newCount = count - 1;
    setCount(newCount)                
   }

  return (
    <div style={{border: '2px solid yellow'}}>
       <h1>Counter: {count}</h1> 
       <button onClick={handleadd}>Add</button> 
       <button onClick={handleReduce}>Reduce</button>           
    </div>                
  )                  
}