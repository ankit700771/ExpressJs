import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Hello my name is comments",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "After comments",
    id: req.params.id,
  });
});

export default router;
