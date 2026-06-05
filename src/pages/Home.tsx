import { Clock, Activity, Users, ShieldCheck, FlaskConical, BedDouble, Info } from 'lucide-react';

// Este componente contém a seção de "Serviços e Especialidades" e "Outras Informações"
export default function HomePage() {
  return (
    <>
      {/* Modern Stats / Info Section - overlapping hero */}
      <section className="relative z-30 px-6 lg:px-10 -mt-10 md:-mt-16 mb-24">
        <div className="container mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-10 justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-light-green rounded-full blur-[80px] -mr-20 -mt-20 opacity-50"></div>
            
            <div className="flex items-center gap-6 relative z-10 w-full md:w-auto group">
              <div className="bg-light-green p-5 rounded-3xl text-secondary group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-extrabold text-primary mb-1">Tradição &amp; Qualidade</h4>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">Acolhimento à Vida</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-20 bg-gray-100 relative z-10"></div>
            
            <div className="flex items-center gap-6 relative z-10 w-full md:w-auto group">
              <div className="bg-blue-50 p-5 rounded-3xl text-blue-600 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-extrabold text-primary mb-1">Equipe Especializada</h4>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">Cuidado Humanizado</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-20 bg-gray-100 relative z-10"></div>
            
            <div className="flex items-center gap-6 relative z-10 w-full md:w-auto group">
              <div className="bg-red-50 p-5 rounded-3xl text-red-500 group-hover:scale-110 transition-transform">
                <Clock className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-extrabold text-primary mb-1">Atendimento 24h</h4>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">Sempre Abertos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços e Estrutura */}
      <section id="serviços" className="py-20 bg-surface">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-1 bg-secondary rounded-full"></span>
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">A Nossa Estrutura</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight text-balance">
                Serviços e <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Especialidades</span>
              </h2>
              <p className="mt-6 text-gray-500 text-xl leading-relaxed text-balance">
                Nossa Santa Casa possui ótima estrutura para um melhor acolhimento dos pacientes, com uma equipe preparada para emergências e rotinas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Monitorização Cardíaca', desc: 'Contamos com o Sistema On-line de ECG para os casos de emergência, onde será analisado por um médico cardiologista de plantão.', icon: Activity, color: 'text-red-600', bg: 'bg-red-50' },
              { title: 'Profissionais Especializados', desc: 'Nossa Santa Casa é formada por uma equipe qualificada e com profissionais especializados para atender pacientes de todas as idades.', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Atendimento 24 horas', desc: 'Sempre com uma equipe para emergência, com ambiente adequado para atendimento 24 horas para SUS e convênios particulares.', icon: Clock, color: 'text-green-600', bg: 'bg-green-50' },
              { title: 'Exames', desc: 'Fique tranquilo, estamos preparados para fazer exames com um de nossos laboratórios conveniados nos casos de emergência.', icon: FlaskConical, color: 'text-purple-600', bg: 'bg-purple-50' },
              { title: 'Acomodações', desc: 'Ótima estrutura para um melhor acolhimento dos pacientes, dispondo de quartos coletivos, individuais e suítes confortáveis.', icon: BedDouble, color: 'text-orange-600', bg: 'bg-orange-50' },
              { title: 'Horário de Visita', desc: 'Enfermaria/Maternidade das 10h às 20h. Troca de acompanhantes em períodos específicos (07h, 12h e 18h).', icon: Info, color: 'text-secondary', bg: 'bg-light-green' },
            ].map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-gray-100 group cursor-default hover:-translate-y-2 relative overflow-hidden flex flex-col h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-light-green/50 transition-colors"></div>
                  
                  <div className={`${spec.bg} ${spec.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    <Icon className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">{spec.title}</h3>
                  <p className="text-gray-500 mb-8 text-lg leading-relaxed relative z-10 flex-grow">{spec.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}