export const updateUsername = username => {
    return {
      type: "UPDATE_USERNAME",
      payload: username
    };
  };
  
  export const setGitHubEvents = events => {
    return {
      type: "SET_GITHUB_EVENTS",
      payload: events
    };
  };
  
  export const getGitHubEvents = event => {
    event.preventDefault();
  
    return function(dispatch, getState) {
      // Get current Username state from Redux store
      const state = getState();
      const githubApi = `https://api.github.com/users/${state.username}/events`;
  
      fetch(githubApi)
        .then(res => res.json())
        .then(githubData => {
          dispatch(setGitHubEvents(githubData));
        })
        .catch(error => console.log(error.message));
    };
  };
  
  export const getUsernameInput = event => {
    return function(dispatch, getState) {
      dispatch(updateUsername(event.target.value));
    };
  };
  