import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layout as LayoutIcon, LayoutGrid, Palette, BarChart } from 'lucide-react';
import Layout from '../components/Layout';

const Templates = () => {
  const templates = [
    { id: 1, title: 'Analítico Ejecutivo', desc: 'Optimizado para KPIs de alto nivel con contraste suave.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'Modern Dark', desc: 'Estética neón con bordes redondeados y glassmorphism.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'Corporativo Limpio', desc: 'Diseño sobrio con colores institucionales y rejilla clara.', img: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=400&q=80' },
    { id: 4, title: 'Dashboard de Ventas', desc: 'Enfoque en métricas de tiempo real y comparativas.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <Layout>
      <div className="p-8 md:p-24 selection:bg-primary-500/20">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={18} /> Volver al Inicio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Plantillas <span className="text-primary-500">BI</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-16">Inspiración y estructuras base para tus próximos reportes de Power BI. Diseñadas para convertir datos en arte.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/5 mb-4 relative">
                  <img src={t.img} alt={t.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link to="/editor" className="px-6 py-2 bg-white text-black font-bold rounded-xl text-xs">Usar ahora</Link>
                  </div>
                </div>
                <h3 className="font-bold mb-2">{t.title}</h3>
                <p className="text-xs text-slate-500">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Templates;
