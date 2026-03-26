import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white selection:bg-primary-500/20 overflow-x-hidden font-sans relative">
      <Background />
      <Navbar />
      <main className="relative z-10 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
