import React from "react";
import "./App.css";

import Toot from "./Toot";
import NewTootForm from "./NewTootForm";

class App extends React.Component {
  state = {
    likedToots: 0,
    toots: this.props.toots
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
    const bestToots = this.state.toots.filter(
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

  addToot = toot => {
    let toots = this.state.toots;
    toots.push(toot);
    this.setState({ toots: toots });
  };

  render() {
    return (
      <div className="App">
        <h1>Tooter</h1>
        <menu></menu>
        <NewTootForm addToot={this.addToot} />
        Liked Toots: {this.state.likedToots}
        {this.renderToots()}
      </div>
    );
  }
}

export default App;
