import { useState } from 'react';
import { Share2, Camera, Phone, Mail, MapPin } from 'lucide-react';
import SelfieCamera from './SelfieCamera';

export default function Footer() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  return (
    <footer className="pt-16 md:pt-20 pb-8 md:pb-10 bg-background-dark border-t border-primary/10" id="contacto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Mary</span>
                <span className="text-primary">Make</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Elevando o padrão de beleza ao domicílio em Luanda. Conforto, exclusividade e profissionalismo na ponta dos seus dedos.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsCameraOpen(true)}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors group" 
                title="Tirar uma Selfie MaryMake"
              >
                <Camera className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'MaryMake',
                      text: 'Conheça a MaryMake - Beleza ao domicílio em Luanda!',
                      url: window.location.href,
                    }).catch(console.error);
                  }
                }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors group"
                title="Partilhar"
              >
                <Share2 className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Início</a></li>
              <li><a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#servicos">Serviços</a></li>
              <li><a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#como-funciona">Como Funciona</a></li>
              <li><a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#depoimentos">Depoimentos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="text-primary w-5 h-5" />
                +244 944 785 100
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="text-primary w-5 h-5" />
                marymakeao@gmail.com
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="text-primary w-5 h-5" />
                Luanda, Angola
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Atendimento</h4>
            <p className="text-slate-400 text-sm mb-4">Segunda a Sábado: 08:00 - 20:00</p>
            <p className="text-slate-400 text-sm">Domingos: 09:00 - 16:00</p>
            <div className="mt-6 flex items-center gap-2 p-3 glass rounded-xl border border-primary/30">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-white">Online no WhatsApp</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© 2024 MaryMake. Todos os direitos reservados. Luanda, Angola.</p>
          <div className="flex gap-6">
            <a className="text-slate-500 hover:text-white transition-colors text-xs" href="#">Privacidade</a>
            <a className="text-slate-500 hover:text-white transition-colors text-xs" href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
      <SelfieCamera isOpen={isCameraOpen} onClose={() => setIsCameraOpen(false)} />
    </footer>
  );
}
