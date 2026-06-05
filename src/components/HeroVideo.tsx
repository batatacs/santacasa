import { ArrowRight, Calendar, FileText, PhoneCall, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroVideo() {
  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden flex items-center justify-center pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60 z-10"></div>
      
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        /* Imagem de capa (aparece antes do vídeo ou no celular) */
        poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
        className="absolute w-full h-full object-cover z-0"
      >
        {/* Vídeo temporário de hospital/corredor limpo */}
        <source src="https://cdn.coverr.co/videos/coverr-walking-through-a-hospital-corridor-4555/1080p.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-10 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-16 mt-12 lg:mt-24">
        
        {/* Left Side: Text */}
        <div className="w-full lg:w-[55%] text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-dark text-white font-medium mb-8 border border-white/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="text-sm tracking-wide">Santa Rita do Passa Quatro</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight text-balance"
          >
            O Cuidado que <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Acolhe a Vida.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed text-balance"
          >
            Oferecemos estrutura moderna, atendimento humanizado e uma equipe dedicada para cuidar de você e da sua família, bem perto de casa.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5"
          >
            <a href="#serviços" className="w-full sm:w-auto bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/30 flex items-center justify-center gap-3 group">
              Nossos Serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/institucional" className="w-full sm:w-auto glass text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <Building2 className="w-5 h-5" />
              Nossa Estrutura
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Floating Interactive Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[40%] flex flex-col gap-6 mt-16 lg:mt-0"
        >
          {/* Main Action Card */}
          <div className="glass-dark p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[3xl] -mr-20 -mt-20 group-hover:bg-secondary/30 transition-all"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Portal dos Funcionários</h3>
                <p className="text-gray-400 text-sm">Acesso exclusivo para colaboradores</p>
              </div>
              <div className="bg-secondary/20 p-4 rounded-2xl text-secondary">
                <FileText className="w-8 h-8" />
              </div>
            </div>
            
            <div className="space-y-3 relative z-10">
              <Link to="/servicos/portal-funcionarios" className="w-full block text-center bg-white text-primary font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors">
                Acessar Portal
              </Link>
            </div>
          </div>

          {/* Secondary Quick Actions */}
          <div className="grid grid-cols-2 gap-6">
            <a href="https://sv1.erpsaude.com.br/staagendamento/view/index.php" target="_blank" rel="noopener noreferrer" className="glass-dark p-6 rounded-[2rem] border border-white/10 hover:border-white/30 transition-all text-left group block">
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-1">Cirurgia</h4>
              <p className="text-gray-400 text-sm">Agendamento</p>
            </a>
            
            <a href="tel:192" className="glass-dark p-6 rounded-[2rem] border border-white/10 hover:border-white/30 transition-all text-left group block">
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-1">Urgência</h4>
              <p className="text-gray-400 text-sm"><span className="text-secondary font-bold">Atendimento 24h</span></p>
            </a>
          </div>
        </motion.div>
        
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Descer</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}