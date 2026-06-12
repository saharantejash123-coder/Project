import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Lightbulb, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1523050353091-f1198b01049c?auto=format&fit=crop&q=80" 
            alt="School Banner" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent font-bold text-sm mb-6 uppercase tracking-widest border border-accent/30">
              Transforming Education
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              Lead the <span className="text-accent underline decoration-4 underline-offset-8">Future</span> with Knowledge.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
              Join a community of innovators, explorers, and leaders dedicated to excellence and holistic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/admissions" className="btn-premium bg-accent text-slate-900">
                Enroll Today <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="btn-premium bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Elite School?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen />, title: "Quality Education", desc: "World-class curriculum focused on holistic development." },
              { icon: <Users />, title: "Expert Teachers", desc: "Passionate educators with years of experience." },
              { icon: <Trophy />, title: "Excellence", desc: "Consistent track record of academic and sports achievements." },
              { icon: <Lightbulb />, title: "Innovation", desc: "Modern labs and technology-driven learning methods." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 rounded-2xl text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News / Notices Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest Announcements</h2>
              <p className="text-gray-600 mt-2">Stay updated with our recent events and notices.</p>
            </div>
            <Link to="/notices" className="text-primary font-bold flex items-center gap-1 hover:underline">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4">General Notice</span>
                  <h3 className="text-xl font-bold mb-2">Upcoming Annual Sports Day 2026</h3>
                  <p className="text-gray-600 text-sm mb-4">We are pleased to announce the schedule for the upcoming Annual Sports Day. All students are invited to participate...</p>
                  <div className="text-gray-400 text-xs font-medium italic">Posted on March 25, 2026</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-10 opacity-90">Start your journey towards a brighter future today. Applications are open for the academic year 2026-27.</p>
          <Link to="/admissions" className="bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl inline-block transition-transform hover:scale-105">
            Begin Admission Process
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
