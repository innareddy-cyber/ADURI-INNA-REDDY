import React, { useState } from 'react';
import { Shield, PhoneCall, Calculator, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSos: () => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSos,
  onOpenCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'suraksha', label: 'SURAKSHA AI Sentinel' },
    { id: 'products', label: 'Solutions & Products' },
    { id: 'labs', label: 'AI Innovation Labs' },
    { id: 'capabilities', label: 'Core Capabilities' },
    { id: 'impact', label: 'Impact & Ethics' },
    { id: 'news', label: 'News & Insights' },
    { id: 'founder', label: 'About Founder' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e1321]/90 backdrop-blur-xl border-b border-[#252a39] shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 max-w-7xl mx-auto">
        {/* Brand / Logo exactly as in Image 1 (1).jpeg & Image 2.html */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left group"
          >
            <img
              alt="Cyber Helps Technologies Logo"
              className="h-10 w-10 rounded-lg object-cover shadow-[0_0_16px_rgba(6,182,212,0.40)] group-hover:brightness-110 transition-all border border-[#4cd7f6]/40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPhFGAgmJR2Jx4LvWFzz4BRp-1yH2QUXtJgslprJVvghMsZSD2wcMT1Q7_bjLeiPx035TUhS15oa4AumL8lsxgN6P4Ft_yPREFXsUNtuCYnXYbDTr8VFfU2X5RRCzgbinqnSR0uuZSXOJasClLkoN5PM7mqYtqIqtkqVdfvoVpTUybZJwi9qv1JmAFYiCDzuaz8rLZlBgSWlqqwaLJGYP99hpg6nDHdsluYAf3NpGFKDbeinHVpfXkb0AVQseHU1Bila8"
            />
            <div className="flex flex-col">
              <span className="font-headline text-sm sm:text-base tracking-tight text-white font-extrabold leading-none">
                CYBERHELPS
              </span>
              <span className="text-[10px] font-mono text-[#4cd7f6] font-bold tracking-wider uppercase mt-0.5">
                Technologies Pvt Ltd
              </span>
            </div>
          </button>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-[#4cd7f6] bg-[#1a1f2e] border border-[#4cd7f6]/30 shadow-sm'
                    : 'text-[#bcc9cd] hover:text-white hover:bg-[#1a1f2e]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Direct Founder Chairman Button */}
          <button
            onClick={() => {
              setActiveTab('founder');
              setTimeout(() => {
                document.getElementById('founder-spotlight')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1a1f2e] hover:bg-[#252a39] border border-[#4cd7f6]/40 text-[#4cd7f6] text-xs font-semibold transition-all shadow-sm"
            title="Founder Chairman Direct Contact: Aduri Inna Reddy"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            <span>Chairman Contact</span>
          </button>

          {/* Partner With Us Button as in image */}
          <button
            onClick={() => {
              setActiveTab('home');
              setTimeout(() => {
                document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#003640] text-xs font-bold transition-all shadow-[0_0_12px_rgba(6,182,212,0.3)] active:scale-95"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Quick SOS Trigger */}
          <button
            onClick={onOpenSos}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-red-600/90 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            title="Launch 112 / 1930 Emergency Distress Triage"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden md:inline">SOS 112</span>
          </button>

          {/* Stealth Decoy Vault */}
          <button
            onClick={onOpenCalculator}
            title="Open Camouflage Decoy Calculator"
            className="p-2 rounded-xl bg-[#1a1f2e] hover:bg-[#252a39] border border-[#303444] text-[#4cd7f6] transition-colors"
          >
            <Calculator className="w-4 h-4" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#1a1f2e] text-[#dee2f6] hover:bg-[#252a39]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161b2a] border-b border-[#252a39] px-4 py-3 space-y-1 shadow-2xl max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
                activeTab === item.id
                  ? 'bg-[#06b6d4] text-[#003640] font-bold'
                  : 'text-[#bcc9cd] hover:text-white hover:bg-[#1a1f2e]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
