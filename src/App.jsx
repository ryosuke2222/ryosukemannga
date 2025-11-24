import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Merits from './components/Merits';
import Services from './components/Services';
import Flow from './components/Flow';
import Testimonials from './components/Testimonials';
import Consultants from './components/Consultants';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Merits />
        <Services />
        <Flow />
        <Testimonials />
        <Consultants />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
