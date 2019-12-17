import React from "react";

function User(props) {
  return (
    <div className="user">
      <strong>{props.name}</strong>
    </div>
  );
}

export default User;
