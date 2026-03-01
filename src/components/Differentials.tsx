import { Home, ShieldCheck, Clock, Droplets, User } from 'lucide-react';

export default function Differentials() {
  return (
    <section className="py-24 bg-surface-dark/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-video lg:aspect-[4/5] transition-all duration-500 hover:shadow-[0_0_50px_rgba(238,43,140,0.4)] order-2 lg:order-1">
          <img
            alt="Beauty Professional"
            className="w-full h-full object-cover"
            src="/professional.png"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-500 hover:opacity-0"></div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Por que as mulheres de Luanda escolhem a MaryMake?
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Home className="text-primary w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-white">100% ao domicílio</h4>
                <p className="text-slate-400 text-sm">
                  Esqueça as deslocações. Vamos até si em Talatona, Kilamba, Maianga e mais.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <ShieldCheck className="text-primary w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-white">Profissionais experientes</h4>
                <p className="text-slate-400 text-sm">
                  Equipa rigorosamente selecionada e formada nos padrões MaryMake.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="text-primary w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-white">Pontualidade</h4>
                <p className="text-slate-400 text-sm">
                  Respeitamos o seu tempo acima de tudo. Agendamento rigoroso.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Droplets className="text-primary w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-white">Materiais higienizados</h4>
                <p className="text-slate-400 text-sm">
                  Protocolos rígidos de segurança e materiais descartáveis.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="text-primary w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-white">Atendimento personalizado</h4>
                <p className="text-slate-400 text-sm">
                  O cuidado que você merece, adaptado ao seu estilo e preferências.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
