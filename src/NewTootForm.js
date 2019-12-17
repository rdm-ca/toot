import React from "react";

class NewTootForm extends React.Component {
  state = {
    message: null
  };

  addToot = e => {
    e.preventDefault();

    this.props.addToot({
      id: 5,
      message: this.state.message,
      user: "Little Richard"
    });
  };

  updateMessage = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <form>
        <h3>New Toot</h3>
        <div>
          <input
            placeholder="What's tootin'?"
            size="140"
            onChange={this.updateMessage}
          />
        </div>
        <input type="submit" value="Toot 🥳" onClick={this.addToot}></input>
      </form>
    );
  }
}

export default NewTootForm;
