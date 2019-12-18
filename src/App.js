import React from "react";
import "./App.css";

import Toots from "./Toots";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Tooter</h1>
        <menu></menu>
        <Toots />
      </div>
    );
  }
}

export default App;
