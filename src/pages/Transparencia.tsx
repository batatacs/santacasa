import { FolderOpen, FileText, Download, ExternalLink } from 'lucide-react';

export default function TransparenciaPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Portal da Transparência</h1>
          <p className="text-xl text-gray-500">Acompanhe as informações financeiras, relatórios e a prestação de contas da Santa Casa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card Principal OneDrive */}
          <a 
            href="https://1drv.ms/f/s!AoQzZgSl6NITbdvTz2CmqaWEOJs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
          >
            <div className="bg-light-green w-20 h-20 rounded-3xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
              <FolderOpen className="w-10 h-10 stroke-[1.5]" />
            </div>
            <h3 className="font-bold text-2xl text-primary mb-3 group-hover:text-secondary transition-colors">Repositório Completo</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Acesse nossa nuvem completa com todos os arquivos, contratos, relatórios e documentos de transparência.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-bold group-hover:bg-secondary group-hover:text-white transition-colors">
              Acessar Arquivos <ExternalLink className="w-4 h-4" />
            </span>
          </a>

          {/* Card PDF */}
          <a 
            href="https://santacasasrpq.com.br/wp/wp-content/uploads/2026/02/Recursos-de-emendas-parlamentares.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
          >
            <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-10 h-10 stroke-[1.5]" />
            </div>
            <h3 className="font-bold text-2xl text-primary mb-3 group-hover:text-secondary transition-colors">Emendas Parlamentares</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Consulte o documento em formato PDF detalhando a aplicação dos recursos provenientes de emendas.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-bold group-hover:bg-secondary group-hover:text-white transition-colors">
              Baixar PDF <Download className="w-4 h-4" />
            </span>
          </a>

        </div>
      </div>
    </div>
  );
}