import { Router } from "express";

// function imports from controllers
import {
  getComments,
  getCommentById,
  getCommentsByUser,
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/index.controllers";
const router = Router();

//
router.get("/", (req, res) => {
  res.send("It is working");
});

// endpoints
router.get("/comments", getComments);
router.get("/comment/:id", getCommentById);
router.get("/comments/:name", getCommentsByUser);
router.post("/add-comment", addComment);
router.put("/comment/:id", updateComment);
router.delete("/comment/:id", deleteComment);

module.exports = router;
