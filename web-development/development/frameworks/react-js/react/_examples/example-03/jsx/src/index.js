// Import React and ReadDOM libraries.

import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
    return "Click me too!"
}

// Create React component.
const App = () => {
    const labelText = "Enter name:";
    const buttonText = { text: "Click Me!"};
    // NB: Convention is to wrap jsx in parentheses...
    return ( 
        <div>
            <label class="label" for="name">{labelText}</label>
            <input id="name" type="text"></input>
            <button style={ {backgroundColor: 'blue', color: 'white'} }>
                {buttonText.text}
            </button>
            <button style={ {backgroundColor: 'blue', color: 'white'} }>
                {getButtonText()}
            </button>            
        </div>
    );
};

// Show React component on screen.
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);