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
    if (newLikedStatus) {
      this.props.tootLiked();
    } else {
      this.props.tootUnliked();
    }
    this.setState({ liked: newLikedStatus });
  };

  renderLikeButton() {
    const buttonIcon = this.state.liked ? "❤️" : "🖤";
    return <div onClick={this.toggleLiked}>{buttonIcon}</div>;
  }

  render() {
    const { user, message, children, likedToots } = this.props;
    return (
      <div className="Toot">
        <User name={user} />
        {message}
        <div>{likedToots}</div>
        {this.renderLikeButton()}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    likedToots: 0
  };

  tootLiked = () => {
    this.setState({ likedToots: this.state.likedToots + 1 });
  };

  tootUnliked = () => {
    this.setState({ likedToots: this.state.likedToots - 1 });
  };

  renderToots() {
    const ignoredUsers = ["Grinch"];
    const bestToots = this.props.toots.filter(
      toot => !ignoredUsers.includes(toot.user)
    );
    return bestToots.map((toot, i) => {
      return (
        <Toot
          {...toot}
          key={i}
          tootLiked={this.tootLiked}
          tootUnliked={this.tootUnliked}
          likedToots={this.state.likedToots}
        >
          <div>Extra message</div>
        </Toot>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Tooter</h1>
        {/* <button onClick={this.tootLiked}>Liked a toot</button> */}
        <strong>Liked Toots: {this.state.likedToots}</strong>
        {this.renderToots()}
      </div>
    );
  }
}

export default App;
