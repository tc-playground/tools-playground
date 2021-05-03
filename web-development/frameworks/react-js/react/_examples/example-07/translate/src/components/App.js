import React from "react";

import UserCreate from "./UserCreate";
import { LanguageStore } from "../context/LanguageContext";
import ColourContext from "../context/ColourContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  state = { colour: "green" };

  onLanguageChange = (colour) => {
    this.setState({ colour });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          {/* prop name must be 'value' */}
          <ColourContext.Provider value={this.state.colour}>
            <UserCreate />
          </ColourContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
