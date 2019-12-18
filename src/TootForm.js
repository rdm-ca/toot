import React from "react";

import styles from "./TootForm.module.css";

class TootForm extends React.Component {
  state = {
    user: null,
    message: null
  };

  addToot = e => {
    e.preventDefault();

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

  render() {
    return (
      <div className={styles.TootForm}>
        <form onSubmit={this.addToot}>
          <h2>New Toot</h2>
          <div>
            <input
              placeholder="Who's tootin'?"
              size="25"
              onChange={this.updateUser}
              className={styles.input}
            />
            <input
              placeholder="What's tootin'?"
              size="120"
              onChange={this.updateMessage}
              className={styles.input}
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
