import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Palette,
  Settings,
  Layout,
  Download,
  Activity,
  Smartphone,
  BarChart3,
  Zap,
  ArrowRight,
  Shield,
  Clock,
  LayoutGrid,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: "personalizacion",
      title: "Control Absoluto",
      desc: "Personaliza cada milímetro de tu dashboard: colores, sombras, bordes redondeados y logotipos corporativos.",
      icon: Palette,
      color: "#4f8eff"
    },
    {
      id: "responsive",
      title: "Ready for Mobile",
      desc: "Diseña pensando en el hoy. Gridly es compatible con dimensiones personalizadas para reportes móviles de Power BI.",
      icon: Smartphone,
      color: "#10b981"
    },
    {
      id: "export",
      title: "Fondo de Plantilla",
      desc: "Genera fondos para Power BI en segundos sin los límites de diseño de la herramienta nativa.",
      icon: Download,
      color: "#f59e0b"
    },
    {
      id: "export-json",
      title: "Temas Visuales .JSON",
      desc: "Exporta la configuración completa del tema e impórtalo directamente en Power BI Desktop con un clic.",
      icon: Layout,
      color: "#d946ef"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0b14] text-white selection:bg-primary-500/20 overflow-x-hidden font-sans relative">
      
      {/* --- Dynamic Background Patterns --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 400, 0], 
            y: [0, 200, 0],
            scale: [1, 1.2, 1]
          }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary-600/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -300, 0], 
            y: [0, 400, 0],
            scale: [1, 1.4, 1]
          }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, 200, 0], 
            y: [0, -300, 0]
          }} 
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] bg-blue-600/5 blur-[150px] rounded-full"
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Scanning Line Effect */}
        <motion.div 
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent h-20 w-full"
        />
      </div>

      {/* Navbar Global */}
      <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-8 md:px-24 bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-primary-500/10 border border-primary-500/20"><Layout className="text-primary-400" size={20} /></div>
          <span className="text-xl font-black tracking-tighter">Gridly BI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Funcionalidades</a>
          <a href="#nosotros" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Nosotros</a>
          <Link to="/editor" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary-500/25 transition-all active:scale-95 flex items-center gap-2">
            Probar Editor <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
        {/* --- Hero Section --- */}
        <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 container mx-auto text-center">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 blur-[130px] -z-10 rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Diseñalo. Exprortalo. Triunfa en BI.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05]"
          >
            Crea el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Dashboard de tus sueños</span> en Segundos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Deja de pelear con las limitaciones visuales de Power BI. Diseña tus temas con una UX impecable y exporta archivos JSON profesionales hoy mismo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link to="/editor" className="w-full md:w-auto px-8 py-5 bg-white text-black font-black rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-3 text-sm tracking-tight shadow-xl">
              Comenzar Ahora <Zap size={18} fill="currentColor" />
            </Link>
            <a href="#demo" className="w-full md:w-auto px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 text-sm">
              Ver Demo en Video <Smartphone size={18} />
            </a>
          </motion.div>

          {/* Interactive Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 max-w-5xl mx-auto p-4 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-2xl shadow-[0_100px_100px_-50px_rgba(0,0,0,0.9)]"
          >
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#0a0b14] aspect-[16/9] relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
              {/* Visual placeholder of the application UI */}
              <div className="flex h-full w-full">
                <div className="w-1/4 h-full border-r border-white/5 p-6 flex flex-col gap-4">
                  <div className="h-8 w-8 bg-primary-500 rounded-lg"></div>
                  <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                  <div className="h-4 w-1/2 bg-white/5 rounded"></div>
                  <div className="mt-8 space-y-4">
                    {[1, 2, 3, 4].map(i => <div key={i} className={`h-10 w-full rounded-xl ${i === 1 ? 'bg-primary-500/20' : 'bg-white/5'}`}></div>)}
                  </div>
                </div>
                <div className="flex-1 p-8">
                  <div className="flex justify-between items-center mb-10">
                    <div className="h-6 w-32 bg-white/20 rounded"></div>
                    <div className="h-10 w-24 bg-primary-500 rounded-xl"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="h-32 bg-white/5 rounded-2xl border border-white/5"></div>
                    <div className="h-32 bg-white/5 rounded-2xl border border-white/5"></div>
                    <div className="h-32 bg-white/5 rounded-2xl border border-white/5"></div>
                    <div className="col-span-2 h-48 bg-white/5 rounded-2xl border border-white/5"></div>
                    <div className="col-span-1 h-48 bg-white/5 rounded-2xl border border-white/5"></div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to="/editor" className="px-10 py-4 bg-primary-500 text-white rounded-2xl font-black shadow-2xl flex items-center gap-3">
                  Entrar al Editor Directo <ArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- Demo Video Section --- */}
        <section id="demo" className="py-24 px-6 md:px-0 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              {/* Glowing Background for Demo */}
              <div className="absolute -inset-4 bg-primary-500/20 blur-[60px] rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-3xl overflow-hidden shadow-2xl p-2 md:p-4">
                 <div className="relative rounded-[32px] overflow-hidden aspect-video border border-white/5 bg-[#0a0b14]">
                    <img 
                      src="/C:/Users/pc/.gemini/antigravity/brain/c967f21e-5fa2-4ddd-86de-4f3358d16910/gridly_editor_demo_cinematic_1774487476307.png" 
                      alt="Gridly Editor Demo Cinematic" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all duration-500">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.4)] backdrop-blur-md"
                      >
                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-2"></div>
                      </motion.div>
                    </div>

                    {/* Meta info overlays */}
                    <div className="absolute bottom-10 left-10 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl max-w-xs transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                       <p className="text-[10px] font-black uppercase text-primary-400 mb-2">Editor en tiempo real</p>
                       <p className="text-white text-sm font-bold leading-tight">Configura cada detalle visual sin escribir una sola línea de código.</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Features Grid --- */}
        <section id="features" className="py-32 px-6 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">Lleva tus reportes al siguiente nivel.</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Gridly te da las herramientas que Microsoft "olvidó" incluir en el diseño nativo de Power BI.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredFeature(f.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all flex flex-col gap-6 group"
                >
                  <div
                    className="p-4 rounded-2xl w-fit transition-all shadow-lg"
                    style={{
                      backgroundColor: `${f.color}15`,
                      color: f.color,
                      boxShadow: hoveredFeature === f.id ? `0 10px 40px -10px ${f.color}40` : 'none'
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* --- Nosotros Section --- */}
        <section id="nosotros" className="py-32 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-flex gap-2 text-primary-400 font-black uppercase text-[10px] tracking-[0.2em] mb-4">
                <span className="w-4 h-[2px] bg-primary-500 mt-1.5"></span> Nuestra Esencia
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Por qué creamos <span className="text-primary-500">Gridly.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Nacimos de la frustración de ver reportes valiosos atrapados en diseños monótonos. Somos un equipo de analistas y diseñadores que creen que <span className="text-white">los datos no solo deben informar, deben inspirar.</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white font-bold"><Shield className="text-primary-500" size={20} /> Seguridad</div>
                  <p className="text-slate-500 text-sm leading-relaxed">Tus datos nunca salen de tu equipo. Solo procesamos estilos visuales.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white font-bold"><Target className="text-primary-500" size={20} /> Precisión</div>
                  <p className="text-slate-500 text-sm leading-relaxed">JSONs validados dinámicamente para ser 100% compatibles con Power BI Desktop.</p>
                </div>
              </div>
              <button className="flex items-center gap-3 text-primary-400 font-bold hover:text-white transition-colors group text-sm">
                Conoce más sobre nuestra visión <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 p-4 rounded-[40px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden shadow-2xl backdrop-blur-3xl aspect-square flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary-500 blur-3xl opacity-20 animate-pulse"></div>
                    <LayoutGrid size={120} className="text-white relative z-10" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-black tracking-tighter text-white">500+</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Temas Exportados Cada Día</p>
                  </div>
                </div>
              </div>
              {/* Decorative floating boxes */}
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 w-32 h-32 bg-primary-600/10 rounded-3xl border border-white/5 blur-sm"></motion.div>
              <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-600/10 rounded-full border border-white/5 blur-sm"></motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-24 px-6 md:px-0">
          <div className="max-w-4xl mx-auto rounded-[40px] bg-gradient-to-br from-primary-600 to-indigo-600 p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/20 blur-[100px] -z-0 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white">¿Listo para rediseñar tus datos?</h2>
              <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto font-medium">Únete a cientos de analistas de BI que ya utilizan Gridly para destacar en sus presentaciones.</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to="/editor" className="px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-slate-200 transition-all shadow-2xl tracking-tight">Comenzar Gratis</Link>
                <button className="px-12 py-5 bg-black/20 text-white font-bold rounded-2xl hover:bg-black/30 transition-all backdrop-blur-md">Hablar con un Experto</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black/20 backdrop-blur-xl relative z-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary-500/10 border border-primary-500/20"><Layout className="text-primary-400" size={24} /></div>
              <span className="text-2xl font-black tracking-tighter uppercase">Gridly BI</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">Elevando el estándar visual de las empresas impulsadas por datos. Diseñado para profesionales, por profesionales.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Producto</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><Link to="/editor" className="hover:text-primary-400 transition-colors">Editor de Temas</Link></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Plantillas BI</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Comunidad</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Recursos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Seguridad</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] uppercase font-black tracking-widest text-slate-600">© 2026 Gridly BI Tech Group. Diseñado con Antigravity AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
