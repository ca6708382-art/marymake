import { Calendar } from 'lucide-react';

export default function Cta() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-primary/80 p-8 md:p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/40">
        {/* Decorative circle */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl transform-gpu pointer-events-none"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl transform-gpu pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-tight">
            Pronta para cuidar de si <br className="hidden md:block" />sem sair de casa?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto">
            Agende agora a sua experiência de beleza e bem-estar. As nossas profissionais estão prontas para atendê-la em qualquer zona de Luanda.
          </p>
          <a 
            href="https://wa.me/244944785100?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20com%20a%20MaryMake!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary hover:bg-slate-50 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 mx-auto w-full sm:w-fit"
          >
            <Calendar className="w-6 h-6" />
            Quero Agendar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
