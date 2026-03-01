import { Paintbrush, Footprints, Scissors, Smile, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Paintbrush,
    title: 'Manicure',
    desc: 'Cuidado completo e sofisticado para as suas mãos com esmaltagem premium.',
  },
  {
    id: 2,
    icon: Footprints,
    title: 'Pedicure',
    desc: 'Tratamento relaxante e estético para pés impecáveis no conforto do sofá.',
  },
  {
    id: 3,
    icon: Scissors,
    title: 'Cabeleireiro',
    desc: 'Corte, escova e hidratação profissional sem enfrentar o trânsito de Luanda.',
  },
  {
    id: 4,
    icon: Smile,
    title: 'Spa',
    desc: 'Massagens relaxantes e rituais de bem-estar para renovar as suas energias.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-surface-dark/30 overflow-hidden" id="servicos">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Os serviços que transformam o seu dia</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="relative w-full flex overflow-hidden group gap-6 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4 transform-gpu">
        {/* First Set */}
        <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] min-w-max">
          {services.map((service) => (
            <div key={service.id} className="w-[300px] md:w-[350px] glass-solid p-8 rounded-2xl hover-glow transition-all group/card shrink-0 transform-gpu">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover/card:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover/card:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <a className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider" href="#catalogo">
                Ver Preços <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        {/* Second Set (Duplicate for infinite loop) */}
        <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] min-w-max" aria-hidden="true">
          {services.map((service) => (
            <div key={`dup-${service.id}`} className="w-[300px] md:w-[350px] glass-solid p-8 rounded-2xl hover-glow transition-all group/card shrink-0 transform-gpu">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover/card:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover/card:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <a className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider" href="#catalogo">
                Ver Preços <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
