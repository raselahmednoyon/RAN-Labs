import { Shield, Layers, Users, Award, ChevronRight, Cpu, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-500 space-y-24">
      
      {/* ========================================================================= */}
      {/* SECTION 1: Cinematic Header & Purpose                                     */}
      {/* ========================================================================= */}
      <section className="max-w-4xl pb-12 border-b border-zinc-900/60 space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>01. Corporate Mandate</span>
          <span aria-hidden="true" className="text-zinc-800">·</span>
          <span className="text-yellow-500 font-bold">RAN Labs Hub</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
          A Governing Technological Council.
        </h1>
        
        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed text-wrap-balance">
          RAN Labs operates as a central design, engineering, and architectural council. We license rigid visual rules, cryptographical protocols, and decentralized database kernels to subsidiary organizations who deploy specialized systems globally.
        </p>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: Product Hierarchy Structural View                               */}
      {/* ========================================================================= */}
      <section className="space-y-12">
        <div className="max-w-2xl">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">02. Ecosystem Hierarchy</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            Structural Hierarchy Map
          </h2>
          <p className="text-zinc-400 text-xs font-light">
            Defining the relationship between the parent council and downstream operational entities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Level 1: Parent */}
          <div className="bg-zinc-900/10 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between h-56 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/[0.01] rounded-full blur-2xl"></div>
            <div className="space-y-3">
              <span className="text-[9px] font-mono text-yellow-500 uppercase">Ecosystem Core</span>
              <h3 className="text-base font-bold text-white">RAN Labs</h3>
              <p className="text-xs text-zinc-500 font-light leading-normal">
                Governing council regulating cryptographical consensus frameworks, structural spacing micro-grids, and gnostic design specifications.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-600">LEVEL_01 // TRUST_ANCHOR</div>
          </div>

          {/* Level 2A: Child A */}
          <div className="bg-zinc-900/10 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between h-56 relative overflow-hidden group">
            <div className="space-y-3">
              <span className="text-[9px] font-mono text-zinc-400 uppercase">Localized Subsidiary</span>
              <h3 className="text-base font-bold text-white">Tiger Middle East</h3>
              <p className="text-xs text-zinc-500 font-light leading-normal">
                High-performance enterprise automation adapter converting parent telemetry metrics into regional logistics and computing setups.
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600">
              <span>LEVEL_02 // INDUSTRIAL</span>
              <span className="text-yellow-500 font-bold font-sans">#EAB308</span>
            </div>
          </div>

          {/* Level 2B: Child B */}
          <div className="bg-zinc-900/10 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between h-56 relative overflow-hidden group">
            <div className="space-y-3">
              <span className="text-[9px] font-mono text-zinc-400 uppercase">Localized Subsidiary</span>
              <h3 className="text-base font-bold text-white">Chithi You</h3>
              <p className="text-xs text-zinc-500 font-light leading-normal">
                Sovereign communication and private publishing medium adapting peer-to-peer encryption with human-centric fluid design matrices.
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600">
              <span>LEVEL_02 // COMMUNICATION</span>
              <span className="text-sky-400 font-bold font-sans">#0EA5E9</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: Design & Architecture Principles                              */}
      {/* ========================================================================= */}
      <section className="space-y-12">
        
        <div className="max-w-2xl">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">03. Operational Principles</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            Rigid Engineering Principles
          </h2>
          <p className="text-zinc-400 text-xs font-light">
            Every digital deployment bearing the RAN Labs mark is legally bound to these rigid visual and programmatic standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-yellow-500 font-bold">A.</span>
              <h3 className="text-sm font-bold text-white">Mathematical Micro-Grids</h3>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              We reject arbitrary layouts. Every margin, padding value, gap, and boundary is derived from a strict mathematical scale (4px to 64px), ensuring consistent structural density.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-yellow-500 font-bold">B.</span>
              <h3 className="text-sm font-bold text-white">Zero-Pill Restraint</h3>
              </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Timestamps, categorizations, states, and classifications must never be enclosed inside rounded, colored pill-shaped capsules. Information must remain raw, elegant, and unboxed.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-yellow-500 font-bold">C.</span>
              <h3 className="text-sm font-bold text-white">Hermetic Cryptography</h3>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              We enforce memory-safe development runtimes. All peer communication feeds are encrypted under client-controlled private keys, leaving physical networks free of tracker metadata.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-yellow-500 font-bold">D.</span>
              <h3 className="text-sm font-bold text-white">Anti-AI Visual Slop</h3>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              No decorative emojis, unnecessary gradients, or cluttered graphic items. Every visual asset must resolve to a specific functional purpose under our strict visual audit.
            </p>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: System Milestones & Trajectory                                 */}
      {/* ========================================================================= */}
      <section className="bg-zinc-900/10 border border-zinc-900 rounded-2xl p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Ecosystem Milestones Log</h4>
          <span className="text-[9px] font-mono text-zinc-500 uppercase">SYSTEM DIAGNOSTIC // OK</span>
        </div>

        <div className="space-y-4 font-mono text-xs tabular-nums text-zinc-400">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-900/60 pb-3 gap-1">
            <span className="text-zinc-500">SEPTEMBER 2026</span>
            <span className="text-white font-medium">RAN Labs Identity Locked Specifications Confirmed</span>
            <span className="text-zinc-600">v1.0.0</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-900/60 pb-3 gap-1">
            <span className="text-zinc-500">NOVEMBER 2026</span>
            <span className="text-white font-medium">Tiger Middle East System Core Validation</span>
            <span className="text-yellow-500/80 font-bold">v1.1.0_SYNC</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-1">
            <span className="text-zinc-500">JANUARY 2027</span>
            <span className="text-white font-medium">Chithi You Sovereign Cryptography Integration</span>
            <span className="text-sky-400/80 font-bold">v1.2.0_SCHEDULED</span>
          </div>

        </div>
      </section>

    </div>
  );
}
