import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Legacy of <span className="text-primary">Excellence</span></h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 1995, Elite School has been at the forefront of providing quality education to students from all walks of life. Our commitment to academic rigor combined with holistic development has made us a leader in the educational sector.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that every child is unique and possesses untapped potential. Our mission is to provide an environment that nurtures curiosity, creativity, and critical thinking.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756eaa93e?q=80&w=2070&auto=format&fit=crop" 
              className="rounded-3xl shadow-2xl z-10 relative"
              alt="School Campus"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-3xl -z-0"></div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100">
            <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6">
              <Target size={28} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower students with knowledge, skills, and values that will enable them to become responsible global citizens and lifelong learners in an ever-changing world.
            </p>
          </div>
          <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100">
            <div className="bg-accent w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6">
              <Shield size={28} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be a world-class educational institution recognized for excellence in teaching, learning, and character building, fostering a community of innovative thinkers.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-3xl p-12 text-white grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">2500+</div>
            <div className="text-blue-200">Total Students</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-blue-200">Expert Staff</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">30+</div>
            <div className="text-blue-200">Awards Won</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
