import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Target } from 'lucide-react';
import Layout from '../components/Layout';

const Security = () => {
  return (
    <Layout>
      <div className="p-8 md:p-24 selection:bg-primary-500/20">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={18} /> Volver al Inicio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl"
        >
          <ShieldCheck size={48} className="text-primary-500 mb-8" />
          <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">Estándares de <span className="text-primary-400">Seguridad.</span></h1>
          
          <div className="space-y-12 text-slate-400 text-lg leading-relaxed font-medium">
            <p>La seguridad de los datos empresariales es nuestro pilar fundamental. En Gridly BI, diseñamos todo desde un enfoque de Seguridad Privada.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ring-1 ring-white/5 p-8 rounded-3xl bg-white/[0.02]">
              <div className="space-y-4">
                <div className="p-3 bg-primary-500/10 rounded-2xl w-fit text-primary-500"><Lock size={24} /></div>
                <h3 className="text-white font-bold text-xl uppercase tracking-tighter">Cifrado Local</h3>
                <p className="text-sm leading-relaxed">No hay base de datos centralizada. Tus temas residen exclusivamente en la persistencia de tu navegador.</p>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-primary-500/10 rounded-2xl w-fit text-primary-500"><Target size={24} /></div>
                <h3 className="text-white font-bold text-xl uppercase tracking-tighter">Exportación Segura</h3>
                <p className="text-sm leading-relaxed">Los archivos JSON generados por Gridly BI están limpios de scripts maliciosos y son compatibles 100% con Power BI Desktop.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Security;
