import { ExternalLink, Link as LinkIcon } from 'lucide-react';

export default function SitesUteisPage() {
  // Lista de sites mapeada a partir do HTML antigo, com nomes das instituições adicionados
  const sites = [
    { name: 'Prefeitura Municipal de Santa Rita do Passa Quatro', url: 'https://www.santaritadopassaquatro.sp.gov.br', domain: 'www.santaritadopassaquatro.sp.gov.br' },
    { name: 'Ministério da Saúde', url: 'http://portalms.saude.gov.br/', domain: 'portalms.saude.gov.br' },
    { name: 'Conselho Regional de Nutricionistas (CRN-3)', url: 'http://www.crn3.org.br/', domain: 'www.crn3.org.br' },
    { name: 'Conselho Regional de Medicina (CREMESP)', url: 'http://www.cremesp.org.br/', domain: 'www.cremesp.org.br' },
    { name: 'Conselho Regional de Enfermagem (COREN-SP)', url: 'https://portal.coren-sp.gov.br/', domain: 'portal.coren-sp.gov.br' },
    { name: 'Federação das Santas Casas e Hospitais (FEHOSP)', url: 'http://www.fehosp.com.br/', domain: 'www.fehosp.com.br' },
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Sites Úteis</h1>
          <p className="text-xl text-gray-500">Links recomendados para órgãos de saúde, conselhos de classe e administração pública.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sites.map((site, index) => (
              <a 
                key={index} 
                href={site.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col p-6 rounded-3xl bg-gray-50 hover:bg-light-green/20 border border-gray-100 hover:border-secondary/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="bg-white w-12 h-12 rounded-2xl shadow-sm flex items-center justify-center text-gray-400 group-hover:text-secondary mb-4 transition-colors">
                  <LinkIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-primary mb-2 pr-6 group-hover:text-secondary transition-colors leading-tight">{site.name}</h3>
                <p className="text-sm text-gray-400 font-medium truncate mt-auto pt-2 flex items-center gap-2"><ExternalLink className="w-3.5 h-3.5" /> {site.domain}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}