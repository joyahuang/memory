import express from "express";
import {
  getPosts,
  getPost,
  getPostsBySearch,
  createPosts,
  updatePost,
  deletePost,
  likePost,
  commentPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";
const router = express.Router();
router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.get("/:id", getPost);
router.post("/", auth, createPosts); // have to be user to create post
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likepost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);
export default router;
