import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColourContext from "../context/ColourContext"

class Button extends React.Component {
  // Consumer Approach

  renderButton(colour) {
    return (
        <button className={`ui button ${colour}`}>
            <LanguageContext.Consumer>
                {value => (value.language === "english" ? "submit" : "Voorleggen")}
            </LanguageContext.Consumer>
        </button>
    )
  }

  render() {
    return (
        <ColourContext.Consumer>
            {colour => this.renderButton(colour)}
        </ColourContext.Consumer>
    );
  }
}

export default Button;
