import React from "react";

class PrStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prStatus: ""
    };
  }

  componentDidMount() {
    fetch(this.props.prUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          prStatus: res.merged ? "merged" : res.state
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <span>
        <span> - </span>
        <span
          className={
            this.state.prStatus === "closed"
              ? "status closed"
              : this.state.prStatus === "merged"
              ? "status merged"
              : "status open"
          }
        >
          {this.state.prStatus}
        </span>
      </span>
    );
  }
}

export default PrStatus;
