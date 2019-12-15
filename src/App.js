import React from "react";
import logo from "./logo.svg";
import "./App.css";

function User(props) {
  return <div className="user">{props.name}</div>;
}

function Toot(props) {
  return (
    <div className="Toot">
      <User name={props.user} />
      {props.message}
      {props.children}
    </div>
  );
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

function App() {
  return (
    <div className="App">
      {toots.map(toot => {
        return (
          <Toot {...toot}>
            <div>Extra message</div>
          </Toot>
        );
      })}
    </div>
  );
}

export default App;
