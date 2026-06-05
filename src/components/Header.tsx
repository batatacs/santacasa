import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { User, Menu, X, Phone, Clock, Search, FlaskConical, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWorklabLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log('Login Worklab:', cpf, password);
    // Aqui você pode adicionar a lógica para redirecionar para o painel de exames
  };

  const navItems = [
    { name: 'Início', href: '/' },
    { 
      name: 'A Santa Casa', 
      href: '/institucional',
      dropdown: [
        { name: 'Quem Somos', href: '/institucional' },
        { name: 'Diretoria', href: '/institucional/diretoria' },
        { name: 'Estatuto', href: 'http://www.santacasasrpq.com.br/estatutocompleto.pdf' },
        { name: 'Parceiros', href: '/institucional/parceiros' },
        { name: 'Voluntários', href: '/institucional/voluntarios' },
        { name: 'Notícias', href: '/institucional/noticias' },
        { name: 'Processo Seletivo', href: '/institucional/processo-seletivo' },
      ]
    },
    { 
      name: 'Serviços', 
      href: '/servicos/corpo-clinico',
      dropdown: [
        { name: 'Corpo Clínico', href: '/servicos/corpo-clinico' },
        { name: 'Demonstração Contábil', href: '/servicos/demonstracao-contabil' },
        { name: 'Prontuário Médico', href: '/servicos/prontuario' },
        { name: 'Portal dos Funcionários', href: '/servicos/portal-funcionarios' },
        { name: 'Sites Úteis', href: '/servicos/sites-uteis' },
        { name: 'Transparência', href: '/servicos/transparencia' },
        { name: 'Berçário On-line', href: '/servicos/bercario-online' },
      ]
    },
    { name: 'Agendamento Cirúrgico', href: 'https://sv1.erpsaude.com.br/staagendamento/view/index.php' },
    { 
      name: 'Contato', 
      href: '/contato',
      dropdown: [
        { name: 'Fale Conosco', href: '/contato' },
        { name: 'Assessoria de Imprensa', href: '/contato/assessoria' },
        { name: 'Ouvidoria', href: '/contato/ouvidoria' },
        { name: 'Telefones Úteis', href: '/contato/telefones' },
        { name: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
      ]
    },
    { name: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  ];

  return (
    <>
      {/* Top Bar - Info */}
      <div className="hidden lg:flex w-full bg-primary text-white text-xs py-2.5 px-8 items-center justify-between z-50 relative font-medium tracking-wide">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-gray-300">
            <Phone className="h-4 w-4 text-secondary" />
            <span>Emergência: <strong className="text-white">192</strong></span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="h-4 w-4 text-secondary" />
            <span>Atendimento 24h</span>
          </div>
        </div>
        <div className="flex items-center gap-6 uppercase">
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors" title="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors" title="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="h-4 w-px bg-gray-600 mx-1"></div>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Colabore Conosco</a>
          
          <div className="relative">
            <button 
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="flex items-center gap-1.5 text-secondary font-bold hover:text-white transition-colors bg-secondary/10 hover:bg-secondary/20 px-3 py-1.5 rounded-lg"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              Resultados de Exames
            </button>
            
            <AnimatePresence>
              {isLoginOpen && (
                <motion.div 
                  key="login-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-3 w-72 bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-gray-100 p-5 text-gray-800 z-50 normal-case"
                >
                  <h4 className="font-extrabold text-primary mb-1 text-base">Acesso ao Laboratório</h4>
                  <p className="text-gray-500 text-xs mb-4">Consulte seus exames de sangue da Santa Casa.</p>
                  <form onSubmit={handleWorklabLogin} className="space-y-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">CPF / Usuário</label>
                      <input 
                        type="text" 
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" 
                        placeholder="Digite seu CPF" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Senha</label>
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" 
                        placeholder="••••••••" 
                      />
                    </div>
                    <button type="submit" className="w-full bg-secondary text-white rounded-xl py-3 text-sm font-bold hover:bg-secondary-hover transition-colors shadow-lg shadow-secondary/20 mt-2">
                      Acessar Resultados
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' 
            : 'top-0 lg:top-[38px] bg-white/95 backdrop-blur-md py-5 border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Logo Santa Casa" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.href} className="flex items-center gap-1 text-primary font-semibold text-sm hover:text-secondary transition-colors py-2">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div 
                        key={`dropdown-${item.name}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-white border border-gray-100 shadow-xl rounded-2xl py-3 min-w-[220px] overflow-hidden"
                      >
                        {item.dropdown.map((link) => (
                          link.href.startsWith('http') ? (
                            <a 
                              key={link.name} 
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-5 py-2.5 text-sm text-gray-600 hover:text-secondary hover:bg-gray-50 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {link.name}
                            </a>
                          ) : (
                            <Link 
                              key={link.name} 
                              to={link.href}
                              className="block px-5 py-2.5 text-sm text-gray-600 hover:text-secondary hover:bg-gray-50 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {link.name}
                            </Link>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.href.startsWith('http') ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold text-sm hover:text-secondary transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-primary font-semibold text-sm hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="relative group cursor-pointer">
              <Search className="h-5 w-5 text-primary hover:text-secondary transition-colors" />
            </div>
            
            <div className="h-6 w-px bg-gray-200"></div>

            <Link to="/servicos/portal-funcionarios" className="flex items-center gap-2 text-primary hover:text-secondary font-bold text-sm transition-colors group">
              <div className="bg-gray-100 rounded-full p-2 group-hover:bg-light-green transition-colors">
                <User className="h-4 w-4" />
              </div>
              Portal Funcionários
            </Link>
            
            <Link to="/servicos/transparencia" className="bg-secondary text-white px-7 py-3 rounded-full hover:bg-secondary-hover transition-all font-bold text-sm shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-0.5">
              Portal da Transparência
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-primary p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-y-auto max-h-[80vh]"
            >
              <div className="p-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  item.dropdown ? (
                    <div key={item.name} className="flex flex-col border-b border-gray-100 py-2">
                      <Link to={item.href} onClick={() => setIsMenuOpen(false)} className="text-primary font-bold text-lg mb-3">{item.name}</Link>
                      <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100">
                        {item.dropdown.map(link => (
                          link.href.startsWith('http') ? (
                            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-secondary py-1">
                              {link.name}
                            </a>
                          ) : (
                            <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-secondary py-1">
                              {link.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  ) : item.href.startsWith('http') ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-lg py-3 border-b border-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >{item.name}</a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-primary font-bold text-lg py-3 border-b border-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >{item.name}</Link>
                  )
                ))}

                <div className="mt-4 flex flex-col gap-4">
                  <Link to="/servicos/portal-funcionarios" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 text-secondary bg-light-green px-5 py-4 rounded-xl font-bold w-full">
                    <User className="h-5 w-5" /> Portal Funcionários
                  </Link>
                  <Link to="/servicos/transparencia" onClick={() => setIsMenuOpen(false)} className="bg-secondary text-white px-5 py-4 rounded-xl font-bold text-center w-full shadow-lg shadow-secondary/30">
                    Portal da Transparência
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
