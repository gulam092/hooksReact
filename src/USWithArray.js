import React,{useState} from 'react'

function USWithArray() {
    let num =[11,22,33,44];
    let [number, setNumber] = useState(num)
// let changeList = () =>{
//     setNumber([55,77,99,11])
// }

let changeList = () =>{
    setNumber(previousState =>{
        return [
            ... previousState,
            Math.floor(Math.random()*50)
        ]
    })
}
  return (
    <div>
        <ul>
            {number.map((value , index) =><li key ={index}>{value}</li>)}
        </ul>
        <button onClick={changeList}> Change Array</button>
    </div>
  )
}

export default USWithArray