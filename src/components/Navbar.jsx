import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-8 md:px-24 bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src="/Logo Completo.png" className="h-10 md:h-12 object-contain rounded-lg" alt="Gridly Logo" />
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Link to="/#features" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Funcionalidades</Link>
        <Link to="/#nosotros" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Nosotros</Link>
        <Link to="/editor" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary-500/25 transition-all active:scale-95 flex items-center gap-2">
          Probar Editor <ArrowRight size={16} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
