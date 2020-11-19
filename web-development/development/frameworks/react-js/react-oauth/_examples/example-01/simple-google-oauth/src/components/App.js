import React from "react";

import GoogleAuth from "./GoogleAuth"

const App = () => {
  return (
    <div className="ui container">
      <h1>Click this button to log in/out using Google OAuth2!</h1>
      <GoogleAuth/>
    </div>
  )
};

export default App;
