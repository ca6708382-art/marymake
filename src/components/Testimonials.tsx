import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden relative" id="depoimentos">
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] transform-gpu pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que dizem as nossas clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Testimonial 1 */}
          <div className="glass-solid p-8 rounded-2xl relative transform-gpu">
            <Quote className="text-primary w-12 h-12 opacity-30 absolute top-4 right-6" />
            <p className="text-slate-300 italic mb-8 relative z-10">
              "O trânsito de Luanda era o meu maior impedimento para ir ao salão. Com a MaryMake, consigo fazer a minha manicure enquanto as crianças dormem. É um luxo necessário!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                <img
                  alt="Customer Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Q4lskpyLqKfIRHVvXnZ2wKMEDnn1Sabhwhi4dULHSnUJ78-0ZeTbpg79abKt0LlPqXc14qoXj7bHhkI1RlfNiDWbepviqlhnu6XubYG5AW4hr7FEPCykMNwVRg966NIq88oa4myqcEg0hHYnHh4wdL_7e22bcHY1dHl1vq_g6knILcYW5v3e49vMvuDZ-Lwk4AFJBS1Xb1ys0x7gjrFizlC68JTx_MCbeqb745ug1CfzR6PTo6L4_K6LRTsPmIPbbKcRRPD0wSYC"
                />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Ana Paula S.</h5>
                <p className="text-slate-500 text-xs text-primary">Talatona</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="glass-solid p-8 rounded-2xl relative transform-gpu">
            <Quote className="text-primary w-12 h-12 opacity-30 absolute top-4 right-6" />
            <p className="text-slate-300 italic mb-8 relative z-10">
              "A pontualidade é incrível. Já chamei para fazer cabelo e maquilhagem para um evento e o resultado foi impecável. Recomendo a todas as minhas amigas em Luanda."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                <img
                  alt="Customer Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy0aRslv-CWeHSjFLsH8HVdBqygIoFnSdVqe26hLwDpROFXfpZLyDlJloJPLmxS3E87IPfG6_nDIJw6Az7HZYABAoFMkAFhoiNzpEfpGi6Q7oUSGo2UBJ7dZKcTMyG-twP7P9FtyQ5y8064XZwvO4Dow9x7KgyN6_ghxjKD21gtYC1PiQoqPg5CeXFb1kgDiOHdzNF_-ntfVrYxj98aijVqVkanrACFF51mZxcoAF710XgIHsSShwVPHgdKOoQw65chIdR2bFnWooD"
                />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Cláudia M.</h5>
                <p className="text-slate-500 text-xs text-primary">Maianga</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="glass-solid p-8 rounded-2xl relative transform-gpu">
            <Quote className="text-primary w-12 h-12 opacity-30 absolute top-4 right-6" />
            <p className="text-slate-300 italic mb-8 relative z-10">
              "Adoro o serviço de Spa em casa. No final de uma semana cansativa, não há nada melhor do que receber uma massagem sem ter que conduzir depois. Perfeito!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                <img
                  alt="Customer Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc85PwJG6Le4jMqX2_WDNO14GNAW4j7cB1ooH_Wy1eo98M-jgUJUyOU0W1SdHD0Rh3zNedlSPElxLDZ01m5wCWPSXtXgMdYOSuAWHo1w8L0-EW2KzCqCphLD5sZj1qwM-MgEsfiH3tvTUa1RajkIeMK3v1Bl48dtU6BGvFIALPj0WPwsa8SKS9VF935AVexFFkLoKjXl3gXqiQz65ERaAduV0go0jMK0XijOgV78uecbXPVVC3XTFMisHqjS2h5RR4My6duGwA55vG"
                />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Mariana K.</h5>
                <p className="text-slate-500 text-xs text-primary">Kilamba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
