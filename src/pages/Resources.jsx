import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, FileCode, PlayCircle, Library } from 'lucide-react';
import Layout from '../components/Layout';

const Resources = () => {
  const materials = [
    { title: 'Documentación Técnica', icon: BookOpen, desc: 'Todo lo que necesitas saber sobre el motor JSON de Power BI.' },
    { title: 'Tutoriales en Video', icon: PlayCircle, desc: 'Aprende a diseñar dashboards desde cero con Gridly.' },
    { title: 'Blog', icon: FileCode, desc: 'Nuevas tendencias en diseño de datos y analítica.' },
    { title: 'Galería de Iconos', icon: Library, desc: 'Descarga un paquete de iconos personalizados para tus reportes.' },
  ];

  return (
    <Layout>
      <div className="p-8 md:p-24 selection:bg-primary-500/20">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={18} /> Volver al Inicio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Recursos <span className="text-primary-500">Educativos.</span></h1>
          <p className="text-slate-400 text-lg mb-16 leading-relaxed">Conviértete en un experto en diseño BI. Tenemos todo el material necesario para tu crecimiento profesional.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {materials.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="p-4 rounded-2xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                    <p className="text-slate-500 text-sm">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Resources;
