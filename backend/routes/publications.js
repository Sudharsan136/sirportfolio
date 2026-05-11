import express from 'express';
import Publication from '../models/Publication.js';

const router = express.Router();

// GET all publications
router.get('/', async (req, res) => {
  try {
    const publications = await Publication.find().sort({ createdAt: -1 });
    res.json(publications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new publication
router.post('/', async (req, res) => {
  const pub = new Publication(req.body);
  try {
    const newPub = await pub.save();
    res.status(201).json(newPub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a publication
router.delete('/:id', async (req, res) => {
  try {
    await Publication.findByIdAndDelete(req.params.id);
    res.json({ message: 'Publication deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
