// import React, { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

import useLocation from "./useLocation";

const App = () => {
  // This has been refactored to the 'useLocation' function.
  //
  // const [lat, setLat] = useState(null);
  // const [errorMsg, setErrorMsg] = useState("");
  //
  // // Replaces 'componentDidMount'. As we do not need it to be called multiple times
  // // (e.g. no 'componentDidUpdate') we pass in '[]' as the second argument.
  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     position => setLat(position.coords.latitude),
  //     err => setErrorMsg(err.message)
  //   );
  // }, []);

  // const [lat, errorMsg] = useLocation();
  const {lat, errorMsg} = useLocation();

  let content;
  if (errorMsg) {
    content = <div>Error: {errorMsg}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

// class App extends React.Component {
//   state = { lat: null, errorMessage: "" };
//
//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({ lat: position.coords.latitude }),
//       err => this.setState({ errorMessage: err.message })
//     );
//   }
//
//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage}</div>;
//     }
//
//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     }
//
//     return <Spinner message="Please accept location request" />;
//   }
//
//   render() {
//     return <div className="border red">{this.renderContent()}</div>;
//   }
// }

ReactDOM.render(<App />, document.querySelector("#root"));
