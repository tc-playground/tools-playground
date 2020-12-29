import React, { Component } from 'react'

// See the 'UseState' Hooks for the hooks equivalent.
class ClassComponentPreviousStateCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassComponentPreviousStateCounter