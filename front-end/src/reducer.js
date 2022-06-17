const reducer = (state, action) => {
  if (action.type === "REGISTER_USER") {
    return {
      ...state,
      errorMessage: action.payload.data,
    };
  }

  if (action.type === "LOGIN_USER") {
    return {
      ...state,
      userData: action.payload,
    };
  }
};

export default reducer;
