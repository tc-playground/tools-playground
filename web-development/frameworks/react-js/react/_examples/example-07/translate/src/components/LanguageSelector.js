import React from "react";

import LanguageContext from "../context/LanguageContext";

class LanguageSelector extends React.Component {

  static contextType = LanguageContext;

  render() {
    
    console.log("LanguageSelector - this.context: ", this.context);
    console.log("LanguageSelector - this.props: ", this.props);

    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
        {/* {this.state.language}> */}
      </div>
    );
  }
}

export default LanguageSelector;
