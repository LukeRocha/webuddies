import axios from "axios";
const urls = {
  postNewUser: "http://localhost:3700/register",
  login: "http://localhost:3700/login",
  createNewPost: "http://localhost:3700/profile",
};

export const getUser = async () => {
  const retrieveData = await axios
    .get(urls.login)
    .then((resp) => {
      return resp.data[0];
    })
    .catch((error) => {
      console.log(error);
    });

  return retrieveData;
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
