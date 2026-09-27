/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Shield, 
  Layers, 
  Copy, 
  Check, 
  Download, 
  ChevronRight, 
  Sliders, 
  Code, 
  Smartphone, 
  Cpu, 
  MessageSquare, 
  Lock, 
  Globe, 
  CheckCircle,
  X,
  FileText,
  AlertCircle
} from 'lucide-react';

// Locked assets & image references
const IMAGES = {
  ranLabs: '/src/assets/images/ran_labs_ecosystem_abstract_1790499294070.jpg',
  tigerME: '/src/assets/images/tiger_middle_east_abstract_1790499310142.jpg',
  chithiYou: '/src/assets/images/chithi_you_abstract_1790499324969.jpg',
};

// Types for brand system
interface ProductNode {
  id: string;
  name: string;
  role: string;
  positioning: string;
  description: string;
  colorHex: string;
  accentLabel: string;
  industry: string;
  targetAudience: string;
  image: string;
  visualIdentity: string;
  techStack: string[];
}

export default function BrandPortal() {
  // Navigation & Page state
  const [activeTab, setActiveTab] = useState<'overview' | 'system' | 'typography' | 'colors' | 'hierarchy' | 'rules'>('overview');
  
  // Interactive Spacing Explorer State
  const [selectedSpacing, setSelectedSpacing] = useState<string>('px-16');
  
  // Interactive Product Hierarchy State
  const [selectedProduct, setSelectedProduct] = useState<string>('ran-labs');
  
  // Live Typography Playground State
  const [typedText, setTypedText] = useState('Nurturing the future of decentralized computing and elegant communication.');
  const [selectedFontSize, setSelectedFontSize] = useState<number>(32);
  const [selectedLineHeight, setSelectedLineHeight] = useState<number>(1.4);
  const [selectedLetterSpacing, setSelectedLetterSpacing] = useState<string>('tracking-tight');

  // Copy toast state
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  // Download asset modal state
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(label);
    setTimeout(() => {
      setCopiedValue(null);
    }, 2000);
  };

  // RAN Labs Ecosystem Products definition
  const products: Record<string, ProductNode> = {
    'ran-labs': {
      id: 'ran-labs',
      name: 'RAN Labs (Parent)',
      role: 'Parent Technology & Product Ecosystem',
      positioning: 'Governing Technology & Design Engine',
      description: 'RAN Labs operates as the central intelligence and parent ecosystem. It defines visual standards, infrastructure foundations, cryptographic benchmarks, and design systems for all downstream initiatives, ensuring unified engineering values across independent brands.',
      colorHex: '#09090B',
      accentLabel: 'Ecosystem Obsidian',
      industry: 'Core Technology Ecosystem',
      targetAudience: 'Global Investors, Ecosystem Partners, Engineers',
      image: IMAGES.ranLabs,
      visualIdentity: 'Symmetrical, geometric alignments, extreme typographic restraint, zero ornamentation, dark-mode default depth.',
      techStack: ['Distributed Architecture', 'Vite & Tailwind Spec', 'TypeScript Engine', 'Hermetic Cryptographic Standards']
    },
    'tiger-middle-east': {
      id: 'tiger-middle-east',
      name: 'Tiger Middle East',
      role: 'Enterprise Localization & Industrial Automation',
      positioning: 'High-Performance Localized Systemic Engine',
      description: 'Under the RAN Labs technological umbrella, Tiger Middle East acts as the enterprise industrial powerhouse. It delivers localized system performance, advanced business process automation, and bespoke sovereign infrastructure across the Middle East and Africa region.',
      colorHex: '#EAB308',
      accentLabel: 'Sovereign Gold',
      industry: 'Industrial Automation & Enterprise Scaling',
      targetAudience: 'Sovereign Entities, Enterprise Leaders, Infrastructure Partners',
      image: IMAGES.tigerME,
      visualIdentity: 'Premium golden highlights, ultra-precise titanium grids, solid high-contrast lettering, high spatial layout rigor.',
      techStack: ['Industrial Process APIs', 'High-Speed Localized Databases', 'Sovereign Cryptography', 'Next-Gen Enterprise Nodes']
    },
    'chithi-you': {
      id: 'chithi-you',
      name: 'Chithi You',
      role: 'Human-Centric Communication & Secure Publishing',
      positioning: 'Sovereign Peer-to-Peer Message & Medium Platform',
      description: 'Chithi You reimagines communication. It serves as a secure, human-centric publishing and messaging medium. Built on top of RAN Labs security layers, it presents a delicate, highly trusted interface that handles digital identity with absolute integrity.',
      colorHex: '#0EA5E9',
      accentLabel: 'Calm Sky Blue',
      industry: 'Encrypted Peer-to-Peer Communication & Social Media',
      targetAudience: 'Global Creators, Sovereign Citizens, Identity Activists',
      image: IMAGES.chithiYou,
      visualIdentity: 'Subtle atmospheric sky scrims, airy paper-like organic shapes, highly legible asymmetric line breaks, fluid layouts.',
      techStack: ['Zero-Knowledge Communications', 'Peer-to-Peer State Sockets', 'Decentralized Content Anchors', 'Fluid-Design Interaction Engine']
    }
  };

  // Locked Rules Definition (Bad vs Good React examples)
  const lockedRules = [
    {
      id: 'RULE-01',
      title: 'Zero-Pill Static Metadata',
      concept: 'Information tags, categories, timestamps, and classifications must never be packaged inside rounded colored background capsules. Use unboxed text separated by elegant typographic markers (·).',
      badCode: `// ❌ INCORRECT: Wrapped in colored badge pills
<div className="flex gap-2">
  <span className="bg-zinc-800 text-zinc-100 rounded-full px-2 py-1 text-xs">
    Industrial
  </span>
  <span className="bg-yellow-950 text-yellow-400 rounded-full px-2 py-1 text-xs">
    Locked
  </span>
</div>`,
      goodCode: `// ✅ CORRECT: Clean unboxed metadata with separators
<div className="flex items-center gap-2 text-xs text-zinc-400">
  <span>Industrial</span>
  <span aria-hidden="true" className="text-zinc-600">·</span>
  <span className="text-yellow-400 font-medium">Locked</span>
</div>`
    },
    {
      id: 'RULE-02',
      title: 'Editorial Natural Numbering',
      concept: 'Sections, lists, and chapters must be numbered using clean human editorial formatting. Absolutely no mechanical commentary slashes, code-comment flags, or uppercase snake-case identifiers.',
      badCode: `// ❌ INCORRECT: Code comment notation / mechanical prefixes
<h3 className="text-lg font-mono">// 01_BRAND_PROPERTIES</h3>
<span className="text-xs">STATUS // ACTIVE</span>`,
      goodCode: `// ✅ CORRECT: Human editorial styling with proper hierarchy
<h3 className="text-lg font-semibold text-zinc-100">
  01. Brand Properties
</h3>
<span className="text-xs text-zinc-400">Status: Confirmed</span>`
    },
    {
      id: 'RULE-03',
      title: 'Strict Tabular Numerals',
      concept: 'Every numerical value, dimension, timestamp, ratio, and percentage must utilize monospace fonts and tabular numerals alignment. This ensures clean vertical synchronization across viewports.',
      badCode: `// ❌ INCORRECT: Standard proportional numerals
<span className="text-xl font-bold font-sans">
  $2,450.90 (94.25%)
</span>`,
      goodCode: `// ✅ CORRECT: Tabular numerals with monospace clarity
<span className="text-xl font-bold font-mono tabular-nums">
  $2,450.90 <span className="text-xs font-sans text-zinc-400">(94.25%)</span>
</span>`
    },
    {
      id: 'RULE-04',
      title: 'Affordance-Only Icons',
      concept: 'Reserve icon indicators strictly for practical interactive affordances (closing, downloading, expanding, navigating). Avoid scattering decorative emojis or icons next to standard static titles.',
      badCode: `// ❌ INCORRECT: Decorative icons cluttering layout
<h2>
  🚀 RAN Labs Ecosystem 🛠️
</h2>`,
      goodCode: `// ✅ CORRECT: Plain clean typography with visual focus
<h2 className="text-2xl font-bold tracking-tight">
  RAN Labs Ecosystem
</h2>`
    }
  ];

  const [activeRule, setActiveRule] = useState(0);

  // Locked Brand Assets definitions for copying
  const brandAssets = {
    wordmarkSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none" width="100%">
  <text x="10" y="52" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="38" letter-spacing="-1.5" fill="#FFFFFF">RAN LABS</text>
  <circle cx="218" cy="40" r="4" fill="#EAB308" />
  <circle cx="236" cy="40" r="4" fill="#0EA5E9" />
</svg>`,
    tigerMarkSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" width="100%">
  <rect width="100" height="100" rx="16" fill="#18181B" stroke="#27272A" stroke-width="2"/>
  <path d="M30 35 L70 35 L50 65 Z" fill="#EAB308"/>
  <circle cx="50" cy="48" r="8" fill="#18181B"/>
</svg>`,
    chithiMarkSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" width="100%">
  <rect width="100" height="100" rx="16" fill="#18181B" stroke="#27272A" stroke-width="2"/>
  <path d="M25 50 Q50 25 75 50 Q50 75 25 50 Z" fill="none" stroke="#0EA5E9" stroke-width="4"/>
  <circle cx="50" cy="50" r="6" fill="#0EA5E9"/>
</svg>`
  };

  return (
    <div className="flex flex-col font-sans">
      
      {/* GLOBAL TOAST NOTIFICATION */}
      {copiedValue && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 border border-zinc-800 text-zinc-100 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <div className="text-xs">
            <span className="font-mono font-semibold text-zinc-300">{copiedValue}</span> copied successfully!
          </div>
        </div>
      )}

      {/* INNER BRAND NAVIGATION BAR CONTRACT */}
      <div className="bg-zinc-950 border-b border-zinc-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Operational Engine</span>
            <h2 className="text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
              <span>Brand Identity Locked Specifications</span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {['overview', 'system', 'typography', 'colors', 'hierarchy', 'rules'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-3 py-1.5 text-[10px] font-mono rounded transition-colors uppercase border ${
                  activeTab === tab
                    ? 'bg-zinc-800 border-zinc-700 text-white'
                    : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CORE BODY WRAPPER */}
      <div className="flex-grow">

        {/* TAB 1: OVERVIEW HERO */}
        {activeTab === 'overview' && (
          <div className="animate-in fade-in duration-300">
            
            {/* HERO HERO SECTION */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-16 px-6">
              
              <div className="absolute inset-0 z-0">
                <img 
                  src={IMAGES.ranLabs} 
                  alt="RAN Labs Ecosystem Abstract" 
                  className="w-full h-full object-cover opacity-25 filter scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
                
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 mb-6 uppercase">
                  <span>RAN Labs Brand Council</span>
                  <span aria-hidden="true" className="text-zinc-700">·</span>
                  <span className="text-yellow-500 font-semibold">Epoch September 2026</span>
                  <span aria-hidden="true" className="text-zinc-700">·</span>
                  <span>v1.0.0 Locked</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 text-wrap-balance leading-[1.05]">
                  RAN LABS
                </h1>

                <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-8 text-wrap-balance font-light leading-relaxed">
                  A parent technology and product ecosystem nurturing next-generation platforms, secure sovereign communication mediums, and regional industrial scale automation.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    onClick={() => setActiveTab('hierarchy')}
                    className="group px-6 py-2.5 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-xl transition-all duration-200 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    Explore Brand Hierarchy
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button 
                    onClick={() => setIsDownloadOpen(true)}
                    className="px-6 py-2.5 text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 rounded-xl transition-all duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2"
                  >
                    <Download className="w-3 h-3" />
                    Download Vector Assets
                  </button>
                </div>

              </div>
            </section>

            {/* PRE-CONFIRMED SUMMARY HIGHLIGHTS */}
            <section className="bg-zinc-950 border-t border-zinc-900 py-16 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  <div className="p-8 bg-zinc-900/30 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-colors duration-200">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-6 text-zinc-300">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100 mb-3">01. Central Intelligence</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      RAN Labs operates at the pinnacle. It houses core technologies, system architectures, cryptographic layers, and the governance that shapes external interfaces.
                    </p>
                  </div>

                  <div className="p-8 bg-zinc-900/30 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-colors duration-200">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 text-yellow-500">
                      <Globe className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100 mb-3">02. Industrial Dominance</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      Tiger Middle East drives enterprise automation, localizing state-of-the-art system solutions specifically tailored for sovereign and private operators in the MEA region.
                    </p>
                  </div>

                  <div className="p-8 bg-zinc-900/30 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-colors duration-200">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center mb-6 text-sky-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100 mb-3">03. Secure Mediums</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      Chithi You redefines messaging and sovereign content publishing, giving individuals highly secure, humanized communication frameworks free of systemic surveillance.
                    </p>
                  </div>

                </div>
              </div>
            </section>

          </div>
        )}

        {/* TAB 2: SYSTEM & SPACING */}
        {activeTab === 'system' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Brand Blueprint</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-100">
                Visual Foundation
              </h2>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-light">
                An Apple-inspired, mathematically balanced design language. We prioritize space, silence, high contrast text, and micro-grid discipline over visual noise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 bg-zinc-900/40 rounded-2xl border border-zinc-900 p-8">
                <h3 className="text-sm font-semibold text-zinc-300 mb-6 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-yellow-500" />
                  Locked Spacing Units
                </h3>
                
                <div className="space-y-4">
                  {[
                    { label: '4px Micro-Margin', class: 'px-1', value: '0.25rem', px: '4px' },
                    { label: '8px Compact-Gap', class: 'px-2', value: '0.5rem', px: '8px' },
                    { label: '12px Sub-Spacing', class: 'px-3', value: '0.75rem', px: '12px' },
                    { label: '16px Inner Padding', class: 'px-4', value: '1.0rem', px: '16px' },
                    { label: '24px standard Container', class: 'px-6', value: '1.5rem', px: '24px' },
                    { label: '32px Large Section-Gap', class: 'px-8', value: '2.0rem', px: '32px' },
                    { label: '48px Structural Padding', class: 'px-12', value: '3.0rem', px: '48px' },
                    { label: '64px Cinematic Spacing', class: 'px-16', value: '4.0rem', px: '64px' },
                  ].map((unit) => (
                    <button
                      key={unit.class}
                      onClick={() => setSelectedSpacing(unit.class)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-150 border flex items-center justify-between ${
                        selectedSpacing === unit.class 
                          ? 'bg-zinc-800/60 border-zinc-700 text-white shadow-sm' 
                          : 'bg-zinc-950/20 border-zinc-900/60 text-zinc-400 hover:border-zinc-800'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-medium">{unit.label}</span>
                        <span className="text-[10px] font-mono text-zinc-500 mt-0.5">Tailwind: <code className="text-zinc-300 font-medium">{unit.class}</code></span>
                      </div>
                      <div className="text-right font-mono text-[10px] text-zinc-500">
                        <div>{unit.value}</div>
                        <div className="text-zinc-400 font-semibold mt-0.5">{unit.px}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-zinc-900/20 rounded-2xl border border-zinc-900/60 p-8 flex flex-col justify-between h-full min-h-[500px]">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-zinc-500">Live Blueprint sandbox</span>
                    <span className="text-[10px] font-mono text-yellow-500 uppercase px-2.5 py-0.5 bg-yellow-500/10 rounded border border-yellow-500/20">
                      Interactive Preview
                    </span>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Sandbox Output</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">
                      Change units in the left panel to live-preview spatial density. Standard nesting rules demand container outer padding $\ge$ inner padding between children.
                    </p>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 mt-8 overflow-hidden">
                    <div className="border border-dashed border-zinc-800 rounded p-4">
                      <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono mb-2">
                        <span>Outer Box</span>
                        <span className="text-yellow-500">Active class: {selectedSpacing}</span>
                      </div>

                      <div className="bg-zinc-900/80 rounded-lg border border-zinc-800/80">
                        <div className={`flex flex-col gap-4 py-6 ${selectedSpacing}`}>
                          <div className="bg-zinc-950 border border-zinc-800 rounded p-3 text-left">
                            <div className="text-xs font-bold text-zinc-300">Child Component Alpha</div>
                            <div className="text-[10px] text-zinc-500 mt-1">Conforms to standard structural limits.</div>
                          </div>
                          <div className="bg-zinc-950 border border-zinc-800 rounded p-3 text-left">
                            <div className="text-xs font-bold text-zinc-300">Child Component Beta</div>
                            <div className="text-[10px] text-zinc-500 mt-1 font-mono tabular-nums">Alignment: 100% Locked</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div className="text-zinc-500 leading-relaxed font-light">
                    The active layout is using standard Tailwind spacing rules locked specifically for <strong className="text-zinc-300 font-medium">RAN Labs</strong>.
                  </div>
                  <button 
                    onClick={() => copyToClipboard(selectedSpacing, 'Spacing Class')}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg transition-colors font-mono text-[10px] shrink-0 border border-zinc-800"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    Copy Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TYPOGRAPHY */}
        {activeTab === 'typography' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Typographic Guidelines</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-100">
                Strict Type Scale
              </h2>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-light">
                We combine the modern, high-precision geometry of <span className="text-white font-medium">Plus Jakarta Sans</span> with high-utility monospace systems for numerical and technical telemetry layout.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 bg-zinc-900/40 rounded-2xl border border-zinc-900 p-8">
                <h3 className="text-sm font-semibold text-zinc-300 mb-6 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-yellow-500" />
                  Scale Settings
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center text-xs text-zinc-400 mb-2">
                      <span>Font Size</span>
                      <span className="font-mono text-yellow-500 font-bold">{selectedFontSize}px</span>
                    </div>
                    <input 
                      type="range" 
                      min="16" 
                      max="72" 
                      value={selectedFontSize} 
                      onChange={(e) => setSelectedFontSize(Number(e.target.value))}
                      className="w-full accent-yellow-500 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[9px] text-zinc-600 mt-1">
                      <span>16px</span>
                      <span>48px</span>
                      <span>72px</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs text-zinc-400 mb-2">
                      <span>Line Height (Proportion)</span>
                      <span className="font-mono text-yellow-500 font-bold">{selectedLineHeight}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1.1, 1.4, 1.7].map((val) => (
                        <button
                          key={val}
                          onClick={() => setSelectedLineHeight(val)}
                          className={`py-1.5 text-xs font-mono rounded-lg transition-colors border ${
                            selectedLineHeight === val 
                              ? 'bg-zinc-800 border-zinc-700 text-white' 
                              : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs text-zinc-400 mb-2">
                      <span>Letter Spacing</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Tight', class: 'tracking-tight' },
                        { label: 'Normal', class: 'tracking-normal' },
                        { label: 'Wide', class: 'tracking-widest' },
                      ].map((item) => (
                        <button
                          key={item.class}
                          onClick={() => setSelectedLetterSpacing(item.class)}
                          className={`py-1.5 text-xs rounded-lg transition-colors border ${
                            selectedLetterSpacing === item.class 
                              ? 'bg-zinc-800 border-zinc-700 text-white' 
                              : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedFontSize(32);
                      setSelectedLineHeight(1.4);
                      setSelectedLetterSpacing('tracking-tight');
                      setTypedText('Nurturing the future of decentralized computing and elegant communication.');
                    }}
                    className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl text-xs transition-colors border border-zinc-800"
                  >
                    Reset Defaults
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 bg-zinc-900/20 rounded-2xl border border-zinc-900/60 p-8">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Live Type Playground</span>
                
                <div className="mt-4 mb-8">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Interactive Input</label>
                  <input
                    type="text"
                    value={typedText}
                    onChange={(e) => setTypedText(e.target.value)}
                    placeholder="Enter custom sentence..."
                    className="w-full bg-zinc-950 border border-zinc-800 hover:border-zinc-700 focus:border-yellow-500 focus:outline-none rounded-xl px-4 py-3 text-sm text-zinc-100 transition-colors"
                  />
                </div>

                <div className="border border-dashed border-zinc-800 rounded-xl p-8 min-h-[220px] flex items-center justify-center bg-zinc-950/80">
                  <p 
                    style={{ 
                      fontSize: `${selectedFontSize}px`, 
                      lineHeight: selectedLineHeight,
                    }}
                    className={`text-wrap-balance text-white font-semibold transition-all duration-150 ${selectedLetterSpacing}`}
                  >
                    {typedText}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-zinc-900">
                  <div>
                    <span className="block text-[9px] font-mono text-zinc-500 uppercase">Display Font</span>
                    <span className="text-xs text-zinc-300 font-medium">Plus Jakarta Sans</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-zinc-500 uppercase">Weight Specs</span>
                    <span className="text-xs text-zinc-300 font-medium">ExtraBold (800)</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-zinc-500 uppercase">Body Copy Specs</span>
                    <span className="text-xs text-zinc-300 font-medium">Regular (400) / 1.6lh</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-zinc-500 uppercase">Monospace System</span>
                    <span className="text-xs text-zinc-300 font-medium">JetBrains Mono</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: COLOR SPACE */}
        {activeTab === 'colors' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Locked Color Coordinates</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-100">
                60-30-10 Color System
              </h2>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-light">
                We distribute luminosity with geometric discipline. Our canvas is deep, our text is crisp, and colors are reserved solely for sub-brand emphasis and interaction affordances.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">01. Neutrals & Canvas Space (60% to 30% Budget)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: 'Canvas Deep Black', hex: '#09090b', usage: 'Dominant field background', budget: '60%' },
                    { name: 'Canvas Surface Gray', hex: '#18181b', usage: 'Card surfaces & primary structural rows', budget: '30%' },
                    { name: 'Control border / Hairline', hex: 'rgba(255,255,255,0.06)', usage: 'Borders & visual dividers', budget: '30%' },
                    { name: 'Text High Contrast', hex: '#fafafa', usage: 'Primary headlines and text selections', budget: '30%' }
                  ].map((color, idx) => (
                    <div 
                      key={idx}
                      className="bg-zinc-900/40 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-colors duration-200 group"
                    >
                      <div 
                        style={{ backgroundColor: color.hex }}
                        className="h-32 w-full relative flex items-end p-4 border-b border-zinc-900"
                      >
                        <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950/70 border border-zinc-800 px-2 py-0.5 rounded backdrop-blur-sm select-all">
                          {color.hex}
                        </span>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-semibold text-zinc-200">{color.name}</h4>
                          <span className="text-[9px] font-mono text-yellow-500 font-bold bg-yellow-500/10 px-1.5 py-0.5 rounded">
                            {color.budget} Budget
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed font-light">{color.usage}</p>
                        
                        <button
                          onClick={() => copyToClipboard(color.hex, color.name)}
                          className="mt-4 w-full py-1.5 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-lg text-[10px] font-mono transition-colors border border-zinc-800/80 flex items-center justify-center gap-1.5"
                        >
                          <Copy className="w-3 h-3" />
                          Copy Hex
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">02. Accent Space (10% Budget Affinity)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'Tiger Sovereign Gold', hex: '#eab308', usage: 'Accent color for Tiger Middle East automation & enterprise nodes.', focus: 'Tiger ME' },
                    { name: 'Chithi Sky Blue', hex: '#0ea5e9', usage: 'Accent color for Chithi You user interaction Waves and message indicators.', focus: 'Chithi You' },
                    { name: 'Standard Neutral Accent', hex: '#fafafa', usage: 'Primary default controls and interactive indicator hover overrides.', focus: 'RAN Labs General' }
                  ].map((color, idx) => (
                    <div 
                      key={idx}
                      className="bg-zinc-900/40 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-colors duration-200 group"
                    >
                      <div 
                        style={{ backgroundColor: color.hex }}
                        className="h-32 w-full relative flex items-end p-4 border-b border-zinc-900"
                      >
                        <span className={`text-[10px] font-mono border px-2 py-0.5 rounded backdrop-blur-sm select-all ${
                          color.hex === '#fafafa' ? 'bg-zinc-950 text-zinc-300 border-zinc-800' : 'bg-zinc-950/70 text-zinc-200 border-zinc-800'
                        }`}>
                          {color.hex}
                        </span>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-semibold text-zinc-200">{color.name}</h4>
                          <span className="text-[9px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded font-medium">
                            {color.focus}
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-500 mt-2 leading-relaxed font-light">{color.usage}</p>
                        
                        <button
                          onClick={() => copyToClipboard(color.hex, color.name)}
                          className="mt-4 w-full py-1.5 bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-lg text-[10px] font-mono transition-colors border border-zinc-800/80 flex items-center justify-center gap-1.5"
                        >
                          <Copy className="w-3 h-3" />
                          Copy Hex
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: PRODUCT HIERARCHY */}
        {activeTab === 'hierarchy' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Brand Ecosystem</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-100">
                Products Hierarchy
              </h2>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-light">
                Define and lock parent-child relationships clearly. RAN Labs acts as the core sovereign architecture, guiding Tiger Middle East and Chithi You as dedicated entities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-4">
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Select Active Node</h4>

                <button
                  onClick={() => setSelectedProduct('ran-labs')}
                  className={`w-full p-6 text-left rounded-2xl border transition-all duration-200 relative overflow-hidden flex flex-col ${
                    selectedProduct === 'ran-labs'
                      ? 'bg-zinc-900 border-zinc-700 text-white shadow-lg'
                      : 'bg-zinc-900/20 border-zinc-900 text-zinc-400 hover:border-zinc-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 mb-2 uppercase">
                    <Shield className="w-3 h-3 text-yellow-500" />
                    <span>Parent Ecosystem</span>
                  </div>
                  <span className="text-lg font-bold text-zinc-100">RAN Labs</span>
                  <span className="text-xs text-zinc-400 mt-1 leading-normal font-light">Governing standard-bearer & technology driver.</span>
                  
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                      selectedProduct === 'ran-labs' ? 'translate-x-1 text-yellow-500' : 'text-zinc-700'
                    }`} />
                  </div>
                </button>

                <div className="hidden lg:block h-6 w-0.5 bg-zinc-900 ml-12"></div>

                <button
                  onClick={() => setSelectedProduct('tiger-middle-east')}
                  className={`w-full p-6 text-left rounded-2xl border transition-all duration-200 relative overflow-hidden flex flex-col ${
                    selectedProduct === 'tiger-middle-east'
                      ? 'bg-zinc-900 border-zinc-700 text-white shadow-lg'
                      : 'bg-zinc-900/20 border-zinc-900 text-zinc-400 hover:border-zinc-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[10px] font-mono text-yellow-500 mb-2 uppercase">
                    <Globe className="w-3 h-3" />
                    <span>Sub-Brand / Product</span>
                  </div>
                  <span className="text-lg font-bold text-zinc-100">Tiger Middle East</span>
                  <span className="text-xs text-zinc-400 mt-1 leading-normal font-light">Localized enterprise industrial intelligence.</span>
                  
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                      selectedProduct === 'tiger-middle-east' ? 'translate-x-1 text-yellow-500' : 'text-zinc-700'
                    }`} />
                  </div>
                </button>

                <button
                  onClick={() => setSelectedProduct('chithi-you')}
                  className={`w-full p-6 text-left rounded-2xl border transition-all duration-200 relative overflow-hidden flex flex-col ${
                    selectedProduct === 'chithi-you'
                      ? 'bg-zinc-900 border-zinc-700 text-white shadow-lg'
                      : 'bg-zinc-900/20 border-zinc-900 text-zinc-400 hover:border-zinc-800/80'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[10px] font-mono text-sky-400 mb-2 uppercase">
                    <MessageSquare className="w-3 h-3" />
                    <span>Sub-Brand / Product</span>
                  </div>
                  <span className="text-lg font-bold text-zinc-100">Chithi You</span>
                  <span className="text-xs text-zinc-400 mt-1 leading-normal font-light">Sovereign peer-to-peer messaging & publishing.</span>
                  
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                      selectedProduct === 'chithi-you' ? 'translate-x-1 text-sky-400' : 'text-zinc-700'
                    }`} />
                  </div>
                </button>
              </div>

              <div className="lg:col-span-8 bg-zinc-900/30 rounded-2xl border border-zinc-900 p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-zinc-900">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <span>Ecosystem Node Inspector</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-zinc-500 font-mono text-[10px] font-semibold">{products[selectedProduct].id.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-1">{products[selectedProduct].name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2.5 bg-zinc-950 border border-zinc-900 p-2 px-3 rounded-xl">
                    <span 
                      style={{ backgroundColor: products[selectedProduct].colorHex }}
                      className="w-3 h-3 rounded-full border border-zinc-800"
                    ></span>
                    <span className="text-[10px] font-mono text-zinc-400">{products[selectedProduct].accentLabel}</span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase">Core Ecosystem Role</span>
                      <p className="text-sm text-zinc-200 mt-1 leading-relaxed font-semibold">{products[selectedProduct].role}</p>
                    </div>

                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase">Positioning Statement</span>
                      <p className="text-xs text-zinc-300 mt-1 leading-relaxed font-light italic">"{products[selectedProduct].positioning}"</p>
                    </div>

                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase">Description / Scope</span>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">{products[selectedProduct].description}</p>
                    </div>

                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase">Visual Identity Alignment</span>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">{products[selectedProduct].visualIdentity}</p>
                    </div>

                    <div>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase">Ecosystem Tech Stack Bindings</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {products[selectedProduct].techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-[9px] font-mono bg-zinc-950 border border-zinc-900 text-zinc-400 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-4">
                    <span className="block text-[9px] font-mono text-zinc-500 uppercase">Locked Visual Core Asset</span>
                    
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 group">
                      <img 
                        src={products[selectedProduct].image} 
                        alt={products[selectedProduct].name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                      
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-[9px] font-mono text-zinc-400 bg-zinc-950/90 border border-zinc-800 px-2 py-0.5 rounded backdrop-blur-sm">
                          LOCKED // STATIC
                        </span>
                        
                        <button 
                          onClick={() => copyToClipboard(products[selectedProduct].image, products[selectedProduct].name + ' Image Path')}
                          className="p-1 rounded bg-zinc-950/90 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 transition-colors"
                          title="Copy reference path"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-900 space-y-2.5 text-[10px]">
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Target Industry:</span>
                        <span className="font-semibold text-zinc-300">{products[selectedProduct].industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Audience Segment:</span>
                        <span className="font-semibold text-zinc-300">{products[selectedProduct].targetAudience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: RULES ENGINE */}
        {activeTab === 'rules' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-in fade-in duration-300">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Architectural Compliance</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-100">
                Rules & Code Governance
              </h2>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-light">
                To guarantee zero-AI slop and retain a pure Apple-inspired software engineering standard, every RAN Labs developer must compile frontend files matching these exact code laws.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-3">
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Locked Principles</h4>
                {lockedRules.map((rule, idx) => (
                  <button
                    key={rule.id}
                    onClick={() => setActiveRule(idx)}
                    className={`w-full p-4 text-left rounded-xl border transition-all duration-150 flex flex-col ${
                      activeRule === idx
                        ? 'bg-zinc-900 border-zinc-700 text-white shadow-md'
                        : 'bg-zinc-900/20 border-zinc-900 text-zinc-400 hover:border-zinc-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[9px] font-mono text-yellow-500 mb-1 font-bold">
                      <Lock className="w-3 h-3" />
                      <span>{rule.id}</span>
                    </div>
                    <span className="text-xs font-bold text-zinc-200">{rule.title}</span>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-8 bg-zinc-900/30 rounded-2xl border border-zinc-900 p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span>Locked Spec Compliance</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-yellow-500 font-mono text-[10px] font-bold">{lockedRules[activeRule].id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">{lockedRules[activeRule].title}</h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-light">
                    {lockedRules[activeRule].concept}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-zinc-950 border border-rose-950/40 rounded-xl overflow-hidden">
                    <div className="bg-rose-950/10 border-b border-rose-950/30 p-3 px-4 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-rose-400">Non-Compliant Code (Banned)</span>
                      <X className="w-3.5 h-3.5 text-rose-400" />
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-[10px] font-mono text-rose-200/80 leading-normal">
                        <code>{lockedRules[activeRule].badCode}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-emerald-950/40 rounded-xl overflow-hidden">
                    <div className="bg-emerald-950/10 border-b border-emerald-950/30 p-3 px-4 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-emerald-400">Compliant Standard (Required)</span>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="p-4 overflow-x-auto relative">
                      <pre className="text-[10px] font-mono text-emerald-200/80 leading-normal">
                        <code>{lockedRules[activeRule].goodCode}</code>
                      </pre>

                      <button
                        onClick={() => copyToClipboard(lockedRules[activeRule].goodCode, 'Standard React Code')}
                        className="absolute top-3 right-3 p-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800"
                        title="Copy Correct Code"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-900 flex items-center gap-3 text-xs">
                  <AlertCircle className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span className="text-zinc-500 leading-relaxed font-light">
                    Violating these rules will result in automatic build/lint rejection upon compilation. Conform strict spacing and typings.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* DOWNLOAD MODAL DIALOG */}
      {isDownloadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Locked Vector Asset Pack</h3>
                <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">Copy verified vector mark SVGs for ecosystem integration.</p>
              </div>
              <button 
                onClick={() => setIsDownloadOpen(false)}
                className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-300">RAN Labs Official Wordmark SVG</span>
                  <button
                    onClick={() => copyToClipboard(brandAssets.wordmarkSvg, 'RAN Labs Wordmark SVG')}
                    className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 rounded transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    Copy SVG Code
                  </button>
                </div>
                <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center min-h-[80px]">
                  <div className="w-48" dangerouslySetInnerHTML={{ __html: brandAssets.wordmarkSvg }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-zinc-300">Tiger ME Icon</span>
                    <button
                      onClick={() => copyToClipboard(brandAssets.tigerMarkSvg, 'Tiger ME Icon SVG')}
                      className="text-[9px] font-mono bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 p-1 px-2 rounded transition-colors"
                    >
                      Copy SVG
                    </button>
                  </div>
                  <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center min-h-[80px]">
                    <div className="w-12 h-12" dangerouslySetInnerHTML={{ __html: brandAssets.tigerMarkSvg }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-zinc-300">Chithi You Icon</span>
                    <button
                      onClick={() => copyToClipboard(brandAssets.chithiMarkSvg, 'Chithi You Icon SVG')}
                      className="text-[9px] font-mono bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 p-1 px-2 rounded transition-colors"
                    >
                      Copy SVG
                    </button>
                  </div>
                  <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center min-h-[80px]">
                    <div className="w-12 h-12" dangerouslySetInnerHTML={{ __html: brandAssets.chithiMarkSvg }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 p-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setIsDownloadOpen(false)}
                className="px-4 py-2 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs rounded-lg transition-colors"
              >
                Close Portal
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
