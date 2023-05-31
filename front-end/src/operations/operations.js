import axios from "axios";
const urls = {
  registerUser: "http://localhost:3700/create-account",
  authUser: "http://localhost:3700/users/login",
  validateToken: "http://localhost:3700/profile/token-check",
  editAccount: "http://localhost:3700/account/edit",

  getPosts: "http://localhost:3700/users/get-posts-data",
  createNewPost: "http://localhost:3700/users/new-post",

  accessFriendship: "http://localhost:3700/users/",
  addNewFriendship: "http://localhost:3700/newFriend",
  searchUser: "http://localhost:3700/users/search/",

  logout: "http://localhost:3700/users/logout",
};

const authorizationHeader = (token) => {
  const header = { headers: { authorization: `Bearer ${token}` } };
  return header;
};

export const authUser = async (userCredentials) => {
  try {
    const authRequestResult = await axios.post(urls.authUser, userCredentials);
    const authorizedUser = {
      token: authRequestResult.data.accessToken,
      userData: authRequestResult.data.dbUserData[0],
    };
    return authorizedUser;
  } catch (error) {
    throw { error: "Error: Username or password is not valid" };
  }
};

export const validateUserToken = async (token) => {
  try {
    const getUserData = await axios.get(urls.validateToken, {
      headers: { authorization: `Bearer ${token}` },
    });
    console.log(getUserData);
    return getUserData.data;
  } catch (error) {
    console.log("error is:", error);
  }
};

export const editAccountData = async (accountData, token) => {
  try {
    const editUserData = await axios.put(
      urls.editAccount,
      accountData,
      authorizationHeader(token)
    );
    return editUserData;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = async (token) => {
  try {
    const requestPosts = await axios.get(urls.getPosts, {
      headers: { authorization: `Bearer ${token}` },
    });

    return requestPosts.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerNewUser = async (userInputs) => {
  try {
    const postResult = await axios.post(urls.registerUser, userInputs);
    return postResult;
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = async (newPostData, token) => {
  try {
    await axios.post(
      urls.createNewPost,
      newPostData,
      authorizationHeader(token)
    );
    return getUserPosts(token);
  } catch (error) {
    console.log(error);
  }
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
  try {
    const id = { target_friend_id: targetUserId };
    const addResult = await axios.post(
      urls.addNewFriendship,
      id,
      authorizationHeader(token)
    );
    return addResult;
  } catch (error) {
    console.log(error);
  }
};
