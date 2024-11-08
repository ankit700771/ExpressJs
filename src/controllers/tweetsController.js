export const getTweet = (req, res) => {
  return res.send({
    message: "Hello tweetController",
  });
};

export const getTweetByID = (req, res) => {
  return res.send({
    message: "Tweet controller",
    id: req.params.id,
  });
};

export const createTweet = (req, res) => {
  return res.send({
    message: "Tweet is created",
  });
};
