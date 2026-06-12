import React, { useState } from 'react';
import { DollarSign, Search, Filter, CheckCircle2, AlertCircle } from 'lucide-react';

const FeeManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockFees = [
    { id: '1', student: 'Alice Johnson', class: 'X-A', amount: '$500', month: 'March 2026', status: 'paid', date: '2026-03-10' },
    { id: '2', student: 'John Smith', class: 'X-B', amount: '$500', month: 'March 2026', status: 'pending', date: '-' },
    { id: '3', student: 'Emma Davis', class: 'IX-A', amount: '$450', month: 'March 2026', status: 'late', date: '-' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Fee Management</h1>
          <p className="text-gray-500">Track and manage student fee records.</p>
        </div>
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-purple-50 p-2 rounded-xl text-purple-600">
            <DollarSign size={24} />
          </div>
          <div className="pr-4">
            <div className="text-xs text-gray-400 font-bold uppercase">Total Collected</div>
            <div className="text-xl font-bold text-gray-900">$45,200</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search by student or class..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-500 text-sm font-bold uppercase tracking-wider">
              <tr>
                <th className="px-8 py-4 text-left">Student</th>
                <th className="px-8 py-4 text-left">Class</th>
                <th className="px-8 py-4 text-left">Amount</th>
                <th className="px-8 py-4 text-left">Month</th>
                <th className="px-8 py-4 text-left">Status</th>
                <th className="px-8 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockFees.map((f) => (
                <tr key={f.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-900">{f.student}</td>
                  <td className="px-8 py-5 text-gray-600 font-medium">{f.class}</td>
                  <td className="px-8 py-5 font-bold">{f.amount}</td>
                  <td className="px-8 py-5 text-gray-500 text-sm uppercase font-bold">{f.month}</td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1 w-fit ${
                      f.status === 'paid' ? 'bg-green-100 text-green-600' :
                      f.status === 'late' ? 'bg-red-100 text-red-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {f.status === 'paid' ? <CheckCircle2 size={12}/> : <AlertCircle size={12}/>}
                      {f.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <button className="text-primary font-bold text-sm hover:underline">Mark Paid</button>
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

export default FeeManagement;
