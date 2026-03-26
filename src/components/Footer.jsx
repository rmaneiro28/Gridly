import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black/20 backdrop-blur-xl relative z-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/">
              <img src="/Logo Completo.png" className="h-24" alt="Logo de Gridly" title="Logo de Gridly" />
            </Link>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed">Elevando el estándar visual de las empresas impulsadas por datos. Diseñado para profesionales, por profesionales.</p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Producto</h4>
          <ul className="space-y-4 text-sm text-slate-400 font-medium">
            <li><Link to="/editor" className="hover:text-primary-400 transition-colors">Editor de Temas</Link></li>
            <li><Link to="/templates" className="hover:text-primary-400 transition-colors">Plantillas BI</Link></li>
            <li><Link to="/community" className="hover:text-primary-400 transition-colors">Comunidad</Link></li>
            <li><Link to="/resources" className="hover:text-primary-400 transition-colors">Recursos</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Legal</h4>
          <ul className="space-y-4 text-sm text-slate-400 font-medium">
            <li><Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacidad</Link></li>
            <li><Link to="/terms" className="hover:text-primary-400 transition-colors">Términos</Link></li>
            <li><Link to="/security" className="hover:text-primary-400 transition-colors">Seguridad</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase font-black tracking-widest text-slate-600">© 2026 Gridly BI Tech Group. Diseñado con Antigravity AI.</p>
      </div>
    </footer>
  );
};

export default Footer;
