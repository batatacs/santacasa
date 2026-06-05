import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Fale Conosco</h1>
          <p className="text-xl text-gray-500">Estamos aqui para ajudar. Entre em contato pelos nossos canais de atendimento ou envie uma mensagem.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex items-start gap-6 hover:-translate-y-1 transition-transform">
              <div className="bg-light-green p-4 rounded-2xl text-secondary">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Telefones</h3>
                <p className="text-gray-600 font-medium">Recepção: <strong className="text-secondary text-lg">(19) 3582-9555</strong></p>
                <p className="text-gray-600 mt-1">WhatsApp: (19) 97147-3979</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex items-start gap-6 hover:-translate-y-1 transition-transform">
              <div className="bg-blue-50 p-4 rounded-2xl text-blue-500">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Endereço</h3>
                <p className="text-gray-600">Rua Inácio Ribeiro, 295 - Centro</p>
                <p className="text-gray-600">Santa Rita do Passa Quatro - SP</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex items-start gap-6 hover:-translate-y-1 transition-transform">
              <div className="bg-orange-50 p-4 rounded-2xl text-orange-500">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">E-mail</h3>
                <a href="mailto:adm@santacasasrpq.com.br" className="text-gray-600 hover:text-secondary font-medium transition-colors">adm@santacasasrpq.com.br</a>
                <p className="text-gray-500 text-sm mt-1">Administração</p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-6">Envie uma Mensagem</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" placeholder="Seu nome" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Telefone</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all" placeholder="(19) 99999-9999" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Assunto</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 text-gray-600 transition-all">
                  <option>Dúvida Geral</option>
                  <option>Ouvidoria (Reclamação/Elogio)</option>
                  <option>Doações</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 resize-none transition-all" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="submit" className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-secondary-hover transition-colors shadow-lg shadow-secondary/30 mt-2">
                Enviar Mensagem
              </button>
            </form>
            
            <hr className="my-8 border-gray-100" />
            
            {/* Mapa Interativo */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Como Chegar</h3>
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
                 <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?q=Santa%20Casa%20de%20Miseric%C3%B3rdia%20Santa%20Rita%20do%20Passa%20Quatro&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}