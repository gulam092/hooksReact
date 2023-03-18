import React, { Component } from 'react'

export default class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:"Gulam",

      }
    }
    handleForm = (e) =>{
        console.log(e)
      this.setState({
        data:e.target.value.toLowerCase()
      })
    }
    handleFormSubmission =(e) =>{
        e.preventDefault()
        console.log(e.target[0])
    }
  render() {
    return (
      <div>
        <h2>{this.state.data}</h2>
        <form onSubmit={this.handleFormSubmission}>
            <label htmlFor="">Enter Name:</label>
            <input type="text" value={this.state.data} onChange={this.handleForm}></input>
            <br></br>
            <input type="submit" value="submit"/>
           
        </form>
      </div>
    )
  }
}
