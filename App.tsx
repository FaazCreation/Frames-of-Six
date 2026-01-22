import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SubmissionDetails from './components/SubmissionDetails';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SubmissionDetails />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;