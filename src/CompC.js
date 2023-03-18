import React ,{useContext}from 'react'
import { AgeContext, NameContext } from './App'

const CompC = () => {
    const myname = useContext(NameContext)
    const myAge = useContext(AgeContext)
  return (
    <div>
        <h2>Component C</h2>
        <h1>{myname}</h1>
         <h2>{myAge}</h2>
        </div>
  )
}

export default CompC