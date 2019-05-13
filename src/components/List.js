import React from "react";
import ListItem from "./ListItem";

const List = props => {
  const filterEventsByType = props.appProps.events
    .filter(event => event.type === props.type)
    .reduce((acc, next) => {
      if (
        // the user is the PR author
        next.type === "PullRequestEvent" &&
        next.payload.pull_request.user.login === props.user
      ) {
        if (
          // the PR is already in the array
          acc.some(
            e => e.payload.pull_request.url === next.payload.pull_request.url
          )
        ) {
          return acc;
        } else {
          // the PR is not in the array yet
          return [...acc, next];
        }
      } else if (next.type === "PullRequestEvent") {
        // the user is NOT the PR author
        return acc;
      } else {
        // the event is NOT a PR
        return [...acc, next];
      }
    }, []);

  return (
    <div className="List">
      {filterEventsByType.length > 0 && <h2>{props.type} List</h2>}
      <ListItem filteredEventsList={filterEventsByType} type={props.type} />
    </div>
  );
};

export default List;
