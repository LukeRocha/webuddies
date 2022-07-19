import axios from "axios";
const urls = {
  postNewUser: "http://localhost:3700/register",
  login: "http://localhost:3700/login",
  createNewPost: "http://localhost:3700/profile",
  getPosts: "http://localhost:3700/profile",
  authUser: "http://localhost:3700/users/login",
};

export const getUser = async () => {
  const requestUserData = await axios
    .get(urls.login)
    .then((resp) => {
      const result = resp.data;

      return result;
    })
    .catch((error) => {
      console.log(error);
    });

  return requestUserData;
};

export const getUserPosts = async () => {
  const requestPosts = await axios
    .get(urls.getPosts)
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      // console.log(error);
    });

  return requestPosts;
};
export const postUser = async (userInputs) => {
  const postResult = await axios
    .post(urls.postNewUser, userInputs)
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

export const authUser = async (userCredentials) => {
  const logInResult = await axios
    .post(urls.authUser, userCredentials)
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("data", logInResult);
  return logInResult;
};
