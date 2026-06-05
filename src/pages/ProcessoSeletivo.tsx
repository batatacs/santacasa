import { FileText, Download, AlertCircle } from 'lucide-react';

export default function ProcessoSeletivoPage() {
  // Lista de editais com os links. 
  // (No futuro, basta adicionar os links reais dos PDFs em "href" ou colocar os PDFs na pasta public)
  const editais = [
    { title: 'Edital de Classificação 005/2026', href: '/EDITALDECLASSIFICACAOASSINADO005-2026.pdf' },
    { title: 'Edital de Classificação 004/2026', href: '#' },
    { title: 'Edital de Classificação 003/2026', href: '#' },
    { title: 'Edital de Classificação 002/2026', href: '#' },
  ];

  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Institucional</span>
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Processo Seletivo</h1>
          <p className="text-xl text-gray-500">Acompanhe os editais e publicações referentes aos processos seletivos da Santa Casa.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden p-8 md:p-12">
          
          {/* Status do Processo */}
          <div className="flex items-center gap-4 bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 mb-10">
            <AlertCircle className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Envio do Pedido de Inscrição</h3>
              <p className="text-red-500 font-medium">Prazo encerrado no momento.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
            <FileText className="text-secondary" /> Editais de Classificação
          </h3>

          <div className="space-y-4">
            {editais.map((edital, index) => (
              <a key={index} href={edital.href} target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-light-green/30 hover:border-secondary/30 border border-gray-100 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:text-secondary text-gray-500 transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">{edital.title}</span>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm text-gray-400 group-hover:bg-secondary group-hover:text-white transition-colors self-end sm:self-auto">
                  <Download className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}