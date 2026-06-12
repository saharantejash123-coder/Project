import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/gallery');
        setItems(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // Static items fallback for demo
  const demoItems = [
    { url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop', title: 'School Building', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop', title: 'Science Lab', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop', title: 'Sports Day', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop', title: 'Library', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd3c?q=80&w=2070&auto=format&fit=crop', title: 'Annual Function', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2064&auto=format&fit=crop', title: 'Classroom', type: 'image' },
  ];

  const displayItems = items.length > 0 ? items : demoItems;

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our School <span className="text-primary">Gallery</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto italic">Capturing the moments that define our journey of learning and growth.</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.type === 'video' ? 'Video Representation' : 'Photography'}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
