import { useState } from 'react';
import { Menu, X, Shield, Lock, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', route: 'home' },
    { label: 'Ecosystem', route: 'ecosystem' },
    { label: 'Tiger ME', route: 'tiger-middle-east' },
    { label: 'Chithi You', route: 'chithi-you' },
    { label: 'About', route: 'about' },
    { label: 'Legal', route: 'legal' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-zinc-900/60 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Logo & Parent Identity marker */}
        <button 
          onClick={() => {
            onNavigate('home');
            setIsOpen(false);
          }} 
          className="text-lg font-extrabold tracking-tighter text-white hover:opacity-90 transition-opacity focus:outline-none flex items-center gap-2"
        >
          <span>RAN LABS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => onNavigate(item.route)}
              className={`hover:text-white transition-colors duration-150 py-1 relative ${
                currentRoute === item.route ? 'text-white' : ''
              }`}
            >
              {item.label}
              {currentRoute === item.route && (
                <span className="absolute bottom-[-18px] left-0 right-0 h-0.5 bg-yellow-500"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Portal Call-To-Action to switch to Locked Brand Guidelines */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onNavigate('brand-portal')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-mono tracking-wide rounded-lg transition-colors duration-150 border ${
              currentRoute === 'brand-portal'
                ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
            }`}
          >
            <Lock className="w-3 h-3" />
            <span>Brand Identity Lock</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => onNavigate('brand-portal')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 rounded"
            title="Brand Guidelines"
          >
            <Lock className="w-3 h-3 text-yellow-500" />
            <span>Identity Lock</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors border border-zinc-900 rounded-lg"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-900 bg-neutral-950 animate-in slide-in-from-top-4 duration-150">
          <div className="px-6 py-4 space-y-3 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => {
                  onNavigate(item.route);
                  setIsOpen(false);
                }}
                className={`text-left py-2 text-xs font-semibold ${
                  currentRoute === item.route ? 'text-yellow-500' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
