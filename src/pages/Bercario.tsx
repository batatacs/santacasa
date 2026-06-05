import { Baby, Calendar, Clock, Scale } from 'lucide-react';

export default function BercarioPage() {
  // Lista de bebês (você poderá adicionar mais depois)
  const bebes = [
    {
      nome: 'Elias', // Exemplo real do site antigo
      foto: 'https://santacasasrpq.com.br/wp/wp-content/uploads/photo-gallery/Elias_(1).jpeg',
      data: '25/05/2026',
      horario: '14:17 hs',
      peso: '3,665 kg'
    },
    // --- Abaixo estão exemplos para você preencher com os dados reais ---
    {
      nome: 'Laura', // Exemplo
      foto: 'https://images.unsplash.com/photo-1546015720-b8b3023aa30b?q=80&w=2070&auto=format&fit=crop',
      data: '24/05/2026',
      horario: '08:30 hs',
      peso: '3,100 kg'
    },
    {
      nome: 'Miguel', // Exemplo
      foto: 'https://images.unsplash.com/photo-1596498299249-28269308a833?q=80&w=2070&auto=format&fit=crop',
      data: '23/05/2026',
      horario: '19:55 hs',
      peso: '3,450 kg'
    },
    {
      nome: 'Alice', // Exemplo
      foto: 'https://images.unsplash.com/photo-1520322391230-ea8e6b4b484d?q=80&w=2070&auto=format&fit=crop',
      data: '22/05/2026',
      horario: '22:10 hs',
      peso: '2,980 kg'
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Maternidade</span>
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Berçário On-line</h1>
          <p className="text-xl text-gray-500">Acompanhe aqui os nascimentos em nossa Maternidade e celebre a chegada de novas vidas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bebes.map((bebe, index) => (
            <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <img src={bebe.foto} alt={`Bebê ${bebe.nome}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-secondary shadow-sm">
                  <Baby className="w-6 h-6" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-extrabold text-primary mb-6 text-center">{bebe.nome}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
                    <div className="bg-light-green p-2.5 rounded-xl text-secondary"><Calendar className="w-5 h-5" /></div>
                    <div><p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Nascimento</p><p className="font-semibold text-gray-700">{bebe.data}</p></div>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
                    <div className="bg-blue-50 p-2.5 rounded-xl text-blue-500"><Clock className="w-5 h-5" /></div>
                    <div><p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Horário</p><p className="font-semibold text-gray-700">{bebe.horario}</p></div>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
                    <div className="bg-orange-50 p-2.5 rounded-xl text-orange-500"><Scale className="w-5 h-5" /></div>
                    <div><p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Peso</p><p className="font-semibold text-gray-700">{bebe.peso}</p></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}