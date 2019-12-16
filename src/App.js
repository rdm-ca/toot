import React from "react";
import logo from "./logo.svg";
import "./App.css";

function User(props) {
  return <div className="user">{props.name}</div>;
}

class Toot extends React.Component {
  state = {
    liked: false
  };

  toggleLiked = () => {
    const newLikedStatus = !this.state.liked;
    this.setState({ liked: newLikedStatus });
  };

  renderLikeButton() {
    const buttonIcon = this.state.liked ? "♥" : "♡";
    return <div onClick={this.toggleLiked}>{buttonIcon}</div>;
  }

  render() {
    const { user, message, children } = this.props;
    return (
      <div className="Toot">
        <User name={user} />
        {message}
        {this.renderLikeButton()}
      </div>
    );
  }
}

class App extends React.Component {
  renderToots() {
    const ignoredUsers = ["Grinch"];
    const bestToots = this.props.toots.filter(
      toot => !ignoredUsers.includes(toot.user)
    );
    return bestToots.map(toot => {
      return (
        <Toot {...toot}>
          <div>Extra message</div>
        </Toot>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Tooter</h1>
        {this.renderToots()}
      </div>
    );
  }
}

export default App;
