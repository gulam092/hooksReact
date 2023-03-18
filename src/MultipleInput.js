import React, { Component } from 'react'

export default class MultipleInput extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Gulam",
         email:"a@gmail.com"
      }
    }
    // handleName = (e) =>{
    //  this.setState({
    //     name:e.target.value
    //  })
    // }
    // handleEMail =(e) =>{
    //  this.setState({
    //     email:e.target.value
    //  })
// }s

handleChange =(e) =>{
    console.log(e.target.value)
    console.log(e.target.name)
    const value = e.target.value;
    const name  =e.target.name
    const new_value  = (name ==="email")? value.toLowerCase():value;
this.setState({
    [name]:new_value
})
}
  render() {
    return (
      <div>
        <form>
            <label htmlFor="">Enter Name:</label>
            <input type="text" name ="name" value={this.state.name} placeholder='Enter Your Name' onChange={this.handleChange}></input>
            <br/><br/>
            <label htmlFor="">Enter Email:</label>
            <input type="text"  name ="email" value={this.state.email} placeholder='Enter Your EMail' onChange={this.handleChange}></input>
            <br/><br/>
            <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}
