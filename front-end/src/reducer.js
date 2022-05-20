const reducer = (state, action) => {
  if (action.type === "REGISTER_USER") {
    return {
      ...state,
      errorMessage: action.payload.data,
    };
  }
};

export default reducer;
