import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Filter } from 'lucide-react';

const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockStudents = [
    { id: '1', name: 'Alice Johnson', roll: '101', class: 'X', section: 'A', parent: 'Bob Johnson' },
    { id: '2', name: 'John Smith', roll: '102', class: 'X', section: 'B', parent: 'Will Smith' },
    { id: '3', name: 'Emma Davis', roll: '201', class: 'IX', section: 'A', parent: 'Jeff Davis' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
          <p className="text-gray-500">View and manage all registered students.</p>
        </div>
        <button className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 transition-all">
          <Plus size={20} /> Add Student
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-4 justify-between bg-gray-50/50">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search by name, roll, or class..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors font-medium">
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-500 text-sm font-bold uppercase tracking-wider">
              <tr>
                <th className="px-8 py-4 text-left">Student Name</th>
                <th className="px-8 py-4 text-left">Roll No</th>
                <th className="px-8 py-4 text-left">Class</th>
                <th className="px-8 py-4 text-left">Parent Name</th>
                <th className="px-8 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockStudents.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-primary flex items-center justify-center font-bold">
                      {s.name[0]}
                    </div>
                    <span className="font-bold text-gray-900">{s.name}</span>
                  </td>
                  <td className="px-8 py-5 text-gray-600">{s.roll}</td>
                  <td className="px-8 py-5 text-gray-600">{s.class}-{s.section}</td>
                  <td className="px-8 py-5 text-gray-600">{s.parent}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={18}/></button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
