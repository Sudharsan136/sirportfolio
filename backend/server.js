import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import publicationsRouter from './routes/publications.js';
import galleryRouter from './routes/gallery.js';
import poetryRouter from './routes/poetry.js';
import blogRouter from './routes/blog.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://sirportfolio.vercel.app',
  'https://sirportfolio-admin.vercel.app',
  // Add your exact Vercel URLs below after deployment:
  // 'https://your-frontend-url.vercel.app',
  // 'https://your-admin-url.vercel.app',
];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.some(o => origin.startsWith(o.replace('https://', 'https://').split('/')[0]))) {
      return callback(null, true);
    }
    // Also allow any *.vercel.app origin for preview deployments
    if (origin.endsWith('.vercel.app')) return callback(null, true);
    return callback(null, true); // permissive during initial deploy; tighten later
  },
  credentials: true,
}));
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sirportfolio';
console.log('MONGO_URI starts with:', MONGO_URI.substring(0, 40) + '...');
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/publications', publicationsRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/poetry', poetryRouter);
app.use('/api/blog', blogRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
