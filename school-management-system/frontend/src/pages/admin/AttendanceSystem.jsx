import React, { useState } from 'react';
import { Calendar as CalendarIcon, Filter, Search, Check, X } from 'lucide-react';

const AttendanceSystem = () => {
  const [selectedClass, setSelectedClass] = useState('X-A');

  const mockAttendance = [
    { id: '1', student: 'Alice Johnson', roll: '101', status: 'present' },
    { id: '2', student: 'John Smith', roll: '102', status: 'absent' },
    { id: '3', student: 'Emma Davis', roll: '201', status: 'present' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Attendance System</h1>
          <p className="text-gray-500 italic">Mark and review student daily attendance.</p>
        </div>
        <div className="bg-white px-6 py-3 rounded-xl border border-gray-200 flex items-center gap-3">
          <CalendarIcon size={20} className="text-primary" />
          <span className="font-bold">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-4 bg-gray-50/30">
          <select 
            className="px-6 py-3 rounded-xl border border-gray-200 font-bold text-gray-700 outline-none focus:ring-2 focus:ring-primary/20"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="X-A">Class X - Section A</option>
            <option value="X-B">Class X - Section B</option>
            <option value="IX-A">Class IX - Section A</option>
          </select>
          <button className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 transition-all font-premium">
            Mark All Present
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 font-bold uppercase text-xs tracking-widest">
              <tr>
                <th className="px-10 py-5">Roll No</th>
                <th className="px-10 py-5">Student Name</th>
                <th className="px-10 py-5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockAttendance.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-10 py-5 font-bold text-gray-400">{s.roll}</td>
                  <td className="px-10 py-5 font-bold text-gray-900">{s.student}</td>
                  <td className="px-10 py-5">
                    <div className="flex items-center justify-center gap-4">
                      <button className={`p-4 rounded-2xl border-2 transition-all ${s.status === 'present' ? 'bg-green-500 border-green-500 text-white' : 'border-gray-100 text-gray-300 hover:border-green-300'}`}>
                        <Check size={24} />
                      </button>
                      <button className={`p-4 rounded-2xl border-2 transition-all ${s.status === 'absent' ? 'bg-red-500 border-red-500 text-white' : 'border-gray-100 text-gray-300 hover:border-red-300'}`}>
                        <X size={24} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 border-t border-gray-50 text-right">
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-100 transition-all font-premium uppercase tracking-widest">
            Submit Attendance Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSystem;
