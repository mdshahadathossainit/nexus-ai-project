import React from 'react';

const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="glass p-8 rounded-3xl group hover:border-purple-500/50 transition-all duration-500">
      <div className="w-12 h-12 mb-6 flex items-center justify-center bg-slate-900 rounded-2xl group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-500">
        <Icon className="text-purple-400 group-hover:text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default FeatureCard;
