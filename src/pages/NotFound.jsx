import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ghost, Home } from 'lucide-react';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <Ghost size={120} className="text-primary-500/20" />
        </motion.div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter">4 <span className="text-primary-500">0</span> 4</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-400 uppercase tracking-widest">Página no encontrada</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-12 leading-relaxed">Parece que los datos que buscas se han perdido en el vacío. No te preocupes, puedes volver al inicio con un clic.</p>
        
        <Link 
          to="/" 
          className="px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-slate-200 transition-all flex items-center gap-3 shadow-2xl shadow-white/5 tracking-tight"
        >
          <Home size={18} /> Volver a Gridly
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
