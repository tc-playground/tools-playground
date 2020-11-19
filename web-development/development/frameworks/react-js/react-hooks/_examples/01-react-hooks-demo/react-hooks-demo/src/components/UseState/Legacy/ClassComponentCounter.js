import React, { Component } from 'react'

// See the 'UseState' Hooks for the hooks equivalent.
class ClassComponentCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Count: {this.state.count}</button>
            </div>
        )
    }

}

export default ClassComponentCounter