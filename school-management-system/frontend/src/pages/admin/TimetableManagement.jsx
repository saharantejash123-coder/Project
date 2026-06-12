import React, { useState } from 'react';
import { Clock, Plus, Edit } from 'lucide-react';

const TimetableManagement = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [selectedDay, setSelectedDay] = useState('Monday');

  const mockTimetable = [
    { time: '09:00 - 10:00', subject: 'Mathematics', teacher: 'Dr. Sarah Wilson' },
    { time: '10:00 - 11:00', subject: 'Physics', teacher: 'Mr. David Miller' },
    { time: '11:00 - 11:15', subject: 'Break', teacher: '-' },
    { time: '11:15 - 12:15', subject: 'English', teacher: 'Ms. Emily Brown' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Class Timetable</h1>
          <p className="text-gray-500 italic">Schedule classes and manage subject distributions.</p>
        </div>
        <button className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-100 transition-all font-premium">
          <Plus size={20} /> Add Slot
        </button>
      </div>

      <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
        {days.map(day => (
          <button 
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-8 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${selectedDay === day ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockTimetable.map((slot, i) => (
          <div key={i} className={`bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow ${slot.subject === 'Break' ? 'bg-gray-50 border-dashed opacity-60' : ''}`}>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-primary font-bold">
                <Clock size={20} />
                <span className="text-lg">{slot.time}</span>
              </div>
              <div className="w-px h-10 bg-gray-100 hidden md:block"></div>
              <div>
                <div className="text-xl font-bold text-gray-900">{slot.subject}</div>
                <div className="text-sm text-gray-500 font-medium italic">{slot.teacher}</div>
              </div>
            </div>
            {slot.subject !== 'Break' && (
              <button className="p-3 text-gray-400 hover:text-primary hover:bg-blue-50 rounded-xl transition-all">
                <Edit size={20} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimetableManagement;
