import React, {Component} from 'react'
// test
class Counter extends Component {
  render () {
    return (
      <div>
        <button id='increment' onClick={this.props.handleClick}>+</button>
        <button id='decrement' onClick={this.props.handleClick}>-</button>
        <p>{this.props.counterValue}</p>
      </div>
    )
  }
}
export default Counter
