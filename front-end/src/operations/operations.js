import axios from "axios";
const urls = {
  postNewUser: "http://localhost:3700/register",
  login: "http://localhost:3700/login",
  createNewPost: "http://localhost:3700/profile",
  getPosts: "http://localhost:3700/profile",
};

export const getUser = async () => {
  const retrieveData = await axios
    .get(urls.login)
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return retrieveData;
};

export const getUserPosts = async () => {
  const retrievePosts = await axios
    .get(urls.getPosts)
    .then((resp) => {
      console.log(resp.data);
      return resp.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return retrievePosts;
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
  const postContent = await axios
    .post(urls.createNewPost, newPostData)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.log(error);
    });

  return postContent;
};
