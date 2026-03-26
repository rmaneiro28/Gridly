import React, { useState, useEffect, useRef } from 'react';
import { 
  Layout, 
  Settings, 
  Palette, 
  Download, 
  Monitor, 
  Box, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Copy, 
  Moon, 
  Sun,
  LayoutGrid,
  Columns,
  Rows,
  Share2,
  Trash2,
  Image as ImageIcon,
  ChevronRight,
  Maximize2,
  Plus,
  FileText,
  Activity,
  Layers,
  Database,
  Globe,
  PieChart,
  ShoppingCart,
  Search,
  CheckCircle2,
  AlertCircle,
  Archive,
  Edit2,
  Check,
  X,
  UploadCloud,
  Briefcase,
  Calendar,
  Camera,
  Cloud,
  CreditCard,
  Gift,
  Heart,
  Home,
  Mail,
  Map,
  MessageSquare,
  Music,
  Phone,
  PlaySquare,
  Printer,
  Shield,
  Star,
  Tag,
  Truck,
  Video,
  Zap,
  Award,
  BookOpen,
  Coffee,
  Compass,
  Cpu,
  Eye,
  Flag,
  Flame,
  Key,
  Lock,
  MessageCircle,
  Mic,
  Package,
  Paperclip,
  Percent,
  RefreshCw,
  Rocket,
  Save,
  Send,
  Target,
  Terminal,
  Wrench,
  Wifi,
  BarChart,
  LineChart,
  AreaChart,
  ScatterChart,
  GanttChartSquare,
  Network,
  Wallet,
  Building2,
  Clock,
  Compass as CompassIcon,
  HelpCircle,
  Info,
  Bell,
  Mail as MailIcon,
  User,
  LogOut,
  ChevronLeft,
  ChevronDown,
  MoreVertical,
  Filter,
  FileJson
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as htmlToImage from 'html-to-image';

// Massive Icon Library for BI
const ICON_MAP = {
  Dashboard: LayoutGrid,
  General: BarChart3,
  Stats: BarChart,
  Ventas: TrendingUp,
  Crecimiento: LineChart,
  Area: AreaChart,
  Distribucion: PieChart,
  Clientes: Users,
  Perfil: User,
  Finanzas: Wallet,
  Negocios: Briefcase,
  Sede: Building2,
  Ubicacion: Map,
  Calendario: Calendar,
  Horario: Clock,
  Mensajes: MailIcon,
  Alertas: Bell,
  Notificaciones: Info,
  Logistica: Truck,
  Inventario: Package,
  Compras: ShoppingCart,
  Seguridad: Shield,
  Privacidad: Lock,
  Llave: Key,
  Ajustes: Settings,
  Config: Terminal,
  Herramientas: Wrench,
  Red: Network,
  Internacional: Globe,
  Busqueda: Search,
  Archivos: Archive,
  Documentos: FileText,
  Capas: Layers,
  BaseDatos: Database,
  Nube: Cloud,
  Zap: Zap,
  Favoritos: Star,
  Premios: Award,
  Educacion: BookOpen,
  Cafe: Coffee,
  Brujula: CompassIcon,
  Energia: Flame,
  Cpu: Cpu,
  Ojo: Eye,
  Bandera: Flag,
  Chat: MessageSquare,
  Comentarios: MessageCircle,
  Audio: Mic,
  Musica: Music,
  Video: Video,
  Impresion: Printer,
  Etiquetas: Tag,
  Regalo: Gift,
  Corazon: Heart,
  Inicio: Home,
  Wifi: Wifi,
  Guardar: Save,
  Enviar: Send,
  Objetivo: Target,
  Refresh: RefreshCw,
  Rocket: Rocket,
  Done: CheckCircle2,
  Alert: AlertCircle,
  Help: HelpCircle,
  More: MoreVertical,
  Filter: Filter
};

const PALETTES = [
  { name: 'Power BI Default', colors: ['#0d1424', '#4f8eff', '#ffffff', '#6b7394', '#0a0b14', '#ffffff'] },
  { name: 'Emerald Night', colors: ['#061e1b', '#10b981', '#ffffff', '#a7f3d0', '#0a1a19', '#d1fae5'] },
  { name: 'Aurora Solaris', colors: ['#1e1b4b', '#f59e0b', '#ffffff', '#fde68a', '#1e1c2e', '#fef3c7'] },
  { name: 'Oceanic Blue', colors: ['#172554', '#3b82f6', '#ffffff', '#bfdbfe', '#0f172a', '#eff6ff'] },
  { name: 'Royal Velvet', colors: ['#2e1065', '#d946ef', '#ffffff', '#f5d0fe', '#1e1b4b', '#fdf4ff'] },
];

const LAYOUT_MODELS = [
  { id: 'standard', name: 'Estándar', icon: LayoutGrid },
  { id: 'executive', name: 'Ejecutivo', icon: Monitor },
  { id: 'analytical', name: 'Analítico', icon: BarChart3 },
  { id: 'modern', name: 'Modern Cluster', icon: Box },
  { id: 'custom', name: 'Diseño Libre', icon: Columns },
];

function Editor() {
  const [reportName, setReportName] = useState('Mi Dashboard de Ventas');
  const [menuType, setMenuType] = useState('Fixed'); 
  const [titleSize, setTitleSize] = useState(16);
  const [subtitle, setSubtitle] = useState('Power BI Analysis v1.0');
  const [logoUrl, setLogoUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [isExportingImage, setIsExportingImage] = useState(false);
  const [themeMode, setThemeMode] = useState('dark');
  
  const [pages, setPages] = useState([
    { id: 1, label: 'Visión General', icon: 'General' },
    { id: 2, label: 'Canal de Ventas', icon: 'Ventas' },
    { id: 3, label: 'Relación Clientes', icon: 'Clientes' }
  ]);
  const [activePageId, setActivePageId] = useState(1);
  const [pageInput, setPageInput] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('General');
  const [editingId, setEditingId] = useState(null);

  const [canvasWidth, setCanvasWidth] = useState(1280);
  const [canvasHeight, setCanvasHeight] = useState(720);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuTransitioning, setIsMobileMenuTransitioning] = useState(false);
  const [previewScale, setPreviewScale] = useState(0.6);
  const previewContainerRef = useRef(null);
  const dashboardRef = useRef(null);
  
  const [showFilters, setShowFilters] = useState(true);
  const [filterPosition, setFilterPosition] = useState('top'); 
  const [colors, setColors] = useState({
    sidebar: '#0d1424', accent: '#4f8eff', textActive: '#ffffff',
    textInactive: '#6b7394', canvas: '#0a0b14', background: '#ffffff',
  });

  const [filters, setFilters] = useState([
    { id: 1, label: 'Fecha', icon: 'Calendario' },
    { id: 2, label: 'Categoría', icon: 'Filter' },
    { id: 3, label: 'Región', icon: 'Ubicacion' },
    { id: 4, label: 'Vendedor', icon: 'Clientes' }
  ]);

  const [customCards, setCustomCards] = useState([
    { id: 1, type: 'kpi', title: 'Ingresos Totales', value: '$42.1k', change: '+12%', color: '#4f8eff', icon: 'Ventas', cols: 2, rows: 1 },
    { id: 2, type: 'kpi', title: 'Conversión', value: '3.2%', change: '-1%', color: '#f87171', icon: 'Stats', cols: 2, rows: 1 },
    { id: 3, type: 'chart', title: 'Tendencia', cols: 4, rows: 2 },
    { id: 4, type: 'donut', title: 'Ventas', cols: 2, rows: 2 },
    { id: 5, type: 'table', title: 'Ventas por Región', cols: 6, rows: 2 }
  ]);

  const [activeLayout, setActiveLayout] = useState('standard');
  const [activeTab, setActiveTab ] = useState('settings');

  // Aspect Ratio & Layout Detection
  const aspectRatio = canvasWidth / canvasHeight;
  const isVertical = canvasHeight > canvasWidth;
  const isSquareish = aspectRatio >= 0.9 && aspectRatio <= 1.4; // 1:1, 4:3, etc.
  
  // Dynamic Grid Settings based on format
  const getGridCols = () => {
    if (isVertical) return 'grid-cols-2';
    if (isSquareish) return 'grid-cols-3';
    return activeLayout === 'custom' ? 'grid-cols-6' : 'grid-cols-4';
  };

  // Logo Drag & Drop handlers
  const onDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const onDragLeave = () => { setIsDragging(false); };
  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  const applyPalette = (p) => {
    setColors({ sidebar: p.colors[0], accent: p.colors[1], textActive: p.colors[2], textInactive: p.colors[3], canvas: p.colors[4], background: p.colors[5] });
  };

  const togglePageAction = () => {
    if (!pageInput.trim()) return;
    if (editingId) {
      setPages(pages.map(p => p.id === editingId ? { ...p, label: pageInput, icon: selectedIcon } : p));
      setEditingId(null);
    } else {
      setPages([...pages, { id: Date.now(), label: pageInput, icon: selectedIcon }]);
    }
    setPageInput('');
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setPageInput(p.label);
    setSelectedIcon(p.icon);
    setActiveTab('pages');
    if (window.innerWidth < 768) setIsSidebarOpen(true);
  };

  const moveCard = (id, direction) => {
    setCustomCards(prevCards => {
      const index = prevCards.findIndex(card => card.id === id);
      if (index === -1) return prevCards;

      const newIndex = index + direction;
      if (newIndex < 0 || newIndex >= prevCards.length) return prevCards;

      const newCards = [...prevCards];
      const [movedCard] = newCards.splice(index, 1);
      newCards.splice(newIndex, 0, movedCard);
      return newCards;
    });
  };

  const updateCardSize = (id, dimension, change) => {
    setCustomCards(prevCards => prevCards.map(card => {
      if (card.id === id) {
        let newValue = card[dimension] + change;
        // Define min/max for cols and rows
        if (dimension === 'cols') {
          newValue = Math.max(1, Math.min(6, newValue)); // Max 6 columns
        } else if (dimension === 'rows') {
          newValue = Math.max(1, Math.min(4, newValue)); // Max 4 rows
        }
        return { ...card, [dimension]: newValue };
      }
      return card;
    }));
  };

  const handleFullscreen = () => {
    if (dashboardRef.current) {
      if (!document.fullscreenElement) {
        dashboardRef.current.requestFullscreen().catch(err => {
          alert(`Error al intentar activar pantalla completa: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const updateScale = () => {
    if (!previewContainerRef.current) return;
    const padding = 120; // Margin around the preview
    const availableWidth = previewContainerRef.current.clientWidth - padding;
    const availableHeight = previewContainerRef.current.clientHeight - padding;
    
    const scaleX = availableWidth / canvasWidth;
    const scaleY = availableHeight / canvasHeight;
    const newScale = Math.min(scaleX, scaleY);
    
    setPreviewScale(newScale);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
      updateScale();
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
     updateScale();
  }, [canvasWidth, canvasHeight, isSidebarOpen]);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-[#0a0b14] text-white selection:bg-primary-500/20 overflow-hidden font-sans">
      <Helmet>
        <title>Editor Dinámico | Personaliza tu Tema de Power BI con Gridly BI</title>
        <meta name="description" content="Editor profesional de Gridly BI: exporta temas JSON y fondos PNG premium para Power BI Desktop." />
        <link rel="canonical" href="https://gridlybi.vercel.app/editor" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Editor de Temas Gridly BI | Diseño Profesional para Power BI" />
        <meta property="og:description" content="Configura layouts, colores y exporta temas JSON profesionales en segundos." />
        <meta property="og:image" content="https://gridlybi.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Logotipo oficial de Gridly BI - Intelligence, Design, Efficiency" />
        <meta property="og:url" content="https://gridlybi.vercel.app/editor" />
        <meta property="og:site_name" content="Gridly BI" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter Tags (Twin tags) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Editor de Temas Gridly BI | Potencia tus Visualizaciones" />
        <meta name="twitter:image" content="https://gridlybi.vercel.app/og-image.png" />
        <meta name="twitter:site" content="@GridlyBI" />

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/Logo.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Helmet>
      
      {/* Mobile Header */}
      <header className="md:hidden h-16 flex items-center justify-between px-6 bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20"><Layout className="text-primary-400" size={18} /></div>
          <h2 className="text-base font-bold tracking-tight">Gridly BI</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setShowExportModal(true)} className="p-2 bg-primary-500/10 text-primary-400 rounded-lg"><Download size={18} /></button>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`p-2 rounded-lg transition-colors ${isSidebarOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-slate-400'}`}>
             {isSidebarOpen ? <X size={18}/> : <Settings size={18}/>}
          </button>
        </div>
      </header>

      {/* Configuration Sidebar */}
      <aside className={`fixed md:relative top-0 left-0 w-full md:w-80 h-[calc(100%-64px)] md:h-full flex flex-col border-r border-white/5 bg-black/40 md:bg-black/20 backdrop-blur-3xl md:backdrop-blur-xl z-40 transition-all duration-500 transform ${isSidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full md:translate-x-0 opacity-0 md:opacity-100 hidden md:flex'}`}>
        <header className="hidden md:block p-6 border-b border-white/5">
          <div className="flex items-center gap-3 mb-1">
            <img src="/Logo.png" className="w-8 h-8 object-contain rounded-lg" alt="Gridly Logo" />
            <h2 className="text-lg font-bold tracking-tight">Gridly BI</h2>
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Dashboard Theme Engine</p>
        </header>

        {/* Tab Controls */}
        <div className="flex bg-white/5 border-b border-white/5 p-1 gap-1 md:m-4 m-6 rounded-2xl">
          {[{ id: 'settings', icon: Settings, label: 'Ajustes' }, { id: 'pages', icon: Layers, label: 'Páginas' }, { id: 'layout', icon: LayoutGrid, label: 'Layout' }, { id: 'palette', icon: Palette, label: 'Tema' }].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-xl transition-all duration-300 ${activeTab === tab.id ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/20' : 'text-slate-500 hover:text-white'}`}>
              <tab.icon size={18} />
              <span className="text-[10px] font-bold uppercase md:hidden">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-2 custom-scrollbar">
          <AnimatePresence mode="wait">
            
            {/* Tab: General Settings & Logo */}
            {activeTab === 'settings' && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">Tipo de Menú</label>
                  <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-xl">
                    <button className={`py-2 text-xs rounded-lg transition-all ${menuType === 'Fixed' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500'}`} onClick={() => setMenuType('Fixed')}>Fijo</button>
                    <button className={`py-2 text-xs rounded-lg transition-all ${menuType === 'Expandable' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500'}`} onClick={() => setMenuType('Expandable')}>Expandible</button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">Nombre del Proyecto</label>
                    <input type="text" value={reportName} onChange={(e) => setReportName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-primary-500 focus:outline-none" />
                  </div>
                  
                  {/* Logo Upload Area */}
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400 block">Logo del Proyecto</label>
                    <div 
                      onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}
                      className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all ${isDragging ? 'border-primary-500 bg-primary-500/20' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                    >
                      {logoUrl ? (
                         <div className="relative group">
                           <img src={logoUrl} alt="Logo" className="h-16 w-16 object-contain" />
                           <button onClick={() => setLogoUrl('')} className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full shadow-lg group-hover:scale-100 scale-0 transition-transform"><Trash2 size={12} /></button>
                         </div>
                      ) : (
                        <>
                          <div className="p-3 rounded-full bg-white/5"><UploadCloud size={24} className="text-primary-400" /></div>
                          <div className="text-center">
                            <p className="text-[10px] font-bold text-white mb-1">Arrastra tu logo aquí</p>
                            <p className="text-[9px] text-slate-500">O usa el link debajo</p>
                          </div>
                        </>
                      )}
                    </div>
                    <input type="text" placeholder="URL del logo (https://...)" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-[10px] mt-2 focus:border-primary-500 focus:outline-none" />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Dimensiones del Lienzo</label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400">Ancho (px)</label>
                      <input 
                        type="number" 
                        value={canvasWidth} 
                        onChange={(e) => setCanvasWidth(Number(e.target.value))} 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-primary-500 focus:outline-none" 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-slate-400">Alto (px)</label>
                      <input 
                        type="number" 
                        value={canvasHeight} 
                        onChange={(e) => setCanvasHeight(Number(e.target.value))} 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:border-primary-500 focus:outline-none" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
                    {[
                      { label: '16:9', w: 1280, h: 720 },
                      { label: '9:16', w: 720, h: 1280 },
                      { label: '4:3', w: 1024, h: 768 },
                      { label: 'FHD H', w: 1920, h: 1080 },
                      { label: 'FHD V', w: 1080, h: 1920 },
                    ].map(preset => (
                      <button 
                        key={preset.label}
                        onClick={() => { setCanvasWidth(preset.w); setCanvasHeight(preset.h); }}
                        className={`px-3 py-1.5 rounded-lg border text-[9px] whitespace-nowrap transition-all ${
                          canvasWidth === preset.w && canvasHeight === preset.h 
                            ? 'bg-primary-500/20 border-primary-500 text-primary-400' 
                            : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Estilos Visuales</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[{ label: 'Sidebar', key: 'sidebar' }, { label: 'Acento', key: 'accent' }, { label: 'Texto', key: 'textActive' }, { label: 'Canvas', key: 'canvas' }].map(cp => (
                      <div key={cp.key} className="p-2 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all cursor-pointer"><p className="text-[9px] text-slate-500 uppercase mb-1">{cp.label}</p>
                        <div className="flex items-center gap-2"><input type="color" value={colors[cp.key]} onChange={(e) => setColors(prev => ({ ...prev, [cp.key]: e.target.value }))} className="w-5 h-5 bg-transparent border-none cursor-pointer" /><span className="text-[9px] font-mono text-slate-300 uppercase">{colors[cp.key]}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab: Pages & Icons */}
            {activeTab === 'pages' && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                <div className="space-y-4">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">{editingId ? 'Editando Página' : 'Nueva Página'}</label>
                  <div className="space-y-4 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-2xl">
                    <div className="flex gap-2">
                       <input type="text" placeholder="Nombre..." value={pageInput} onChange={(e) => setPageInput(e.target.value)} className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none" />
                       {editingId && <button onClick={() => { setEditingId(null); setPageInput(''); }} className="p-2.5 bg-white/5 rounded-xl text-slate-400 hover:text-white"><X size={18}/></button>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[9px] text-slate-500 block px-1 uppercase tracking-wider font-bold">Biblioteca de Iconos (+70)</label>
                      <div className="grid grid-cols-6 gap-2 h-40 overflow-y-auto custom-scrollbar pr-2 p-1 bg-black/20 rounded-xl border border-white/5">
                        {Object.keys(ICON_MAP).map(k => {
                          const IconComp = ICON_MAP[k];
                          return (
                            <button key={k} onClick={() => setSelectedIcon(k)} className={`p-2 rounded-lg flex items-center justify-center transition-all ${selectedIcon === k ? 'bg-primary-500 text-white shadow-lg' : 'hover:bg-white/5 text-slate-500 hover:text-slate-300'}`} title={k}><IconComp size={16} /></button>
                          );
                        })}
                      </div>
                    </div>

                    <button onClick={togglePageAction} className={`w-full py-3.5 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all ${editingId ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/20'}`}>
                      {editingId ? <Check size={16} /> : <Plus size={16} />}
                      {editingId ? 'Guardar Cambios' : 'Añadir Página'}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Páginas Configuradas</label>
                  <div className="space-y-2">
                    {pages.map(p => {
                      const IconComp = ICON_MAP[p.icon] || BarChart3;
                      return (
                        <div key={p.id} className={`group flex items-center gap-3 p-3.5 rounded-xl border transition-all ${p.id === editingId ? 'border-primary-500 bg-primary-500/10' : 'bg-white/5 border-white/5 hover:bg-white/[0.07]'}`}>
                          <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400"><IconComp size={16} /></div>
                          <span className="flex-1 text-sm font-medium">{p.label}</span>
                          <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => startEdit(p)} className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-primary-400 hover:bg-primary-500/10"><Edit2 size={13}/></button>
                            <button onClick={() => setPages(pages.filter(x => x.id !== p.id))} className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10"><Trash2 size={13}/></button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab: Layout & Inteligence */}
            {activeTab === 'layout' && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                 <div>
                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">Configuración de Filtros (Slicers)</label>
                   <div className="space-y-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-300">Activar Filtros</span>
                        <button onClick={() => setShowFilters(!showFilters)} className={`w-10 h-5 rounded-full transition-colors relative ${showFilters ? 'bg-primary-500' : 'bg-slate-700'}`}>
                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${showFilters ? 'left-6' : 'left-1'}`}></div>
                        </button>
                      </div>
                      
                      {showFilters && (
                        <>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                             <button onClick={() => setFilterPosition('top')} className={`py-2 text-[10px] rounded-lg border transition-all ${filterPosition === 'top' ? 'bg-primary-500/20 border-primary-500 text-primary-400' : 'bg-white/5 border-white/10 text-slate-500'}`}>Superior (Slicers)</button>
                             <button onClick={() => setFilterPosition('right')} className={`py-2 text-[10px] rounded-lg border transition-all ${filterPosition === 'right' ? 'bg-primary-500/20 border-primary-500 text-primary-400' : 'bg-white/5 border-white/10 text-slate-500'}`}>Lateral Derecha</button>
                          </div>

                          <div className="pt-4 border-t border-white/5 space-y-3">
                            <div className="flex justify-between items-center px-1">
                              <label className="text-[10px] text-slate-500 uppercase font-black">Filtros Activos ({filters.length})</label>
                              <button onClick={() => setFilters([...filters, { id: Date.now(), label: 'Nuevo Filtro', icon: 'Filter' }])} className="text-primary-400 hover:text-white transition-colors"><Plus size={14} /></button>
                            </div>
                            <div className="space-y-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                              {filters.map(f => {
                                const IconComp = ICON_MAP[f.icon] || Filter;
                                return (
                                  <div key={f.id} className="flex gap-2 items-center group">
                                    <div className="relative group/icon flex-shrink-0">
                                      <div className="p-2 bg-white/5 rounded-lg text-slate-500 group-hover:bg-white/10 cursor-pointer">
                                        <IconComp size={14} />
                                      </div>
                                      <div className="absolute left-0 top-full mt-2 hidden group-hover/icon:grid grid-cols-4 gap-1 p-2 bg-slate-900 border border-white/10 rounded-xl z-50 w-32 shadow-2xl">
                                        {['Calendario', 'Filter', 'Ubicacion', 'Clientes', 'Ventas', 'Stats', 'Busqueda', 'Archivos'].map(k => {
                                          const PickIcon = ICON_MAP[k] || Filter;
                                          return <button key={k} onClick={() => setFilters(filters.map(x => x.id === f.id ? { ...x, icon: k } : x))} className="p-1 hover:bg-white/10 rounded text-slate-400 hover:text-white"><PickIcon size={12} /></button>
                                        })}
                                      </div>
                                    </div>
                                    <input 
                                      type="text" 
                                      value={f.label} 
                                      onChange={(e) => setFilters(filters.map(x => x.id === f.id ? { ...x, label: e.target.value } : x))}
                                      className="flex-1 bg-transparent border-b border-white/5 py-1 text-xs focus:border-primary-500 focus:outline-none"
                                    />
                                    <button onClick={() => setFilters(filters.filter(x => x.id !== f.id))} className="text-slate-600 hover:text-red-400 transition-colors pt-1"><X size={12} /></button>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      )}
                   </div>
                 </div>

                 <div className="space-y-4">
                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Distribución de Pantalla</label>
                   <div className="grid grid-cols-1 gap-2">
                     {LAYOUT_MODELS.map(l => (
                       <button key={l.id} onClick={() => setActiveLayout(l.id)} className={`w-full p-4 rounded-xl border flex items-center gap-4 transition-all ${activeLayout === l.id ? 'bg-primary-500/10 border-primary-500' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
                         <div className={`p-3 rounded-lg ${activeLayout === l.id ? 'bg-primary-500 text-white shadow-xl shadow-primary-500/20' : 'bg-white/5 text-slate-500'}`}><l.icon size={20} /></div>
                         <div className="text-left">
                           <p className="text-sm font-bold">{l.name}</p>
                           <p className="text-[10px] text-slate-500">{l.id === 'custom' ? 'Añade y organiza componentes' : 'Plantilla inteligente'}</p>
                         </div>
                       </button>
                     ))}
                   </div>
                   
                   {activeLayout === 'custom' && (
                     <div className="p-4 bg-primary-500/5 border border-primary-500/20 rounded-2xl animate-in fade-in duration-500">
                        <div className="flex justify-between items-center mb-4">
                           <label className="text-[10px] text-primary-400 uppercase font-black">Componentes Personalizados</label>
                                            <button 
                              onClick={() => setCustomCards([...customCards, { id: Date.now(), type: 'kpi', title: 'Nueva Métrica', value: '0', change: '0%', color: colors.accent, icon: 'Stats', cols: 2, rows: 1 }])}
                              className="text-xs bg-primary-500 text-white px-3 py-1 rounded-lg font-bold"
                            >+ Añadir</button>
                         </div>
                         <div className="space-y-3">
                            {customCards.map(c => (
                              <div key={c.id} className="flex flex-col p-4 bg-black/40 rounded-2xl border border-white/5 gap-3 shadow-lg">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                     <div className="flex flex-col gap-0.5">
                                        <button onClick={() => moveCard(c.id, -1)} className="text-slate-600 hover:text-white transition-colors"><ChevronUp size={14} /></button>
                                        <button onClick={() => moveCard(c.id, 1)} className="text-slate-600 hover:text-white transition-colors"><ChevronDown size={14} /></button>
                                     </div>
                                     <span className="text-[10px] font-black text-slate-300 uppercase truncate max-w-[120px]">{c.title || 'Componente'}</span>
                                  </div>
                                  <button onClick={() => setCustomCards(customCards.filter(x => x.id !== c.id))} className="text-slate-600 hover:text-red-400 transition-colors"><Trash2 size={12} /></button>
                                </div>
                                <div className="flex items-center gap-4">
                                   <div className="flex-1 space-y-1">
                                      <p className="text-[8px] text-slate-500 uppercase font-black px-1">Columnas ({c.cols})</p>
                                      <div className="flex gap-1">
                                         <button onClick={() => updateCardSize(c.id, 'cols', -1)} className="flex-1 h-6 bg-white/5 hover:bg-white/10 rounded flex items-center justify-center text-xs">-</button>
                                         <button onClick={() => updateCardSize(c.id, 'cols', 1)} className="flex-1 h-6 bg-white/5 hover:bg-white/10 rounded flex items-center justify-center text-xs">+</button>
                                      </div>
                                   </div>
                                   <div className="flex-1 space-y-1">
                                      <p className="text-[8px] text-slate-500 uppercase font-black px-1">Filas ({c.rows})</p>
                                      <div className="flex gap-1">
                                         <button onClick={() => updateCardSize(c.id, 'rows', -1)} className="flex-1 h-6 bg-white/5 hover:bg-white/10 rounded flex items-center justify-center text-xs">-</button>
                                         <button onClick={() => updateCardSize(c.id, 'rows', 1)} className="flex-1 h-6 bg-white/5 hover:bg-white/10 rounded flex items-center justify-center text-xs">+</button>
                                      </div>
                                   </div>
                                </div>
                                <div className="flex gap-1 overflow-x-auto no-scrollbar pb-1">
                                 {['kpi', 'chart', 'donut', 'table'].map(type => (
                                   <button 
                                     key={type} 
                                     onClick={() => setCustomCards(customCards.map(x => x.id === c.id ? { ...x, type } : x))}
                                     className={`px-2 py-1 rounded text-[8px] font-bold uppercase transition-all ${c.type === type ? 'bg-primary-500 text-white' : 'bg-white/5 text-slate-500'}`}
                                   >
                                     {type}
                                   </button>
                                 ))}
                               </div>
                             </div>
                           ))}
                        </div>
                     </div>
                   )}
                 </div>
              </motion.div>
            )}

            {activeTab === 'palette' && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                 <div>
                   <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-4">Aparencia General</label>
                   <div className="flex bg-white/5 p-1 rounded-2xl gap-1">
                      <button onClick={() => setThemeMode('dark')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${themeMode === 'dark' ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'text-slate-400'}`}>
                        <Moon size={16} /> <span className="text-[10px] font-bold uppercase">Oscuro</span>
                      </button>
                      <button onClick={() => setThemeMode('light')} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${themeMode === 'light' ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'text-slate-400'}`}>
                        <Sun size={16} /> <span className="text-[10px] font-bold uppercase">Claro</span>
                      </button>
                   </div>
                 </div>

                 <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Temas Dinámicos</label>
                 <div className="grid grid-cols-1 gap-3">
                   {PALETTES.map(p => (
                     <div key={p.name} onClick={() => applyPalette(p)} className="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-primary-500 transition-all cursor-pointer">
                       <div className="flex h-12">{p.colors.map((c, i) => <div key={i} className="flex-1" style={{ backgroundColor: c }}></div>)}</div>
                       <div className="p-3 flex justify-between items-center bg-black/40"><span className="text-xs font-bold text-slate-300">{p.name}</span><button className="text-[10px] bg-primary-500 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-lg shadow-primary-500/40">Aplicar</button></div>
                     </div>
                   ))}
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <footer className="p-6 border-t border-white/5 hidden md:block">
          <button 
            onClick={() => setShowExportModal(true)}
            className="w-full py-4 bg-primary-500 hover:bg-primary-600 active:scale-95 transition-all rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl shadow-primary-500/30 font-sans tracking-tight"
          >
            <Download size={20} /> EXPORTAR TEMA 
          </button>
        </footer>
      </aside>

      {/* Mobile Bottom Nav Overlay (Floating when sidebar closed) */}
      {!isSidebarOpen && (
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-black/60 backdrop-blur-2xl border border-white/10 p-2 rounded-3xl flex items-center justify-between z-50 shadow-2xl">
          {[{ id: 'settings', icon: Settings }, { id: 'pages', icon: Layers }, { id: 'layout', icon: LayoutGrid }, { id: 'palette', icon: Palette }].map(tab => (
            <button key={tab.id} onClick={() => { setActiveTab(tab.id); setIsSidebarOpen(true); }} className={`p-4 rounded-2xl transition-all ${activeTab === tab.id ? 'bg-primary-500 text-white' : 'text-slate-500'}`}><tab.icon size={20} /></button>
          ))}
          <div className="w-px h-8 bg-white/10 mx-2"></div>
          <button onClick={() => setShowExportModal(true)} className="p-4 bg-white/10 text-white rounded-2xl"><Download size={20} /></button>
        </nav>
      )}

      {/* Preview Area */}
      <main ref={previewContainerRef} className="flex-1 h-full flex flex-col relative bg-gradient-to-br from-[#0c1021] to-[#04060c] overflow-hidden">
        <nav className="h-16 hidden md:flex items-center justify-between px-8 border-b border-white/5 bg-black/10 backdrop-blur-md z-10">
          <div className="flex items-center gap-2"><span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Vista Previa v2.0</span></div>
          <div className="flex items-center gap-3">
             <div className="flex gap-2 mr-4"><div className="w-2 h-2 rounded-full bg-red-500/50"></div><div className="w-2 h-2 rounded-full bg-yellow-500/50"></div><div className="w-2 h-2 rounded-full bg-green-500/50"></div></div>
             <button className="bg-white/5 border border-white/10 text-white px-5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 transition-all">Centro de Recursos Gridly</button>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: themeMode === 'light' ? '#f1f5f9' : 'transparent' }}>
          <AnimatePresence>
            {showExportModal && (
              <ExportModal 
                isOpen={showExportModal} 
                themeMode={themeMode}
                colors={colors}
                activeLayout={activeLayout}
                onClose={async (type) => {
                  setShowExportModal(false);
                  if (type === 'image') {
                    setIsExportingImage(true);
                    setTimeout(async () => {
                      const element = document.getElementById('dashboard-preview-main-container');
                      if (element) {
                        try {
                          const dataUrl = await htmlToImage.toPng(element, { 
                            quality: 1, 
                            pixelRatio: 1,
                            width: canvasWidth,
                            height: canvasHeight,
                            style: { 
                              backgroundColor: themeMode === 'light' ? '#ffffff' : (colors.canvas || '#0a0b14'),
                              transform: 'scale(1)',
                              borderRadius: '0',
                              border: 'none',
                              margin: '0',
                              padding: '0',
                              overflow: 'hidden',
                              display: 'flex',
                              width: `${canvasWidth}px`,
                              height: `${canvasHeight}px`
                            }
                          });
                          const link = document.createElement('a');
                          link.download = `template_gridly_${activeLayout}.png`;
                          link.href = dataUrl;
                          link.click();
                        } catch (err) {
                          console.error('Export failed', err);
                        } finally {
                          setIsExportingImage(false);
                        }
                      }
                    }, 800);
                  }
                }} 
              />
            )}
          </AnimatePresence>

          <div 
            className="transition-transform duration-700 ease-out flex items-center justify-center pointer-events-none"
            style={{ transform: `scale(${previewScale})` }}
          >
            <div 
              id="dashboard-preview-main-container" 
              ref={dashboardRef}
              style={{ 
                width: `${canvasWidth}px`, 
                height: `${canvasHeight}px`,
                pointerEvents: 'auto'
              }}
              className={`bg-black overflow-hidden flex transition-all duration-700 ${
                isExportingImage 
                  ? 'rounded-none shadow-none border-none' 
                  : `rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-[16px] ${themeMode === 'light' ? 'border-slate-200 shadow-slate-300/30' : 'border-slate-900/50'}`
              }`}
            >
              <div className={`flex-1 flex ${isVertical ? 'flex-col' : 'flex-row'} overflow-hidden h-full`} style={{ backgroundColor: themeMode === 'light' ? '#ffffff' : colors.canvas }}>
              
              {/* Preview Sidebar / Navigation */}
              <motion.aside 
                animate={{ 
                  width: isVertical ? '100%' : (menuType === 'Fixed' ? 240 : 84),
                  height: isVertical ? (isExportingImage ? 0 : 80) : '100%'
                }} 
                style={{ 
                  backgroundColor: themeMode === 'light' ? '#f8fafc' : colors.sidebar,
                  order: isVertical ? 2 : 1
                }} 
                className={`border-r ${themeMode === 'light' ? 'border-slate-200' : 'border-white/5'} flex ${isVertical ? 'flex-row px-8 items-center justify-around' : 'flex-col py-8 px-5'} shrink-0 transition-all duration-300 overflow-hidden ${isVertical && !isExportingImage ? 'border-t shadow-[0_-10px_30px_rgba(0,0,0,0.5)]' : ''}`}
              >
                {!isVertical && (
                  <div className="flex items-center gap-4 mb-12 px-1">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      {logoUrl ? <img src={logoUrl} className="max-w-full max-h-full object-contain" /> : <div className="w-full h-full rounded-2xl bg-primary-500 flex items-center justify-center font-black text-2xl text-white shadow-lg">G</div>}
                    </div>
                    {menuType === 'Fixed' && <div className="truncate"><h4 className="font-bold text-sm tracking-tight" style={{ color: themeMode === 'light' ? '#0f172a' : colors.textActive }}>{reportName}</h4><p className="text-[10px] opacity-60" style={{ color: themeMode === 'light' ? '#64748b' : colors.textInactive }}>{subtitle}</p></div>}
                  </div>
                )}

                <div className={`flex ${isVertical ? 'flex-row w-full justify-around gap-2' : 'flex-col gap-2.5'} flex-1 overflow-y-auto no-scrollbar`}>
                  {pages.map((p) => {
                    const IconComp = ICON_MAP[p.icon] || BarChart3;
                    const isActive = activePageId === p.id;
                    return (
                      <div key={p.id} onClick={() => setActivePageId(p.id)} className={`flex items-center gap-4 p-3.5 rounded-2xl cursor-pointer transition-all ${isActive ? (themeMode === 'light' ? 'bg-primary-500/10' : 'bg-white/10') : (themeMode === 'light' ? 'hover:bg-slate-100' : 'hover:bg-white/[0.03]')}`} style={{ borderLeft: !isVertical && isActive ? `4px solid ${colors.accent}` : '4px solid transparent', backgroundColor: isActive ? (themeMode === 'light' ? colors.accent + '10' : colors.accent + '15') : 'transparent' }}>
                        <IconComp size={isVertical ? 24 : 20} style={{ color: isActive ? colors.accent : (themeMode === 'light' ? '#94a3b8' : colors.textInactive) }} />
                        {!isVertical && menuType === 'Fixed' && <span className="text-[13px] font-bold truncate" style={{ color: isActive ? (themeMode === 'light' ? '#0f172a' : colors.textActive) : (themeMode === 'light' ? '#94a3b8' : colors.textInactive) }}>{p.label}</span>}
                        {isVertical && isActive && <span className="text-[10px] font-black uppercase tracking-tighter absolute -bottom-1" style={{ color: colors.accent }}>{p.label}</span>}
                      </div>
                    );
                  })}
                </div>
                
                {!isExportingImage && !isVertical && (
                  <div className="mt-6 pt-6 border-t border-white/5 transition-opacity">
                    <div className="flex items-center gap-4 p-3.5 opacity-30"><Settings size={20} style={{ color: colors.textInactive }} />{menuType === 'Fixed' && <span className="text-[13px] font-bold" style={{ color: colors.textInactive }}>Configuración</span>}</div>
                  </div>
                )}
              </motion.aside>

              {/* Preview Canvas */}
              <div className="flex-1 p-8 flex flex-col overflow-hidden" style={{ order: isVertical ? 1 : 2 }}>
                <header className={`mb-6 flex justify-between items-end shrink-0 ${isVertical ? 'flex-col items-start gap-4' : ''}`}>
                  <div className={`flex justify-between items-center w-full ${isVertical ? 'mb-4' : ''}`}>
                    <div>
                      <h1 className={`${isVertical ? 'text-3xl' : 'text-2xl'} font-black tracking-tighter`} style={{ color: themeMode === 'light' ? '#0f172a' : colors.textActive }}>{pages.find(p => p.id === activePageId)?.label}</h1>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-1" style={{ color: themeMode === 'light' ? '#64748b' : colors.textInactive }}>Análisis de Rendimiento Operativo</p>
                    </div>
                    {isVertical && (
                      <div className="w-12 h-12 flex items-center justify-center shrink-0">
                        {logoUrl ? <img src={logoUrl} className="max-w-full max-h-full object-contain" /> : <div className="w-full h-full rounded-2xl bg-primary-500 flex items-center justify-center font-black text-2xl text-white shadow-lg">G</div>}
                      </div>
                    )}                    <div className={`flex gap-3 transition-opacity duration-300 ${isExportingImage ? 'opacity-0 invisible' : 'opacity-100'} ${isVertical ? 'w-full' : ''}`}>
                      <button 
                        onClick={handleFullscreen}
                        className={`bg-white/5 border ${themeMode === 'light' ? 'border-slate-200 bg-slate-100 text-slate-800' : 'border-white/10'} px-4 py-2 rounded-xl text-[10px] font-bold flex items-center gap-2 hover:bg-white/10 transition-colors flex-1 justify-center`}
                      >
                        <Maximize2 size={14} /> PANTALLA COMPLETA
                      </button>
                      <button 
                        onClick={() => setShowExportModal(true)}
                        className={`bg-white/5 border ${themeMode === 'light' ? 'border-primary-500 bg-primary-500 text-white' : 'border-primary-500/50 bg-primary-500/20 text-primary-400'} px-4 py-2 rounded-xl text-[10px] font-bold flex items-center gap-2 hover:bg-primary-500 hover:text-white transition-all flex-1 justify-center`}
                      >
                        <Download size={14} /> EXPORTAR
                      </button>
                    </div>

                  </div>
                </header>

                <div className="flex-1 flex gap-4 overflow-hidden">
                  <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                    {/* Horizontal Filter Bar */}
                    {showFilters && filterPosition === 'top' && (
                      <div className="flex gap-4 shrink-0 transition-all duration-500 overflow-x-auto no-scrollbar pb-2">
                        {filters.map((f, i) => {
                           const IconComp = ICON_MAP[f.icon] || Filter;
                           return (
                             <div key={f.id} className={`flex-1 min-w-[140px] px-5 py-3 rounded-2xl border flex flex-col gap-1 transition-all group relative ${themeMode === 'light' ? 'bg-white border-slate-100 shadow-sm' : 'bg-white/5 border-white/5'}`}>
                                <div className="flex items-center justify-between pointer-events-none">
                                  <div className="flex items-center gap-2 -mt-1.5">
                                    <IconComp size={10} className="text-primary-500" />
                                    <span className="text-[11px] font-black opacity-40 uppercase tracking-tighter" style={{ color: colors.textInactive }}>{f.label}</span>
                                  </div>
                                  <ChevronDown size={10} className="opacity-20" />
                                </div>
                                <div className={`h-6 mt-1 rounded-lg ${themeMode === 'light' ? 'bg-slate-50' : 'bg-white/5'} flex items-center px-2`}>
                                   <span className="text-[10px] font-bold opacity-30">Todo</span>
                                </div>
                             </div>
                           )
                        })}
                      </div>
                    )}

                      <div 
                        id="dashboard-preview-main"
                        style={{ 
                          backgroundColor: themeMode === 'light' ? '#f8fafc' : (colors.canvas || '#0a0b14'),
                          gridTemplateRows: activeLayout === 'standard' ? '0.8fr 1fr 1fr' : 
                                           activeLayout === 'executive' ? '0.8fr 1.2fr' :
                                           activeLayout === 'analytical' ? '0.8fr 1fr 1fr 1fr' :
                                           'repeat(6, 1fr)'
                        }}
                        className={`flex-1 grid gap-4 transition-all duration-700 p-6 rounded-[20px] border ${themeMode === 'light' ? 'border-slate-100' : 'border-white/5'} ${getGridCols()}`}
                      >
                       {activeLayout === 'custom' ? (
                          <>
                            {customCards.map((c) => {
                              const CustomIcon = ICON_MAP[c.icon] || BarChart;
                              const cardSpan = `col-span-${c.cols || 2} row-span-${c.rows || 1}`;
                              return (
                                <div key={c.id} className={cardSpan}>
                                  {c.type === 'kpi' && <KpiCard title={c.title} value={c.value} change={c.change} color={c.color || colors.accent} icon={CustomIcon} hideContent={isExportingImage} themeMode={themeMode} />}
                                  {c.type === 'chart' && (
                                    <div className={`${themeMode === 'light' ? 'light-card' : 'glass-card'} h-full transition-all duration-500`}>
                                      <ChartPlaceholder color={colors.accent} hideContent={isExportingImage} themeMode={themeMode} />
                                    </div>
                                  )}
                                  {c.type === 'donut' && (
                                    <div className={`${themeMode === 'light' ? 'light-card' : 'glass-card'} h-full flex items-center justify-center transition-all duration-500`}>
                                      <DonutPlaceholder color={colors.accent} hideContent={isExportingImage} themeMode={themeMode} />
                                    </div>
                                  )}
                                  {c.type === 'table' && (
                                    <div className={`${themeMode === 'light' ? 'light-card' : 'glass-card'} h-full transition-all duration-500 overflow-hidden`}>
                                      <DataTable color={colors.accent} title={c.title} hideContent={isExportingImage} themeMode={themeMode} />
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            {/* KPI 1 */}
                            <div className={`${
                              activeLayout === 'standard' ? (isVertical ? 'col-span-1 row-span-1' : (isSquareish ? 'col-span-1 row-span-1' : 'col-span-1 row-span-1')) : 
                              activeLayout === 'executive' ? 'col-span-1 row-span-1' : 
                              activeLayout === 'analytical' ? 'col-span-1 row-span-1' : 
                              (isVertical ? 'col-span-1 row-span-2' : 'col-span-2 row-span-2')
                            }`}>
                              <KpiCard title="Ingresos" value="$42.1k" change="+12%" color={colors.accent} icon={TrendingUp} hideContent={isExportingImage} themeMode={themeMode} />
                            </div>

                            {/* KPI 2 */}
                            <div className={`${
                              activeLayout === 'standard' ? (isVertical ? 'col-span-1 row-span-1' : (isSquareish ? 'col-span-1 row-span-1' : 'col-span-1 row-span-1')) : 
                              activeLayout === 'executive' ? 'col-span-1 row-span-1' : 
                              activeLayout === 'analytical' ? 'col-span-1 row-span-1' : 
                              (isVertical ? 'col-span-1 row-span-2' : 'col-span-2 row-span-2')
                            }`}>
                              <KpiCard title="Conversion" value="3.2%" change="-1%" color="#f87171" icon={Activity} hideContent={isExportingImage} themeMode={themeMode} />
                            </div>

                            {/* KPI 3 */}
                            <div className={`${
                              activeLayout === 'standard' ? (isVertical ? 'col-span-1 row-span-1' : (isSquareish ? 'col-span-1 row-span-1' : 'col-span-1 row-span-1')) : 
                              activeLayout === 'executive' ? 'col-span-1 row-span-1' : 
                              activeLayout === 'analytical' ? 'col-span-1 row-span-1' : 
                              (isVertical ? 'col-span-1 row-span-2' : 'col-span-2 row-span-2')
                            }`}>
                              <KpiCard title="Pedidos" value="1,290" change="+8%" color={colors.accent} icon={ShoppingCart} hideContent={isExportingImage} themeMode={themeMode} />
                            </div>

                            {/* Donut / Secondary Metric */}
                            <div className={`${
                              activeLayout === 'standard' ? 'col-span-1 row-span-1' : 
                              activeLayout === 'executive' ? (isVertical ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1') : 
                              activeLayout === 'analytical' ? (isVertical ? 'col-span-2 row-span-2' : 'col-span-1 row-span-2') : 
                              (isVertical ? 'col-span-2 row-span-2' : 'col-span-2 row-span-3')
                            }`}>
                              <div className={`${themeMode === 'light' ? 'light-card' : 'glass-card'} h-full flex items-center justify-center transition-all duration-500`}>
                                <DonutPlaceholder color={colors.accent} hideContent={isExportingImage} themeMode={themeMode} />
                              </div>
                            </div>

                            {/* Main Chart */}
                            <div className={`${
                              activeLayout === 'standard' ? (isVertical ? 'col-span-2 row-span-2' : (isSquareish ? 'col-span-3 row-span-2' : 'col-span-3 row-span-2')) : 
                              activeLayout === 'executive' ? (isVertical ? 'col-span-2 row-span-3' : 'col-span-4 row-span-1') : 
                              activeLayout === 'analytical' ? (isVertical ? 'col-span-2 row-span-2' : 'col-span-3 row-span-2') : 
                              (isVertical ? 'col-span-2 row-span-3' : 'col-span-4 row-span-3')
                            }`}>
                              <div className={`${themeMode === 'light' ? 'light-card' : 'glass-card'} h-full transition-all duration-500`}>
                                <ChartPlaceholder color={colors.accent} hideContent={isExportingImage} themeMode={themeMode} />
                              </div>
                            </div>

                            {/* KPI 4 / Rebote */}
                            <div className={`${
                              activeLayout === 'standard' ? 'hidden' : 
                              activeLayout === 'executive' ? 'hidden' : 
                              activeLayout === 'analytical' ? 'col-span-1 row-span-1' : 
                              'col-span-2 row-span-1'
                            }`}>
                              <KpiCard title="Rebote" value="42%" change="+2%" color="#fbbf24" icon={Zap} hideContent={isExportingImage} themeMode={themeMode} />
                            </div>

                            {/* Layout Specific Components */}
                            {activeLayout === 'standard' && (
                              <div className={`${themeMode === 'light' ? 'light-card' : 'glass-card'} col-span-1 row-span-2 transition-all duration-500`}>
                                <TopPerformers color={colors.accent} hideContent={isExportingImage} themeMode={themeMode} />
                              </div>
                            )}

                            {activeLayout === 'modern' && (
                              <div className={`${themeMode === 'light' ? 'light-card' : 'glass-card'} col-span-2 row-span-1 transition-all duration-500`}>
                                <TopPerformers color={colors.accent} hideContent={isExportingImage} themeMode={themeMode} />
                              </div>
                            )}

                            {activeLayout === 'modern' && (
                              <div className={`col-span-2 row-span-1 transition-all duration-500 ${isExportingImage ? 'opacity-0' : 'opacity-100'} ${themeMode === 'light' ? 'light-card border-primary-500/10' : 'glass-card border-primary-500/20 bg-primary-500/10'}`}>
                                <div className="flex items-center gap-4 h-full px-6">
                                  <div className="p-3 rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/30"><Target size={20} /></div>
                                  <div>
                                    <p className={`text-[10px] font-bold uppercase ${themeMode === 'light' ? 'text-slate-400' : 'text-slate-400'}`}>Meta Lograda</p>
                                    <p className={`text-lg font-black ${themeMode === 'light' ? 'text-slate-800' : 'text-white'}`}>94.2%</p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {activeLayout === 'analytical' && (
                              <div className={`${themeMode === 'light' ? 'light-card' : 'glass-card'} col-span-4 row-span-1 transition-all duration-500 overflow-hidden`}>
                                <DataTable color={colors.accent} title="Desglose por Canal" hideContent={isExportingImage} themeMode={themeMode} />
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                  {/* Vertical Filter Bar (Right Sidebar style) */}
                  {showFilters && filterPosition === 'right' && (
                    <div className={`w-64 shrink-0 p-6 rounded-[20px] border flex flex-col gap-4 animate-in slide-in-from-right duration-500 ${themeMode === 'light' ? 'bg-white border-slate-200 shadow-sm' : 'bg-white/5 border-white/5 shadow-2xl'}`}>
                      <div className="flex items-center justify-between border-b border-white/5 pb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Filtros Avanzados</span>
                        <Filter size={14} className="text-primary-400" />
                      </div>
                      <div className="space-y-4 overflow-y-auto no-scrollbar pr-1">
                        {filters.map((f, i) => {
                           const IconComp = ICON_MAP[f.icon] || Filter;
                           return (
                             <div key={f.id} className="space-y-2">
                               <div className="flex items-center gap-2">
                                 <IconComp size={10} className="text-primary-500" />
                                 <label className="text-[10px] font-black uppercase text-slate-500 tracking-tighter" style={{ color: colors.textInactive }}>{f.label}</label>
                               </div>
                               <div className={`px-4 py-2.5 rounded-xl border flex items-center justify-between ${themeMode === 'light' ? 'bg-slate-50 border-slate-100' : 'bg-black/20 border-white/5'}`}>
                                 <span className="text-[10px] opacity-40">Seleccionar...</span>
                                 <ChevronDown size={12} className="opacity-20" />
                               </div>
                             </div>
                           )
                        })}
                      </div>
                      <div className="mt-auto pt-4 border-t border-white/5 space-y-2">
                        <button className="w-full py-3 bg-primary-500 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider">Aplicar</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}

function KpiCard({ title, value, change, color, icon: Icon, hideContent, themeMode }) {
  const isLight = themeMode === 'light';
  return (
    <div className={`${isLight ? 'light-card' : 'glass-card'} flex flex-col justify-between h-full group`}>
      <div className={`flex flex-col justify-between h-full transition-opacity duration-500 ${hideContent ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex justify-between items-start">
          <div>
            <p className={`text-[10px] font-black uppercase tracking-widest ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>{title}</p>
            <p className={`text-2xl font-black mt-1 tracking-tighter ${isLight ? 'text-slate-800' : 'text-white'}`}>{value}</p>
          </div>
          {Icon && (
            <div className={`p-2 rounded-lg ${isLight ? 'bg-slate-50 text-slate-400' : 'bg-white/5 text-slate-400'} group-hover:bg-primary-500/20 transition-all duration-500`}>
              <Icon size={16} />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${isLight ? 'bg-slate-50 border-slate-100' : 'bg-white/5 border-white/5'} border`} style={{ color }}>{change}</div>
          <div className={`flex-1 h-[2px] ${isLight ? 'bg-slate-100' : 'bg-white/5'} rounded-full overflow-hidden`}>
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: parseInt(change) > 0 ? '70%' : '30%' }} 
              className="h-full rounded-full" 
              style={{ backgroundColor: color }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartPlaceholder({ color, hideContent, themeMode }) {
  const isLight = themeMode === 'light';
  return (
    <div className={`flex flex-col h-full ${isLight ? 'p-6' : ''}`}>
      <div className={`flex flex-col h-full transition-opacity duration-500 ${hideContent ? 'opacity-0' : 'opacity-100'}`}>
        <p className={`text-[10px] font-black uppercase tracking-widest mb-8 ${isLight ? 'text-slate-400 font-black' : 'text-slate-500'}`}>Tendencia Mensual</p>
        <div className="flex-1 flex items-end gap-3 px-2">
          {[40, 60, 45, 90, 65, 80, 50, 70, 45, 95].map((h, i) => <motion.div key={i} title={`${h}%`} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="flex-1 rounded-t-lg transition-all hover:scale-x-110" style={{ backgroundColor: i % 2 === 0 ? color : (isLight ? '#f1f5f9' : color + '20') }} />)}
        </div>
      </div>
    </div>
  );
}

function DonutPlaceholder({ color, hideContent, themeMode }) {
  const isLight = themeMode === 'light';
  return (
    <div className={`relative w-32 h-32 flex items-center justify-center rotate-[-90deg] transition-opacity duration-500 ${hideContent ? 'opacity-0' : 'opacity-100'}`}>
      <svg className="w-full h-full"><circle cx="64" cy="64" r="54" fill="transparent" stroke={isLight ? '#f1f5f9' : 'rgba(255,255,255,0.05)'} strokeWidth="10"/><circle cx="64" cy="64" r="54" fill="transparent" stroke={color} strokeWidth="10" strokeDasharray="339" strokeDashoffset="80" strokeLinecap="round"/></svg>
      <div className="absolute rotate-[90deg] flex flex-col items-center"><span className={`text-2xl font-black ${isLight ? 'text-slate-800' : 'text-white'}`}>75%</span><span className="text-[8px] font-bold text-slate-500">DIRECTO</span></div>
    </div>
  );
}

function TopPerformers({ color, hideContent, themeMode }) {
  const isLight = themeMode === 'light';
  return (
    <div className={`flex flex-col gap-3 h-full ${isLight ? 'p-6' : ''}`}>
      <div className={`flex flex-col gap-3 h-full transition-opacity duration-500 ${hideContent ? 'opacity-0' : 'opacity-100'}`}>
        <p className={`text-[10px] font-black uppercase tracking-widest mb-4 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>Top Rendimiento</p>
        {[1, 2, 3].map(i => (
          <div key={i} className={`flex justify-between items-center p-3 rounded-xl border transition-colors ${isLight ? 'bg-slate-50 border-slate-100 hover:bg-slate-100' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 font-bold text-xs">{i}</div>
              <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Producto {['Alpha', 'Beta', 'Gamma'][i-1]}</span>
            </div>
            <span className="text-xs font-mono font-bold" style={{ color }}>+{(25 - i*4)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataTable({ color, title, hideContent, themeMode }) {
  const isLight = themeMode === 'light';
  const data = [
    { name: 'Orgánico', value: '4,230', trend: '+12%', color: color },
    { name: 'Social Media', value: '2,100', trend: '+8%', color: '#f87171' },
    { name: 'Directo', value: '1,850', trend: '+5%', color: '#fbbf24' },
    { name: 'Referidos', value: '940', trend: '+22%', color: '#34d399' },
  ];

  return (
    <div className={`flex flex-col gap-4 h-full ${isLight ? 'p-6' : ''}`}>
      <div className={`flex flex-col gap-4 h-full transition-opacity duration-500 ${hideContent ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex justify-between items-center">
          <p className={`text-[10px] font-black uppercase tracking-widest ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>{title || 'Desglose Analytical'}</p>
          <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[8px] font-bold opacity-50 uppercase">Actualizado hace 2m</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
          {data.map((item, i) => (
            <div key={i} className={`flex justify-between items-center p-4 rounded-2xl border transition-all group ${isLight ? 'bg-white border-slate-100 shadow-sm hover:border-primary-500/30' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black transition-colors ${isLight ? 'bg-slate-50 text-slate-400 group-hover:bg-primary-500 group-hover:text-white' : 'bg-white/5 text-slate-300 group-hover:bg-primary-500/20 group-hover:text-primary-400'}`}>
                  {item.name[0]}
                </div>
                <div>
                  <p className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-white'}`}>{item.name}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Canal de Adquisición</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-black tracking-tight ${isLight ? 'text-slate-800' : 'text-white'}`}>{item.value}</p>
                <p className="text-[10px] font-bold" style={{ color: item.trend.startsWith('+') ? '#34d399' : '#f87171' }}>{item.trend}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExportModal({ isOpen, onClose, colors, activeLayout, themeMode }) {
  const isLight = themeMode === 'light';
  const themeJSON = {
    name: `Gridly BI ${isLight ? 'Light' : 'Dark'} Theme`,
    dataColors: [colors.accent, "#3b82f6", "#60a5fa", "#93c5fd", "#f87171", "#fbbf24", "#34d399", "#818cf8"],
    background: isLight ? "#ffffff" : colors.sidebar,
    foreground: isLight ? "#0f172a" : colors.textActive,
    tableAccent: colors.accent,
    visualStyles: {
      "*": {
        "*": {
          "background": [
            {
              "show": true,
              "color": { "solid": { "color": isLight ? "#ffffff" : colors.sidebar } },
              "transparency": 0,
              "radius": 20
            }
          ],
          "visualTooltip": [
            {
              "titleFontColor": { "solid": { "color": isLight ? "#0f172a" : colors.textActive } },
              "valueFontColor": { "solid": { "color": isLight ? "#0f172a" : colors.textActive } },
              "background": { "solid": { "color": isLight ? "#f8fafc" : colors.sidebar } }
            }
          ],
          "title": [
            {
              "show": true,
              "fontColor": { "solid": { "color": colors.textActive } },
              "fontSize": 14,
              "fontFamily": "Segoe UI Semibold"
            }
          ],
          "label": [
            {
              "show": true,
              "color": { "solid": { "color": colors.textInactive } },
              "fontSize": 10
            }
          ],
          "visualShadow": [
            {
              "show": true,
              "color": { "solid": { "color": "#000000" } },
              "transparency": 90,
              "shadowPreset": "Custom",
              "shadowAngle": 45,
              "shadowDistance": 10,
              "shadowBlur": 10,
              "shadowSize": 3
            }
          ]
        }
      }
    }
  };

  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(themeJSON, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gridly_theme_${activeLayout}.json`;
    a.click();
    alert("✅ Tema Generado con Éxito\n\nPara importarlo en Power BI Desktop:\n1. Ve a la pestaña 'Ver' (View)\n2. Galería de Temas → 'Explorar temas'\n3. Selecciona el archivo JSON descargado.");
    onClose();
  };

  const handleExportImage = () => {
    onClose('image');
  };

  if (!isOpen) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-6">
      <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} className="bg-[#0f172a] border border-white/10 rounded-3xl p-8 max-w-lg w-full shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent"></div>
        <div className="flex justify-between items-center mb-8">
          <div><h2 className="text-2xl font-black tracking-tighter">Exportar Dashboard</h2><p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Gridly Engine v1.0</p></div>
          <button onClick={() => onClose()} className="p-2 hover:bg-white/5 rounded-full transition-colors"><X size={20} /></button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <button onClick={handleExportJSON} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/50 hover:bg-accent/10 transition-all group">
            <div className="p-3 rounded-xl bg-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all"><Palette size={24} /></div>
            <div className="text-left">
              <p className="font-bold text-sm">Tema Estilo Gridly (.json)</p>
              <p className="text-[9px] text-slate-500 uppercase font-black">Colores, Sombras y Tipografía para Power BI</p>
            </div>
          </button>
          <button onClick={handleExportImage} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group">
            <div className="p-3 rounded-xl bg-white/10 text-white transition-all"><ImageIcon size={24} /></div>
            <div className="text-left"><p className="font-bold text-sm">Fondo de Plantilla (PNG)</p><p className="text-[9px] text-slate-500 uppercase font-black">Generar imagen sin datos</p></div>
          </button>
        </div>
        <div className="mt-8 p-4 rounded-xl bg-primary-500/5 border border-primary-500/10 flex gap-4 items-start">
          <Info size={16} className="text-primary-400 mt-0.5" /><p className="text-[9px] text-slate-400 font-bold uppercase leading-relaxed">Nota: Exportar como imagen ocultará temporalmente los gráficos para capturar una plantilla limpia.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Editor;
