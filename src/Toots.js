import React from "react";

import Toot from "./Toot";
import NewTootForm from "./NewTootForm";

import styles from "./Toots.module.css";

class Toots extends React.Component {
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
      <div>
        <NewTootForm addToot={this.addToot} />
        <div className={styles.Toots}>
          <h2>Recent Toots</h2>
          Liked Toots: {this.state.likedToots}
          {this.renderToots()}
        </div>
      </div>
    );
  }
}

export default Toots;
