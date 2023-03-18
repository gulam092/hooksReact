import React, { Component, createRef } from 'react'

export default class ReferenceComponent extends Component {
    constructor(props) {
      super(props)
    this.myRef = createRef();

     
    }
    componentDidMount(){
        console.log(this.myRef)
        console.log(this.myRef.current.innerHTML)
    }
    handleHeading =() =>{
        this.myRef.current.align ="right";
        this.myRef.current.hidden = true;
    }
  render() {
    return (
      <div>
        <h2 ref={this.myRef}>Gulam ali</h2>
        <button onClick={this.handleHeading}>Click</button>
      </div>
    )
  }
}
