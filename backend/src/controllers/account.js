const get = async (req, res) => {
  try {
    await res.send("Api setup");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { get };
