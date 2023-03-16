import React,{useState} from 'react'

function FunctionState() {
    const [count, setCount] = useState(0)
    let Increase =() =>{
        setCount(count+1)
    }
    let Decrease =() =>{
        setCount(count-1)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={Increase}>Increment</button>
        <button onClick={Decrease}>Decrement</button>
    </div>
  )
}

export default FunctionState