import React from "react";

import User from "./User";

import styles from "./Toot.module.css";

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
    return (
      <div className={styles.likeButton} onClick={this.toggleLiked}>
        {buttonIcon}
      </div>
    );
  }

  render() {
    const { user, message } = this.props;
    return (
      <div className={styles.Toot}>
        <User name={user} />
        <p>{message}</p>
        {this.renderLikeButton()}
      </div>
    );
  }
}

export default Toot;
