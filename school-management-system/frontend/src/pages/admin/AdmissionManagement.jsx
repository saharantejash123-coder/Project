import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Check, X, Eye, Clock } from 'lucide-react';
import { toast } from 'react-hot-toast';

const AdmissionManagement = () => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/v1/admissions', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAdmissions(res.data.data);
    } catch (err) {
      console.error(err);
      // Fallback for demo
      setAdmissions([
        { _id: '1', fullName: 'Michael Scott', classApplyingFor: 'Primary (1-5)', status: 'pending', email: 'michael@dunder.com', appliedAt: new Date().toISOString() },
        { _id: '2', fullName: 'Pam Beesly', classApplyingFor: 'Middle (6-8)', status: 'approved', email: 'pam@dunder.com', appliedAt: new Date().toISOString() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/v1/admissions/${id}`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success(`Application ${status}!`);
      fetchAdmissions();
    } catch (err) {
      toast.error('Update failed');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admission Requests</h1>
        <p className="text-gray-500">Review and approve new student applications.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-500 text-sm font-bold uppercase tracking-wider">
              <tr>
                <th className="px-8 py-4 text-left">Applicant</th>
                <th className="px-8 py-4 text-left">Applying For</th>
                <th className="px-8 py-4 text-left">Date</th>
                <th className="px-8 py-4 text-left">Status</th>
                <th className="px-8 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {admissions.map((a) => (
                <tr key={a._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="font-bold text-gray-900">{a.fullName}</div>
                    <div className="text-xs text-gray-400">{a.email}</div>
                  </td>
                  <td className="px-8 py-5 text-gray-600">{a.classApplyingFor}</td>
                  <td className="px-8 py-5 text-gray-600 italic">
                    {new Date(a.appliedAt).toLocaleDateString()}
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 w-fit ${
                      a.status === 'approved' ? 'bg-green-100 text-green-600' :
                      a.status === 'rejected' ? 'bg-red-100 text-red-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {a.status === 'pending' && <Clock size={12} />}
                      {a.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => handleStatusUpdate(a._id, 'approved')}
                        disabled={a.status !== 'pending'}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-all disabled:opacity-20"
                      >
                        <Check size={18}/>
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(a._id, 'rejected')}
                        disabled={a.status !== 'pending'}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all disabled:opacity-20"
                      >
                        <X size={18}/>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary hover:bg-blue-50 rounded-lg transition-all"><Eye size={18}/></button>
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

export default AdmissionManagement;
