import mongoose from 'mongoose';

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  journal: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  type: {
    type: String,
    default: 'Journal Article'
  }
}, { timestamps: true });

export default mongoose.model('Publication', publicationSchema);
