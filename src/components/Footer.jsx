import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">© 2026 NexusAI. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
