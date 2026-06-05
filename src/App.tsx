// Sincronização final com a Vercel
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation, Link } from 'react-router-dom';
import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroVideo from './components/HeroVideo';
import CookieConsent from './components/CookieConsent';
import WhatsAppButton from './components/WhatsAppButton';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Importe as novas páginas
import HomePage from './pages/Home';
import InstitucionalPage from './pages/Institucional';
import DiretoriaPage from './pages/Diretoria';
import ParceirosPage from './pages/Parceiros';
import VoluntariosPage from './pages/Voluntarios';
import ProcessoSeletivoPage from './pages/ProcessoSeletivo';
import ServicosPage from './pages/Servicos';
import ContatoPage from './pages/Contato';
import TrabalheConoscoPage from './pages/TrabalheConosco';
import CorpoClinicoPage from './pages/CorpoClinico';
import ProntuarioPage from './pages/Prontuario';
import PortalFuncionariosPage from './pages/PortalFuncionarios';
import SitesUteisPage from './pages/SitesUteis';
import TransparenciaPage from './pages/Transparencia';
import BercarioPage from './pages/Bercario';
import AssessoriaPage from './pages/Assessoria';
import OuvidoriaPage from './pages/Ouvidoria';
import TelefonesPage from './pages/Telefones';
import DemonstracaoContabilPage from './pages/DemonstracaoContabil';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Componente de Layout que define a estrutura da página
function Layout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      
      <main className="flex-grow">
        {/* Renderiza o vídeo apenas na página inicial */}
        {location.pathname === '/' && <HeroVideo />}
        <Outlet />
      </main>
      
      <footer className="bg-primary text-gray-400 pt-20 pb-10">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="col-span-1 md:col-span-5 pr-0 lg:pr-12">
              <div className="flex items-center gap-4 mb-8">
                <img src="/logo.png" alt="Logo Santa Casa" className="h-16 w-auto" />
              </div>
              <p className="mb-8 text-gray-400 text-lg leading-relaxed text-balance">
                Cuidando da nossa comunidade com excelência médica, respeito e um profundo amor à vida. Uma estrutura completa e acolhedora para Santa Rita do Passa Quatro.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/santacasasrpq/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-colors" aria-label="Facebook">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/santacasasrpq?igshid=NzZhOTFlYzFmZQ==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-colors" aria-label="Instagram">
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Institucional</h3>
              <ul className="space-y-4 font-medium">
                <li><Link to="/institucional/diretoria" className="hover:text-secondary transition-colors">Diretoria</Link></li>
                <li><Link to="/institucional" className="hover:text-secondary transition-colors">Quem Somos</Link></li>
                <li><Link to="/institucional/voluntarios" className="hover:text-secondary transition-colors">Voluntários</Link></li>
                <li><Link to="/institucional/processo-seletivo" className="hover:text-secondary transition-colors">Processo Seletivo</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Serviços</h3>
              <ul className="space-y-4 font-medium">
                <li><Link to="/servicos/corpo-clinico" className="hover:text-secondary transition-colors">Corpo Clínico</Link></li>
                <li><a href="https://sv1.erpsaude.com.br/staagendamento/view/index.php" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Agendamento Cirúrgico</a></li>
                <li><Link to="/servicos/transparencia" className="hover:text-secondary transition-colors">Transparência</Link></li>
                <li><Link to="/servicos/bercario-online" className="hover:text-secondary transition-colors">Berçário On-line</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-3">
              <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contato</h3>
              <ul className="space-y-6">
                <li className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Pronto Atendimento</span>
                  <span className="text-2xl font-bold text-white">192</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Fale Conosco / Ouvidoria</span>
                  <Link to="/contato" className="text-secondary hover:underline font-bold mt-1">Acessar Canais de Atendimento</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Santa Casa SRPQ. Todos os Direitos Reservados.</p>
            <div className="flex gap-8">
              <span className="text-gray-500">Desenvolvido por <strong className="text-white">Anderson Camilo</strong></span>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-to-top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-28 right-8 z-50 p-3 bg-secondary text-white rounded-full shadow-2xl hover:bg-secondary-hover transition-colors"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      
      <WhatsAppButton />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "institucional", element: <InstitucionalPage /> },
      { path: "institucional/diretoria", element: <DiretoriaPage /> },
      { path: "institucional/parceiros", element: <ParceirosPage /> },
      { path: "institucional/voluntarios", element: <VoluntariosPage /> },
      { path: "institucional/processo-seletivo", element: <ProcessoSeletivoPage /> },
      { path: "servicos", element: <ServicosPage /> },
      { path: "servicos/corpo-clinico", element: <CorpoClinicoPage /> },
      { path: "servicos/prontuario", element: <ProntuarioPage /> },
      { path: "servicos/portal-funcionarios", element: <PortalFuncionariosPage /> },
      { path: "servicos/sites-uteis", element: <SitesUteisPage /> },
      { path: "servicos/demonstracao-contabil", element: <DemonstracaoContabilPage /> },
      { path: "servicos/transparencia", element: <TransparenciaPage /> },
      { path: "servicos/bercario-online", element: <BercarioPage /> },
      { path: "contato", element: <ContatoPage /> },
      { path: "contato/assessoria", element: <AssessoriaPage /> },
      { path: "contato/ouvidoria", element: <OuvidoriaPage /> },
      { path: "contato/telefones", element: <TelefonesPage /> },
      { path: "trabalhe-conosco", element: <TrabalheConoscoPage /> },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      <AnimatePresence>
        {isLoading && <Preloader isLoading={isLoading} />}
      </AnimatePresence>
      
      {!isLoading && <RouterProvider router={router} />}
    </div>
  );
}

export default App;
