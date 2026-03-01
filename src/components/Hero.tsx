export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Exclusivo em Luanda
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-white">
            Beleza num <span className="text-primary italic">bater de portas</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-4 font-medium">
            Profissionais qualificadas levam manicure, pedicure, cabeleireiro e spa até à sua casa, em qualquer zona de Luanda.
          </p>
          <p className="text-base md:text-lg text-slate-400 mb-10">
            Sem trânsito. Sem filas. Sem deslocações. Apenas cuidado, conforto e exclusividade no seu próprio espaço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/244944785100?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20com%20a%20MaryMake!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Agendar Agora pelo WhatsApp
            </a>
            <a 
              href="#servicos"
              className="bg-surface-dark/50 hover:bg-surface-dark border border-primary/20 text-white px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          {/* Circular Decorative Elements */}
          <div className="absolute w-[120%] h-[120%] border border-primary/10 rounded-full animate-[spin_20s_linear_infinite] transform-gpu pointer-events-none"></div>
          <div className="absolute w-[90%] h-[90%] border border-primary/20 rounded-full pointer-events-none"></div>
          <div className="relative w-full aspect-square max-w-[600px] flex justify-center items-center">
            <img
              alt="MaryMake Logo"
              className="w-full h-auto scale-110 object-contain animate-float drop-shadow-2xl transform-gpu"
              src="/logo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
