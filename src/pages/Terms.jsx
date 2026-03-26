import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import Layout from '../components/Layout';

const Terms = () => {
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
          <FileText size={48} className="text-primary-500 mb-8" />
          <h1 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">Términos de <span className="text-primary-400">Servicio.</span></h1>
          
          <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
            <p>Al acceder y utilizar Gridly BI, aceptas cumplir con los siguientes términos y condiciones relacionados con el servicio.</p>
            <h3 className="text-white font-bold text-2xl mt-12 mb-4">Uso Permitido</h3>
            <p>Nuestras herramientas de exportación JSON y generación de fondos PNG están destinadas a profesionales de análisis de datos para mejorar sus presentaciones de Power BI de forma ética y profesional.</p>
            <h3 className="text-white font-bold text-2xl mt-12 mb-4">Propiedad de los Temas</h3>
            <p>Tú eres el propietario de todos los temas exportados y los fondos generados a través de Gridly BI. No reclamamos derechos sobre tus creaciones visuales.</p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Terms;
