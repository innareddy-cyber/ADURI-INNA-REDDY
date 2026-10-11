import React, { useState } from 'react';
import {
  Shield,
  Cpu,
  Lock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Database,
  Terminal,
  Activity,
  Layers,
  CheckCircle2,
  Send,
  Building2,
  Users,
  GraduationCap,
  Globe,
  FileText,
  Search,
} from 'lucide-react';
import {
  PRODUCTS_PORTFOLIO,
  CORE_TENETS,
  CAPABILITIES,
  AI_LABS,
  PUBLICATIONS,
  TechProduct,
} from '../data/cyberHelpsData';

interface CyberHelpsMainPageProps {
  searchQuery: string;
  onNavigateToSuraksha: () => void;
  onNavigateToContact: () => void;
}

export const CyberHelpsMainPage: React.FC<CyberHelpsMainPageProps> = ({
  searchQuery,
  onNavigateToSuraksha,
  onNavigateToContact,
}) => {
  const [selectedProductFilter, setSelectedProductFilter] = useState<string>('All Systems');
  const [enquirySubmitted, setEnquirySubmitted] = useState<boolean>(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    solution: 'Solution Licensing (TRINETRA / NIGHA / Detection AI)',
    scope: '',
    agreed: false,
  });

  const productCategories = [
    'All Systems',
    'Digital Safety',
    'Scam & Fraud',
    'Legal & Governance',
    'Social Welfare',
  ];

  // Filter products by search and category
  const filteredProducts = PRODUCTS_PORTFOLIO.filter(product => {
    const matchesCategory =
      selectedProductFilter === 'All Systems' || product.category === selectedProductFilter;

    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.domain.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Filter capabilities by search
  const filteredCapabilities = CAPABILITIES.filter(cap => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return cap.title.toLowerCase().includes(q) || cap.description.toLowerCase().includes(q);
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquirySubmitted(false);
      setEnquiryForm({
        name: '',
        org: '',
        email: '',
        phone: '',
        solution: 'Solution Licensing (TRINETRA / NIGHA / Detection AI)',
        scope: '',
        agreed: false,
      });
    }, 4000);
  };

  return (
    <div className="w-full flex flex-col bg-[#0e1321] text-[#dee2f6]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-6 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Radial Backdrop */}
        <div className="absolute -top-40 left-1/3 w-[800px] h-[400px] bg-gradient-to-r from-[#4cd7f6]/15 via-[#0566d9]/10 to-transparent blur-[140px] pointer-events-none"></div>

        {/* Tactical Overline Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1f2e] border border-[#303444] text-[#4cd7f6] text-[11px] font-semibold tracking-wider uppercase mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
          <span>NEXT-GENERATION AI & DEFENSE ARCHITECTURE • EMPOWERING DIGITAL TRANSFORMATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-[1.1]">
              Engineering a Safer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cd7f6] via-[#acedff] to-[#adc6ff]">
                Digital Future with AI
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#bcc9cd] max-w-2xl leading-relaxed">
              Building intelligent technology solutions that strengthen cybersecurity, protect digital identities, and empower people and organizations in an AI-driven world. Verified commercial systems engineered by{' '}
              <strong className="text-white font-semibold">CYBERHELPS TECHNOLOGIES PRIVATE LIMITED</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#products-portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#003640] font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all active:scale-95"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1a1f2e] hover:bg-[#252a39] border border-[#303444] text-white font-semibold text-sm transition-colors"
              >
                <Users className="w-4 h-4 text-[#4cd7f6]" />
                <span>Partner With Us</span>
              </button>
            </div>

            {/* Feature Triad Below CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#252a39]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span>AI INNOVATION</span>
                </div>
                <p className="text-xs text-[#bcc9cd]">
                  Multi-model threat synthesis & verification engines
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span>CYBERSECURITY</span>
                </div>
                <p className="text-xs text-[#bcc9cd]">
                  Zero-compromise proactive defense architectures
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span>DIGITAL TRUST</span>
                </div>
                <p className="text-xs text-[#bcc9cd]">
                  Privacy-preserving cryptography & verifiable ethics
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Holographic Neural Shield & Telemetry exactly as in Image 2.html */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center">
            <div className="relative w-full aspect-square max-w-[480px] p-2 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-[#1a1f2e]/60 backdrop-blur-xl shadow-xl"></div>
              <div className="relative z-10 w-full h-full max-w-[440px] max-h-[440px] rounded-2xl overflow-hidden shadow-[0_0_24px_rgba(6,182,212,0.45)] border border-[#4cd7f6]/30 flex items-center justify-center bg-[#090e1c]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPhFGAgmJR2Jx4LvWFzz4BRp-1yH2QUXtJgslprJVvghMsZSD2wcMT1Q7_bjLeiPx035TUhS15oa4AumL8lsxgN6P4Ft_yPREFXsUNtuCYnXYbDTr8VFfU2X5RRCzgbinqnSR0uuZSXOJasClLkoN5PM7mqYtqIqtkqVdfvoVpTUybZJwi9qv1JmAFYiCDzuaz8rLZlBgSWlqqwaLJGYP99hpg6nDHdsluYAf3NpGFKDbeinHVpfXkb0AVQseHU1Bila8"
                  alt="Cyber Helps Holographic Cyber Intelligence Interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status pill top-left */}
              <div className="absolute top-6 left-6 z-20 bg-[#252a39]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2 border border-[#303444]">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping"></span>
                <span className="font-mono text-xs text-white font-semibold tracking-wider">
                  SYSTEM: ACTIVE • SHIELD L4
                </span>
              </div>

              {/* Telemetry bottom bar */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-[#090e1c]/90 backdrop-blur-md p-3.5 rounded-xl shadow-lg flex items-center justify-between border border-[#252a39]">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#bcc9cd] font-mono uppercase tracking-wider">
                    Threat Attenuation
                  </span>
                  <span className="font-mono text-xs text-[#4cd7f6] font-bold">
                    99.98% REAL-TIME
                  </span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] text-[#bcc9cd] font-mono uppercase tracking-wider">
                    Neural Latency
                  </span>
                  <span className="font-mono text-xs text-[#adc6ff] font-bold">
                    1.4ms EDGE VECT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INNOVATION WITH A PURPOSE / CORE TENETS */}
      <section className="w-full bg-[#090e1c] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#252a39]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Organization Summary */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4cd7f6] uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>INNOVATION WITH A PURPOSE</span>
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold tracking-tight">
              Pioneering Robust AI Defense & Sovereign Software Systems
            </h2>

            <p className="text-sm text-[#bcc9cd] leading-relaxed">
              CYBERHELPS TECHNOLOGIES PRIVATE LIMITED is an agile technology enterprise engineered to tackle complex digital security vulnerabilities through applied artificial intelligence and modern systems software. We build scalable, resilient platforms designed to protect users, enterprises, and public services from modern cyber risks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#161b2a] border border-[#252a39] flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">visibility</span>
                  <span>Vision & Mission</span>
                </div>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Delivering equitable, impenetrable, and intelligent digital safety frameworks that protect users, enterprises, and public platforms across global borders.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#161b2a] border border-[#252a39] flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">biotech</span>
                  <span>R&D Approach</span>
                </div>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Iterative applied machine learning, zero-retention algorithmic pipelines, real-time threat telemetry, and privacy-first heuristic parsing.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-[#869397] font-mono pt-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>VERIFIED REGISTERED ENTITY | CYBERHELPS TECHNOLOGIES PRIVATE LIMITED</span>
            </div>
          </div>

          {/* Right Column: Core Architectural Tenets */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono text-[#869397] uppercase tracking-wider font-semibold">
              CORE ARCHITECTURAL TENETS
            </span>

            <div className="flex flex-col gap-3">
              {CORE_TENETS.map((tenet) => (
                <div
                  key={tenet.num}
                  className="p-4 rounded-xl bg-[#1a1f2e] border border-[#303444] flex flex-col gap-1.5 hover:border-[#4cd7f6]/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-sm font-bold text-white">
                      {tenet.num}. {tenet.title}
                    </span>
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">
                      {tenet.icon}
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd] leading-relaxed">{tenet.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI PRODUCTS & INNOVATION PORTFOLIO */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="products-portfolio">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase font-mono">
                INNOVATION PIPELINE
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-white font-bold tracking-tight">
                AI Products & Innovation Portfolio
              </h2>
              <p className="text-sm text-[#bcc9cd] max-w-2xl">
                Concept to deployment: Intelligent platforms engineered to safeguard digital experiences and detect emergent cyber threats.
              </p>
            </div>

            {/* Filter Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#161b2a] border border-[#252a39]">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedProductFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedProductFilter === cat
                      ? 'bg-[#06b6d4] text-[#003640] font-bold shadow'
                      : 'text-[#bcc9cd] hover:text-white hover:bg-[#252a39]'
                  }`}
                >
                  {cat === 'All Systems' ? 'All Systems (10)' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="rounded-2xl bg-[#1a1f2e] border border-[#303444] p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:border-[#4cd7f6]/40 transition-colors group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider ${prod.stageColor}`}
                    >
                      {prod.stage}
                    </span>
                    <span className="text-[11px] font-mono text-[#869397] uppercase">{prod.domain}</span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-[#4cd7f6] font-semibold uppercase block">
                      {prod.subtitle}
                    </span>
                    <h3 className="font-headline text-base sm:text-lg text-white font-bold mt-0.5 group-hover:text-[#4cd7f6] transition-colors">
                      {prod.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#bcc9cd] leading-relaxed line-clamp-4">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#252a39] flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[#dee2f6] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span>
                    {prod.actionLabel}
                  </span>
                  <button
                    onClick={() => {
                      setEnquiryForm(prev => ({
                        ...prev,
                        solution: `Enquiry: ${prod.name}`,
                      }));
                      document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#4cd7f6] hover:text-white font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Enquire</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* AI Crime Pattern Analysis Highlight Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-[#161b2a] via-[#1a1f2e] to-[#161b2a] border border-[#303444] p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0566d9] flex items-center justify-center text-white shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-[26px]">hub</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-xs font-mono text-[#4cd7f6] font-bold">
                  <span>ANALYTICS FRAMEWORK • THREAT INTELLIGENCE</span>
                </div>
                <h4 className="font-headline text-lg text-white font-bold mt-0.5">
                  AI Crime Pattern Analysis
                </h4>
                <p className="text-xs text-[#bcc9cd] max-w-2xl mt-1">
                  Big-data predictive analytics suite identifying emerging digital financial fraud syndicates, mule account networks, behavioral phishing surges, and cross-platform money laundering nodes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:inline font-mono text-xs text-[#869397]">
                Graph Neural Networks
              </span>
              <button
                onClick={() => {
                  document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2.5 rounded-xl bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#003640] font-bold text-xs transition-colors shadow-md"
              >
                Request Architecture Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE TECHNOLOGY CAPABILITIES */}
      <section className="w-full bg-[#090e1c] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#252a39]" id="core-capabilities">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase font-mono">
              ENGINEERING PILLARS
            </span>
            <h2 className="font-headline text-3xl text-white font-bold tracking-tight">
              Core Technology Capabilities
            </h2>
            <p className="text-sm text-[#bcc9cd] max-w-2xl">
              Pillars built on state-of-the-art computational standards to solve high-stakes modern threat challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col gap-2.5 shadow-md hover:border-[#4cd7f6]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#252a39] flex items-center justify-center text-[#4cd7f6]">
                  <span className="material-symbols-outlined text-[22px]">{cap.icon}</span>
                </div>
                <h3 className="font-headline text-sm font-bold text-white mt-1">{cap.title}</h3>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CYBER HELPS AI LABS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="ai-labs">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase font-mono">
                R&D DIVISION
              </span>
              <h2 className="font-headline text-3xl text-white font-bold tracking-tight">
                CYBER HELPS AI LABS
              </h2>
              <p className="text-sm text-[#bcc9cd] max-w-2xl">
                From ideas to intelligent solutions: our high-velocity applied experimentation incubator transforming academic insights into resilient cyber defenses.
              </p>
            </div>

            <button
              onClick={() => {
                document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs text-[#4cd7f6] hover:text-white font-bold transition-colors"
            >
              <span>Connect with Researchers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {AI_LABS.map((lab) => (
              <div
                key={lab.id}
                className="p-6 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col justify-between shadow-xl hover:border-[#4cd7f6]/40 transition-colors"
              >
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-mono text-[#4cd7f6] uppercase tracking-wider font-bold">
                    {lab.code}
                  </span>
                  <h3 className="font-headline text-base text-white font-bold">{lab.title}</h3>
                  <p className="text-xs text-[#bcc9cd] leading-relaxed">{lab.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Open Research Exchange Banner */}
          <div className="p-5 rounded-2xl bg-[#161b2a] border border-[#252a39] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#252a39] flex items-center justify-center text-[#4cd7f6]">
                <span className="material-symbols-outlined text-[20px]">science</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Open Research Exchange Framework</span>
                <span className="text-[11px] text-[#bcc9cd]">
                  We actively partner with academic labs and tech institutions for peer-reviewed algorithmic verification.
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-[#252a39] hover:bg-[#303444] border border-[#303444] text-xs font-semibold text-white whitespace-nowrap transition-colors"
            >
              Request Lab Access
            </button>
          </div>
        </div>
      </section>

      {/* 6. IMPACT AND SOCIAL RESPONSIBILITY */}
      <section className="w-full bg-[#090e1c] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#252a39]" id="impact-ethics">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase font-mono">
              ETHICS & RESPONSIBILITY
            </span>
            <h2 className="font-headline text-3xl text-white font-bold tracking-tight">
              Impact and Social Responsibility
            </h2>
            <p className="text-sm text-[#bcc9cd] max-w-2xl">
              Technology leadership demands civic stewardship. We develop autonomous defensive tools engineered to protect vulnerable demographics against high-scale predatory fraud.
            </p>
          </div>

          {/* Corporate Distinctness Notice Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#161b2a] border border-[#303444] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0566d9]/20 text-[#4cd7f6] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
            </div>
            <div className="flex flex-col gap-1 text-xs text-[#bcc9cd] leading-relaxed">
              <span className="text-white font-bold text-sm">
                Corporate Identity & Legal Distinctness Notice
              </span>
              <p>
                <strong>CYBERHELPS TECHNOLOGIES PRIVATE LIMITED</strong> is an independently registered commercial technology enterprise pioneering commercial AI & cybersecurity systems. Our commercial engineering work directly complements and supports non-profit initiatives, including our separate partner entity, <strong>CYBERHOPE HELP INITIATIVE FOUNDATION</strong> (Cyber Helps NGO), which operates community cyber awareness and victim assistance independently under statutory non-profit charters.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col gap-2">
              <Shield className="w-6 h-6 text-[#4cd7f6]" />
              <h4 className="text-sm font-bold text-white">Cyber Safety Awareness</h4>
              <p className="text-xs text-[#bcc9cd]">
                Promoting proactive defense literacy against phishing syndicates and digital financial scams.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col gap-2">
              <Users className="w-6 h-6 text-[#d0bcff]" />
              <h4 className="text-sm font-bold text-white">Women’s Tech Safety</h4>
              <p className="text-xs text-[#bcc9cd]">
                Engineering intelligent panic mitigation tools like NIGHA AI for rapid cyberstalking reporting.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col gap-2">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
              <h4 className="text-sm font-bold text-white">Youth Digital Literacy</h4>
              <p className="text-xs text-[#bcc9cd]">
                Protecting younger demographics against deepfake bullying, identity cloning, and predatory interactions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col gap-2">
              <Lock className="w-6 h-6 text-[#adc6ff]" />
              <h4 className="text-sm font-bold text-white">Responsible AI Adoption</h4>
              <p className="text-xs text-[#bcc9cd]">
                Ensuring machine learning models adhere to human oversight, transparency, and data sovereignty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNERSHIPS & OPPORTUNITIES */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase font-mono">
              COLLABORATIVE GROWTH
            </span>
            <h2 className="font-headline text-3xl text-white font-bold tracking-tight">
              Partnerships & Opportunities
            </h2>
            <p className="text-sm text-[#bcc9cd] max-w-2xl">
              Integrating next-generation intelligence across enterprises, universities, and public institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">domain</span>
                <h4 className="text-sm font-bold text-white">Enterprises & Startups</h4>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Commercial API integration, proprietary defense model licensing, and customized vulnerability triage pipelines.
                </p>
              </div>
              <button
                onClick={() => {
                  document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#4cd7f6] hover:text-white flex items-center gap-1 transition-colors text-left"
              >
                <span>Discuss Enterprise Licensing</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">school</span>
                <h4 className="text-sm font-bold text-white">Educational Institutions</h4>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Academic research fellowships, student hackathons, and practical AI defense curriculum integration.
                </p>
              </div>
              <button
                onClick={() => {
                  document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#4cd7f6] hover:text-white flex items-center gap-1 transition-colors text-left"
              >
                <span>Explore Academic Labs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">science</span>
                <h4 className="text-sm font-bold text-white">Research Organizations</h4>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Algorithmic safety peer reviews, dataset sanitization methodologies, and joint defense patent explorations.
                </p>
              </div>
              <button
                onClick={() => {
                  document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#4cd7f6] hover:text-white flex items-center gap-1 transition-colors text-left"
              >
                <span>Joint Research Inquiries</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">groups</span>
                <h4 className="text-sm font-bold text-white">Public Interest Groups</h4>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Deploying civic complaint filing tools, cyber hygiene workshops, and anti-fraud community defenses.
                </p>
              </div>
              <button
                onClick={() => {
                  document.getElementById('enterprise-enquiry')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#4cd7f6] hover:text-white flex items-center gap-1 transition-colors text-left"
              >
                <span>Support Public Initiatives</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWS, INSIGHTS & UPDATES */}
      <section className="w-full bg-[#090e1c] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#252a39]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase font-mono">
              PUBLICATIONS & RESEARCH
            </span>
            <h2 className="font-headline text-3xl text-white font-bold tracking-tight">
              News, Insights & Updates
            </h2>
            <p className="text-sm text-[#bcc9cd] max-w-2xl">
              Executive briefings and deep-dive technical publications authored by our AI security researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PUBLICATIONS.map((pub) => (
              <div
                key={pub.id}
                className="p-6 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col justify-between gap-4 hover:border-[#4cd7f6]/40 transition-colors"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#4cd7f6] uppercase font-bold">{pub.type}</span>
                    <span className="text-[#869397]">{pub.readTime}</span>
                  </div>
                  <h3 className="font-headline text-base text-white font-bold hover:text-[#4cd7f6] transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-[#bcc9cd] leading-relaxed">{pub.description}</p>
                </div>

                <div className="pt-3 border-t border-[#252a39] flex items-center justify-between text-[11px] font-mono text-[#869397]">
                  <span>{pub.meta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4cd7f6]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LET'S BUILD SOMETHING MEANINGFUL (ENTERPRISE ENQUIRY FORM) */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="enterprise-enquiry">
        <div className="rounded-2xl bg-[#161b2a] border border-[#303444] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Context Details */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4cd7f6] uppercase font-mono">
                <span className="material-symbols-outlined text-[16px]">handshake</span>
                <span>DIRECT ENGAGEMENT</span>
              </div>

              <h2 className="font-headline text-3xl text-white font-bold tracking-tight">
                Let's Build Something Meaningful
              </h2>

              <p className="text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
                Discuss technology licensing, joint R&D initiatives, or enterprise integration. Our commercial engineering team responds promptly within 24 business hours.
              </p>

              <div className="flex flex-col gap-3 pt-3 border-t border-[#252a39] text-xs">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">CYBERHELPS TECHNOLOGIES PVT LTD</span>
                    <span className="text-[#869397]">Commercial Enterprise Headquarters</span>
                    <span className="text-[#4cd7f6] font-mono text-[11px] block mt-0.5">
                      OFFICIAL PORTAL: CYBERHELPSTECHNOLOGIES.COM
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px] mt-0.5">mail</span>
                  <div>
                    <span className="text-white font-bold block">Institutional & Defense Desk</span>
                    <span className="text-[#869397]">contact@cyberhelpstechnologies.com</span>
                    <span className="text-emerald-400 font-mono text-[10px] block">
                      SLA: Response guaranteed &lt; 24h
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#4cd7f6] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">Enterprise Data Guarantee</span>
                    <span className="text-[#869397]">
                      All project disclosures are governed by mutual Non-Disclosure Agreement (NDA) standards.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="Dr. Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white font-semibold">Organization / Institution *</label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.org}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, org: e.target.value })}
                      placeholder="Defense Systems Corp / IIT"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white font-semibold">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      placeholder="j.doe@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white font-semibold">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white font-semibold">Enquiry Category *</label>
                  <select
                    value={enquiryForm.solution}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, solution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs focus:outline-none focus:border-[#4cd7f6]"
                  >
                    <option value="Solution Licensing (TRINETRA / NIGHA / Detection AI)">
                      Solution Licensing (TRINETRA / NIGHA / Detection AI)
                    </option>
                    <option value="Enterprise Integration & API Access">
                      Enterprise Integration & API Access
                    </option>
                    <option value="Joint Academic / Defense R&D">Joint Academic / Defense R&D</option>
                    <option value="AI Crime Pattern Analysis Demo">AI Crime Pattern Analysis Demo</option>
                    <option value="TrueCheck AI Media Forensics">TrueCheck AI Media Forensics</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white font-semibold">Project Scope & Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    value={enquiryForm.scope}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, scope: e.target.value })}
                    placeholder="Outline your technical integration objectives, deployment timeline, and target volume..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs focus:outline-none focus:border-[#4cd7f6] resize-y"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="privacy-agree"
                    required
                    checked={enquiryForm.agreed}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, agreed: e.target.checked })}
                    className="w-4 h-4 rounded text-[#4cd7f6] bg-[#090e1c] border-[#303444] cursor-pointer mt-0.5"
                  />
                  <label htmlFor="privacy-agree" className="text-xs text-[#bcc9cd] cursor-pointer">
                    I agree to the processing of submitted data under the Cyber Helps Technologies Privacy Policy for business correspondence.
                  </label>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-[#869397] font-mono">
                    <Lock className="w-3.5 h-3.5 text-[#4cd7f6]" />
                    <span>Protected by 256-bit encrypted transit</span>
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#003640] font-bold text-xs tracking-wide shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enterprise Enquiry</span>
                  </button>
                </div>

                {enquirySubmitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2 mt-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>
                      Enquiry registered! Reference ID: <strong>CHT-REQ-{Math.floor(100000 + Math.random() * 900000)}</strong>. Our enterprise engineering desk will reach out in &lt; 24h.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
