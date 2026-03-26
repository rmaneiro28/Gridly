import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="p-8 md:p-24 selection:bg-primary-500/20">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={18} /> Volver al Inicio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <ShieldCheck size={48} className="text-primary-500 mb-8" />
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Política de <span className="text-primary-400">Privacidad.</span></h1>
          
          <div className="space-y-8 text-slate-400 text-lg leading-[1.8] font-medium">
            <p>En Gridly BI, valoramos la privacidad de tus datos de negocio por encima de todo. Queremos que te sientas seguro al utilizar nuestras herramientas.</p>
            <h3 className="text-white font-bold text-2xl mt-12 mb-4">Manejo de Datos Local</h3>
            <p>Toda la configuración de tus temas de Power BI se procesa de forma local en tu navegador. Gridly BI no almacena tus datos corporativos, credenciales ni información confidencial en servidores externos.</p>
            <h3 className="text-white font-bold text-2xl mt-12 mb-4">Uso de Cookies</h3>
            <p>Utilizamos cookies esenciales para mejorar tu experiencia de usuario y recordar tus preferencias de diseño. No compartimos esta información con terceros con fines publicitarios.</p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Privacy;
