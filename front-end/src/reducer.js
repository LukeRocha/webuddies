const reducer = (state, action) => {
  if (action.type === "REGISTER_USER") {
    return {
      ...state,
      messages: action.payload.data,
    };
  }

  if (action.type === "LOGIN_USER") {
    return {
      ...state,
      userState: { userData: action.payload },
    };
  }
};

export default reducer;
