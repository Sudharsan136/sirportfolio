import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Poetry = () => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPoems();
  }, []);

  const fetchPoems = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/poetry`).catch(() => ({ data: [] }));
      setPoems(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching poetry', err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="poetry" className="py-24 bg-neutral-900/80 backdrop-blur-lg border-t border-white/10 relative z-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <div className="animate-pulse text-amber-500/80 font-medium">Loading poetry...</div>
        </div>
      </section>
    );
  }

  if (poems.length === 0) {
    return null;
  }

  return (
    <section id="poetry" className="py-24 bg-neutral-900/80 backdrop-blur-lg border-t border-white/10 relative z-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Poetry</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto font-light text-lg italic">
            "Poetry is when an emotion has found its thought and the thought has found words."
          </p>
        </div>

        <div className="space-y-12">
          {poems.map((poem) => (
            <div key={poem._id} className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-500"></div>
              
              <h3 className="text-2xl md:text-3xl font-serif text-amber-500 mb-2 relative z-10">{poem.title}</h3>
              <p className="text-gray-500 text-sm mb-8 font-medium tracking-wide relative z-10">{new Date(poem.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              
              <div className="relative z-10 text-gray-300 text-lg md:text-xl font-light leading-loose whitespace-pre-wrap font-serif italic border-l-4 border-amber-600/30 pl-6 md:pl-8">
                {poem.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Poetry;
