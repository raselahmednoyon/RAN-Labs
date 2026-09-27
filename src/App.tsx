import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages lazy loaders/direct imports
import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';
import TigerMiddleEast from './pages/TigerMiddleEast';
import ChithiYou from './pages/ChithiYou';
import About from './pages/About';
import Legal from './pages/Legal';
import BrandPortal from './pages/BrandPortal';

export default function App() {
  // Parse initial route from URL path to support bookmarking and direct navigation
  const getInitialRoute = (): string => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    const validRoutes = ['ecosystem', 'tiger-middle-east', 'chithi-you', 'about', 'legal', 'brand-portal'];
    return validRoutes.includes(path) ? path : 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);

  // Sync state with back/forward history navigation buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update browser URL state during internal client navigation
  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    const targetPath = route === 'home' ? '/' : `/${route}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  };

  // Dynamic SEO friendly title/meta updates
  useEffect(() => {
    let title = 'RAN Labs — Parent Technology Ecosystem';
    let description = 'The governing architectural hub managing advanced sovereign compute portfolios.';

    switch (currentRoute) {
      case 'home':
        title = 'RAN Labs — Parent Technology Ecosystem';
        break;
      case 'ecosystem':
        title = 'Ecosystem Portfolio Tree — RAN Labs';
        description = 'A comprehensive mapping of parent-to-child relationships inside the portfolio.';
        break;
      case 'tiger-middle-east':
        title = 'Tiger Middle East — Sovereign Enterprise Automation';
        description = 'Sovereign industrial process localization and next-generation infrastructure.';
        break;
      case 'chithi-you':
        title = 'Chithi You — Sovereign Humanized Communication Medium';
        description = 'Encrypted message delivery formats, fluid layouts, and zero-knowledge digital signatures.';
        break;
      case 'about':
        title = 'About RAN Labs — Core Architectural Council';
        description = 'Our founding principles, system discipline, and milestone trajectories.';
        break;
      case 'legal':
        title = 'Legal Framework & Agreements — RAN Labs';
        description = 'Privacy assurances, downsteam brand conditions, and cryptographic laws.';
        break;
      case 'brand-portal':
        title = 'RAN Labs Brand Identity Portal — Official Specifications';
        description = 'Locked visual specifications, spacing metrics, typography scales, and code guidelines.';
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    
    // Sync OpenGraph tags dynamically for refined SEO friendliness
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Scroll to top on navigation to keep UX fluid
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentRoute]);

  // Main Page renderer
  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'ecosystem':
        return <Ecosystem />;
      case 'tiger-middle-east':
        return <TigerMiddleEast />;
      case 'chithi-you':
        return <ChithiYou />;
      case 'about':
        return <About />;
      case 'legal':
        return <Legal />;
      case 'brand-portal':
        return <BrandPortal />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      
      {/* Dynamic Global Top Indicator Banner for Design Portal integration */}
      <div className="bg-gradient-to-r from-yellow-500/10 via-zinc-900/40 to-sky-500/10 border-b border-zinc-900 px-6 py-2 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-wide">
          <span className="text-zinc-400 font-semibold">Active Mode:</span>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span>Official Identity Spec</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>&</span>
            <span>Step 2 Website Architecture Enabled</span>
          </div>
          <button 
            onClick={() => handleNavigate('brand-portal')}
            className="sm:ml-3 text-yellow-500 hover:text-yellow-400 font-bold transition-colors underline underline-offset-2"
          >
            Access Identity Spec Portal &rarr;
          </button>
        </div>
      </div>

      {/* Shared Header Navigation */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Dynamic Main Body Content */}
      <main className="flex-grow flex flex-col pb-16">
        {renderPage()}
      </main>

      {/* Shared Footer Navigation */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
