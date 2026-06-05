import { Wrench, Clock, Zap, ShieldCheck, Database, Search, TrendingDown, Users } from 'lucide-react';

export default function PortalFuncionariosPage() {
  // Lista de benefícios extraída do site antigo
  const beneficios = [
    { icon: Clock, text: 'Economia de tempo e papéis' },
    { icon: Zap, text: 'Rapidez de acesso aos documentos' },
    { icon: ShieldCheck, text: 'Diminuição dos erros humanos' },
    { icon: Database, text: 'Facilidade de armazenamento' },
    { icon: Search, text: 'Agilidade nos processos de busca' },
    { icon: TrendingDown, text: 'Maior controle orçamentário' },
  ];

  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Serviços</span>
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Portal dos Funcionários</h1>
          <p className="text-xl text-gray-500">Uma plataforma exclusiva e moderna para os colaboradores da Santa Casa.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Lado Esquerdo: Aviso de Em Desenvolvimento */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-light-green/30">
            <div className="bg-white p-4 rounded-2xl w-fit mb-6 shadow-sm border border-light-green">
              <Wrench className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">Em Desenvolvimento</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              O Portal dos Funcionários encontra-se em desenvolvimento. Ele agilizará os processos e automatizará a emissão de documentos relacionados ao vínculo empregatício, como <strong>holerites e informes de rendimentos</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Tudo poderá ser acessado pelo próprio colaborador, no momento em que precisar, sem burocracias.
            </p>
          </div>

          {/* Lado Direito: Benefícios */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
            <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
              <Users className="text-secondary" /> O que a plataforma propiciará:
            </h3>
            <div className="space-y-4">
              {beneficios.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-secondary/30 hover:bg-light-green/20 transition-colors group">
                    <div className="bg-white p-2.5 rounded-xl shadow-sm group-hover:text-secondary text-gray-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}