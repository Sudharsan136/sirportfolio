import express from 'express';
import { blogUpload } from '../config/cloudinary.js';
import Blog from '../models/Blog.js';

const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new blog (with optional Cloudinary image)
router.post('/', blogUpload.single('image'), async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    // Cloudinary returns URL in file.path
    const imageUrl = req.file ? req.file.path : null;

    const newBlog = new Blog({ title, content, imageUrl });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a blog (also removes image from Cloudinary)
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    if (blog.imageUrl) {
      const publicId = blog.imageUrl.split('/').slice(-2).join('/').split('.')[0];
      try {
        const { default: cloudinary } = await import('../config/cloudinary.js');
        await cloudinary.uploader.destroy(publicId);
      } catch (e) {
        console.warn('Could not delete from Cloudinary:', e.message);
      }
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
