import React from 'react';
import { Shield, CheckCircle2, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#090e1c] text-[#bcc9cd] border-t border-[#252a39]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1 & 2: Branding exactly as in Image 1 (1).jpeg & Image 2.html */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Cyber Helps Technologies Logo"
                className="h-10 w-10 rounded-lg object-cover shadow-[0_0_16px_rgba(6,182,212,0.40)] border border-[#4cd7f6]/40"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPhFGAgmJR2Jx4LvWFzz4BRp-1yH2QUXtJgslprJVvghMsZSD2wcMT1Q7_bjLeiPx035TUhS15oa4AumL8lsxgN6P4Ft_yPREFXsUNtuCYnXYbDTr8VFfU2X5RRCzgbinqnSR0uuZSXOJasClLkoN5PM7mqYtqIqtkqVdfvoVpTUybZJwi9qv1JmAFYiCDzuaz8rLZlBgSWlqqwaLJGYP99hpg6nDHdsluYAf3NpGFKDbeinHVpfXkb0AVQseHU1Bila8"
              />
              <span className="font-headline text-base text-white font-black tracking-tight">
                CYBERHELPS TECHNOLOGIES
              </span>
            </div>
            <p className="text-xs text-[#bcc9cd] max-w-md leading-relaxed">
              CYBERHELPS TECHNOLOGIES PRIVATE LIMITED is a registered technology enterprise pioneering commercial AI & cybersecurity systems. Distinct from the separately operated non-profit initiative foundation.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#4cd7f6] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>VERIFIED CORPORATE IDENTITY</span>
            </div>
          </div>

          {/* Col 3: Company */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-xs text-white font-bold uppercase tracking-wider font-mono">
              Company
            </span>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('capabilities')} className="hover:text-white transition-colors text-left">
                  Core Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('labs')} className="hover:text-white transition-colors text-left">
                  AI Labs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-white transition-colors text-left">
                  Research & Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('founder')} className="hover:text-white transition-colors text-left">
                  About Founder (Aduri Inna Reddy)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Products & Defense */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-xs text-white font-bold uppercase tracking-wider font-mono">
              Products & Defense
            </span>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#4cd7f6] transition-colors text-left">
                  TRINETRA Mobile Security
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#4cd7f6] transition-colors text-left">
                  NIGHA AI (Personal Safety)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#4cd7f6] transition-colors text-left">
                  Detection AI (Voice Cloning)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('suraksha')} className="hover:text-[#4cd7f6] transition-colors text-left">
                  SURAKSHA AI Sentinel Platform
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#4cd7f6] transition-colors text-left">
                  TrueCheck AI & CINE SHIELD
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Emergency Grid */}
          <div className="flex flex-col gap-3">
            <span className="font-headline text-xs text-white font-bold uppercase tracking-wider font-mono">
              Legal & Helplines
            </span>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <a href="tel:112" className="hover:text-white transition-colors">
                  <strong className="text-red-400 font-mono">112</strong> National Police & SOS
                </a>
              </li>
              <li>
                <a href="tel:1930" className="hover:text-white transition-colors">
                  <strong className="text-[#4cd7f6] font-mono">1930</strong> National Cyber Crime
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">
                  Privacy Policy & DPDP Act
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">
                  Responsible AI Charter
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#252a39] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#869397]">
          <div>
            <span>© 2026 CYBERHELPS TECHNOLOGIES PRIVATE LIMITED. All Rights Reserved. Empowering Your Digital Transformation.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#4cd7f6] font-medium">ISO 27001 & SOC2 COMPLIANT</span>
            <span>•</span>
            <span>Government Grade Encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
