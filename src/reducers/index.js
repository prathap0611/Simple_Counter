function reducer(state = 0, action = {}) {
  switch (action.type) {
    case "INCREMENT":
      state = state + 1;
      return state;
    case "DECREMENT":
      state = state - 1;
      return state;
    default:
      return state;
  }
}

export default reducer;
