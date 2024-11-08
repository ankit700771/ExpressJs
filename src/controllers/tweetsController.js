export const tweetController = (req, res) => {
  return res.send({
    message: "Hello tweetController",
  });
};

export const tweetControllerByID = (req, res) => {
  return res.send({
    message: "Tweet controller",
    id: req.params.id,
  });
};
