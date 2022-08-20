const reducer = (state, action) => {
  if (action.type === "REGISTER_USER") {
    return {
      ...state,
      serverMessages: action.payload,
    };
  }

  if (action.type === "LOGIN_USER") {
    return {
      ...state,
      userState: {
        userData: action.payload.data.userData,
      },
      tokens: action.payload.data.tokens,
    };
  }

  if (action.type === "FETCH_USER_POSTS") {
    return {
      ...state,
      userState: {
        userPosts: action.payload,
      },
    };
  }
};

export default reducer;
