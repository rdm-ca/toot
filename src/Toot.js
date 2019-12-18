import React from "react";

import User from "./User";

import TootForm from "./TootForm";

import styles from "./Toot.module.css";

class Toot extends React.Component {
  state = {
    liked: this.props.liked,
    editing: false
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

  renderEditButton() {
    return (
      <div className={styles.editButton} onClick={this.edit}>
        ✏️
      </div>
    );
  }

  edit = () => {
    this.setState({ editing: true });
  };

  renderFormOrToot() {
    const { user, message } = this.props;
    if (this.state.editing) {
      return <TootForm user={user} message={message} />;
    } else {
      return (
        <div>
          <User name={user} />
          <p>{message}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={styles.Toot}>
        {this.renderFormOrToot()}
        {this.renderEditButton()}
        {this.renderLikeButton()}
        {this.renderDeleteButton()}
      </div>
    );
  }
}

export default Toot;
