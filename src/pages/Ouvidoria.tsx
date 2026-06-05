import { Ear, Info, Send } from 'lucide-react';

export default function OuvidoriaPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Ouvidoria</h1>
          <p className="text-xl text-gray-500">Canal de comunicação entre o cidadão e a administração para receber sugestões, reclamações, denúncias e elogios.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-start">
          
          {/* Coluna da Esquerda: Explicação */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="bg-light-green w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mb-8">
                <Ear className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">O que é a Ouvidoria?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                É um canal direto de comunicação destinado a receber suas manifestações sobre os serviços prestados pela Santa Casa. Ajudando-nos a manter a qualidade e transparência de nossos serviços.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 mt-8">
                <Info className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <p className="text-sm text-blue-800 font-medium">
                  Seja breve e o mais objetivo possível para que sua mensagem seja compreendida mais facilmente e respondida com maior agilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Formulário */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-2">Precisa de ajuda? Escreva-nos.</h3>
              <p className="text-gray-500 mb-8">Preencha os campos abaixo com sua manifestação.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo *</label>
                    <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">E-mail *</label>
                    <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" placeholder="seu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Departamento *</label>
                  <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 text-gray-600 transition-all">
                    <option value="">Selecione o Departamento</option>
                    <option value="enfermagem">Serviços de Enfermagem</option>
                    <option value="nutricao">Serviço de Nutrição e Dietética</option>
                    <option value="recepcao">Serviços de Recepção e Portaria</option>
                    <option value="adm">Outros Serviços</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem *</label>
                  <textarea required rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 resize-none transition-all" placeholder="Digite aqui sua mensagem..."></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-secondary text-white font-bold py-4 rounded-xl hover:bg-secondary-hover transition-colors shadow-lg shadow-secondary/30">
                  <Send className="w-5 h-5" />
                  Enviar Manifestação
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}