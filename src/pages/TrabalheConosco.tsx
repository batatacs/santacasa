import { Briefcase, FileText, Send } from 'lucide-react';

export default function TrabalheConoscoPage() {
  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Trabalhe Conosco</h1>
          <p className="text-xl text-gray-500">Faça parte da nossa equipe e ajude a Santa Casa a cuidar da vida com excelência e humanização.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100">
          <div className="flex justify-center mb-8">
            <div className="bg-light-green p-5 rounded-full text-secondary">
              <Briefcase className="w-10 h-10" />
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo *</label>
              <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" placeholder="Digite seu nome completo" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">E-mail *</label>
                <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Telefone / WhatsApp *</label>
                <input type="tel" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" placeholder="(19) 99999-9999" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Área de Interesse *</label>
              <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 text-gray-600 transition-all">
                <option value="">Selecione uma área...</option>
                <option value="enfermagem">Enfermagem</option>
                <option value="medicina">Corpo Clínico / Medicina</option>
                <option value="administrativo">Administrativo</option>
                <option value="limpeza">Limpeza e Conservação</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Anexar Currículo (PDF ou DOC) *</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-secondary transition-colors cursor-pointer bg-gray-50 group">
                <div className="space-y-2 text-center">
                  <FileText className="mx-auto h-12 w-12 text-gray-400 group-hover:text-secondary transition-colors" />
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-secondary hover:text-secondary-hover px-2 py-1 shadow-sm border border-gray-200">
                      <span>Escolher arquivo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX até 5MB</p>
                </div>
              </div>
            </div>
            
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-secondary text-white font-bold py-4 rounded-xl hover:bg-secondary-hover transition-colors shadow-lg shadow-secondary/30 mt-6">
              <Send className="w-5 h-5" />
              Enviar Candidatura
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}