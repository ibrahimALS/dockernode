const { getAllPosts, createPost, updatePost, deletePost, getOnePost } = require('../controllers/postController');

const router = require('express').Router();

router.route('/').get(getAllPosts).post(createPost);

router.route('/:id').get(getOnePost).patch(updatePost).delete(deletePost);

module.exports = router;