import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Upload, ChevronRight, CheckCircle } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    classApplyingFor: '',
    previousSchool: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/admissions', formData);
      toast.success('Application submitted successfully!');
      setSubmitted(true);
    } catch (error) {
      toast.error(error.response?.data?.error || 'Submission failed');
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl text-center">
          <CheckCircle size={80} className="mx-auto text-success mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying to Elite School. Our admissions team will review your application and contact you via email within 3-5 business days.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-primary font-bold hover:underline"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary pt-24 pb-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Admission Open 2026-27</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Take the first step towards a premier education. Complete the form below to begin the application process.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-32 pb-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <input 
                  type="text" name="fullName" required
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" name="email" required
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                <input 
                  type="tel" name="phone" required
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="+1 (234) 567-890"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Class Applying For</label>
                <select 
                  name="classApplyingFor" required
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                >
                  <option value="">Select Class</option>
                  <option value="Pre-Primary">Pre-Primary</option>
                  <option value="Primary (1-5)">Primary (1-5)</option>
                  <option value="Middle (6-8)">Middle (6-8)</option>
                  <option value="Higher (9-12)">Higher (9-12)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Previous School (if any)</label>
              <input 
                type="text" name="previousSchool"
                onChange={handleChange}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Name of previous institution"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Additional Message</label>
              <textarea 
                name="message" rows="4"
                onChange={handleChange}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Any special requirements or questions..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-accent hover:bg-orange-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg shadow-orange-200 transition-all flex items-center justify-center gap-2"
              >
                Submit Application <ChevronRight size={24} />
              </button>
              <p className="text-center text-gray-500 text-xs mt-6">
                By submitting this form, you agree to our terms of processing. We respect your privacy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
