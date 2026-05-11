import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Gallery uploader — stores in sirportfolio/gallery folder
export const galleryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'sirportfolio/gallery',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
  },
});

// Blog uploader — stores in sirportfolio/blog folder
export const blogStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'sirportfolio/blog',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
  },
});

export const galleryUpload = multer({ storage: galleryStorage });
export const blogUpload = multer({ storage: blogStorage });

export default cloudinary;
