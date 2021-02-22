const express = require("express")
const router = express.Router()
    // model of post
const Posts = require("../../models/Posts");


//routes for posts
//create and post
router.post("/", async(req, res) => {;
    try {
        const { id, name, email, password, profile_image } = req.body;
        if (!profile_image) return res.status(400).json({ msg: "No image upload" })
        const newPost = new Posts({
            id,
            name,
            email,
            password,
            profile_image
        })
        await newPost.save()
        res.json({ msg: "Created a product" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }

});

//routes for get
//get all posts
router.get("/", async(req, res) => {
    try {
        const posts = await Posts.find();
        if (!posts) throw Error("No item found")
        res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
});

//routes for  /api/posts/:id
//get a post
router.get("/:id", async(req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (!post) throw Error("No item found")
        res.status(200).json(post);
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
});


//routes for delete api/post/:id
//delete a post
router.delete("/:id", async(req, res) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id);
        if (!post) throw Error("No post found!");
        res.status(200).json({ success: true })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
});

//routes for update api/post/:id
//update a post
router.patch("/:id", async(req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if (!post) throw Error("Can't update");
        res.status(200).json({ success: true })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
});
module.exports = router;