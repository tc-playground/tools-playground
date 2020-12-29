import React from "react";

// React Function Component - material-ui loading spinner.
const Spinner = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.text}</div>
        </div>
    );
};

// Create default props.
Spinner.defaultProps = {
    text: "Loading..."
}

export default Spinner;