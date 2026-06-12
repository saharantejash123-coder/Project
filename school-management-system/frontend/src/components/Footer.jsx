import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <GraduationCap size={32} className="text-accent" />
            <span>ELITE SCHOOL</span>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering students to achieve excellence through quality education and innovative learning environments.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/admissions" className="hover:text-white transition-colors">Admissions</a></li>
            <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="/notices" className="hover:text-white transition-colors">Notice Board</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Academics</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Extra Curricular</a></li>
            <li><a href="#" className="hover:text-white transition-colors">School Calendar</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>123 Education Lane, Learning City, ED 45678</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-accent shrink-0" />
              <span>info@eliteschool.edu</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Elite School Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
