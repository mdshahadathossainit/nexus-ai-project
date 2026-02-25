import React from 'react';
import { Cpu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-purple-600 rounded-lg">
            <Cpu size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Nexus<span className="text-blue-500">AI</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-purple-400 transition-colors">Features</a>
          <a href="#pricing" className="text-sm hover:text-purple-400 transition-colors">Pricing</a>
          <button className="px-6 py-2.5 bg-white text-slate-950 rounded-full font-semibold text-sm hover:bg-purple-500 hover:text-white transition-all shadow-lg shadow-purple-500/20">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
