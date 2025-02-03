import Post from "../model/postModel.js";

// GET POST
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({})
        console.log(posts)
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: message.error });
    }
}

// CREATE POST
const createPost = async(req, res) => {
    const { title, description } = req.body
    console.log(title);
    console.log(description);
    try {
        const post = await Post.create({title, description})
        res.status(201).json({message: "Post Created Successfully"})
    } catch (error){
        console.log(error.message );
        res.status(500).json({message: error.message})
    }
}

// GET SINGLE POST
const getSinglePosts = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Post Not Found" });
        }
        res.status(200).json({ post });
    } catch (error) {
        if (error.name === "CastError" && error.kind === "objectId") {
            return res.status(400).json({ message: "Invalid Post ID" });
        }
        res.status(500).json({ message: message.error });
    }
};


// Update POST
const updatePosts = async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.findById(id)
        if (!post) {
            return res.status(404).json({ message: "Post Not Found" });
        }
        post.title = req.body.title || post.title;
        post.description = req.body.description || post.description;
        const updatePosts = await post.save();
        res.status(200).json({
            id: updatePosts._id,
            title: updatePosts.title,
            description: updatePosts.description
        })
    } catch (error) {
        if (error.name === "CastError" && error.kind === "objectId") {
            return res.status(400).json({ message: "Invalid Post ID" });
        }
        res.status(500).json({ message: message.error });
    }
}

// DELETE POST
const deletePosts = async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.findByIdAndDelete(id)
        if (!post) {
            return res.status(404).json({ message: "Post Not Found" });
        }
        res.status(200).json({ message : "Post Deleted Successfully" })
    } catch (error) {
        if (error.name === "CastError" && error.kind === "objectId") {
            return res.status(400).json({ message: "Invalid Post ID" });
        }
        res.status(500).json({ message: message.error });
    }
}

export {createPost, getPosts, getSinglePosts, updatePosts, deletePosts}