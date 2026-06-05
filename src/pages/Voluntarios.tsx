import { HeartHandshake, Phone } from 'lucide-react';

export default function VoluntariosPage() {
  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen">
      <div className="container mx-auto px-6 lg:px-10">
        
        {/* Cabeçalho da Página */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Institucional</span>
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Seja Voluntário na Santa Casa!</h1>
          <p className="text-xl text-gray-500">Dedique um pouco do seu tempo a quem precisa e faça a diferença na vida dos nossos pacientes.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-500">
          
          {/* Imagem (Metade do Card) */}
          <div className="w-full md:w-5/12 relative min-h-[300px] md:min-h-full overflow-hidden">
             <div className="absolute inset-0 bg-primary/20 z-10 transition-colors duration-500 hover:bg-transparent"></div>
             {/* Imagem ilustrativa de voluntariado/união */}
             <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipe de Voluntários" 
                className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
             />
          </div>

          {/* Conteúdo */}
          <div className="w-full md:w-7/12 p-10 md:p-14 flex flex-col justify-center">
            <div className="bg-light-green w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mb-8">
              <HeartHandshake className="w-8 h-8 stroke-[1.5]" />
            </div>
            
            <h3 className="text-3xl font-bold text-primary mb-4">Faça parte da nossa equipe</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Buscamos pessoas dispostas a auxiliar no acolhimento aos pacientes, familiares e profissionais em nossa instituição. 
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-gray-700 font-medium bg-gray-50/50 p-4 rounded-xl border border-gray-100"><span className="w-2 h-2 rounded-full bg-secondary"></span> Ter disponibilidade de tempo.</div>
              <div className="flex items-center gap-4 text-gray-700 font-medium bg-gray-50/50 p-4 rounded-xl border border-gray-100"><span className="w-2 h-2 rounded-full bg-secondary"></span> Ter a partir de 18 anos de idade.</div>
            </div>

            <div className="bg-light-green/30 p-6 rounded-2xl border border-light-green mt-auto">
              <p className="text-sm text-gray-600 mb-4 font-medium">Ao manifestar seu interesse, conte-nos um pouco sobre você, no que atua, e nos informe para qual atividade deseja contribuir.</p>
              <a href="tel:+551935829555" className="inline-flex items-center gap-3 text-secondary hover:text-secondary-hover font-extrabold text-2xl transition-colors group">
                <div className="bg-white shadow-sm p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                (19) 3582-9555
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}