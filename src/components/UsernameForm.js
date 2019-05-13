import React from "react";

function UsernameForm(props) {
  return (
    <form onSubmit={props.getGitHubEvents}>
      <label>
        GitHub Username:
        <input type="text" onChange={props.getUsernameInput} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UsernameForm;
