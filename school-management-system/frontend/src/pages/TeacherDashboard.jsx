import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Users, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Faculty Portal: {user?.name}</h1>
            <p className="text-gray-500 italic italic underline">Senior Teacher | Mathematics Dept.</p>
          </div>
          <div className="w-16 h-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold">
            {user?.name?.[0]}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <Users className="text-blue-600 mb-4" />
            <div className="text-2xl font-bold">120</div>
            <div className="text-gray-400 text-xs font-bold uppercase">Total Students</div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <CheckCircle className="text-green-600 mb-4" />
            <div className="text-2xl font-bold">95%</div>
            <div className="text-gray-400 text-xs font-bold uppercase">Avg Attendance</div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <BookOpen className="text-purple-600 mb-4" />
            <div className="text-2xl font-bold">5</div>
            <div className="text-gray-400 text-xs font-bold uppercase">Classes Today</div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <Clock className="text-orange-600 mb-4" />
            <div className="text-2xl font-bold">18</div>
            <div className="text-gray-400 text-xs font-bold uppercase">Teaching Hours/Wk</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">My Classes</h3>
              <button className="text-primary font-bold text-sm hover:underline">View Schedule</button>
            </div>
            <div className="space-y-4">
              {['Class X-A', 'Class X-B', 'Class IX-A', 'Class XII-C'].map((cls, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors">
                  <div className="font-bold text-gray-900">{cls}</div>
                  <div className="flex gap-4">
                    <button className="bg-white text-primary border border-primary px-4 py-2 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all">Mark Attendance</button>
                    <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md shadow-blue-100">Upload Assignment</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6">Internal Messages</h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-50 last:border-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl shrink-0 font-bold flex items-center justify-center text-gray-400">A</div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Admin</div>
                    <p className="text-xs text-gray-500 line-clamp-1 italic">Please submit the final marks for...</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/messages" className="block w-full text-center mt-6 text-primary font-bold text-sm hover:underline">Go to Inbox</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
