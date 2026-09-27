import { Shield, Globe, MessageSquare, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-950 border-t border-zinc-900 py-16 px-6 text-xs text-zinc-500 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid mapping */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-900">
          
          {/* Column 1: Brand declaration */}
          <div className="space-y-4">
            <button 
              onClick={() => onNavigate('home')}
              className="text-sm font-bold text-white tracking-tighter hover:opacity-80 transition-opacity"
            >
              RAN LABS
            </button>
            <p className="text-zinc-500 text-[11px] leading-relaxed font-light">
              A governing sovereign technology and design engine. Defining standard-bearer architectures and secure medium paradigms.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-zinc-600 font-mono">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>All Downstream Systems Locked</span>
            </div>
          </div>

          {/* Column 2: Ecosystem Grid map */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Ecosystem Entities</h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button 
                  onClick={() => onNavigate('tiger-middle-east')}
                  className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-yellow-500"></span>
                  Tiger Middle East
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('chithi-you')}
                  className="hover:text-zinc-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-sky-500"></span>
                  Chithi You
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ecosystem')}
                  className="hover:text-zinc-300 transition-colors text-zinc-500 hover:text-white"
                >
                  Product Hierarchy Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Governance & Info */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Governance</h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="hover:text-zinc-300 transition-colors"
                >
                  About RAN Labs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('brand-portal')}
                  className="hover:text-zinc-300 transition-colors text-yellow-500/80 font-medium"
                >
                  Identity Portal & Standards
                </button>
              </li>
              <li>
                <span className="text-zinc-600 cursor-not-allowed">Partner Integration</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Cryptographic Legal */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Legal Framework</h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <button 
                  onClick={() => onNavigate('legal')}
                  className="hover:text-zinc-300 transition-colors"
                >
                  Privacy Assurance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('legal')}
                  className="hover:text-zinc-300 transition-colors"
                >
                  Ecosystem Agreement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('legal')}
                  className="hover:text-zinc-300 transition-colors"
                >
                  Sovereign Decentralization Specs
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright alignment (Unboxed metadata style) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-zinc-400">RAN Labs</span>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <span>© 2026-2027 Ecosystem Governance. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-600 font-mono text-[10px] tabular-nums">
            <span>EPOCH: 0x98A2BC7</span>
            <span aria-hidden="true">·</span>
            <span>NODE: RUN_PREVIEW</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
