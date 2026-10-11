import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchFilterBar } from './components/SearchFilterBar';
import { CyberHelpsMainPage } from './components/CyberHelpsMainPage';
import { PlatformArchitecture } from './components/PlatformArchitecture';
import { ContactAndNewsroom } from './components/ContactAndNewsroom';
import { NewsroomArticles } from './components/NewsroomArticles';
import { StealthCalculatorModal } from './components/StealthCalculatorModal';
import { SosModal } from './components/SosModal';
import { FounderContactModal } from './components/FounderContactModal';
import { Footer } from './components/Footer';
import {
  DEFENSE_STEPS,
  CORE_MODULES,
  HELPLINES,
  NEWS_ARTICLES,
  LEGAL_FRAMEWORKS,
  FAQS,
} from './data/platformData';
import {
  PRODUCTS_PORTFOLIO,
  CAPABILITIES,
  AI_LABS,
  PUBLICATIONS,
} from './data/cyberHelpsData';
import { ShieldAlert, ArrowRight, Calculator } from 'lucide-react';

export default function App() {
  // Default to the main page from the uploaded image!
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isSosOpen, setIsSosOpen] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isFounderModalOpen, setIsFounderModalOpen] = useState<boolean>(false);

  // Compute unified search statistics across all products & modules
  const searchStats = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      return {
        totalMatches:
          PRODUCTS_PORTFOLIO.length +
          CAPABILITIES.length +
          AI_LABS.length +
          PUBLICATIONS.length +
          DEFENSE_STEPS.length +
          CORE_MODULES.length +
          HELPLINES.length +
          NEWS_ARTICLES.length,
        productMatches: PRODUCTS_PORTFOLIO.length,
        surakshaMatches: DEFENSE_STEPS.length + CORE_MODULES.length,
        capabilitiesMatches: CAPABILITIES.length,
        labsMatches: AI_LABS.length,
        newsMatches: PUBLICATIONS.length + NEWS_ARTICLES.length,
        helplineMatches: HELPLINES.length,
        founderMatches: 1,
      };
    }

    const productMatches = PRODUCTS_PORTFOLIO.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q)
    ).length;

    const surakshaMatches =
      DEFENSE_STEPS.filter(
        s =>
          s.title.toLowerCase().includes(q) ||
          s.summary.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      ).length +
      CORE_MODULES.filter(
        m =>
          m.title.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)
      ).length;

    const capabilitiesMatches = CAPABILITIES.filter(
      c =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    ).length;

    const labsMatches = AI_LABS.filter(
      l =>
        l.title.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q)
    ).length;

    const newsMatches =
      PUBLICATIONS.filter(
        pub =>
          pub.title.toLowerCase().includes(q) ||
          pub.description.toLowerCase().includes(q)
      ).length +
      NEWS_ARTICLES.filter(
        n =>
          n.title.toLowerCase().includes(q) ||
          n.summary.toLowerCase().includes(q)
      ).length;

    const helplineMatches = HELPLINES.filter(
      h =>
        h.number.toLowerCase().includes(q) ||
        h.name.toLowerCase().includes(q) ||
        h.category.toLowerCase().includes(q)
    ).length;

    const founderMatches =
      'aduri inna reddy chairman founder journalist chief editor cyber helps technologies'
        .includes(q) ? 1 : 0;

    const totalMatches =
      productMatches +
      surakshaMatches +
      capabilitiesMatches +
      labsMatches +
      newsMatches +
      helplineMatches +
      founderMatches;

    return {
      totalMatches,
      productMatches,
      surakshaMatches,
      capabilitiesMatches,
      labsMatches,
      newsMatches,
      helplineMatches,
      founderMatches,
    };
  }, [searchQuery]);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'home') {
      setActiveTab('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cat === 'products') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById('products-portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (cat === 'suraksha') {
      setActiveTab('suraksha');
    } else if (cat === 'labs') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById('ai-labs')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (cat === 'capabilities') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById('core-capabilities')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (cat === 'founder') {
      setActiveTab('founder');
    } else if (cat === 'news') {
      setActiveTab('news');
    } else if (cat === 'contact' || cat === 'helplines') {
      setActiveTab('contact');
    }
  };

  const handleNavigateFromTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'products') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById('products-portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (tab === 'labs') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById('ai-labs')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (tab === 'capabilities') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById('core-capabilities')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (tab === 'impact') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById('impact-ethics')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (tab === 'founder') {
      setActiveTab('founder');
      setTimeout(() => {
        document.getElementById('founder-spotlight')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (tab === 'contact') {
      setActiveTab('contact');
      setTimeout(() => {
        document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1321] text-[#dee2f6] flex flex-col font-body selection:bg-[#06b6d4] selection:text-[#00424f]">
      {/* 1. Header with Cyberhelps Technologies branding & quick actions */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigateFromTab}
        onOpenSos={() => setIsSosOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* 2. Real-Time Top Search Bar */}
      <SearchFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        resultsCount={searchStats.totalMatches}
        totalItemsCount={
          PRODUCTS_PORTFOLIO.length +
          CAPABILITIES.length +
          AI_LABS.length +
          PUBLICATIONS.length +
          DEFENSE_STEPS.length +
          CORE_MODULES.length +
          HELPLINES.length +
          NEWS_ARTICLES.length
        }
      />

      {/* 3. Search Active Query Ribbon */}
      {searchQuery && (
        <div className="w-full bg-[#161b2a] border-b border-[#252a39] px-4 py-2 text-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#bcc9cd]">Filtering by "{searchQuery}":</span>
              <span className="font-mono text-[#4cd7f6] font-bold">
                {searchStats.totalMatches} match{searchStats.totalMatches === 1 ? '' : 'es'} found
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
              {searchStats.productMatches > 0 && (
                <button
                  onClick={() => {
                    setActiveTab('home');
                    document.getElementById('products-portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-2 py-0.5 rounded bg-[#252a39] hover:bg-[#303444] text-white flex items-center gap-1"
                >
                  <span>Products ({searchStats.productMatches})</span>
                  <ArrowRight className="w-3 h-3 text-[#4cd7f6]" />
                </button>
              )}
              {searchStats.surakshaMatches > 0 && (
                <button
                  onClick={() => setActiveTab('suraksha')}
                  className="px-2 py-0.5 rounded bg-[#252a39] hover:bg-[#303444] text-white flex items-center gap-1"
                >
                  <span>SURAKSHA Matrix ({searchStats.surakshaMatches})</span>
                  <ArrowRight className="w-3 h-3 text-[#4cd7f6]" />
                </button>
              )}
              {searchStats.newsMatches > 0 && (
                <button
                  onClick={() => setActiveTab('news')}
                  className="px-2 py-0.5 rounded bg-[#252a39] hover:bg-[#303444] text-white flex items-center gap-1"
                >
                  <span>News & Research ({searchStats.newsMatches})</span>
                  <ArrowRight className="w-3 h-3 text-[#4cd7f6]" />
                </button>
              )}
              {searchStats.founderMatches > 0 && (
                <button
                  onClick={() => setActiveTab('founder')}
                  className="px-2 py-0.5 rounded bg-[#252a39] hover:bg-[#303444] text-[#4cd7f6] flex items-center gap-1"
                >
                  <span>Founder Dossier</span>
                  <ArrowRight className="w-3 h-3 text-[#4cd7f6]" />
                </button>
              )}
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#ffb4ab] hover:underline font-sans ml-1 text-xs"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Main Views */}
      <main className="flex-1 w-full flex flex-col">
        {/* TAB: Main Page - CYBERHELPS TECHNOLOGIES PVT LTD (Replicating Image 1 (1).jpeg) */}
        {activeTab === 'home' && (
          <CyberHelpsMainPage
            searchQuery={searchQuery}
            onNavigateToSuraksha={() => setActiveTab('suraksha')}
            onNavigateToContact={() => setActiveTab('contact')}
          />
        )}

        {/* TAB: SURAKSHA AI Safety Sentinel Platform (6-Step Lifecycle, Live Demo) */}
        {activeTab === 'suraksha' && (
          <PlatformArchitecture
            searchQuery={searchQuery}
            onOpenSos={() => setIsSosOpen(true)}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
            onSwitchToNews={() => setActiveTab('news')}
          />
        )}

        {/* TAB: About Founder / Contact Us & Newsroom Leadership */}
        {(activeTab === 'founder' || activeTab === 'contact') && (
          <ContactAndNewsroom searchQuery={searchQuery} />
        )}

        {/* TAB: Investigative Newsroom Articles */}
        {activeTab === 'news' && <NewsroomArticles searchQuery={searchQuery} />}
      </main>

      {/* 5. Footer */}
      <Footer onNavigate={handleNavigateFromTab} />

      {/* 6. Modals */}
      <SosModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} />
      <StealthCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
      <FounderContactModal
        isOpen={isFounderModalOpen}
        onClose={() => setIsFounderModalOpen(false)}
      />

      {/* 7. Floating Persistent Emergency SOS Beacon */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsCalculatorOpen(true)}
          className="p-3 rounded-full bg-[#1a1f2e] hover:bg-[#252a39] border border-[#303444] text-[#bcc9cd] hover:text-[#4cd7f6] shadow-xl transition-all"
          title="Stealth Camouflage Decoy"
        >
          <Calculator className="w-5 h-5 text-[#4cd7f6]" />
        </button>
        <button
          onClick={() => setIsSosOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all animate-bounce hover:animate-none"
        >
          <ShieldAlert className="w-5 h-5" />
          <span>112 SOS</span>
        </button>
      </div>
    </div>
  );
}
