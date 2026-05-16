import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import imageCompression from 'browser-image-compression';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminLayout = ({ children }) => (
  <div className="flex h-screen bg-neutral-100 font-sans">
    <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-xl z-10">
      <div className="p-6 text-2xl font-serif font-bold tracking-widest border-b border-slate-800 text-amber-500">PORTFOLIO CMS</div>
      <nav className="flex-1 p-4 space-y-2 mt-4">
        <Link to="/" className="block py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors">Dashboard</Link>
        <Link to="/publications" className="block py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors">Publications</Link>
        <Link to="/gallery" className="block py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors">Gallery</Link>
        <Link to="/poetry" className="block py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors">Poetry</Link>
        <Link to="/blog" className="block py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors">Blog</Link>
      </nav>
      <div className="p-4 text-sm text-slate-500 border-t border-slate-800">
        Logged in as Admin
      </div>
    </aside>
    <main className="flex-1 p-8 md:p-12 overflow-auto bg-neutral-50 relative">
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </main>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    publications: 0,
    gallery: 0,
    poetry: 0,
    blog: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [pubRes, galRes, poetRes, blogRes] = await Promise.all([
          axios.get(`${API_URL}/api/publications`).catch(() => ({ data: [] })),
          axios.get(`${API_URL}/api/gallery`).catch(() => ({ data: [] })),
          axios.get(`${API_URL}/api/poetry`).catch(() => ({ data: [] })),
          axios.get(`${API_URL}/api/blog`).catch(() => ({ data: [] }))
        ]);
        setStats({
          publications: pubRes.data.length,
          gallery: galRes.data.length,
          poetry: poetRes.data.length,
          blog: blogRes.data.length
        });
      } catch (err) {
        console.error("Error fetching stats", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6 font-serif">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Publications</h3>
          <p className="text-4xl font-bold text-slate-800">{stats.publications}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-amber-500 hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Gallery Photos</h3>
          <p className="text-4xl font-bold text-slate-800">{stats.gallery}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-emerald-500 hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Poems</h3>
          <p className="text-4xl font-bold text-slate-800">{stats.poetry}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-purple-500 hover:shadow-md transition-shadow">
          <h3 className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wider">Blog Posts</h3>
          <p className="text-4xl font-bold text-slate-800">{stats.blog}</p>
        </div>
      </div>
    </div>
  );
};

const PRESET_TYPES = ['Journal Publications', 'Books & Textbooks', 'Workshops / FDPs / MOOCs', 'Keynote / Talks'];

const PublicationsManage = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', authors: '', journal: '', year: '', type: '' });
  const [editId, setEditId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  useEffect(() => {
    fetchPublications();
  }, []);

  const allTypes = [
    ...new Set([
      ...publications.map(p => p.type).filter(Boolean),
      ...PRESET_TYPES
    ])
  ];

  const fetchPublications = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/publications`).catch(() => ({ data: [] }));
      setPublications(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_URL}/api/publications/${editId}`, formData);
        setEditId(null);
      } else {
        await axios.post(`${API_URL}/api/publications`, formData);
      }
      setShowForm(false);
      setFormData({ title: '', authors: '', journal: '', year: '', type: '' });
      fetchPublications();
    } catch (err) {
      console.error(err);
      alert('Failed to save publication');
    }
  };

  const handleEdit = (pub) => {
    setEditId(pub._id);
    setFormData({ title: pub.title, authors: pub.authors, journal: pub.journal, year: pub.year, type: pub.type });
    setShowForm(true);
    setDeleteConfirmId(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/publications/${id}`);
      setDeleteConfirmId(null);
      fetchPublications();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 font-serif">Manage Publications</h1>
        <button 
          onClick={() => { setShowForm(!showForm); setEditId(null); setFormData({ title: '', authors: '', journal: '', year: '', type: '' }); }}
          className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-lg font-medium shadow-md transition-colors"
        >
          {showForm ? 'Cancel' : '+ Add New'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">{editId ? 'Edit Publication' : 'Add Publication'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-slate-300 rounded-lg p-2.5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Authors</label>
              <input required value={formData.authors} onChange={e => setFormData({...formData, authors: e.target.value})} className="w-full border border-slate-300 rounded-lg p-2.5" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Journal/Publisher</label>
                <input required value={formData.journal} onChange={e => setFormData({...formData, journal: e.target.value})} className="w-full border border-slate-300 rounded-lg p-2.5" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Year</label>
                <input required value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} className="w-full border border-slate-300 rounded-lg p-2.5" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Type <span className="text-slate-400 font-normal">(choose or type your own)</span></label>
              <input
                list="publication-types"
                required
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value})}
                placeholder="e.g. Journal Article, Book, Keynote..."
                className="w-full border border-slate-300 rounded-lg p-2.5"
              />
              <datalist id="publication-types">
                {allTypes.map(t => <option key={t} value={t} />)}
              </datalist>
            </div>
            <button type="submit" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition-colors mt-4">
              {editId ? 'Update Publication' : 'Save Publication'}
            </button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Loading publications...</div>
        ) : publications.length === 0 ? (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-lg font-medium text-slate-700">No publications found</p>
            <p className="text-sm mt-1">Add your first publication to see it here.</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm font-medium">
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6">Type</th>
                <th className="py-4 px-6">Year</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {publications.map((pub) => (
                <tr key={pub._id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-800">{pub.title}</td>
                  <td className="py-4 px-6">
                    <span className="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-medium">
                      {pub.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">{pub.year}</td>
                  <td className="py-4 px-6 text-right space-x-3">
                    <button onClick={() => handleEdit(pub)} className="text-blue-600 hover:text-blue-800 font-medium text-sm">Edit</button>
                    {deleteConfirmId === pub._id ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="text-slate-500 text-sm">Sure?</span>
                        <button onClick={() => handleDelete(pub._id)} className="text-red-600 hover:text-red-800 font-bold text-sm">Yes</button>
                        <button onClick={() => setDeleteConfirmId(null)} className="text-slate-500 hover:text-slate-700 text-sm">No</button>
                      </span>
                    ) : (
                      <button onClick={() => setDeleteConfirmId(pub._id)} className="text-red-600 hover:text-red-800 font-medium text-sm">Delete</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const GalleryManage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [files, setFiles] = useState([]);
  const [caption, setCaption] = useState('');
  const [uploadProgress, setUploadProgress] = useState(null);
  const isUploading = uploadProgress !== null;

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/gallery`).catch(() => ({ data: [] }));
      setPhotos(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files || files.length === 0) return alert('Please select at least one image');

    setUploadProgress({ status: 'compressing' });
    try {
      const options = {
        maxSizeMB: 0.8,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      };

      const compressedFiles = await Promise.all(
        files.map(file => imageCompression(file, options))
      );

      const formData = new FormData();
      compressedFiles.forEach((compressedFile, index) => {
        formData.append('images', compressedFile, files[index].name);
      });
      formData.append('caption', caption);

      setUploadProgress({ status: 'uploading' });
      await axios.post(`${API_URL}/api/gallery`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setShowForm(false);
      setFiles([]);
      setCaption('');
      fetchPhotos();
    } catch (err) {
      console.error(err);
      alert(`Failed to upload photos: ${err.response?.data?.message || err.message}`);
    } finally {
      setUploadProgress(null);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this photo?')) {
      try {
        await axios.delete(`${API_URL}/api/gallery/${id}`);
        fetchPhotos();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 font-serif">Manage Gallery</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-lg font-medium shadow-md transition-colors"
        >
          {showForm ? 'Cancel' : '+ Add Photo'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Upload Photo</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Image File(s)</label>
              <input type="file" multiple required onChange={e => setFiles(Array.from(e.target.files))} className="w-full text-slate-500 bg-white border border-slate-300 rounded-lg cursor-pointer file:cursor-pointer file:mr-4 file:py-2.5 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 p-1" accept="image/*" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Caption (Optional)</label>
              <input value={caption} onChange={e => setCaption(e.target.value)} className="w-full border border-slate-300 rounded-lg p-2.5" />
            </div>
            <button type="submit" disabled={isUploading} className="bg-slate-800 hover:bg-slate-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition-colors mt-4">
              {isUploading ? (uploadProgress?.status === 'compressing' ? 'Optimizing Images...' : 'Uploading to Cloudinary...') : 'Upload Photo(s)'}
            </button>
          </form>
        </div>
      )}

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        {loading ? (
          <div className="text-center text-slate-500">Loading photos...</div>
        ) : photos.length === 0 ? (
          <div className="text-center text-slate-500 py-8">
            <p className="text-lg font-medium text-slate-700">No photos found</p>
            <p className="text-sm mt-1">Upload your first photo to see it here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div key={photo._id} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm group relative">
                <div className="h-48 bg-slate-100">
                  <img src={photo.imageUrl} alt={photo.caption} className="w-full h-full object-cover" />
                  <button onClick={() => handleDelete(photo._id)} className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    &times;
                  </button>
                </div>
                {photo.caption && (
                  <div className="p-3 text-sm text-slate-700 font-medium truncate bg-white border-t border-slate-100">
                    {photo.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const PoetryManage = () => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchPoems();
  }, []);

  const fetchPoems = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/poetry`).catch(() => ({ data: [] }));
      setPoems(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/poetry`, formData);
      setShowForm(false);
      setFormData({ title: '', content: '' });
      fetchPoems();
    } catch (err) {
      console.error(err);
      alert('Failed to add poem');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this poem?')) {
      try {
        await axios.delete(`${API_URL}/api/poetry/${id}`);
        fetchPoems();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 font-serif">Manage Poetry</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-lg font-medium shadow-md transition-colors"
        >
          {showForm ? 'Cancel' : '+ Add Poem'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Add Poem</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-slate-300 rounded-lg p-2.5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
              <textarea required value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} rows="8" className="w-full border border-slate-300 rounded-lg p-2.5 whitespace-pre-wrap"></textarea>
            </div>
            <button type="submit" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition-colors mt-4">
              Save Poem
            </button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Loading poems...</div>
        ) : poems.length === 0 ? (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center">
            <p className="text-lg font-medium text-slate-700">No poems found</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm font-medium">
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6">Date Added</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {poems.map((poem) => (
                <tr key={poem._id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-800">{poem.title}</td>
                  <td className="py-4 px-6 text-slate-600">{new Date(poem.createdAt).toLocaleDateString()}</td>
                  <td className="py-4 px-6 text-right space-x-3">
                    <button onClick={() => handleDelete(poem._id)} className="text-red-600 hover:text-red-800 font-medium text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const BlogManage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/blog`).catch(() => ({ data: [] }));
      setBlogs(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (file) {
      const options = { maxSizeMB: 0.8, maxWidthOrHeight: 1920, useWebWorker: true };
      const compressedFile = await imageCompression(file, options);
      formData.append('image', compressedFile, file.name);
    }

    try {
      await axios.post(`${API_URL}/api/blog`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setShowForm(false);
      setTitle('');
      setContent('');
      setFile(null);
      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert('Failed to add blog post');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        await axios.delete(`${API_URL}/api/blog/${id}`);
        fetchBlogs();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 font-serif">Manage Blog</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-lg font-medium shadow-md transition-colors"
        >
          {showForm ? 'Cancel' : '+ Add Post'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Add Blog Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input required value={title} onChange={e => setTitle(e.target.value)} className="w-full border border-slate-300 rounded-lg p-2.5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cover Image (Optional)</label>
              <input type="file" onChange={e => setFile(e.target.files[0])} className="w-full text-slate-500 bg-white border border-slate-300 rounded-lg cursor-pointer file:cursor-pointer file:mr-4 file:py-2.5 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 p-1" accept="image/*" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
              <textarea required value={content} onChange={e => setContent(e.target.value)} rows="8" className="w-full border border-slate-300 rounded-lg p-2.5 whitespace-pre-wrap"></textarea>
            </div>
            <button type="submit" disabled={isUploading} className="bg-slate-800 hover:bg-slate-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition-colors mt-4">
              {isUploading ? 'Publishing...' : 'Publish Post'}
            </button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center">
            <p className="text-lg font-medium text-slate-700">No blog posts found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                {blog.imageUrl && (
                  <div className="h-48 bg-slate-100">
                    <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{blog.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{new Date(blog.createdAt).toLocaleDateString()}</p>
                  <p className="text-slate-600 line-clamp-3 mb-4 flex-1">{blog.content}</p>
                  <button onClick={() => handleDelete(blog._id)} className="text-red-600 hover:text-red-800 font-medium text-sm self-start">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/publications" element={<PublicationsManage />} />
          <Route path="/gallery" element={<GalleryManage />} />
          <Route path="/poetry" element={<PoetryManage />} />
          <Route path="/blog" element={<BlogManage />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
}

export default App;
