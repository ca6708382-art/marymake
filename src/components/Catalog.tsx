import { Download, FileText } from 'lucide-react';
import catalogPdf from '../assets/catalogo-marymake.pdf';

export default function Catalog() {
  return (
    <section className="py-24 bg-background-dark relative overflow-hidden border-t border-white/5" id="catalogo">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none transform-gpu"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/20 text-primary mb-8 shadow-[0_0_30px_rgba(238,43,140,0.2)]">
          <FileText className="w-10 h-10" />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Catálogo de <span className="text-primary italic">Serviços e Preços</span>
        </h2>
        
        <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Quer conhecer em detalhe todos os tratamentos, pacotes e valores que a MaryMake oferece? Baixe a nossa brochura completa em PDF.
        </p>
        
        <a
          href={catalogPdf}
          download="Catalogo_MaryMake.pdf"
          className="inline-flex items-center justify-center gap-3 bg-surface-dark hover:bg-surface-dark/80 border border-primary/30 hover:border-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-lg font-bold transition-all duration-300 hover:shadow-[0_0_40px_rgba(238,43,140,0.3)] hover:-translate-y-1 w-full sm:w-auto"
        >
          <Download className="w-6 h-6 text-primary animate-bounce" />
          Baixar Catálogo (PDF)
        </a>
        
        <p className="mt-6 text-sm text-slate-500">
          Tamanho do arquivo: ~3.6MB
        </p>
      </div>
    </section>
  );
}
