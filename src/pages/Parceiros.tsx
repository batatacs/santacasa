import { Handshake } from 'lucide-react';

export default function ParceirosPage() {
  const parceiros = [
    { name: 'UniVida', url: 'http://www.unividaplanodesaude.com.br' },
    { name: 'Unimed', url: 'http://www.unimed.com.br' },
    { name: 'Pongeluppe Informática', url: 'http://www.pongeluppeinformatica.com.br' },
    { name: 'Evidência Arquitetura', url: 'https://www.facebook.com/evidenciaarquitetura/?ti=as' },
    { name: 'Fix Informática', url: 'http://www.fixinformatica.net.br' },
  ];

  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Institucional</span>
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Nossos Parceiros</h1>
          <p className="text-xl text-gray-500">Instituições e empresas que apoiam e contribuem para a excelência dos serviços da Santa Casa.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {parceiros.map((parceiro, index) => (
            <a 
              key={index}
              href={parceiro.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center gap-4 group"
            >
              <div className="bg-light-green w-20 h-20 rounded-3xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                <Handshake className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h3 className="font-bold text-primary text-xl group-hover:text-secondary transition-colors">{parceiro.name}</h3>
              <span className="text-sm text-gray-400 font-bold uppercase tracking-wider group-hover:text-secondary transition-colors">Visitar site &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}