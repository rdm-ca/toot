import React from "react";
import styles from "./TootForm.module.css";

class TootForm extends React.Component
{
  state =
  {
    user: this.props.user,
    message: this.props.message
  };

  addTootInTootForm = () =>
  {
    const {message, user} = this.state;
    this.props.addTootWithAxios( user, message );
  };

  updateField = (field, value) =>
  {
    this.setState( {[field]: value} );
  }

  updateMessage = (element) =>
  {
    this.updateField( "message", element.target.value );
  }

  updateUser = (element) =>
  {
    this.updateField( "user", element.target.value );
  }

  updateTootInTootForm = () =>
  {
    const {user, message} = this.state;
    this.props.updateTootInToot( user, message );
  }

  submit = (element) =>
  {
    element.preventDefault();

    if( this.props.editing )
    {
      this.updateTootInTootForm();
    }
    else
    {
      this.addTootInTootForm();
    }
  }

  renderHeader()
  {
    if (this.props.editing)
    {
      return <h2>Editing Toot</h2>;
    }
    else
    {
      return <h2>New Toot</h2>;
    }
  }

  render()
  {
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
            value="Toot ✏️"
            className={`${styles.button} ${styles.input}`}
          ></input>
        </form>
      </div>
    );
  }
}

export default TootForm;
