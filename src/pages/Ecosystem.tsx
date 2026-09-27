import { useState } from 'react';
import { Shield, Globe, MessageSquare, ArrowRight, ArrowDown } from 'lucide-react';

export default function Ecosystem() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodeDetails: Record<string, { title: string; desc: string; colors: string }> = {
    parent: {
      title: 'RAN Labs (Central Hub)',
      desc: 'Controls global design specs, core cryptography standards, spatial spacing algorithms, and sovereign consensus models.',
      colors: 'border-yellow-500/20 bg-zinc-900/60'
    },
    tiger: {
      title: 'Tiger Middle East (Enterprise Branch)',
      desc: 'Adapts central specs into sovereign industrial infrastructure, process API pipelines, and high-performance business localizations.',
      colors: 'border-yellow-500/30 bg-yellow-500/[0.02]'
    },
    chithi: {
      title: 'Chithi You (Consumer Communication Branch)',
      desc: 'Adapts central specs into airy, high-legibility messaging interfaces, sovereign publishing nodes, and digital identity layers.',
      colors: 'border-sky-500/30 bg-sky-500/[0.02]'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-300 space-y-16">
      
      {/* 01. Heading Group */}
      <div className="max-w-3xl">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Ecosystem Architecture</span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-white">
          The Product Portfolio Mapping
        </h1>
        <p className="text-zinc-400 text-xs mt-3 leading-relaxed font-light">
          A definitive structural view of parent-to-child relationships. Every subsidiary is bound mathematically to standard-bearer rules locked in our brand guidelines.
        </p>
      </div>

      {/* 02. Interactive Visual Tree Map */}
      <div className="bg-zinc-900/10 border border-zinc-900 rounded-3xl p-8 lg:p-12">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Parent Node */}
          <div 
            onMouseEnter={() => setHoveredNode('parent')}
            onMouseLeave={() => setHoveredNode(null)}
            className={`max-w-md p-8 border rounded-2xl transition-all duration-200 cursor-help ${
              hoveredNode === 'parent' ? 'border-yellow-500 bg-zinc-900/80 shadow-lg' : 'border-zinc-800 bg-zinc-950/60'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4 text-yellow-500">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-[9px] font-mono text-zinc-500 uppercase">Core Governing Entity</span>
            <h3 className="text-lg font-bold text-white mt-1">RAN Labs</h3>
            <p className="text-xs text-zinc-400 mt-2 font-light leading-normal">
              Defining core visual, spatial, and security criteria for the downstream ecosystem.
            </p>
          </div>

          {/* Connection Lines (Flowing down) */}
          <div className="flex flex-col items-center">
            <ArrowDown className="w-6 h-6 text-zinc-800 animate-pulse" />
            <div className="h-0.5 w-48 sm:w-96 bg-zinc-900 relative">
              {/* Branch indicators */}
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-zinc-800 -translate-y-[3px]"></div>
              <div className="absolute right-0 top-0 w-2 h-2 rounded-full bg-zinc-800 -translate-y-[3px]"></div>
            </div>
          </div>

          {/* Children nodes (Flex layouts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            
            {/* Child Node A: Tiger Middle East */}
            <div 
              onMouseEnter={() => setHoveredNode('tiger')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`p-6 border rounded-2xl text-left transition-all duration-200 cursor-help flex flex-col justify-between ${
                hoveredNode === 'tiger' ? 'border-yellow-500 bg-zinc-900/80' : 'border-zinc-900 bg-zinc-950/20'
              }`}
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 text-yellow-500">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase">Regional Sovereign Entity</span>
                <h4 className="text-base font-bold text-white mt-1">Tiger Middle East</h4>
                <p className="text-xs text-zinc-400 mt-2 font-light leading-relaxed">
                  Focusing on automated enterprise structures and localization processing modules.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-900 text-[10px] text-zinc-500 font-mono">
                MAPPED // INDUSTRIAL_AUTOMATION
              </div>
            </div>

            {/* Child Node B: Chithi You */}
            <div 
              onMouseEnter={() => setHoveredNode('chithi')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`p-6 border rounded-2xl text-left transition-all duration-200 cursor-help flex flex-col justify-between ${
                hoveredNode === 'chithi' ? 'border-sky-500 bg-zinc-900/80' : 'border-zinc-900 bg-zinc-950/20'
              }`}
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4 text-sky-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase">Communication Medium</span>
                <h4 className="text-base font-bold text-white mt-1">Chithi You</h4>
                <p className="text-xs text-zinc-400 mt-2 font-light leading-relaxed">
                  Focusing on peer communications frameworks, sovereign digital signatures, and publishing formats.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-900 text-[10px] text-zinc-500 font-mono">
                MAPPED // ENCRYPTED_PUBLISHING
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 03. Active Map Inspector State (Interactive box updating based on hover) */}
      <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 min-h-[140px] flex items-center justify-center">
        {hoveredNode ? (
          <div className="text-center max-w-xl space-y-2 animate-in fade-in duration-200">
            <span className="text-[9px] font-mono text-yellow-500 uppercase tracking-widest font-bold">Node Specification</span>
            <h4 className="text-base font-bold text-white">{nodeDetails[hoveredNode].title}</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">{nodeDetails[hoveredNode].desc}</p>
          </div>
        ) : (
          <span className="text-xs text-zinc-500 font-light italic">
            Hover over any map node to load its operational schema specifications.
          </span>
        )}
      </div>

    </div>
  );
}
