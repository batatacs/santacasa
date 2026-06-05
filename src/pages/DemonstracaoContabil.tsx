import { FileSpreadsheet, Download, PieChart } from 'lucide-react';

export default function DemonstracaoContabilPage() {
  // Lista de relatórios (você pode adicionar mais anos ou editar os links dos PDFs aqui)
  const relatorios = [
    { ano: '2023', titulo: 'Balanço Patrimonial e DRE', link: '#' },
    { ano: '2022', titulo: 'Balanço Patrimonial e DRE', link: '#' },
    { ano: '2021', titulo: 'Balanço Patrimonial e DRE', link: '#' },
    { ano: '2020', titulo: 'Balanço Patrimonial e DRE', link: '#' },
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Demonstração Contábil</h1>
          <p className="text-xl text-gray-500">Transparência e responsabilidade com os recursos da nossa instituição.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden p-8 md:p-12">
          
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-light-green w-16 h-16 rounded-2xl flex items-center justify-center text-secondary shadow-sm">
              <PieChart className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Relatórios Financeiros</h2>
              <p className="text-gray-500">Acesse os balanços anuais detalhados.</p>
            </div>
          </div>

          {/* Lista de Arquivos */}
          <div className="space-y-4">
            {relatorios.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-light-green/20 border border-gray-100 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-gray-400 group-hover:text-secondary transition-colors">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block font-bold text-gray-700 group-hover:text-primary transition-colors text-lg leading-none mb-1">{item.ano}</span>
                    <span className="text-sm text-gray-500 font-medium">{item.titulo}</span>
                  </div>
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm text-gray-600 font-bold hover:bg-secondary hover:text-white transition-colors self-start sm:self-auto group/btn">
                  Baixar PDF
                  <Download className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}