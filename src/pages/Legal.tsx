import { useState } from 'react';
import { FileText, ShieldAlert, Key, HelpCircle, Terminal } from 'lucide-react';

type LegalSection = 'privacy' | 'terms' | 'general';

export default function Legal() {
  const [activeSection, setActiveSection] = useState<LegalSection>('privacy');

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-500 space-y-16">
      
      {/* ========================================================================= */}
      {/* SECTION 1: Brand Header                                                   */}
      {/* ========================================================================= */}
      <div className="max-w-3xl pb-10 border-b border-zinc-900">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Ecosystem Legal Framework</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
          Governance & Legal Agreements
        </h1>
        <p className="text-zinc-400 text-xs mt-3 leading-relaxed font-light">
          This directory governs the technological terms, privacy parameters, and general legal conditions of the central RAN Labs informational blueprint portal.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: Vertical Navigation and Content Panel Layout                  */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          
          <button
            onClick={() => setActiveSection('privacy')}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center gap-3 ${
              activeSection === 'privacy' 
                ? 'bg-zinc-900 border-zinc-700 text-white shadow' 
                : 'bg-zinc-950/20 border-zinc-900/60 text-zinc-400 hover:border-zinc-800'
            }`}
          >
            <Key className="w-4 h-4 text-sky-400" />
            <div className="text-xs">
              <span className="block font-bold">Privacy Assurance</span>
              <span className="block font-mono text-[9px] text-zinc-500 mt-0.5">DOC_ID: RL-PRIV-2026</span>
            </div>
          </button>

          <button
            onClick={() => setActiveSection('terms')}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center gap-3 ${
              activeSection === 'terms' 
                ? 'bg-zinc-900 border-zinc-700 text-white shadow' 
                : 'bg-zinc-950/20 border-zinc-900/60 text-zinc-400 hover:border-zinc-800'
            }`}
          >
            <FileText className="w-4 h-4 text-yellow-500" />
            <div className="text-xs">
              <span className="block font-bold">Terms & Ecosystem Agreement</span>
              <span className="block font-mono text-[9px] text-zinc-500 mt-0.5">DOC_ID: RL-ECO-AGREE</span>
            </div>
          </button>

          <button
            onClick={() => setActiveSection('general')}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center gap-3 ${
              activeSection === 'general' 
                ? 'bg-zinc-900 border-zinc-700 text-white shadow' 
                : 'bg-zinc-950/20 border-zinc-900/60 text-zinc-400 hover:border-zinc-800'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-zinc-400" />
            <div className="text-xs">
              <span className="block font-bold">General Legal Notices</span>
              <span className="block font-mono text-[9px] text-zinc-500 mt-0.5">DOC_ID: RL-GEN-NOTICE</span>
            </div>
          </button>

        </div>

        {/* Dynamic Content Panel */}
        <div className="lg:col-span-8 bg-zinc-900/10 border border-zinc-900 rounded-2xl p-8 space-y-6">
          
          {/* Active section header */}
          <div className="pb-4 border-b border-zinc-900 flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-500 uppercase">Interactive Legal Document Viewer</span>
            <span className="text-[9px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
              LOCKED STATUS // CONFIRMED
            </span>
          </div>

          {/* PRIVACY ASSURANCE */}
          {activeSection === 'privacy' && (
            <div className="space-y-6 text-xs text-zinc-400 leading-relaxed font-light animate-in fade-in duration-200">
              <h3 className="text-base font-bold text-white font-sans">01. Privacy & Decentralization Assurance</h3>
              
              <div className="space-y-4">
                <p>
                  <strong>No Personal Data Collection:</strong> This website operates strictly as an informational blueprint portal. We do not implement personal profiling cookies, analytical tracker scripts, or automated personal database registrations.
                </p>
                <p>
                  <strong>Zero Metadata Retention:</strong> Communications and messaging algorithms under our subsidiary brand protocols (e.g., Chithi You) operate client-side using end-to-end user-controlled keys. No decrypted raw payload or tracking metadata is logged on physical server layers.
                </p>
                <p>
                  <strong>Standard Server Logging:</strong> Standard CDN delivery servers may automatically log generic technical telemetry (such as anonymous IP headers) to secure execution layers. This logging is transient, self-purging, and is used exclusively for DDoS prevention.
                </p>
                <p className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl font-mono text-[10px] text-zinc-500">
                  <span className="block font-bold text-yellow-500 uppercase mb-1">Corporate Placement Mark</span>
                  Authorized representative: [Pending Authorized Corporate Representative Registration]<br />
                  Physical registry contact: [Pending Corporate Headquarters Address Registration]<br />
                  Digital contact portal: [Insert Official Corporate Registry Email]
                </p>
              </div>
            </div>
          )}

          {/* TERMS & ECOSYSTEM AGREEMENT */}
          {activeSection === 'terms' && (
            <div className="space-y-6 text-xs text-zinc-400 leading-relaxed font-light animate-in fade-in duration-200">
              <h3 className="text-base font-bold text-white font-sans">02. Terms of Use & Ecosystem Conformance Agreement</h3>
              
              <div className="space-y-4">
                <p>
                  <strong>Ecosystem Installation Conditions:</strong> Developers and subsidiaries building systems bearing the RAN Labs name (such as Tiger Middle East and Chithi You) are bound to the mathematical specifications laid out in our locked visual and structural guidelines.
                </p>
                <p>
                  <strong>Usage Restrictions:</strong> This portal is designed for informational synchronization. Users are prohibited from executing penetration tools, brute-forcing simulated console loops, or abusing state assets.
                </p>
                <p>
                  <strong>Static Simulation Status:</strong> Users understand that live terminal simulators are mock sandboxes representing visual and spatial logic. They do not constitute actual transaction dispatch arrays.
                </p>
                <p className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl font-mono text-[10px] text-zinc-500">
                  <span className="block font-bold text-yellow-500 uppercase mb-1">Ecosystem Agreement Mark</span>
                  Governing Jurisdiction: [Pending Legal Jurisdiction Determination]<br />
                  Registration Body: [Pending Official Corporate Entity Registration]<br />
                  Ecosystem Agreement ID: RL-ECO-AGREE-2026-V1
                </p>
              </div>
            </div>
          )}

          {/* GENERAL LEGAL NOTICES */}
          {activeSection === 'general' && (
            <div className="space-y-6 text-xs text-zinc-400 leading-relaxed font-light animate-in fade-in duration-200">
              <h3 className="text-base font-bold text-white font-sans">03. General Legal Notices & Disclaimers</h3>
              
              <div className="space-y-4">
                <p>
                  <strong>No Fictitious Claims:</strong> RAN Labs prides itself on absolute mathematical transparency. We do not display fabricated partnerships, unverified certifications, or mock customer logs. All parameters represent factual state designs.
                </p>
                <p>
                  <strong>Disclaimer of Warranties:</strong> This informational blueprint portal is provided "as is" without express or implied warrant of future system delivery dates. The physical nodes and timelines displayed represent active schedules and proposal metrics.
                </p>
                <p>
                  <strong>Trademark Protection:</strong> "RAN Labs", "Tiger Middle East", and "Chithi You" are sovereign design identifiers protected under the ecosystem’s copyright guidelines.
                </p>
                <p className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl font-mono text-[10px] text-zinc-500">
                  <span className="block font-bold text-yellow-500 uppercase mb-1">Trademark Notice</span>
                  All downstream assets and logos downloaded from this brand portal remain locked. No unauthorized modifications to our core geometry are permitted.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
