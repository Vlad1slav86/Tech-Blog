const express = require('express');
const router = express.Router();
const Comment = require('../../models/comment');

// POST route to handle comment creation
router.post('/', async (req, res) => {
  try {
    const { content, postId } = req.body;
    const comment = await Comment.create({ content, postId });
    res.status(201).json({ message: 'Comment created successfully', comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE route to handle comment deletion
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    await comment.destroy();
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
