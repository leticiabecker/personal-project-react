import { connect } from "react-redux";

import App from "../components/App";
import { getGitHubEvents, getUsernameInput } from "../actions/actions";

import "../styles.css";

function mapStateToProps(state) {
  return {
    username: state.username,
    events: state.events
  };
}

const mapDispatchToProps = {
  getGitHubEvents,
  getUsernameInput
};

// The app container will connect everything and be the rendered component
const AppCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppCtn;
