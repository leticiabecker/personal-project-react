const initialState = {
    username: "",
    events: []
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_USERNAME":
        state = {
          ...state, //to not change the original state
          username: action.payload
        };
        return state;
  
      case "SET_GITHUB_EVENTS":
        state = {
          ...state, //to not change the original state
          events: action.payload
        };
        return state;
  
      default:
        return initialState;
    }
  };
  