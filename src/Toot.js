import React from "react";

import User from "./User";

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
    const { id, user, message, likedToots } = this.props;
    return (
      <div className="Toot">
        <User name={user} />
        <div>{id}</div>
        {message}
        <div>{likedToots}</div>
        {this.renderLikeButton()}
      </div>
    );
  }
}

export default Toot;
