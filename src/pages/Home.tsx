import { useState } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Globe, 
  MessageSquare, 
  Shield, 
  ChevronRight, 
  Layers, 
  Activity, 
  Fingerprint, 
  Terminal, 
  CheckCircle,
  TrendingUp,
  Sliders,
  Sparkles
} from 'lucide-react';

interface HomeProps {
  onNavigate: (route: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Interactive Simulator/Configurator State to elevate the user experience (Apple-style interactive fidelity)
  const [activeSimulatorNode, setActiveSimulatorNode] = useState<'ran' | 'tiger' | 'chithi'>('ran');
  const [simulationSpeed, setSimulationSpeed] = useState<'low' | 'normal' | 'maximum'>('normal');

  // Simulator telemetry data based on selected node
  const simulatorData = {
    ran: {
      status: 'Primary Core Operational',
      latency: '0.45ms',
      conformance: '100% Locked',
      activeUsers: 'Governance Only',
      nodeLoad: '12.4%',
      desc: 'Central control node administering design structures, spatial metrics, and sovereign consensus protocols.'
    },
    tiger: {
      status: 'Active Enterprise Sync',
      latency: '4.82ms',
      conformance: '99.98% Synced',
      activeUsers: '8.4k Daily active processes',
      nodeLoad: '74.2%',
      desc: 'High-availability industrial automation API node tailoring process pipelines for MEA regional entities.'
    },
    chithi: {
      status: 'Decentralized Peer Network Syncing',
      latency: '1.20ms',
      conformance: '100% Sealed',
      activeUsers: '142k Active daily nodes',
      nodeLoad: '41.8%',
      desc: 'Cryptographically sealed peer communication medium protecting human digital identity and content delivery.'
    }
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-32">
      
      {/* ========================================================================= */}
      {/* SECTION 1: CINEMATIC HERO SECTION                                         */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center py-20 px-6 overflow-hidden border-b border-zinc-900/40">
        
        {/* Dark-mode default deep radial & linear background grid */}
        <div className="absolute inset-0 bg-radial-gradient from-zinc-900/30 to-neutral-950 pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
        
        {/* Soft atmospheric ambient glow lights */}
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-yellow-500/[0.03] rounded-full blur-[120px] pointer-events-none animate-pulse duration-10000"></div>
        <div className="absolute bottom-24 left-1/4 w-96 h-96 bg-sky-500/[0.03] rounded-full blur-[120px] pointer-events-none animate-pulse duration-7000"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          {/* Zero-Pill Elegant Metadata Block */}
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
            <span>Parent Ecosystem</span>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <span>Design Locked</span>
            <span aria-hidden="true" className="text-zinc-800">·</span>
            <span className="text-yellow-500 font-bold">Epoch 2026</span>
          </div>

          {/* Premium Typographic Scale with balanced layout */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-white leading-[0.95] text-wrap-balance">
            The Governance Behind Advanced Technology.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed text-wrap-balance">
            RAN Labs defines the standard-bearer security protocols, mathematical visual grids, and distributed database kernels that power our localized portfolio companies.
          </p>

          {/* Symmetrical CTA Interaction */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => onNavigate('ecosystem')}
              className="group w-full sm:w-auto px-7 py-3 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Explore Product Hierarchy</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate('brand-portal')}
              className="w-full sm:w-auto px-7 py-3 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all duration-150 flex items-center justify-center gap-2"
            >
              <Shield className="w-3.5 h-3.5 text-yellow-500" />
              <span>Verify Core Brand Locks</span>
            </button>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE GOVERNANCE MATRIX (Core Ecosystem Rules Overview)          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span>Ecosystem Governance</span>
              <span aria-hidden="true" className="text-zinc-800">·</span>
              <span className="text-yellow-500">Locked Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              One central core. Two specialized child networks.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              We operate strictly under a central governing engine, applying unified engineering benchmarks, absolute design system standards, and memory-safe infrastructure across two key operational dimensions.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-zinc-900">
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mt-0.5 shrink-0">
                  <span className="text-[10px] font-mono">1</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">Systemic Isolation</h4>
                  <p className="text-[11px] text-zinc-500 mt-1 font-light">Every child network operates independently in the physical runtime tier while sharing common cryptographical rules.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 mt-0.5 shrink-0">
                  <span className="text-[10px] font-mono">2</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">Zero-Compromise Typographic Discipline</h4>
                  <p className="text-[11px] text-zinc-500 mt-1 font-light">No visual clutter or pill-shaped static content badges are permitted anywhere across downstream user channels.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-900/20 border border-zinc-900 rounded-3xl p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/[0.02] rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Ecosystem Topology Map</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ACTIVE
              </span>
            </div>

            {/* Topology Hierarchy View */}
            <div className="space-y-4">
              
              {/* RAN Labs Central */}
              <div className="p-4 bg-zinc-950 border border-zinc-800/80 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">RAN Labs Ecosystem</h4>
                    <span className="text-[9px] font-mono text-zinc-500">PARENT NODE // PLATFORM CORE</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">100% Core Lock</span>
              </div>

              {/* Path down */}
              <div className="h-6 w-0.5 bg-zinc-800 ml-8 relative">
                <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-zinc-800"></div>
              </div>

              {/* Children Portfolio container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
                
                {/* Child 1: Tiger Middle East */}
                <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex flex-col justify-between h-28">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-white">Tiger ME</h5>
                      <span className="text-[8px] font-mono text-zinc-500">CHILD NODE A</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono pt-4 border-t border-zinc-900/60">
                    <span className="text-yellow-500 font-semibold">#EAB308</span>
                    <span className="text-zinc-500">Enterprise Sync</span>
                  </div>
                </div>

                {/* Child 2: Chithi You */}
                <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl flex flex-col justify-between h-28">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-white">Chithi You</h5>
                      <span className="text-[8px] font-mono text-zinc-500">CHILD NODE B</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono pt-4 border-t border-zinc-900/60">
                    <span className="text-sky-400 font-semibold">#0EA5E9</span>
                    <span className="text-zinc-500">Sovereign Peer</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: THE SUBSIDIARY SHOWCASE (The Core Products)                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="max-w-3xl">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">02. Downstream Portfolios</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
            Ecosystem Subsidiaries
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 font-light leading-relaxed">
            Nurtured and scaled under strict engineering supervision. Each portfolio brand operates in a discrete vertical while syncing state with the core network.
          </p>
        </div>

        {/* Dynamic Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card A: Tiger Middle East (Industrial Powerhouse) */}
          <div className="lg:col-span-6 bg-zinc-900/20 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group">
            
            <div className="space-y-6">
              
              {/* Asset Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase">
                      <span>Sub-Brand</span>
                      <span aria-hidden="true" className="text-zinc-800">·</span>
                      <span className="text-yellow-500 font-bold">Tiger Middle East</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-0.5">Industrial Localization</h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-0.5 rounded">
                  #EAB308 LOCK
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Tiger Middle East adapts RAN Labs standard-bearer computing algorithms into automated sovereign enterprise systems. Tailored explicitly to map physical mechanical arrays with decentralized business process nodes across the Middle East.
              </p>

              {/* Premium Core Image representation (from assets) */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950">
                <img 
                  src="/src/assets/images/tiger_middle_east_abstract_1790499310142.jpg" 
                  alt="Tiger Middle East Sovereign Structure" 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-900/60 font-mono text-[10px] tabular-nums text-zinc-500">
                <div>
                  <span>Target Industry</span>
                  <span className="block text-zinc-300 font-bold mt-0.5 font-sans">Industrial Automation</span>
                </div>
                <div>
                  <span>Latency Limit</span>
                  <span className="block text-zinc-300 font-bold mt-0.5 font-mono">&lt; 5.0ms</span>
                </div>
              </div>

            </div>

            {/* Call To Action Row */}
            <div className="mt-8 pt-6 border-t border-zinc-900/60 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-600">SPEC_ID: RL-TIGER-MEA-V1</span>
              <button 
                onClick={() => onNavigate('tiger-middle-east')}
                className="text-xs font-bold text-yellow-500 hover:text-yellow-400 flex items-center gap-1.5 transition-colors"
              >
                <span>Sovereign Interface</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Card B: Chithi You (Consumer Communication) */}
          <div className="lg:col-span-6 bg-zinc-900/20 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group">
            
            <div className="space-y-6">
              
              {/* Asset Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase">
                      <span>Sub-Brand</span>
                      <span aria-hidden="true" className="text-zinc-800">·</span>
                      <span className="text-sky-400 font-bold">Chithi You</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-0.5">Sovereign Messaging</h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 rounded">
                  #0EA5E9 LOCK
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Chithi You reimagines messaging as a highly secure, decentralized publishing medium. Utilizing local client-side cryptographic hashes, it prevents physical servers from tracking real-world metadata.
              </p>

              {/* Premium Core Image representation (from assets) */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950">
                <img 
                  src="/src/assets/images/chithi_you_abstract_1790499324969.jpg" 
                  alt="Chithi You Atmospheric Structure" 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-900/60 font-mono text-[10px] tabular-nums text-zinc-500">
                <div>
                  <span>Target Industry</span>
                  <span className="block text-zinc-300 font-bold mt-0.5 font-sans">Encrypted Communication</span>
                </div>
                <div>
                  <span>Anonymity Level</span>
                  <span className="block text-zinc-300 font-bold mt-0.5 font-mono">100% Metadata Masked</span>
                </div>
              </div>

            </div>

            {/* Call To Action Row */}
            <div className="mt-8 pt-6 border-t border-zinc-900/60 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-600">SPEC_ID: RL-CHITHI-SEC-V1</span>
              <button 
                onClick={() => onNavigate('chithi-you')}
                className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Medium Interface</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: INTERACTIVE TELEMETRY SIMULATOR (Micro-Interactive Node Sync)  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        
        <div className="bg-zinc-900/10 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Interactive Sandbox</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ecosystem State Verification Simulator</h3>
            <p className="text-xs text-zinc-400 font-light">
              Live-preview and simulate synchronization loops between RAN Labs parent governance and portfolio nodes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Control Panel (left side) */}
            <div className="lg:col-span-4 space-y-6 bg-zinc-950/60 border border-zinc-900 p-6 rounded-2xl">
              
              {/* Select Target Node */}
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Select Target Node</label>
                <div className="space-y-2">
                  <button 
                    onClick={() => setActiveSimulatorNode('ran')}
                    className={`w-full p-3 text-left text-xs font-medium rounded-xl border transition-colors flex items-center justify-between ${
                      activeSimulatorNode === 'ran' ? 'bg-zinc-800/80 border-zinc-700 text-white' : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <span>RAN Labs Parent Node</span>
                    <Shield className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setActiveSimulatorNode('tiger')}
                    className={`w-full p-3 text-left text-xs font-medium rounded-xl border transition-colors flex items-center justify-between ${
                      activeSimulatorNode === 'tiger' ? 'bg-zinc-800/80 border-zinc-700 text-white' : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <span>Tiger ME Process Node</span>
                    <Globe className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setActiveSimulatorNode('chithi')}
                    className={`w-full p-3 text-left text-xs font-medium rounded-xl border transition-colors flex items-center justify-between ${
                      activeSimulatorNode === 'chithi' ? 'bg-zinc-800/80 border-zinc-700 text-white' : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <span>Chithi You Messaging Node</span>
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Simulation Speeds */}
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Simulation Load Speed</label>
                <div className="grid grid-cols-3 gap-2">
                  {['low', 'normal', 'maximum'].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => setSimulationSpeed(speed as any)}
                      className={`py-1.5 text-[10px] font-mono uppercase rounded border transition-colors ${
                        simulationSpeed === speed ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {speed}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Console Screen (right side) */}
            <div className="lg:col-span-8 bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[280px]">
              
              {/* Console header */}
              <div className="bg-zinc-900/40 border-b border-zinc-900 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-yellow-500" />
                  <span>sync_console://{activeSimulatorNode}_node</span>
                </div>
                
                <span className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  LIVE_OUTPUT
                </span>
              </div>

              {/* Console logs */}
              <div className="p-6 font-mono text-[11px] space-y-4 flex-grow">
                <div className="text-zinc-500">&gt; Initializing diagnostics test sequence...</div>
                <div className="text-zinc-400">&gt; Conformance check: <span className="text-emerald-400 font-semibold">{simulatorData[activeSimulatorNode].conformance}</span></div>
                <div className="text-zinc-400">&gt; Simulated Network Latency: <span className="text-zinc-200 font-bold">{simulatorData[activeSimulatorNode].latency}</span></div>
                <div className="text-zinc-400">&gt; Active daily threads: <span className="text-zinc-200 font-bold">{simulatorData[activeSimulatorNode].activeUsers}</span></div>
                <div className="text-zinc-300 font-sans leading-relaxed pt-2 border-t border-zinc-900/60 font-light">
                  <strong className="text-zinc-100 font-semibold font-mono text-[10px] block mb-1">Operational Scope:</strong>
                  {simulatorData[activeSimulatorNode].desc}
                </div>
              </div>

              {/* Console status footer */}
              <div className="bg-zinc-900/20 border-t border-zinc-900 px-6 py-4 grid grid-cols-3 gap-4 text-[10px] text-zinc-500">
                <div>
                  <span className="block text-[8px] font-mono uppercase">SYNC STATUS</span>
                  <span className="text-emerald-400 font-bold">{simulatorData[activeSimulatorNode].status}</span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono uppercase">SIMULATED LOAD</span>
                  <span className="text-zinc-300 font-bold font-mono">{simulatorData[activeSimulatorNode].nodeLoad}</span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono uppercase">REFRESH RATE</span>
                  <span className="text-zinc-300 font-bold font-mono">
                    {simulationSpeed === 'low' && '1,000ms'}
                    {simulationSpeed === 'normal' && '250ms'}
                    {simulationSpeed === 'maximum' && '32ms'}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: TRUSTED ECOSYSTEM STATS                                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 lg:p-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Mathematical Sync</span>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">100.00%</h4>
              <p className="text-[10px] text-zinc-400 font-light">Sovereign design conformance index</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Active Downstreams</span>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">02</h4>
              <p className="text-[10px] text-zinc-400 font-light">Tailored regional child portfolios</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Identity State</span>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-emerald-500 font-mono tracking-tight">SECURED</h4>
              <p className="text-[10px] text-zinc-400 font-light">Ecosystem visual integrity sealed</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Operational Epoch</span>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">0x98A2BC7</h4>
              <p className="text-[10px] text-zinc-400 font-light">Central consensus governance key</p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CALL TO ACTION                                                 */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-yellow-500">
          <Shield className="w-6 h-6 animate-pulse" />
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Coordinate with the Sovereign Network</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed font-light">
          Verify localized process specifications, read foundational design benchmarks, or download vector identity files directly through the central portal.
        </p>
        
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('about')}
            className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white rounded-xl transition-all duration-150"
          >
            Learn About RAN Labs
          </button>
        </div>
      </section>

    </div>
  );
}
