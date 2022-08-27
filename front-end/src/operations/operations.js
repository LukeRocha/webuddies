import axios from "axios";

const urls = {
  registerUser: "http://localhost:3700/create-account",
  createNewPost: "http://localhost:3700/users/new-post",
  getPosts: "http://localhost:3700/users/get-posts-data",
  authUser: "http://localhost:3700/users/login",
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

export const getUserPosts = async (id, token) => {
  const requestPosts = await axios
    .get(urls.getPosts, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.log(error);
    });

  return requestPosts.data;
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

export const createNewPost = async (newPostData) => {
  const postResult = await axios
    .post(urls.createNewPost, newPostData)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.log(error);
    });

  return postResult;
};
