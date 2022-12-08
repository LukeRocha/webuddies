import axios from "axios";
const urls = {
  registerUser: "http://localhost:3700/create-account",
  createNewPost: "http://localhost:3700/users/new-post",
  getPosts: "http://localhost:3700/users/get-posts-data",
  authUser: "http://localhost:3700/users/login",
  logout: "http://localhost:3700/users/logout",
  accessFriendship: "http://localhost:3700/users/",
  addNewFriendship: "http://localhost:3700/newFriend",
  searchUser: "http://localhost:3700/users/search/",
  validateToken: "http://localhost:3700/user/token-check",
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

export const validateUserToken = async (token, userNickname) => {
  const getUserData = await axios
    .get(urls.validateToken, { headers: { authorization: `Bearer ${token}` } })
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
  console.log(getUserData);

  return getUserData;
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
    return dataFromDb.data[0];
  } catch (error) {
    console.log(error);
  }
};

export const searchUsersProfile = async (userName) => {
  console.log(userName);
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

export const followNewFriend = async (userDataObject) => {
  try {
    console.log(userDataObject);
    await axios.post(urls.addNewFriendship, userDataObject);
  } catch (error) {
    console.log(error);
  }
};
