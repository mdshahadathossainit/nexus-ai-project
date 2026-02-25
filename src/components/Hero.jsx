import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-purple-500/30 bg-purple-500/10 rounded-full text-purple-400 text-xs font-medium tracking-wider uppercase">
          Revolutionizing Workflow
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Amplify Intelligence <br /> 
          <span className="neon-text">Automate Everything</span>
        </h1>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Experience the next generation of productivity. NexusAI integrates seamlessly with your tools to handle repetitive tasks while you focus on creativity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-purple-600 rounded-full font-bold hover:bg-purple-700 transition-all shadow-xl shadow-purple-600/25">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto px-10 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
