import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Twitter, Github, Globe } from 'lucide-react';
import Layout from '../components/Layout';

const Community = () => {
  const channels = [
    { title: 'Forum Central', icon: MessageSquare, desc: 'Comparte tus temas y obtén feedback de otros expertos en Power BI.', link: '#' },
    { title: 'Twitter / X', icon: Twitter, desc: 'Noticias, trucos rápidos y actualizaciones de Gridly.', link: '#' },
    { title: 'GitHub', icon: Github, desc: 'Contribuye al desarrollo de nuestro motor de temas.', link: '#' },
    { title: 'Newsletter', icon: Globe, desc: 'Recibe nuevos temas y tips directamente en tu correo.', link: '#' },
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
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Únete a la <span className="text-primary-500">Comunidad.</span></h1>
          <p className="text-slate-400 text-lg mb-16 leading-relaxed">No solo somos una herramienta, somos un movimiento para democratizar el buen diseño en el mundo de los datos.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary-500/50 transition-all group">
                  <Icon size={32} className="text-primary-500 mb-6" />
                  <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                  <p className="text-slate-500 text-sm mb-6">{c.desc}</p>
                  <a href={c.link} className="text-xs font-black uppercase tracking-widest text-primary-400 group-hover:text-white transition-colors">Entrar Ahora</a>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Community;
