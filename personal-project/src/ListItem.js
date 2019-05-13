import React from "react";
import PrStatus from "./PrStatus";

const ListItem = props => {
  if (props.filteredEventsList.length > 0) {
    return (
      <div>
        {props.filteredEventsList.map(event => {
          return (
            <p key={event.id}>
              {props.type === "PullRequestEvent" ? (
                <span>
                  <a href={event.payload.pull_request.html_url}>
                    {event.payload.pull_request.title}
                  </a>
                  <PrStatus prUrl={event.payload.pull_request.url} />
                </span>
              ) : (
                <a href={event.payload.forkee.html_url}>{event.repo.name}</a>
              )}
            </p>
          );
        })}
      </div>
    );
  } else {
    return <p>No recent activities.</p>;
  }
};

export default ListItem;
