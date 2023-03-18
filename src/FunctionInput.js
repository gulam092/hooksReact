import React,{useState} from 'react'

function FunctionInput() {
    const [data, setData] = useState({
        name :"",
        email:""
    })

    const handelChange =(e) =>{
        //e.preventDefault()
        const name = e.target.name;
        const value =e.target.value
        console.log(name,value)
       setData((pre)=>{
          return {
                ...pre,[name]: value
          }
       });
     
    }
    const    handleSubmit =(e) =>{
        e.preventDefault()
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <label htmlFor="">Enter Name:</label>
            <input type="text" value={data.name} onChange ={handelChange} name ="name" placeholder="Enter Your Name"></input>
            <br/>
            <br/>
            <label htmlFor="">Enter Email:</label>
            <input type="text" value={data.email} onChange ={handelChange} name ="email" placeholder="Enter Your Email"></input>
            <br/>
            <br/>
            <input type="submit" value="submit"></input>
        </form>
    </div>
  )
}

export default FunctionInput