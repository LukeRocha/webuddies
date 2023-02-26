import axios from "axios";
const urls = {
  registerUser: "http://localhost:3700/create-account",
  createNewPost: "http://localhost:3700/users/new-post",
  getPosts: "http://localhost:3700/users/get-posts-data",
  getLoggedData: "http://localhost:3700/user/get-user-data",
  authUser: "http://localhost:3700/users/login",
  logout: "http://localhost:3700/users/logout",
  accessFriendship: "http://localhost:3700/users/",
  addNewFriendship: "http://localhost:3700/newFriend",
  searchUser: "http://localhost:3700/users/search/",
  validateToken: "http://localhost:3700/profile/token-check",
  editAccount: "http://localhost:3700/account/edit",
};

const authorizationHeader = (token) => {
  const header = { headers: { authorization: `Bearer ${token}` } };
  return header;
};

export const authUser = async (userCredentials) => {
  const authRequestResult = await axios
    .post(urls.authUser, userCredentials)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.error(error);
    });

  const authorizedUser = {
    token: authRequestResult.data.accessToken,
    userData: authRequestResult.data.dbUserData[0],
  };
  return authorizedUser;
};

export const validateUserToken = async (token) => {
  const getUserData = await axios
    .get(urls.validateToken, { headers: { authorization: `Bearer ${token}` } })
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return getUserData;
};

export const getLoggedData = async (nickname) => {
  const loggedData = await axios
    .get(urls.getLoggedData, nickname)
    .then((resp) => {
      console.log(resp);
    });
  console.log(loggedData);
};

export const editAccountData = async (accountData, token) => {
  const editUserData = await axios
    .put(urls.editAccount, accountData, authorizationHeader(token))
    .then((resp) => {
      console.log(resp);
      return resp.data;
    });
  return editUserData;
};

export const getUserPosts = async (token) => {
  const requestPosts = await axios
    .get(urls.getPosts, { headers: { authorization: `Bearer ${token}` } })
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      console.log("error:", error);
    });

  return requestPosts;
};

export const registerNewUser = async (userInputs) => {
  const postResult = await axios
    .post(urls.registerUser, userInputs)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.log(error);
    });
  return postResult;
};

export const createNewPost = async (newPostData, token) => {
  await axios
    .post(urls.createNewPost, newPostData, authorizationHeader(token))
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.log(error);
    });

  return getUserPosts(token);
};

export const accessUserProfile = async (userName) => {
  try {
    const dataFromDb = await axios.get(
      `${urls.accessFriendship}${userName}`,
      userName
    );
    return dataFromDb.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchUsersProfile = async (userName) => {
  try {
    const dataFromDb = await axios.get(
      `${urls.searchUser}${userName}`,
      userName
    );
    return dataFromDb.data;
  } catch (error) {
    console.log(error);
  }
};

export const followNewFriend = async (targetUserId, token) => {
  const id = { target_friend_id: targetUserId };
  try {
    await axios
      .post(urls.addNewFriendship, id, authorizationHeader(token))
      .then((resp) => console.log(resp));
    // check the length on return function
  } catch (error) {
    console.log(error);
  }
};
