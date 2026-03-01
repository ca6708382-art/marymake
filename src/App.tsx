/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-display">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Differentials />
        <Testimonials />
        <Cta />
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}
