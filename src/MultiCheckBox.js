import React ,{useState}from 'react'

function MultiCheckBox() {

    const [fruitArray, setFruitArray] = useState([])
    const handleChange =(e) =>{
 const value = e.target.value;
  const checked = e.target.checked;
  console.log(value,checked)
  if(checked == true) {
    setFruitArray([
        ...fruitArray ,value
    ])
  }else{
    setFruitArray(fruitArray.filter((e)=>(e!==value)))
  }
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(fruitArray)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor=''>Select Food:</label>
            <input type="checkbox" name ="fruits" value="Apple" onChange={handleChange}></input>
            <label htmlFor=''>Apple</label>
            <input type="checkbox" name ="fruits" value="Mango" onChange={handleChange}></input>
            <label htmlFor=''>Mango</label>
            <input type="checkbox" name ="fruits" value="Grapes" onChange={handleChange}></input>
            <label htmlFor=''>Grapes</label>
            <input type="checkbox" name ="fruits" value="Banana" onChange={handleChange}></input>
            <label htmlFor=''>Banana</label>
            <br/>
            <br/>
            <input type="submit" value="submit"></input>
        </form>
    </div>
  )
}

export default MultiCheckBox