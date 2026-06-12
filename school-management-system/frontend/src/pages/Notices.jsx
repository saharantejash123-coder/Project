import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bell, Calendar, ChevronRight } from 'lucide-react';

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/notices');
        setNotices(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNotices();
  }, []);

  const demoNotices = [
    { title: 'Annual Sports Day 2026', description: 'The annual sports meet is scheduled for next month. Registrations for various events are now open in the PT room.', category: 'event', createdAt: '2026-03-20' },
    { title: 'Mid-Term Examination Schedule', description: 'The mid-term examinations for classes VI-XII will begin from April 15. The detailed timetable has been mailed to parents.', category: 'exam', createdAt: '2026-03-24' },
    { title: 'Spring Break Holidays', description: 'The school will remain closed for spring break from April 1 to April 7. Classes will resume on April 8.', category: 'holiday', createdAt: '2026-03-22' },
  ];

  const displayNotices = notices.length > 0 ? notices : demoNotices;

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-primary p-3 rounded-2xl text-white">
            <Bell size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Notice Board</h1>
            <p className="text-gray-600">Important announcements and updates for students and parents.</p>
          </div>
        </div>

        <div className="space-y-6">
          {displayNotices.map((notice, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    notice.category === 'exam' ? 'bg-red-100 text-red-600' :
                    notice.category === 'event' ? 'bg-blue-100 text-blue-600' :
                    notice.category === 'holiday' ? 'bg-orange-100 text-orange-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {notice.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{new Date(notice.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline self-start">
                  Read Full Details <ChevronRight size={16} />
                </button>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{notice.title}</h2>
              <p className="text-gray-600 leading-relaxed">{notice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
