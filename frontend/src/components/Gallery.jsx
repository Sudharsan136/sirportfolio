import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/gallery`).catch(() => ({ data: [] }));
      setPhotos(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching gallery photos', err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="gallery" className="py-24 bg-black/60 backdrop-blur-lg border-t border-white/10 relative z-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <div className="animate-pulse text-amber-500/80 font-medium">Loading gallery...</div>
        </div>
      </section>
    );
  }

  if (photos.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-24 bg-black/60 backdrop-blur-lg border-t border-white/10 relative z-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Gallery</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto font-light text-lg">
            A visual journey through academic, professional, and personal milestones.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {photos.map((photo) => (
            <div key={photo._id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer shadow-lg shadow-black/50 break-inside-avoid">
              <img 
                src={photo.imageUrl} 
                alt={photo.caption || 'Gallery Image'} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent ${photo.caption ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 flex items-end p-6`}>
                {photo.caption && (
                  <p className="text-white text-base font-medium translate-y-0 transition-transform duration-300">
                    {photo.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
