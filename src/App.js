import React from "react";
import logo from "./logo.svg";
import "./App.css";

function User(props) {
  return <div className="user">{props.name}</div>;
}

class Toot extends React.Component {
  render() {
    const { user, message, children } = this.props;
    return (
      <div className="Toot">
        <User name={user} />
        {message}
        {children}
      </div>
    );
  }
}

const toots = [
  {
    id: 1,
    message: "Hello Earth 616",
    user: "Jack"
  },
  {
    id: 2,
    message: "Hello Jupiter",
    user: "Ryan"
  },
  {
    id: 3,
    message: "Hello Saturn",
    user: "Roddy"
  }
];

class App extends React.Component {
  renderToots() {
    return toots.map(toot => {
      return (
        <Toot {...toot}>
          <div>Extra message</div>
        </Toot>
      );
    });
  }

  render() {
    return <div className="App">{this.renderToots()}</div>;
  }
}

export default App;
