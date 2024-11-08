export const getComments = (req, res) => {
  return res.send({
    message: "Hello comments controller",
  });
};

export const getCommentsByID = (req, res) => {
  return res.send({
    message: "comments Id",
    id: req.params.id,
  });
};
