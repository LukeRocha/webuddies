const get = (req, res) => {
  try {
    res.send("Api setup");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { get };
