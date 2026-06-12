import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { Lock, Mail, User, ChevronRight, GraduationCap } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success('Google Registration Successful!');
      navigate('/');
    } catch (error) {
      toast.error('Google login failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      toast.success('Registration Successful!');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="bg-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200">
            <GraduationCap size={48} className="text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
          <p className="mt-2 text-gray-600 font-medium italic underline">Join our learning community</p>
        </div>
        
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 ml-1 uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text" required
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 ml-1 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email" required
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 ml-1 uppercase tracking-wider">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password" required
                  value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 ml-1 uppercase tracking-wider">I am a...</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="block w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 mt-4"
            >
              Get Started <ChevronRight size={20} />
            </button>
          </form>

          {/* Social Sign Up Mockup */}
          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-100 w-full"></div>
              <span className="bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-widest absolute">Or continue with</span>
            </div>
            
            <button 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-4 py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-bold text-gray-700 shadow-sm"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
              Sign up with Google
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
