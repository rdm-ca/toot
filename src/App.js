import React from "react";
import "./App.css";

import Toot from "./Toot";

class App extends React.Component {
  state = {
    likedToots: 0
  };

  tootLiked = () => {
    this.setState({ likedToots: this.state.likedToots + 1 });
    console.log(this.state.likedToots);
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
        <menu></menu>
        Liked Toots: {this.state.likedToots}
        {this.renderToots()}
      </div>
    );
  }
}

export default App;
