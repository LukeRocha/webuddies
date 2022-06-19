import axios from "axios";
const urls = {
  post: "http://localhost:3700/register",
  login: "http://localhost:3700/login",
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
    .post(urls.post, userInputs)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.log(error);
    });

  return postResult;
};
