import { PhoneCall, Building2, HeartPulse, Pill } from 'lucide-react';

export default function TelefonesPage() {
  // Lista de telefones baseada no site original
  const telefones = [
    { name: 'SAMU', number: '192', icon: PhoneCall, color: 'text-red-500', bg: 'bg-red-50' },
    { name: 'Prefeitura', number: '(19) 3582-9000', icon: Building2, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Secretaria da Saúde', number: '(19) 3584-8244', icon: HeartPulse, color: 'text-secondary', bg: 'bg-light-green' },
    { name: 'Farmácia do Posto de Saúde', number: '(19) 3582-1259', icon: Pill, color: 'text-orange-500', bg: 'bg-orange-50' },
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Telefones Úteis</h1>
          <p className="text-xl text-gray-500">Lista de contatos importantes para emergências e serviços de saúde em nossa cidade.</p>
        </div>

        {/* Grid de Telefones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {telefones.map((tel, index) => {
            const Icon = tel.icon;
            // Extrai apenas os números para colocar no link do telefone (tel:...)
            const numeroLimpo = tel.number.replace(/\D/g, ''); 
            
            return (
              <a
                key={index}
                href={`tel:${numeroLimpo}`}
                className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className={`${tel.bg} ${tel.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-lg text-gray-500 mb-2">{tel.name}</h3>
                <p className="text-2xl font-extrabold text-primary group-hover:text-secondary transition-colors">
                  {tel.number}
                </p>
                <span className="mt-6 text-sm font-bold text-gray-400 uppercase tracking-wider group-hover:text-secondary transition-colors opacity-0 group-hover:opacity-100">
                  Ligar agora &rarr;
                </span>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}