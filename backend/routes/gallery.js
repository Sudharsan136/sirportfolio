import express from 'express';
import { galleryUpload } from '../config/cloudinary.js';
import Gallery from '../models/Gallery.js';

const router = express.Router();

// Get all gallery photos
router.get('/', async (req, res) => {
  try {
    const photos = await Gallery.find().sort({ createdAt: -1 });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Upload multiple photos to Cloudinary
router.post('/', galleryUpload.array('images', 20), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No images uploaded' });
    }

    const caption = req.body.caption || '';
    const savedPhotos = [];

    for (const file of req.files) {
      // Cloudinary returns the URL in file.path
      const newPhoto = new Gallery({
        imageUrl: file.path,
        caption,
      });
      const saved = await newPhoto.save();
      savedPhotos.push(saved);
    }

    res.status(201).json(savedPhotos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a photo (also removes from Cloudinary)
router.delete('/:id', async (req, res) => {
  try {
    const photo = await Gallery.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' });
    }

    // Extract public_id from Cloudinary URL and destroy
    const publicId = photo.imageUrl.split('/').slice(-2).join('/').split('.')[0];
    try {
      const { default: cloudinary } = await import('../config/cloudinary.js');
      await cloudinary.uploader.destroy(publicId);
    } catch (e) {
      console.warn('Could not delete from Cloudinary:', e.message);
    }

    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Photo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
