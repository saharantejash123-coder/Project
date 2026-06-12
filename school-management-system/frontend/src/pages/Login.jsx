import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { Lock, Mail, ChevronRight, GraduationCap } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success('Google Login Successful!');
      navigate('/');
    } catch (error) {
      toast.error('Google login failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      toast.success('Login Successful!');
      if (data.user.role === 'admin') navigate('/admin');
      else navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="bg-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200">
            <GraduationCap size={48} className="text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Sign in to Portal</h2>
          <p className="mt-2 text-gray-600 font-medium italic underline">Students, Teachers, and Admin</p>
        </div>
        
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email" required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="admin@school.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password" required
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-sm font-bold text-primary hover:underline">Forgot?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
            >
              Sign In <ChevronRight size={20} />
            </button>
          </form>
          
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
              Sign in with Google
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
