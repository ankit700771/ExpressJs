export const commentsControllers = (req, res) => {
  return res.send({
    message: "Hello comments controller",
  });
};

export const commentsControllersByID = (req, res) => {
  return res.send({
    message: "comments Id",
    id: req.params.id,
  });
};
