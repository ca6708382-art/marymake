export default function HowItWorks() {
  return (
    <section className="py-24" id="como-funciona">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Como Funciona</h2>
          <p className="text-slate-400">Três passos simples para a sua transformação</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 relative">
          <div className="flex-1 text-center relative z-10 lg:step-line w-full">
            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl shadow-primary/30">
              1
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Escolha o serviço</h3>
            <p className="text-slate-400 max-w-xs mx-auto">
              Explore o nosso menu de serviços premium no site ou Instagram.
            </p>
          </div>
          <div className="flex-1 text-center relative z-10 lg:step-line w-full">
            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl shadow-primary/30">
              2
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Agende pelo WhatsApp</h3>
            <p className="text-slate-400 max-w-xs mx-auto">
              Fale com a nossa equipa, escolha o dia, a hora e a sua zona em Luanda.
            </p>
          </div>
          <div className="flex-1 text-center relative z-10 w-full">
            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl shadow-primary/30">
              3
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Receba a profissional</h3>
            <p className="text-slate-400 max-w-xs mx-auto">
              Prepare o seu espaço e desfrute de um atendimento exclusivo de salão em casa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
