import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Mail, Phone } from 'lucide-react';

const TeacherManagement = () => {
  const mockTeachers = [
    { id: '1', name: 'Dr. Sarah Wilson', subject: 'Mathematics', id_no: 'T-2021-01', email: 'sarah@school.com', exp: '10 Years' },
    { id: '2', name: 'Mr. David Miller', subject: 'Physics', id_no: 'T-2021-02', email: 'david@school.com', exp: '8 Years' },
    { id: '3', name: 'Ms. Emily Brown', subject: 'English', id_no: 'T-2022-05', email: 'emily@school.com', exp: '5 Years' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teacher Management</h1>
          <p className="text-gray-500">Manage faculty members and their profiles.</p>
        </div>
        <button className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 transition-all">
          <Plus size={20} /> Add Teacher
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTeachers.map((t) => (
          <div key={t.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-primary flex items-center justify-center text-2xl font-bold">
                {t.name.split(' ').pop()[0]}
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900">{t.name}</h3>
                <span className="text-primary text-sm font-bold italic">{t.subject}</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail size={16} /> <span>{t.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone size={16} /> <span>+1 (555) 000-0000</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.id_no}</span>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Edit size={18}/></button>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={18}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherManagement;
