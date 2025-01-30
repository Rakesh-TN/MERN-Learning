import express from "express"
import { createPost, getPosts, getSinglePosts, updatePosts, deletePosts } from "../controllers/postControllers.js"

const router = express.Router()

router.get("/posts", getPosts)
router.post("/createpost", createPost)
router.get("/post/:id", getSinglePosts)
router.put("/updatepost/:id", updatePosts)
router.delete("/deletepost/:id", deletePosts)

export default router