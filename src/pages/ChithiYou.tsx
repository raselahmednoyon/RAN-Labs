import { useState } from 'react';
import { 
  MessageSquare, 
  Shield, 
  Lock, 
  EyeOff, 
  ArrowRight, 
  Terminal, 
  Send, 
  Key,
  ChevronRight,
  Database,
  Cpu
} from 'lucide-react';

export default function ChithiYou() {
  // Micro-interactive Cipher Simulation State
  const [inputText, setInputText] = useState<string>('Sovereign digital signature validated.');
  const [isEncrypting, setIsEncrypting] = useState<boolean>(false);
  const [simulatedHash, setSimulatedHash] = useState<string>('0x9A7C12F8B3D4E567AC4F00E889');

  const runCipherEncryptionSimulation = () => {
    setIsEncrypting(true);
    
    // Simulate complex local state encryption algorithm
    setTimeout(() => {
      let hash = '0x';
      const characters = 'ABCDEF0123456789';
      for (let i = 0; i < 24; i++) {
        hash += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      setSimulatedHash(hash);
      setIsEncrypting(false);
    }, 450);
  };

  return (
    <div className="animate-in fade-in duration-500 space-y-32 py-12">
      
      {/* ========================================================================= */}
      {/* SECTION 1: Authoritative Brand Header                                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 pb-16 border-b border-zinc-900/60">
          
          <div className="space-y-6 max-w-3xl">
            {/* Zero-Pill Elegant Metadata */}
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              <span>Sovereign Sub-Brand</span>
              <span aria-hidden="true" className="text-zinc-800">·</span>
              <span>Human-Centric Medium</span>
              <span aria-hidden="true" className="text-zinc-800">·</span>
              <span>Active Specs</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
              Sovereign Peer Medium.
            </h1>

            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed text-wrap-balance">
              Chithi You redefines messaging as a secure, decentralized publishing and communications framework designed around digital anonymity and metadata-free peer networks.
            </p>
          </div>

          {/* Sky Blue Color Identity Lock Indicator */}
          <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl shrink-0 h-fit w-full lg:w-auto justify-between lg:justify-start">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-sky-500 rounded-full border border-zinc-950 animate-pulse"></span>
              <div className="text-left">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase">Identity Lock Spec</span>
                <span className="text-xs font-bold text-zinc-200">#0EA5E9 Calm Sky Blue</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 border border-zinc-850 px-2 py-0.5 rounded bg-zinc-950">v1.0_COMM</span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: Complete Core Capabilities (Authorized Skeletons)              */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="max-w-2xl">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">01. Architectural Features</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
            Communication Node Capabilities
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-light">
            Engineered strictly on top of RAN Labs design constraints, delivering decentralized communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Core Capability 1 */}
          <div className="bg-zinc-900/10 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-8 space-y-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/20">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-zinc-100">Zero-Knowledge Signatures</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Verify digital signatures and messages cleanly, validating authorship without leaking physical real-world administrative user logs.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase pt-4 border-t border-zinc-900">
              BOUND: CRYPTO_SIGNATURE
            </div>
          </div>

          {/* Core Capability 2 */}
          <div className="bg-zinc-900/10 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-8 space-y-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/20">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-zinc-100">Decentralized Feed Engine</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Distribute encrypted content across memory-safe peer states. Eliminate centralized databases and server indexing vulnerabilities.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase pt-4 border-t border-zinc-900">
              BOUND: STATE_ROUTING
            </div>
          </div>

          {/* Core Capability 3 */}
          <div className="bg-zinc-900/10 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-8 space-y-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/20">
              <EyeOff className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-zinc-100">Fluid Layout Canvas</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                A highly natural layout system designed to accommodate communications seamlessly. Removing mechanical clutter for natural reading states.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase pt-4 border-t border-zinc-900">
              BOUND: COMPLIANT_LAYOUT
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: Micro-Interactive Cipher Simulator                             */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          
          <div className="max-w-xl mb-10 space-y-2">
            <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-semibold">Interactive Sandbox</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Client-Side Cipher Verification</h3>
            <p className="text-xs text-zinc-400 font-light">
              Enter a mock payload message to simulate local cryptographic hash sealing before it registers to peer nodes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input payload panel (left) */}
            <div className="lg:col-span-5 bg-zinc-950/60 border border-zinc-900 p-6 rounded-2xl space-y-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Message Payload</label>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-sky-500 focus:outline-none rounded-xl px-4 py-3 text-xs text-zinc-100 transition-colors font-mono"
                  placeholder="Enter sentence..."
                />
              </div>

              <button
                onClick={runCipherEncryptionSimulation}
                disabled={isEncrypting}
                className="w-full py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isEncrypting ? 'Encrypting...' : 'Validate & Sealed Hash'}</span>
              </button>
            </div>

            {/* Simulated Live Console Log (right) */}
            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden min-h-[220px] flex flex-col justify-between">
              
              <div className="bg-zinc-900/40 border-b border-zinc-900 px-5 py-3 flex items-center justify-between font-mono text-[10px]">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>chithi_you://client_cipher_validation</span>
                </span>
                <span className="text-zinc-500 font-bold">
                  {isEncrypting ? 'ENCRYPTING...' : 'SEALED'}
                </span>
              </div>

              <div className="p-6 font-mono text-[11px] space-y-4 flex-grow">
                <div>
                  <span className="text-zinc-500 mr-2">&gt; payload_input:</span>
                  <span className="text-zinc-300">"{inputText}"</span>
                </div>
                <div>
                  <span className="text-zinc-500 mr-2">&gt; seal_algorithm:</span>
                  <span className="text-sky-400">AES-GCM-256 Memory-Safe</span>
                </div>
                <div>
                  <span className="text-zinc-500 mr-2">&gt; client_private_hash:</span>
                  <span className="text-emerald-400 font-bold tabular-nums select-all break-all">{simulatedHash}</span>
                </div>
              </div>

              <div className="bg-zinc-900/20 border-t border-zinc-900 px-6 py-3 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                <span>Active Spec: LOCK_V1_COMM</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Local Encryption Sealed
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: Chithi You Google Play & Platform Connection                    */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual representation card */}
            <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-900/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">Operational Client</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">CHITHI_NODE_V1</span>
              </div>

              {/* Monospace Code Copy Box for Android Package Identifier */}
              <div className="bg-zinc-900/50 border border-zinc-850 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Android Package ID</span>
                  <span className="text-[9px] font-mono text-sky-400/80 uppercase font-bold">Awaiting Link</span>
                </div>
                <div className="flex items-center justify-between bg-zinc-950 border border-zinc-900 px-3 py-2 rounded-lg font-mono text-xs tabular-nums text-zinc-200">
                  <span>com.ranlabs.chithiyou</span>
                  <span className="text-[9px] text-zinc-600">Locked</span>
                </div>
              </div>

              {/* Unboxed Metadata Parameters */}
              <div className="space-y-2 text-[10px] font-mono text-zinc-500">
                <div className="flex justify-between">
                  <span>Platform Compatibility:</span>
                  <span className="text-zinc-300">Android & Web Node</span>
                </div>
                <div className="flex justify-between">
                  <span>Cryptographic Key Type:</span>
                  <span className="text-zinc-300 font-bold">AES-GCM-256</span>
                </div>
                <div className="flex justify-between">
                  <span>Ecosystem Bind:</span>
                  <span className="text-zinc-300">RAN Labs Parent Core</span>
                </div>
              </div>

            </div>

            {/* Information copy & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Sovereign Client Ingress</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Chithi You Secure Medium Client
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Chithi You serves as the official human-centric communication client. Engineered to operate on Android devices and lightweight web runtimes, it empowers citizens and creators with 100% private, client-side encrypted messaging nodes that synchronize cleanly across peer meshes.
              </p>

              {/* Production play store placeholder warning / note */}
              <div className="p-4 bg-zinc-900/40 border border-zinc-850 rounded-xl flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                  <span className="text-[9px] font-mono">!</span>
                </div>
                <div className="text-[11px] text-zinc-500 leading-normal font-light">
                  <strong className="text-zinc-300 font-semibold block mb-0.5">Note on Play Store Availability:</strong>
                  The Google Play Store listing for Chithi You is currently undergoing security audits for zero-knowledge key compliance. Live links are scheduled for global rollout.
                </div>
              </div>

              {/* Play store CTA download button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.ranlabs.chithiyou.placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Connect to Google Play</span>
                  <ArrowRight className="w-4 h-4 text-zinc-950" />
                </a>
                
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">
                  PACKAGE: com.ranlabs.chithiyou.placeholder
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: RAN Labs Relationship Validation (Authority Framework)           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900/10 border border-zinc-900 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Ecosystem Authority Bindings</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                How Chithi You maps back to RAN Labs Core
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Chithi You scales secure messaging channels utilizing design and architectural principles mapped strictly by RAN Labs. No tracking algorithms, standard geometric typography, and total compliance with strict metadata laws are guaranteed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-900/60 font-mono text-xs text-zinc-400">
                <div className="space-y-1">
                  <span className="block text-[9px] text-zinc-500 uppercase">PARENT CRYPTO BINDINGS</span>
                  <span className="text-zinc-200 font-bold block">Zero-Knowledge State Blocks</span>
                  <p className="text-[10px] text-zinc-500 font-sans mt-1 font-light">Direct node authentication utilizing parent cryptographic matrices.</p>
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] text-zinc-500 uppercase">PARENT DESIGN ALIGNMENT</span>
                  <span className="text-zinc-200 font-bold block">Fluid Medium Geometry</span>
                  <p className="text-[10px] text-zinc-500 font-sans mt-1 font-light">Asymmetric, highly readable spacing rules following locked grids.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <img 
                src="/src/assets/images/chithi_you_abstract_1790499324969.jpg" 
                alt="Chithi You Secure Medium Layout" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-[9px] font-mono text-zinc-500 bg-zinc-950/90 border border-zinc-800 px-2 py-0.5 rounded">
                LOCKED SPECIFICATION // CHITHI_YOU_1
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: Appropriate CTA                                                */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-sky-400">
          <Key className="w-6 h-6 animate-pulse" />
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Initiate Private Messaging Mediums</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed font-light">
          Validate localized communications channels or download secure peer publishing specifications under our locked visual guidelines.
        </p>
        
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white rounded-xl transition-all duration-150"
          >
            Review Top Spec
          </button>
        </div>
      </section>

    </div>
  );
}
