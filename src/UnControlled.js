import React, { Component, createRef } from 'react'

export default class UnControlled extends Component {
    constructor(props) {
      super(props)
    this.nameRef =createRef()
    this.ageRef =createRef()
      
    }
    componentDidMount(){
        console.log(this.nameRef)
        console.log(this.ageRef)
        this.ageRef.current.focus();
    }


  render() {
    return (
      <div>
        <form>
            <label htmlFor="">Enter Name:</label>
            <input type="text" placeholder='Name' ref ={this.nameRef}></input>
            <br/><br/>
            <label htmlFor="">Enter Age:</label>
            <input type="number" placeholder='Age' ref ={this.ageRef}></input>
            <br/><br/>
          <input type="submit" value ="submit"></input>
        </form>
      </div>
    )
  }
}
