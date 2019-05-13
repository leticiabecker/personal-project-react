import React from "react";

// Import functional components
import UserFormCtn from "../containers/UserFormCtn";
// Import presentational components
import List from "./List.js";

const App = props => {
  return (
    <div className="App">
      <UserFormCtn />
      {props.username && (
        <div className="ListsContainer">
          <List appProps={props} type={"ForkEvent"} user={props.username} />
          <List
            appProps={props}
            type={"PullRequestEvent"}
            user={props.username}
          />
        </div>
      )}
    </div>
  );
};

export default App;