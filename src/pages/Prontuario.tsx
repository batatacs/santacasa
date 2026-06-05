import { FileText, Download, Clock, Info, ShieldAlert, FileSignature, Users, CheckCircle2 } from 'lucide-react';

export default function ProntuarioPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Prontuário Médico</h1>
          <p className="text-xl text-gray-500">Normas para consulta de informações e obtenção de cópias dos prontuários e fichas de atendimento médico.</p>
        </div>

        {/* Introdução */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 mb-12">
          <div className="flex gap-4">
            <div className="bg-light-green/50 p-4 rounded-2xl text-secondary h-fit">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Preservação do Sigilo e Privacidade</h3>
              <p className="text-gray-600 leading-relaxed">
                A Santa Casa possui um protocolo rigoroso que visa aplicar os princípios éticos na preservação do sigilo e na privacidade do paciente. Seguimos a legislação vigente (Artigos 154 e 269 do Código Penal, Capítulos I, IX e X do Código de Ética Médica, Resolução do CFM 1.605/2000, entre outros) para padronizar as práticas referentes a consultas, pesquisas e cópias dos prontuários.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12">
          
          {/* Consultas e Pesquisas */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <FileText className="text-secondary" /> Consultas e Pesquisas
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-primary mb-2">Profissionais e Acadêmicos</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /> Fornecidos mediante solicitação com anuência do profissional assistente, administração, direção clínica e técnica.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /> A solicitação deve ser feita das 08h às 17h.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /> Ficarão à disposição para pesquisa por 5 dias úteis no setor competente.</li>
                  <li className="flex items-start gap-2 text-red-600 font-medium mt-4"><ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5" /> É expressamente proibido COPIAR E FOTOGRAFAR prontuários e exames sem autorização por escrito do paciente.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><FileSignature className="w-5 h-5 text-gray-400" /> Perito Médico</h4>
                  <p className="text-gray-600 text-sm">Liberada apenas com designação por autoridade judicial e identificação profissional. A solicitação oficial deverá ser anexada.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><Users className="w-5 h-5 text-gray-400" /> Sem Autorização do Paciente</h4>
                  <p className="text-gray-600 text-sm">O acesso às informações contidas no prontuário somente poderá ser feito com autorização expressa do paciente ou representante legal.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cópias de Prontuários */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <FileSignature className="text-secondary" /> Obtenção de Cópias
            </h2>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 space-y-6">
                <p className="text-gray-600 font-medium mb-4">A cópia será fornecida nos seguintes casos:</p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="bg-gray-50 w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary flex-shrink-0">A</div>
                    <p className="text-gray-600 mt-1"><strong>Para o próprio paciente:</strong> mediante solicitação formal e apresentação de documento de identificação oficial.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-gray-50 w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary flex-shrink-0">B</div>
                    <p className="text-gray-600 mt-1"><strong>Para menor de idade:</strong> mediante solicitação formal para os pais, e apresentação de documento comprobatório.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-gray-50 w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary flex-shrink-0">C</div>
                    <p className="text-gray-600 mt-1"><strong>Para terceiros:</strong> com autorização expressa do paciente ou seu representante legal, por escrito, com fotocópia de documento de identidade.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-gray-50 w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary flex-shrink-0">D</div>
                    <p className="text-gray-600 mt-1"><strong>Cópia de prontuário de óbito:</strong> será liberada por ordem judicial ou por requisição do CFM/CRM. Pode ser fornecido ao cônjuge/companheiro e sucessores legítimos desde que documentado o vínculo familiar.</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Atendimento e Prazos */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary text-white p-8 rounded-3xl shadow-lg shadow-secondary/20">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Clock className="w-7 h-7" /> Atendimento e Prazos
                </h2>
                <div className="space-y-4 text-white/90">
                  <div>
                    <p className="text-white/70 text-sm uppercase tracking-wider font-bold mb-1">Horário para retirada</p>
                    <p className="font-medium text-lg">09:30 às 11:30 <br/> 14:00 às 17:00</p>
                  </div>
                  <div className="h-px bg-white/20 w-full my-4"></div>
                  <div>
                    <p className="text-white/70 text-sm uppercase tracking-wider font-bold mb-1">Prazo para Retirada</p>
                    <p className="font-medium">15 a 30 dias após o requerimento.</p>
                    <p className="text-sm mt-2 opacity-80">A cópia ficará disponível por 60 dias e será inutilizada após esse prazo.</p>
                  </div>
                  <div className="h-px bg-white/20 w-full my-4"></div>
                  <div>
                    <p className="text-white/70 text-sm uppercase tracking-wider font-bold mb-1">Custos</p>
                    <p className="font-medium">Cópia em papel: R$ 0,50 / pág</p>
                    <p className="font-medium">Cópia em DVD: R$ 10,00</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                    <Info className="w-6 h-6 text-blue-500" /> Fichas de Atendimento
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    As regras são as mesmas dos prontuários, porém o prazo para liberação das cópias é de <strong>3 dias úteis</strong> a partir da data da solicitação.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Em casos de exame cautelar, o prazo de liberação é imediato.
                  </p>
                </div>

                {/* Downloads */}
                <div className="bg-light-green/30 p-8 rounded-3xl border border-light-green flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-primary mb-4">Arquivos e Formulários</h3>
                  <div className="space-y-3">
                    <a 
                      href="/arquivos/requerimento_prontuarios.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-white p-3 rounded-2xl hover:shadow-md transition-shadow group"
                    >
                      <div className="bg-red-50 text-red-500 p-2 rounded-xl group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <Download className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">Requerimento Prontuário</span>
                    </a>
                    <a 
                      href="/arquivos/Normas_Prontuario.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-white p-3 rounded-2xl hover:shadow-md transition-shadow group"
                    >
                      <div className="bg-red-50 text-red-500 p-2 rounded-xl group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <Download className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">Normas do Prontuário</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}