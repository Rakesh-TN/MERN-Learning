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
    
}

// Update POST
const updatePosts = async (req, res) => {
    
}

// DELETE POST
const deletePosts = async (req, res) => {
    
}

export {createPost, getPosts, getSinglePosts, updatePosts, deletePosts}