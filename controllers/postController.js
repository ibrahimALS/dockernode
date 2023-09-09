const Post = require('../models/postModel');
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json({
            ok: true,
            data: { posts }
        })
    } catch (errors) {
        res.status(400).json({
            ok: false,
            message: "somthing wrong!.",
            errors
        })
    }
}
exports.getOnePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post) {
            res.status(200).json({
                ok: true,
                data: { post }
            })
        } else {
            res.status(404).json({
                ok: false,
                message: "post not found."
            })
        }
    } catch (errors) {
        res.status(400).json({
            ok: false,
            message: "somthing wrong!.",
            errors
        })
    }
}
exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json({
            ok: true,
            data: { post }
        })
    } catch (errors) {
        res.status(400).json({
            ok: false,
            message: "somthing wrong!.",
            errors
        })
    }
}
exports.updatePost = async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, req.body)
        const post = await Post.findById(req.params.id)
        res.status(200).json({
            ok: true,
            data: { post }
        })
    } catch (errors) {
        res.status(400).json({
            ok: false,
            message: "somthing wrong!.",
            errors
        })
    }
}
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({
            ok: true,
            data: { post }
        })
    } catch (errors) {
        res.status(400).json({
            ok: false,
            message: "somthing wrong!.",
            errors
        })
    }
}
