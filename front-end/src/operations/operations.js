import axios from "axios";
const urls = {
  post: "http://localhost:3700/register",
};

export const postUser = async (userInputs) => {
  const postResult = await axios
    .post(urls.post, userInputs)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.error(error);
    });

  return postResult;
};
