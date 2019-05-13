import { connect } from "react-redux";

import UsernameForm from "../components/UsernameForm";
import { getUsernameInput, getGitHubEvents } from "../actions/actions";

import "../styles.css";

function mapStateToProps(state) {
  return {
    username: state.username,
    events: state.events
  };
}

const mapDispatchToProps = {
  getUsernameInput,
  getGitHubEvents
};

// The app container will connect everything and be the rendered component
const UserFormCtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsernameForm);

export default UserFormCtn;
