import React from "react";
import axios from "axios";

import styles from "./TootForm.module.css";

class TootForm extends React.Component {
  state = {
    user: this.props.user,
    message: this.props.message
  };

  addToot = () => {
    const { message, user } = this.state;

    this.props.addToot({ message, user });
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

  updateToot = () => {
    const { user, message } = this.state;
    axios
      .patch(`http://localhost:3001/toots/${this.props.id}`, { user, message })
      .then(response => {
        this.props.toggleEditing();
      });
  };

  submit = e => {
    e.preventDefault();

    if (this.props.editing) {
      this.updateToot();
    } else {
      this.addToot();
    }
  };

  renderHeader() {
    if (this.props.editing) {
      return <h2>Editing Toot</h2>;
    } else {
      return <h2>New Toot</h2>;
    }
  }

  render() {
    return (
      <div className={styles.TootForm}>
        <form onSubmit={this.submit}>
          {this.renderHeader()}
          <div>
            <input
              placeholder="Who's tootin'?"
              size="25"
              onChange={this.updateUser}
              className={styles.input}
              defaultValue={this.state.user}
            />
            <input
              placeholder="What's tootin'?"
              size="120"
              onChange={this.updateMessage}
              className={styles.input}
              defaultValue={this.state.message}
            />
          </div>
          <input
            type="submit"
            value="Toot 🥳"
            className={`${styles.button} ${styles.input}`}
          ></input>
        </form>
      </div>
    );
  }
}

export default TootForm;
