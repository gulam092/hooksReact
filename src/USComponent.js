

import React, { useState } from 'react'

function USComponent() {
  const [name, setName] = useState("Gulam")

  let changeState =()=>{
    setName("Prem")
  }
  return (
    <div><h2>{name}</h2> 
    <button onClick={changeState}> Update</button>
    </div>
  )
}

export default USComponent


// import React, { useState } from 'react'

// function USComponent() {
//   const myArray  =  useState("Gulam")
//   return (
//     <div><h2>{myArray[0]}</h2> 
//     <button onClick={() =>myArray[1]("Kumar")}> Update</button>
//     </div>
//   )
// }

// export default USComponent