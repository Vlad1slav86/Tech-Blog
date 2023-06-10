const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const Comment = require('../../models/comment');

// GET route to display a single post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, { include: [Comment] });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.render('post', { post }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST route to create a new post
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({ title, content, user_id:req.session.user_id });
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
});

// PUT route to update an existing post
router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    post.title = title;
    post.content = content;
    await post.save();
    res.json({ message: 'Post updated successfully', post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE route to delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    await post.destroy();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
