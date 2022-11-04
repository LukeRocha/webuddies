const reducer = (state, action) => {
  if (action.type === "REGISTER_USER") {
    return {
      ...state,
      serverMessages: action.payload,
    };
  }

  if (action.type === "AUTH_USER") {
    return {
      ...state,
      userState: {
        userData: action.payload.userData,
      },
      accessToken: action.payload.token,
    };
  }

  if (action.type === "FETCH_USER_POSTS") {
    return {
      ...state,
      userState: {
        userData: state.userState.userData,
        userPosts: action.payload,
      },
    };
  }

  if (action.type === "USER_LOGOUT") {
    return { state: action.payload };
  }

  // if (action.type === "ACCESS_FRIEND_PAGE") {
  //   return {
  //     ...state, 
  //     accessedFriendPage: action.payload
  //   }
  // }
};
export default reducer;
