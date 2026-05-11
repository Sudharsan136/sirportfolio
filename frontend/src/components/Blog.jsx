import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/blog`).catch(() => ({ data: [] }));
      setBlogs(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blogs', err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="blog" className="py-24 bg-black/60 backdrop-blur-lg border-t border-white/10 relative z-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <div className="animate-pulse text-amber-500/80 font-medium">Loading blog posts...</div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-24 bg-black/60 backdrop-blur-lg border-t border-white/10 relative z-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Blog & Writings</h2>
          <div className="h-1 w-24 bg-amber-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto font-light text-lg">
            Thoughts, reflections, and perspectives on literature, education, and life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog._id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col hover:border-amber-500/30 transition-colors duration-500">
              {blog.imageUrl && (
                <div className="h-56 w-full overflow-hidden relative">
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              )}
              <div className="p-8 flex-1 flex flex-col relative z-10">
                <div className="flex items-center text-amber-500/80 text-sm font-medium tracking-wider mb-3">
                  <span>{new Date(blog.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 leading-snug group-hover:text-amber-400 transition-colors duration-300">{blog.title}</h3>
                <div className="text-gray-400 font-light leading-relaxed line-clamp-4 flex-1 whitespace-pre-wrap">
                  {blog.content}
                </div>
                
                {/* For full content, you might want to implement a modal or dedicated page, 
                    but for now we display it or use a read more button that expands */}
                <button className="mt-6 self-start text-amber-500 hover:text-amber-400 font-medium text-sm tracking-wider uppercase flex items-center group-hover:translate-x-1 transition-transform">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
