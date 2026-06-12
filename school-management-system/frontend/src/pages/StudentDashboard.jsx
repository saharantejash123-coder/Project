import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Calendar, BookOpen, DollarSign, Clock } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}</h1>
            <p className="text-gray-500 italic">Student Dashboard | Class X-A</p>
          </div>
          <div className="w-16 h-16 rounded-3xl bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-200">
            {user?.name?.[0]}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Stats */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="bg-green-50 p-4 rounded-2xl text-green-600">
              <Calendar size={28} />
            </div>
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase">Attendance</div>
              <div className="text-2xl font-bold">92%</div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
              <BookOpen size={28} />
            </div>
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase">Subjects</div>
              <div className="text-2xl font-bold">6 Total</div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="bg-orange-50 p-4 rounded-2xl text-accent">
              <DollarSign size={28} />
            </div>
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase">Fees Status</div>
              <div className="text-sm font-bold text-green-600">Paid (March)</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timetable Preview */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="text-primary" /> Today's Timetable
            </h3>
            <div className="space-y-4">
              {[
                { time: '09:00 AM', subject: 'Mathematics', teacher: 'Sarah Wilson' },
                { time: '10:00 AM', subject: 'Physics', teacher: 'David Miller' },
                { time: '11:15 AM', subject: 'English', teacher: 'Emily Brown' },
              ].map((slot, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                  <div className="font-bold text-primary">{slot.time}</div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{slot.subject}</div>
                    <div className="text-xs text-gray-400 italic">By {slot.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Schedule / Notices */}
          <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-xl font-bold mb-6">Upcoming Exams</h3>
            <div className="space-y-4">
              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="font-bold text-accent">Mathematics Mid-Term</div>
                <div className="text-sm text-blue-100">April 15, 2026 | 09:00 AM</div>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="font-bold text-accent">Physics Mid-Term</div>
                <div className="text-sm text-blue-100">April 17, 2026 | 09:00 AM</div>
              </div>
            </div>
            <button className="mt-8 text-sm font-bold text-blue-100 hover:text-white underline">
              Download Full Datasheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
