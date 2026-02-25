import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { Zap, Shield, BarChart3 } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap} 
            title="Instant Processing" 
            desc="Lightning fast execution of tasks with our optimized neural network architecture."
          />
          <FeatureCard 
            icon={Shield} 
            title="Secure by Design" 
            desc="Enterprise-grade encryption ensures your data remains private and protected at all times."
          />
          <FeatureCard 
            icon={BarChart3} 
            title="Smart Analytics" 
            desc="Gain deep insights into your workflow efficiency with real-time data visualization."
          />
        </div>
      </section>

      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
