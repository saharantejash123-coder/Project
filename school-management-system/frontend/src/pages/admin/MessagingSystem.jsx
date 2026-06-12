import React, { useState } from 'react';
import { Send, Search, User, MessageCircle } from 'lucide-react';

const MessagingSystem = () => {
  const [message, setMessage] = useState('');

  const mockUsers = [
    { id: '1', name: 'Dr. Sarah Wilson', role: 'Teacher', online: true },
    { id: '2', name: 'Alice Johnson', role: 'Student', online: false },
    { id: '3', name: 'John Smith', role: 'Parent', online: true },
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      {/* User List */}
      <div className="w-80 border-r border-gray-100 flex flex-col bg-gray-50/30">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm"
            />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {mockUsers.map(u => (
            <div key={u.id} className="p-4 flex items-center gap-4 hover:bg-white cursor-pointer transition-colors border-l-4 border-transparent hover:border-primary">
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-primary font-bold">
                  {u.name[0]}
                </div>
                {u.online && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>}
              </div>
              <div>
                <div className="font-bold text-gray-900">{u.name}</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{u.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white shadow-sm z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-primary font-bold">S</div>
            <div>
              <div className="font-bold">Dr. Sarah Wilson</div>
              <div className="text-xs text-green-500 font-bold">Online</div>
            </div>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-6 bg-gray-50/50">
          <div className="flex flex-col items-start max-w-[70%]">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-gray-700">
              Hello Admin, I have submitted the attendance report for Class X-A.
            </div>
            <span className="text-[10px] text-gray-400 mt-2 font-bold ml-2">10:30 AM</span>
          </div>

          <div className="flex flex-col items-end ml-auto max-w-[70%]">
            <div className="bg-primary p-4 rounded-2xl rounded-tr-none shadow-lg text-white">
              Thank you Sarah! I will review it shortly.
            </div>
            <span className="text-[10px] text-gray-400 mt-2 font-bold mr-2">10:35 AM</span>
          </div>
        </div>

        <div className="p-6 bg-white border-t border-gray-100">
          <div className="flex gap-4">
            <input 
              type="text" 
              placeholder="Type your message here..."
              className="flex-grow px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="bg-primary hover:bg-blue-800 text-white p-4 rounded-2xl shadow-xl shadow-blue-100 transition-all hover:scale-105 active:scale-95">
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingSystem;
