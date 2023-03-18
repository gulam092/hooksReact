import React ,{useEffect,useState}from 'react'

function FunctionEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("GUlam")
    useEffect(() => {
    console.log("Hello I am Effect ="+count)
    },[count,name])
  return (
    <div>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button onClick={()=>setCount(count+1)}>Update State</button>
      <button onClick={()=>setName("Kumar")}>Update Name</button>
    </div>
  )
}

export default FunctionEffect