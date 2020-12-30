import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <button>Increment</button>
      </div>
    );
  }

// NB: ctrl-d for VSCode multi cursor.

// React.Fragment: Use a child element of the target instead of a div.
// 
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello World!</h1>
//         <button>Increment</button>
//       </React.Fragment>
//     );
//   }

}

export default Counter;
