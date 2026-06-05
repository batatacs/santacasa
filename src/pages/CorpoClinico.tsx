import { Stethoscope, Search, User } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function CorpoClinicoPage() {
  // Lista de médicos mapeada a partir dos dados do site original e ordenada alfabeticamente
  const doctors = useMemo(() => [
    { name: 'Agenor Mauro Zorzi', specialty: 'Clínico Geral' },
    { name: 'Alexandre Andreghetto', specialty: 'Pediatria' },
    { name: 'Alexandre Fazzito', specialty: 'Cardiologia' },
    { name: 'Ângelo do Carmo Silva Matthes', specialty: 'Mastologia, Ginecologia e Obstetrícia' },
    { name: 'Bianca Gomes Peixoto', specialty: 'Ginecologia / Obstetrícia' },
    { name: 'Carlos Alberto da Silva', specialty: 'Clínico Geral' },
    { name: 'Carlos Augusto Romero Cardenas', specialty: 'Ultrassonografia' },
    { name: 'Eduardo Augusto Gonçalves', specialty: 'Neurologia' },
    { name: 'Ernani Marques Borges', specialty: 'Oftalmologia' },
    { name: 'Fabio Vieira', specialty: 'Oftalmologia' },
    { name: 'Felipe Longo Delduque Teixeira', specialty: 'Otorrinolaringologia' },
    { name: 'Felipe Tambelline de Haro Moreno', specialty: 'Ortopedia' },
    { name: 'Fernando Miyada', specialty: 'Urologia' },
    { name: 'Fernando Ramos', specialty: 'Cirurgia Geral, Aparelho Digestivo e Endoscopia' },
    { name: 'Gabriela Scarabel Sguizardi', specialty: 'Ginecologia / Obstetrícia' },
    { name: 'Gustavo Coelho Goncalves de Abreu', specialty: 'Ortopedia' },
    { name: 'Helena Rodrigues Alves Ferreira', specialty: 'Generalista' },
    { name: 'Jean Clever Bido Cesário', specialty: 'Cirurgia Geral e Aparelho Digestivo' },
    { name: 'João Carlos Gonçalves de Souza', specialty: 'Otorrinolaringologia' },
    { name: 'João Roberto Alves dos Santos Jr', specialty: 'Ultrassonografia' },
    { name: 'Jose Eduardo Canalli', specialty: 'Clínico Geral / Dermatologia' },
    { name: 'Jose Roberto dos Santos Rodrigues', specialty: 'Cirurgia Geral / Endoscopia' },
    { name: 'Juan Carlo Mathey Rubio', specialty: 'Clínico Geral' },
    { name: 'Letícia Godoy Dias Sanderson', specialty: 'Clínica Médica e Endocrinologia' },
    { name: 'Lucas Manoel Mangueira Soares', specialty: 'Anestesiologia' },
    { name: 'Luiz Octávio Baldin Caltran', specialty: 'Cardiologia' },
    { name: 'Marcos Eduardo Cassoli Barbuio', specialty: 'Cirurgia Plástica / Dermatologia' },
    { name: 'Mariana Quintans de Oliveira', specialty: 'Ginecologia / Obstetrícia' },
    { name: 'Mariana Yamashitra Gimenez', specialty: 'Pediatria' },
    { name: 'Mayara Leite Coutinho', specialty: 'Cirurgia Vascular' },
    { name: 'Nicholas Kevin Ouchita Françoso', specialty: 'Clínica Médica / Ortopedia e Traumatologia' },
    { name: 'Olivia Saes Cretelli', specialty: 'Ginecologia / Obstetrícia' },
    { name: 'Onésimo Rozante', specialty: 'Clínico Geral (In Memoriam)' },
    { name: 'Paulo Celio Muradi', specialty: 'Oftalmologia' },
    { name: 'Pedro Milhomem Mello Silva', specialty: 'Clínica Médica' },
    { name: 'Raphael José Palhares Fins', specialty: 'Ginecologia / Obstetrícia' },
    { name: 'Renan Dituri Mufato', specialty: 'Clínico Geral' },
    { name: 'Rodrigo Sanderson', specialty: 'Cirurgia Geral, Aparelho Digestivo, Coloproctologia, Colonoscopia' },
    { name: 'Reynaldo Rezende de Azevedo Filho', specialty: 'Ginecologia' },
    { name: 'Raul Calixto Brandão', specialty: 'Anestesiologia' },
    { name: 'Soraia Nassif Monteiro', specialty: 'Pediatria' },
    { name: 'Trifonia Lionela Trigo Castro', specialty: 'Anestesiologia' },
    { name: 'Valdemar Neri Bertin Filho', specialty: 'Clínico Geral' },
    { name: 'Vinícius Thiago Conde Bertelli', specialty: 'Ortopedia, Cirurgia do Joelho, Trauma de Membros Inferiores, Pé e Tornozelo' },
    { name: 'Walter Bengla Mestre Neto', specialty: 'Clínico Geral' },
  ].sort((a, b) => a.name.localeCompare(b.name)), []);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Corpo Clínico</h1>
          <p className="text-xl text-gray-500">Conheça os profissionais dedicados que fazem parte da nossa equipe médica, garantindo um atendimento de excelência e qualidade.</p>
        </div>

        {/* Busca */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-secondary transition-colors">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Buscar por nome ou especialidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 text-gray-700 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Lista de Médicos */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-light-green/50 w-12 h-12 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary leading-tight group-hover:text-secondary transition-colors">{doctor.name}</h3>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <span className="inline-block bg-gray-50 text-gray-600 text-[11px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg border border-gray-100">
                    {doctor.specialty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white p-12 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
            <User className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Nenhum profissional encontrado</h3>
            <p className="text-gray-500">Não encontramos nenhum profissional com o termo "{searchTerm}". Tente buscar por outra especialidade ou nome.</p>
          </div>
        )}

      </div>
    </div>
  );
}