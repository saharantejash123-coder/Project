import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Notices', path: '/notices' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 font-bold text-xl">
              <GraduationCap size={32} className="text-accent" />
              <span>ELITE SCHOOL</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'bg-blue-900 text-accent' : 'hover:bg-blue-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/login"
                className="hover:text-accent font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-accent hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-800 text-accent' : 'hover:bg-blue-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center hover:text-accent py-2 text-base font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-accent hover:bg-orange-600 text-white px-4 py-2 rounded-md text-base font-medium mt-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
