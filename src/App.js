import React, { Component } from 'react'
import Counter from './Counter'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  // constructor () {
  //   super()
  //   this.state = { counter: 0}
  //   this.incrementCounter = this.incrementCounter.bind(this)
  // }
  // create an picture component that displays the app's this.state.imageUrl
  // pass function that will change the picture based off of a text box
  state = {
    title: "No way Jose",
    githubUrl: 'https://github.com/toneloke',
    imageUrl: 'https://drugfree.org/wp-content/uploads/2014/03/Four_loko_3-26-141.jpg',
    counter: 0
  }
  addOrMinusCounter = (event) => {
    let counter = this.state.counter
    if(event.target.id === "increment" ){
       counter++
    }else{
       counter--
    }
    this.setState({counter})
  }

  render () {
    console.log("I am being called")
    return (
      <div className='App'>
        <Counter counterValue={this.state.counter} handleClick={this.addOrMinusCounter}/>
      </div>
    )
  }
}

export default App
