import { Megaphone, CheckCircle2, Phone, Mail, Newspaper } from 'lucide-react';

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

export default function AssessoriaPage() {
  const servicos = [
    'Assessoria de Imprensa',
    'Produção de Conteúdo para Web',
    'Cobertura de Eventos',
    'Produção de Conteúdo para divulgação em meios de imprensa',
    'Realização da comunicação institucional',
    'Produção de material institucional (folders, vídeos, spots, revista etc.)',
    'Endomarketing e planos de comunicação interna e externa'
  ];

  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Contato</span>
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Assessoria de Imprensa</h1>
          <p className="text-xl text-gray-500">Comunicação institucional, relacionamento com a mídia e divulgação dos projetos da Santa Casa.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Coluna da Esquerda: Sobre e Serviços */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-light-green p-4 rounded-2xl text-secondary">
                  <Megaphone className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Nossa Atuação</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A Assessoria de Imprensa da Santa Casa atua no relacionamento com a imprensa, mediando entrevistas, fornecendo informações sobre a Instituição e casos de evidência social. Também atuamos gerando conteúdo com base no trabalho realizado pelo hospital diariamente nas mais diversas especialidades.
                </p>
                <p>
                  A divulgação dos projetos existentes nas diversas unidades de saúde administradas pela Santa Casa também são objeto da ação da assessoria em sua divulgação. Nosso objetivo é noticiar o que acontece no universo da Instituição, que presta serviços em saúde há várias décadas, cumprindo sua missão de:
                </p>
                <blockquote className="border-l-4 border-secondary pl-6 italic text-gray-500 my-6 bg-gray-50 p-4 rounded-r-2xl">
                  "Promover o bem estar físico, psíquico e social do ser humano com profissionais qualificados e tecnologia atualizada".
                </blockquote>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <Newspaper className="text-secondary w-6 h-6" /> Alguns dos serviços prestados:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicos.map((servico, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-medium text-sm leading-snug">{servico}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Contato e Redes Sociais */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            {/* Contato do Assessor */}
            <div className="bg-secondary text-white p-8 rounded-[2.5rem] shadow-lg shadow-secondary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] -mr-10 -mt-10"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">Fale com o Assessor</h3>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-white/70 text-sm font-bold uppercase tracking-wider mb-1">Responsável</p>
                  <p className="text-2xl font-extrabold">Marcelo Coradelo</p>
                </div>
                
                <a href="tel:+5519993298589" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors group">
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div><p className="text-xs text-white/70 font-bold uppercase tracking-wider mb-0.5">Celular</p><p className="font-medium">(19) 99329-8589</p></div>
                </a>
                
                <a href="mailto:imprensa@santacasasrpq.com.br" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors group">
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div className="truncate"><p className="text-xs text-white/70 font-bold uppercase tracking-wider mb-0.5">E-mail</p><p className="font-medium truncate">imprensa@santacasasrpq.com.br</p></div>
                </a>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-6">Nossas Redes Sociais</h3>
              <div className="space-y-3">
                <a href="https://www.facebook.com/santacasasrpq/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-gray-600 font-medium transition-colors border border-transparent hover:border-blue-100"><FacebookIcon className="w-5 h-5" /> Facebook: Comunicação</a>
                <a href="https://www.facebook.com/profile.php?id=100011299158960" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 text-gray-600 font-medium transition-colors border border-transparent hover:border-blue-100"><FacebookIcon className="w-5 h-5" /> Facebook: Santa Saúde</a>
                <a href="https://instagram.com/santacasasrpq?igshid=NzZhOTFlYzFmZQ==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-50 hover:text-pink-600 text-gray-600 font-medium transition-colors border border-transparent hover:border-pink-100"><InstagramIcon className="w-5 h-5" /> Instagram: @santacasasrpq</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}