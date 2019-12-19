import React from "react";
import axios from "axios";

import Toot from "./Toot";
import styles from "./Toots.module.css";
import TootForm from "./TootForm";


class Toots extends React.Component
{
  state =
  {
    likedToots: 0,
    toots: []
  };

  componentDidMount()
  {
    axios.get("http://localhost:3001/toots")
    .then( (response) =>
    {
      const toots = response.data;
      const likedToots = toots.filter(toot => toot.liked).length;

      this.setState({ toots: toots, likedToots: likedToots });
    } );
  }

  tootLiked = (id) =>
  {
    axios
      .patch( `http://localhost:3001/toots/${id}`, { liked: true } )
      .then( (response) =>
      {
        this.setState( { likedToots: this.state.likedToots + 1 } );
      } );
  };

  tootUnliked = (id) =>
  {
    axios
      .patch( `http://localhost:3001/toots/${id}`, { liked: false } )
      .then( (response) =>
      {
        this.setState( { likedToots: this.state.likedToots - 1 } );
      } );
  };

  deleteTootWithAxios = (id) =>
  {
    axios
      .delete(`http://localhost:3001/toots/${id}`).then( (response) =>
      {
        let toots = this.state.toots;
        toots = toots.filter(toot => toot.id != id);
        this.setState({ toots });
    });
  };

  updateTootWithAxios = (id, user, message) =>
  {
    axios
      .patch( `http://localhost:3001/toots/${id}`, {user, message} )
      .then( (response) =>
      {
        console.log( `Updated: ${user} ${message} with ${id} updated` );
      } );
  }

  addTootWithAxios = (user, message) =>
  {
    axios
      .post("http://localhost:3001/toots", {user, message})
      .then(response => {
        let toots = this.state.toots;
        toots.push(response.data);
        this.setState({ toots: toots });
      });
  };

  renderToots()
  {
    const ignoredUsers = ["Grinch"];
    const bestToots = this.state.toots.filter(
      toot => !ignoredUsers.includes( toot.user )
    );

    return bestToots.map( (toot, i) =>
    {
      return (
        <Toot
          {...toot}
          key={i}
          tootLiked={this.tootLiked}
          tootUnliked={this.tootUnliked}
          deleteTootWithAxios={this.deleteTootWithAxios}
          updateTootWithAxios={this.updateTootWithAxios}
          addTootWithAxios={this.addTootWithAxios}
        >
          <div>Extra message</div>
        </Toot>
      );
    } );
  }

  render()
  {
    return (
      <div>
        <TootForm addTootWithAxios={this.addTootWithAxios} />
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
