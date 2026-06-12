import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Image as ImageIcon, Video } from 'lucide-react';
import { toast } from 'react-hot-toast';

const GalleryManagement = () => {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', url: '', type: 'image' });

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/gallery');
      setItems(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/v1/gallery', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Gallery item added!');
      setIsModalOpen(false);
      fetchGallery();
    } catch (err) {
      toast.error('Failed to add item');
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/v1/gallery/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Item deleted');
      fetchGallery();
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
          <p className="text-gray-500">Upload and manage school media.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 transition-all font-premium"
        >
          <Plus size={20} /> Add Media
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item._id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
            <img src={item.url} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {item.type === 'video' ? <Video size={16} className="text-primary"/> : <ImageIcon size={16} className="text-primary"/>}
                <span className="font-bold text-sm truncate max-w-[120px]">{item.title}</span>
              </div>
              <button 
                onClick={() => handleDelete(item._id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-bold mb-6">Add New Gallery Item</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Item Title</label>
                <input 
                  type="text" required
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g. Science Fair 2026"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Media URL</label>
                <input 
                  type="url" required
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  value={formData.url}
                  onChange={(e) => setFormData({...formData, url: e.target.value})}
                  placeholder="Paste image/video URL"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Type</label>
                <select 
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-grow py-4 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">Cancel</button>
                <button type="submit" className="flex-grow bg-primary hover:bg-blue-800 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-100 transition-all font-premium">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryManagement;
