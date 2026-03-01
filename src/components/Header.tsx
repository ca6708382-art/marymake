import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass border-b border-primary/10 py-0' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-white">Mary</span>
            <span className="text-primary">Make</span>
          </a>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="https://wa.me/244944785100?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20com%20a%20MaryMake!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(238,43,140,0.4)] hover:-translate-y-0.5 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Agora
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-surface-dark/95 backdrop-blur-xl border-b border-primary/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/244944785100?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20com%20a%20MaryMake!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 mt-2"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Agora
          </a>
        </nav>
      </div>
    </header>
  );
}
