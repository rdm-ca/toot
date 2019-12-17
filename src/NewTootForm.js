import React from "react";

class NewTootForm extends React.Component {
  state = {
    user: null,
    message: null
  };

  addToot = e => {
    e.preventDefault();

    const { message, user } = this.state;

    this.props.addToot({
      id: 5,
      message: message,
      user: user
    });
  };

  updateField = (field, value) => {
    this.setState({ [field]: value });
  };

  updateMessage = e => {
    this.updateField("message", e.target.value);
  };

  updateUser = e => {
    this.updateField("user", e.target.value);
  };

  render() {
    return (
      <form onSubmit={this.addToot}>
        <h3>New Toot</h3>
        <div>
          <input
            placeholder="Who's tootin'?"
            size="25"
            onChange={this.updateUser}
          />
          <input
            placeholder="What's tootin'?"
            size="140"
            onChange={this.updateMessage}
          />
        </div>
        <input type="submit" value="Toot 🥳"></input>
      </form>
    );
  }
}

export default NewTootForm;
