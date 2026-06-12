import React, { useState } from 'react';
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, Users, UserCheck, Bell, 
  Image as ImageIcon, DollarSign, Calendar, 
  Clock, MessageSquare, LogOut, Menu, X,
  Briefcase
} from 'lucide-react';
import Overview from './Overview';
import StudentManagement from './StudentManagement';
import TeacherManagement from './TeacherManagement';
import AdmissionManagement from './AdmissionManagement';
import NoticeManagement from './NoticeManagement';
import GalleryManagement from './GalleryManagement';
import FeeManagement from './FeeManagement';
import AttendanceSystem from './AttendanceSystem';
import TimetableManagement from './TimetableManagement';
import MessagingSystem from './MessagingSystem';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/admin' },
    { icon: <Users size={20} />, label: 'Students', path: '/admin/students' },
    { icon: <Briefcase size={20} />, label: 'Teachers', path: '/admin/teachers' },
    { icon: <UserCheck size={20} />, label: 'Admissions', path: '/admin/admissions' },
    { icon: <Bell size={20} />, label: 'Notices', path: '/admin/notices' },
    { icon: <ImageIcon size={20} />, label: 'Gallery', path: '/admin/gallery' },
    { icon: <DollarSign size={20} />, label: 'Fees', path: '/admin/fees' },
    { icon: <Calendar size={20} />, label: 'Attendance', path: '/admin/attendance' },
    { icon: <Clock size={20} />, label: 'Timetable', path: '/admin/timetable' },
    { icon: <MessageSquare size={20} />, label: 'Messages', path: '/admin/messages' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-primary text-white transition-all duration-300 flex flex-col z-50`}>
        <div className="p-4 flex items-center justify-between border-b border-blue-900">
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight">Admin Panel</span>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-blue-800 rounded">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="flex-grow overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  end={item.path === '/admin'}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                      isActive ? 'bg-blue-800 text-accent font-bold' : 'hover:bg-blue-800/50'
                    }`
                  }
                >
                  <span className="shrink-0">{item.icon}</span>
                  {isSidebarOpen && <span className="whitespace-nowrap">{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-900">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3 w-full hover:bg-red-600/20 rounded-lg text-red-200 transition-colors"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-full relative overflow-hidden">
        {/* Top Header */}
        <header className="bg-white h-16 shadow-sm flex items-center justify-between px-8 z-40">
          <h2 className="text-xl font-bold text-gray-800">Elite School Management</h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-gray-900">{user?.name || 'Admin'}</div>
              <div className="text-xs text-gray-500 uppercase">{user?.role || 'Administrator'}</div>
            </div>
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
              {user?.name?.[0] || 'A'}
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <div className="flex-grow overflow-y-auto p-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/students" element={<StudentManagement />} />
            <Route path="/teachers" element={<TeacherManagement />} />
            <Route path="/admissions" element={<AdmissionManagement />} />
            <Route path="/notices" element={<NoticeManagement />} />
            <Route path="/gallery" element={<GalleryManagement />} />
            <Route path="/fees" element={<FeeManagement />} />
            <Route path="/attendance" element={<AttendanceSystem />} />
            <Route path="/timetable" element={<TimetableManagement />} />
            <Route path="/messages" element={<MessagingSystem />} />
            {/* Add more management routes as needed */}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
