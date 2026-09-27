import { useState } from 'react';
import { 
  Globe, 
  Shield, 
  Cpu, 
  Activity, 
  ArrowRight, 
  Settings, 
  Terminal, 
  Layers, 
  ChevronRight, 
  Database,
  Lock
} from 'lucide-react';

export default function TigerMiddleEast() {
  // Micro-interactive Pipeline Simulator State
  const [activePipelineStep, setActivePipelineStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simLogs, setSimLogs] = useState<string[]>([
    'System ready. Node initialized.',
    'Awaiting process pipeline execution request.'
  ]);

  const runPipelineStepSimulation = (stepId: number, stepName: string) => {
    setActivePipelineStep(stepId);
    setIsSimulating(true);
    
    let logs: string[] = [];
    switch(stepId) {
      case 1:
        logs = [
          'Initializing telemetry ingestion pipeline...',
          'Reading from physical mechanical array nodes.',
          'Data payload locked: [32.4°C | 1,024 hPa | 45.2 Hz]',
          'Status: Ingestion successful.'
        ];
        break;
      case 2:
        logs = [
          'Requesting RAN Labs cryptographic consensus matrix...',
          'Generating sealed memory-safe state hashes.',
          'State token sealed: 0x8F32CBA10972DE',
          'Status: Hash validation complete.'
        ];
        break;
      case 3:
        logs = [
          'Dispatching telemetry packet to sovereign storage nodes...',
          'Replication index: 3 active MEA nodes synced.',
          'Sovereign sync state confirmed.',
          'Status: Dispatch loop resolved.'
        ];
        break;
    }
    
    setSimLogs(logs);
    setTimeout(() => {
      setIsSimulating(false);
    }, 600);
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
            <div className="flex items-center gap-2 text-xs font-mono text-yellow-500 uppercase tracking-widest font-semibold">
              <span>Sovereign Sub-Brand</span>
              <span aria-hidden="true" className="text-zinc-800">·</span>
              <span>Middle East & Africa</span>
              <span aria-hidden="true" className="text-zinc-800">·</span>
              <span>Active Specs</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
              Sovereign Industrial Computing.
            </h1>

            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed text-wrap-balance">
              Tiger Middle East adapts the core technological standards defined by RAN Labs into high-performance process automation and localized administrative computing platforms.
            </p>
          </div>

          {/* Golden Color Identity Lock Indicator */}
          <div className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 p-4 rounded-2xl shrink-0 h-fit w-full lg:w-auto justify-between lg:justify-start">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-yellow-500 rounded-full border border-zinc-950 animate-pulse"></span>
              <div className="text-left">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase">Identity Lock Spec</span>
                <span className="text-xs font-bold text-zinc-200">#EAB308 Sovereign Gold</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 border border-zinc-850 px-2 py-0.5 rounded bg-zinc-950">v1.0_MEA</span>
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
            Standard-Bearer Systems Architecture
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-light">
            Engineered strictly on top of RAN Labs design constraints, delivering low-latency local execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Core Capability 1 */}
          <div className="bg-zinc-900/10 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-8 space-y-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-zinc-100">Localized Process APIs</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Connect and map continuous physical engineering arrays directly with digital telemetry monitors. Safe, low-latency, and sandboxed.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase pt-4 border-t border-zinc-900">
              BOUND: SYSTEMIC_API_KERNEL
            </div>
          </div>

          {/* Core Capability 2 */}
          <div className="bg-zinc-900/10 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-8 space-y-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
              <Database className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-zinc-100">Sovereign Encryption Nodes</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                All database indexes and communication logs are stored locally under regional cryptographic protocols, preventing physical tracking.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase pt-4 border-t border-zinc-900">
              BOUND: SECURE_STATE_STORE
            </div>
          </div>

          {/* Core Capability 3 */}
          <div className="bg-zinc-900/10 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-8 space-y-6 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
              <Activity className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-zinc-100">Continuous Telemetry</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Providing standard telemetry metrics designed to support continuous load-balancing across harsh regional compute conditions.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase pt-4 border-t border-zinc-900">
              BOUND: CORE_TELEMETRY
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: Micro-Interactive Process Validator Sandbox                     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          
          <div className="max-w-xl mb-10 space-y-2">
            <span className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest font-semibold">Interactive Sandbox</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Process Pipeline Diagnostics</h3>
            <p className="text-xs text-zinc-400 font-light">
              Test and trace how Tiger ME converts localized telemetry packets using RAN Labs secure state matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Steps triggers (left) */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { id: 1, name: 'Ingest Telemetry', desc: 'Read sensory data from local hardware units.' },
                { id: 2, name: 'Core Sealed Hash', desc: 'Seal payload using RAN Labs parent keys.' },
                { id: 3, name: 'Sovereign Dispatch', desc: 'Confirm state synchronization on active MEA nodes.' }
              ].map((step) => (
                <button
                  key={step.id}
                  onClick={() => runPipelineStepSimulation(step.id, step.name)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-4 ${
                    activePipelineStep === step.id 
                      ? 'bg-zinc-800/80 border-zinc-700 text-white shadow' 
                      : 'bg-zinc-950/40 border-zinc-900/60 text-zinc-400 hover:border-zinc-800'
                  }`}
                >
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded shrink-0 ${
                    activePipelineStep === step.id ? 'bg-yellow-500 text-zinc-950' : 'bg-zinc-900 text-zinc-500'
                  }`}>
                    0{step.id}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold">{step.name}</h4>
                    <p className="text-[11px] text-zinc-500 mt-0.5 font-light">{step.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Simulated Live Console Log (right) */}
            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden min-h-[220px] flex flex-col justify-between">
              
              <div className="bg-zinc-900/40 border-b border-zinc-900 px-5 py-3 flex items-center justify-between font-mono text-[10px]">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-yellow-500" />
                  <span>tiger_mea://pipeline_validator</span>
                </span>
                <span className="text-zinc-500 font-bold">
                  {isSimulating ? 'SIMULATING...' : 'IDLE'}
                </span>
              </div>

              <div className="p-6 font-mono text-[11px] space-y-3 flex-grow">
                {simLogs.map((log, idx) => (
                  <div key={idx} className="text-zinc-300">
                    <span className="text-zinc-600 mr-2">&gt;</span>
                    {log}
                  </div>
                ))}
              </div>

              <div className="bg-zinc-900/20 border-t border-zinc-900 px-6 py-3 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                <span>Active Spec: LOCK_V1_MEA</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Diagnostics Checked
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: Tiger OM Google Play Connection System                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/[0.01] rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual representation card */}
            <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-900/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">Operational Console</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">TIGER_OM_V1</span>
              </div>

              {/* Monospace Code Copy Box for Android Package Identifier */}
              <div className="bg-zinc-900/50 border border-zinc-850 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Android Package ID</span>
                  <span className="text-[9px] font-mono text-emerald-500 uppercase font-bold">Active Listing</span>
                </div>
                <div className="flex items-center justify-between bg-zinc-950 border border-zinc-900 px-3 py-2 rounded-lg font-mono text-xs tabular-nums text-zinc-200">
                  <span>com.tigerom.app</span>
                  <span className="text-[9px] text-zinc-600 font-bold">Verified</span>
                </div>
              </div>

              {/* Unboxed Metadata Parameters */}
              <div className="space-y-2 text-[10px] font-mono text-zinc-500">
                <div className="flex justify-between">
                  <span>Platform:</span>
                  <span className="text-zinc-300">Android OS (Oman App)</span>
                </div>
                <div className="flex justify-between">
                  <span>Target SDK:</span>
                  <span className="text-zinc-300 font-bold">API Level 34</span>
                </div>
                <div className="flex justify-between">
                  <span>Ecosystem Bind:</span>
                  <span className="text-zinc-300">RAN Labs Parent Core</span>
                </div>
              </div>

            </div>

            {/* Information copy & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Mobile Client Ingress</span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Tiger OM Operations Manager
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Tiger OM (Operations Manager) serves as the official mobile client interface for regional system technicians. Built specifically to deliver raw telemetry monitoring and cryptographically signed state dispatch pipelines on Android devices.
              </p>

              {/* Production play store placeholder warning / note */}
              <div className="p-4 bg-zinc-900/40 border border-zinc-850 rounded-xl flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <span className="text-[9px] font-mono">✓</span>
                </div>
                <div className="text-[11px] text-zinc-500 leading-normal font-light">
                  <strong className="text-zinc-300 font-semibold block mb-0.5">Verified Google Play Connectivity:</strong>
                  The Google Play Store listing for Tiger OM is verified and live. Secure regional node credentials are required for complete dashboard authentication.
                </div>
              </div>

              {/* Play store CTA download button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.tigerom.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Connect to Google Play</span>
                  <ArrowRight className="w-4 h-4 text-zinc-950" />
                </a>
                
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">
                  PACKAGE: com.tigerom.app
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
                How Tiger ME maps back to RAN Labs Core
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Tiger Middle East is not an independent entity operating in isolation. Every state commit, design layout padding coordinate, and cryptographic signature algorithm is strictly defined and bound under the parent ecosystem standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-900/60 font-mono text-xs text-zinc-400">
                <div className="space-y-1">
                  <span className="block text-[9px] text-zinc-500 uppercase">PARENT CRYPTO BINDINGS</span>
                  <span className="text-zinc-200 font-bold block">Hermetic Cryptographic Standards</span>
                  <p className="text-[10px] text-zinc-500 font-sans mt-1 font-light">Sealed local node validation using parent keys.</p>
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] text-zinc-500 uppercase">PARENT DESIGN ALIGNMENT</span>
                  <span className="text-zinc-200 font-bold block">Extreme Grid Restraint</span>
                  <p className="text-[10px] text-zinc-500 font-sans mt-1 font-light">Strictly mapped to mathematical spacing locks.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <img 
                src="/src/assets/images/tiger_middle_east_abstract_1790499310142.jpg" 
                alt="Tiger ME Sovereign Layout Architecture" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 text-[9px] font-mono text-zinc-500 bg-zinc-950/90 border border-zinc-800 px-2 py-0.5 rounded">
                LOCKED SPECIFICATION // TIGER_MEA_1
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: Appropriate CTA                                                */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-yellow-500">
          <Settings className="w-6 h-6 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Coordinate Sovereign Enterprise Nodes</h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed font-light">
          Verify localized industrial automated process systems or request detailed integration specs under our locked visual standards.
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
