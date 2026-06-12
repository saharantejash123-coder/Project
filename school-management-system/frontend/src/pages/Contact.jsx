import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In <span className="text-primary">Touch</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Have questions? We're here to help. Contact us using any of the methods below or send us a direct message.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-2xl text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Main Campus</h3>
                <p className="text-gray-600 text-sm mt-1">123 Education Lane, Learning City, ED 45678</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-2xl text-green-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-gray-600 text-sm mt-1">+1 (234) 567-890</p>
                <p className="text-gray-600 text-sm italic">Mon-Fri, 9am - 4pm</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-orange-50 p-3 rounded-2xl text-accent">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-gray-600 text-sm mt-1">info@eliteschool.edu</p>
                <p className="text-gray-600 text-sm mt-1">admissions@eliteschool.edu</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-2 mb-8">
              <MessageCircle className="text-primary" />
              <h2 className="text-2xl font-bold">Send us a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                  <input 
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <input 
                  type="text" required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Inquiry about..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea 
                  rows="5" required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-primary hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
