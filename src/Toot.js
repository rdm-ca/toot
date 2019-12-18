import React from "react";

import User from "./User";

import styles from "./Toot.module.css";

class Toot extends React.Component {
  state = {
    liked: this.props.liked
  };

  toggleLiked = () => {
    const { tootLiked, tootUnliked, id } = this.props;
    const newLikedStatus = !this.state.liked;
    if (newLikedStatus) {
      tootLiked(id);
    } else {
      tootUnliked(id);
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

  delete = () => {
    const { id, deleteToot } = this.props;
    deleteToot(id);
  };

  renderDeleteButton() {
    return (
      <div className={styles.deleteButton} onClick={this.delete}>
        ❌
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
        {this.renderDeleteButton()}
      </div>
    );
  }
}

export default Toot;
