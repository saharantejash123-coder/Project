import React from 'react';
import { Users, BookOpen, UserCheck, DollarSign } from 'lucide-react';

const OverviewCard = ({ icon, label, val, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
    <div className={`p-4 rounded-2xl ${color} bg-opacity-10 text-${color.split('-')[1]}`}>
      {icon}
    </div>
    <div>
      <div className="text-gray-500 text-sm font-medium">{label}</div>
      <div className="text-2xl font-bold text-gray-900">{val}</div>
    </div>
  </div>
);

const Overview = () => {
  const stats = [
    { icon: <Users size={28} />, label: 'Total Students', val: '1,250', color: 'bg-blue-600' },
    { icon: <BookOpen size={28} />, label: 'Total Teachers', val: '85', color: 'bg-green-600' },
    { icon: <UserCheck size={28} />, label: 'Pending Admissions', val: '12', color: 'bg-orange-600' },
    { icon: <DollarSign size={28} />, label: 'Fees Collected', val: '$45,200', color: 'bg-purple-600' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 italic">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <OverviewCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-96">
          <h3 className="text-lg font-bold mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-center gap-4 text-sm border-b border-gray-50 pb-4">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="flex-grow">
                  <span className="font-bold">New Student Registration</span> - Class X, Roll 45
                </div>
                <div className="text-gray-400">2 hours ago</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-96 overflow-hidden">
          <h3 className="text-lg font-bold mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-accent">
              <div className="font-bold text-accent">Parent Teacher Meeting</div>
              <div className="text-sm text-gray-600">April 5th, 2026 - 10:00 AM</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-primary">
              <div className="font-bold text-primary">Annual Science Fair</div>
              <div className="text-sm text-gray-600">April 12th, 2026 - All Day</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
