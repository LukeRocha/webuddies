import axios from "axios";
const urls = {
  post: "http://localhost:3700/register",
  login: "http://localhost:3700/login",
};

export const getUser = async () => {
  const retrieveData = await axios
    .get(urls.login)
    .then((resp) => {
      console.log(resp.data[0]);
      return resp.data[0];
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(retrieveData);
  return retrieveData;
};

export const postUser = async (userInputs) => {
  const postResult = await axios
    .post(urls.post, userInputs)
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((error) => {
      console.error(error);
    });

  return postResult;
};
