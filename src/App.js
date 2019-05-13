import React, { Component } from "react";
import List from "./List";
import UsernameForm from "./UsernameForm";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      events: []
    };

    this.handleData = this.handleData.bind(this);
  }

  //method to handle data passed by child component(form)
  handleData(inputValue) {
    this.setState({
      username: inputValue
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      if (this.state.username) {
        const githubApi = `https://api.github.com/users/${
          this.state.username
        }/events`;

        fetch(githubApi)
          .then(res => res.json())
          .then(githubData => {
            this.setState({
              events: githubData
            });
          })
          .catch(error => console.log(error.message));
      }
    }
  }

  render() {

    return (
      <div className="App">
        <UsernameForm handlerFromParent={this.handleData} />

        {this.state.username && (
          <div>
            <h1>{this.state.username}'s Most Recent GitHub Activities</h1>
            <div className="ListsContainer">
              <List
                events={this.state.events}
                type="ForkEvent"
                user={this.state.username}
              />
              <List
                events={this.state.events}
                type="PullRequestEvent"
                user={this.state.username}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
