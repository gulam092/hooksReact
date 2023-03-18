import React,{useState} from 'react'

function OtherInputs() {
    const [textarea, setTextarea] = useState("")
    const [selectmenu, setSelectmenu] = useState("USA")
    const [check, setCheck] = useState(false)
   const handleSubmit =(e) =>{
    e.preventDefault()
     console.log(e.target[0].value)
     console.log(e.target[1].value)
     console.log(e.target[2].checked)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label style={{verticalAlign:"top"}} htmlFor ="">Comment:</label>
            <textarea value={textarea} cols="30" rows="5" onChange={(e)=>setTextarea(e.target.value)}></textarea>
            <br/>
            <br/>
            <label htmlFor="">select Country:</label>
            <select value={selectmenu}  onChange ={(e)=>{setSelectmenu(e.target.value)}}>
                <option value="canada">canada</option>
                <option value="USA">USA</option>
                <option value="india">India</option>
                <option value="China">China</option>
            </select>
            <br/>
            <br/>
            <label  htmlFor ="">Yes I agree:</label>
             <input type="checkbox" checked ={check} onChange ={(e)=>{
                setCheck(e.target.check)
             }}></input>
            <br/>
            <br/>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
  )
}

export default OtherInputs