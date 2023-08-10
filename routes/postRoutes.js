const { getAllPosts, createPost, updatePost, deletePost, getOnePost } = require('../controllers/postController');
const { authMiddleware } = require('../middleware/authMiddleare');
const router = require('express').Router();
router.route('/').get(getAllPosts).post(authMiddleware, createPost);
router.route('/:id').get(getOnePost).patch(authMiddleware, updatePost).delete(authMiddleware, deletePost);
module.exports = router;
