import React from "react";

import Toot from "./Toot";

import NewTootForm from "./TootForm";

import styles from "./Toots.module.css";

import axios from "axios";

class Toots extends React.Component {
  state = {
    likedToots: 0,
    toots: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/toots").then(response => {
      const toots = response.data;
      const likedToots = toots.filter(toot => toot.liked).length;
      this.setState({ toots, likedToots });
      // this.setState({ toots: toots, likedToots: likedToots });
    });
  }

  tootLiked = id => {
    axios
      .patch(`http://localhost:3001/toots/${id}`, { liked: true })
      .then(response => {
        this.setState({ likedToots: this.state.likedToots + 1 });
      });
  };

  tootUnliked = id => {
    axios
      .patch(`http://localhost:3001/toots/${id}`, { liked: false })
      .then(response => {
        this.setState({ likedToots: this.state.likedToots - 1 });
      });
  };

  deleteToot = id => {
    axios.delete(`http://localhost:3001/toots/${id}`).then(response => {
      let toots = this.state.toots;
      toots = toots.filter(toot => toot.id != id);
      this.setState({ toots });
    });
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
          deleteToot={this.deleteToot}
        >
          <div>Extra message</div>
        </Toot>
      );
    });
  }

  addToot = ({ user, message }) => {
    axios
      .post("http://localhost:3001/toots", { user, message })
      .then(response => {
        let toots = this.state.toots;
        toots.push(response.data);
        this.setState({ toots: toots });
      });
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
