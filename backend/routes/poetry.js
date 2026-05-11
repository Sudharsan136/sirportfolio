import express from 'express';
import Poetry from '../models/Poetry.js';

const router = express.Router();

// Get all poems
router.get('/', async (req, res) => {
  try {
    const poems = await Poetry.find().sort({ createdAt: -1 });
    res.json(poems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new poem
router.post('/', async (req, res) => {
  try {
    const newPoem = new Poetry({
      title: req.body.title,
      content: req.body.content
    });
    const savedPoem = await newPoem.save();
    res.status(201).json(savedPoem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a poem
router.delete('/:id', async (req, res) => {
  try {
    const poem = await Poetry.findById(req.params.id);
    if (!poem) {
      return res.status(404).json({ message: 'Poem not found' });
    }
    await Poetry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Poem deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
