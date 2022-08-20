import axios from "axios";
const urls = {
  registerUser: "http://localhost:3700/register",
  createNewPost: "http://localhost:3700/profile",
  getPosts: "http://localhost:3700/profile",
  authUser: "http://localhost:3700/users/login",
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

  return logInResult;
};

// export const getUserPosts = async (id) => {
//   id = 1;
//   const requestPosts = await axios
//     .get(urls.getPosts, id)
//     .then((resp) => {
//       return resp.data;
//     })
//     .catch((error) => {
//       // console.log(error);
//     });

//   return requestPosts;
// };

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
