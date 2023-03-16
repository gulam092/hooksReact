import React,{useState} from 'react'

function USWithObject() {
    const obj ={
        name :"Gulam",
        age :23,
        height:6.2,
        isYoung:true
    }
    const [person, setPerson] = useState(obj)
    let changeState =()=>{
        setPerson(previousState =>{
            return {
                ...previousState,
                name :"Kumar"
            }
        })
        // setPerson({
        //     name:"Zain",
        //     age:80,
        //     height:78,
        //     isYoung:false
        // })
    }
  return (
    <div>
        <h2>{person.name}</h2>
        <h2>{person.age}</h2>
        <h2>{person.height}</h2>
        <h2>{person.isYoung.toString()}</h2>
        <button onClick={changeState}> Change</button>
        </div>
  )
}

export default USWithObject