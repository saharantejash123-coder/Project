import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Edit, Trash2, Bell } from 'lucide-react';
import { toast } from 'react-hot-toast';

const NoticeManagement = () => {
  const [notices, setNotices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', category: 'general' });

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/notices');
      setNotices(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/v1/notices', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Notice published!');
      setIsModalOpen(false);
      fetchNotices();
    } catch (err) {
      toast.error('Failed to publish notice');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Notices</h1>
          <p className="text-gray-500">Publish and manage school announcements.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 transition-all font-premium"
        >
          <Plus size={20} /> New Notice
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {notices.map((n) => (
          <div key={n._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
            <div className="bg-blue-50 p-3 rounded-xl text-primary shrink-0">
              <Bell size={24} />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-bold text-lg text-gray-900">{n.title}</h3>
                <span className="px-3 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] uppercase font-bold tracking-widest">{n.category}</span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">{n.description}</p>
              <div className="mt-3 text-[10px] text-gray-400 uppercase font-bold">{new Date(n.createdAt).toLocaleString()}</div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Edit size={18}/></button>
              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={18}/></button>
            </div>
          </div>
        ))}
      </div>

      {/* Basic Modal Implementation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-bold mb-6">Create New Notice</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Notice Title</label>
                <input 
                  type="text" required
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g. Exam Schedule Update"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Category</label>
                <select 
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="general">General</option>
                  <option value="exam">Exam</option>
                  <option value="event">Event</option>
                  <option value="holiday">Holiday</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Description</label>
                <textarea 
                  rows="4" required
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Detailed announcement details..."
                ></textarea>
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-grow py-4 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-grow bg-primary hover:bg-blue-800 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-100 transition-all font-premium"
                >
                  Publish Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeManagement;
