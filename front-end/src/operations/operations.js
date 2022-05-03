import axios from "axios";
const urls = {
  post: "http://localhost:3700/register",
};

export const postUser = async (userInputs) => {
  const postResult = await axios
    .post(urls.post, userInputs)
    .then((resp) => {
      console.log(resp.data);
      throw new Error(
        resp.data.includes("nickname")
          ? "This nickname is already in use"
          : "This mail is already in use"
      );
    })
    .catch((error) => {
      console.error(error);
    });
  return postResult;
};

// Retornar string correta usando regex
