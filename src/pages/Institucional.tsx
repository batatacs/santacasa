import { Building2, HeartHandshake } from 'lucide-react';

export default function InstitucionalPage() {
  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        
        {/* Cabeçalho da Página */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Quem Somos</span>
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Nossa História</h1>
          <p className="text-xl text-gray-500">Uma trajetória de dedicação, superação e amor à vida em Santa Rita do Passa Quatro.</p>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Coluna de Texto */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6 leading-relaxed">
                A Santa Casa de Santa Rita do Passa Quatro foi fundada e era mantida pela Irmandade, desde sua inauguração em <strong className="text-primary">15 de agosto de 1926</strong>. Por muito tempo as pessoas de poder aquisitivo, tanto da área urbana como rural mantiveram suas doações suficientes para as despesas e investimentos da Entidade.
              </p>
              <p className="mb-6 leading-relaxed">
                Nos anos 60, o Hospital contou com a construção da Maternidade e com um pequeno Centro Cirúrgico. Seu Corpo Clínico contava com cinco médicos. Mesmo assim, foram obtidos resultados, até então tidos como impossíveis. O grande salto veio, realmente, nos anos 80, quando alguns elementos da sociedade, verificando a importância de um hospital com maior estrutura e resolutividade dentro do município, aumentaram o número de membros da Irmandade e formaram uma Diretoria Dinâmica.
              </p>
              <p className="mb-6 leading-relaxed">
                Visitaram fazendeiros, sitiantes, comerciantes, indústrias e diversos movimentos foram criados pela população para arrecadação de fundos. Com estes recursos, ampliaram mais alas de internações clínicas, cirúrgicas e ampliação de serviços de apoio. Construíram um Centro Cirúrgico e foram conseguindo também recursos para aquisição de equipamentos mais modernos, o que acabou também atraindo novos médicos.
              </p>
              <p className="mb-6 leading-relaxed">
                Com a vinda do <strong className="text-primary">SUS em 1988</strong>, através da nova Constituição, o hospital passou a atender mais de 70% de pacientes do SUS, além de outros convênios.
              </p>
              <p className="leading-relaxed">
                A Santa Casa passou por momentos muito difíceis e desde 2016, vem se reestruturando e conseguindo sobreviver. Reconquistando sua credibilidade através da melhoria e organização dos serviços prestados, conseguiu importantes parcerias e apoio da população. Hoje, com um trabalho transparente e inovações tecnológicas vem conseguindo aprimorar o fluxo de serviços e melhorar as negociações de compras através de um portal com abrangência nacional para compras de forma segura e transparente.
              </p>
            </div>
          </div>

          {/* Coluna de Imagem e Destaques */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 relative group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* NOTA: Troque o src abaixo pelo caminho da sua imagem real (ex: "/fachada_sta_casa.jpg") quando colocar na pasta public */}
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop" 
                alt="Fachada da Santa Casa" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Cards de Destaque */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-3">
                <div className="bg-light-green w-12 h-12 rounded-xl flex items-center justify-center text-secondary">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-primary text-lg">Nossa Estrutura</h3>
                <p className="text-gray-500 text-sm">Pronto-socorro 24h, Raio-X 24h, internações clínicas, cirúrgicas, obstétricas, pediátricas, Colonoscopia e Endoscopia.</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-3">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-500">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-primary text-lg">Acolhimento</h3>
                <p className="text-gray-500 text-sm">Salas anexas ao Centro Cirúrgico, Sala de Monitorização e com o forte apoio de nossos Colaboradores e Parceiros.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}