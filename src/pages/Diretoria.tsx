import { Users, FileBadge, Stethoscope, Briefcase } from 'lucide-react';

export default function DiretoriaPage() {
  const mesaAdministrativa = [
    { role: 'Provedor', name: 'Bruno Domingos Dinardi' },
    { role: 'Vice-Provedor', name: 'Sergio Alves dos Santos' },
    { role: '1º Tesoureiro', name: 'João Anilson Cusinato' },
    { role: '2º Tesoureiro', name: 'Heraldo Luciano' },
    { role: '1º Secretário', name: 'Clovis Affonso Zerbatto' },
    { role: '2º Secretária', name: 'Maria Cristina Mendes' },
  ];

  const suplentes = [
    'Paulo Sérgio Siqueira Cesar',
    'Sílvio Henrique da Silva',
    'Marco Aurélio Prado'
  ];

  const conselhoFiscal = [
    { role: 'Presidente', name: 'André Luiz Gomes Leitão' },
    { role: 'Secretário', name: 'Aurelio Modulo Filho' },
    { role: 'Membro', name: 'Antonio Roberto Gatto' },
    { role: 'Membro Suplente', name: 'Luiz Gonzaga Proença Júnior' },
  ];

  const diretores = [
    { role: 'Diretora Administrativa', name: 'Viviane Berdun' },
    { role: 'Diretor Clínico e Coord. P.S.', name: 'Luiz Octávio Baldin Caltran' },
    { role: 'Diretor Técnico', name: 'Pedro Milhomen Mello Silva' },
    { role: 'Supervisor Técnico', name: 'André Vicente Andreazi' },
  ];

  const gestores = [
    { role: 'Assistente Social', name: 'Mariangela Panaro Mariotti' },
    { role: 'Assessor de Imprensa', name: 'Marcelo Coradelo' },
    { role: 'Enfermeira Auditora', name: 'Isadora Brezolin Santana' },
    { role: 'RT Enfermagem', name: 'Danielle Albano Sardi Valverde' },
    { role: 'Unidade de Alimentação e Nutrição', name: 'Maria Carolina F. dos Santos Zuliani' },
    { role: 'Higiene e Lavanderia', name: 'André Vicente Andreazi' },
    { role: 'Manutenção', name: 'Paulo Cesar Viviane' },
    { role: 'Assessora da Diretoria', name: 'Merlihan Soares' },
    { role: 'Depto. Pessoal', name: 'Katia R. Torezan Santos' },
    { role: 'T.I.', name: 'Fix Informática' },
    { role: 'Recepção', name: 'André Vicente Andrezi' },
    { role: 'Contabilidade', name: 'Visão Escritório Contábil SS LTDA' },
    { role: 'Financeiro / Faturamento', name: 'Viviane Berdun' },
    { role: 'Farmácia', name: 'Thayna Francisquelli Zanin' },
    { role: 'Agência Transfusional', name: 'Joselisa N. Biagio dos Santos' },
    { role: 'Compras e Almoxarifado', name: 'Margaret R. de Azevedo Ramos' },
    { role: 'Serviço de Remoção', name: 'Delso Piran Junior (MEI)' },
  ];

  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Diretoria</h1>
          <p className="text-xl text-gray-500">Conheça as pessoas responsáveis pela gestão, administração e operação da Santa Casa.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mesa Administrativa */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-8 border-b border-gray-50 pb-6">
              <div className="bg-light-green p-4 rounded-2xl text-secondary">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Mesa Administrativa</h2>
            </div>
            <div className="space-y-4 flex-grow">
              {mesaAdministrativa.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <span className="text-gray-500 font-medium uppercase tracking-wider text-xs">{item.role}</span>
                  <span className="text-gray-800 font-bold text-left sm:text-right">{item.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-50">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Membros Suplentes</h3>
              <div className="flex flex-wrap gap-2">
                {suplentes.map((name, i) => (
                  <span key={i} className="bg-gray-50 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium border border-gray-100">{name}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 flex flex-col h-full">
            {/* Diretores */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex-grow">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-50 pb-6">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-500">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Diretores</h2>
              </div>
              <div className="space-y-4">
                {diretores.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-gray-500 font-medium uppercase tracking-wider text-xs">{item.role}</span>
                    <span className="text-gray-800 font-bold text-left sm:text-right">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conselho Fiscal */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex-grow">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-50 pb-6">
                <div className="bg-orange-50 p-4 rounded-2xl text-orange-500">
                  <FileBadge className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Conselho Fiscal</h2>
              </div>
              <div className="space-y-4">
                {conselhoFiscal.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-gray-500 font-medium uppercase tracking-wider text-xs">{item.role}</span>
                    <span className="text-gray-800 font-bold text-left sm:text-right">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gestores */}
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-50 pb-6">
            <div className="bg-purple-50 p-4 rounded-2xl text-purple-500">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Gestores da Instituição</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {gestores.map((item, i) => (
              <div key={i} className="flex flex-col p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors rounded-2xl border border-gray-100">
                <span className="text-gray-500 font-bold uppercase tracking-wider text-[10px] mb-1">{item.role}</span>
                <span className="text-gray-800 font-semibold text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}