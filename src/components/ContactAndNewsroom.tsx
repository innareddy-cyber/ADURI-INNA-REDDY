import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Shield,
  Upload,
  CheckCircle2,
  Lock,
  Calendar,
  Send,
  Building,
  AlertCircle,
  Clock,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { FAQS } from '../data/platformData';

interface ContactAndNewsroomProps {
  searchQuery: string;
}

export const ContactAndNewsroom: React.FC<ContactAndNewsroomProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<'story-tip' | 'victim' | 'general' | 'corporate' | 'correction'>('story-tip');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [targetDivision, setTargetDivision] = useState('cybercrimenews');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const handleTabChange = (cat: 'story-tip' | 'victim' | 'general' | 'corporate' | 'correction') => {
    setSelectedCategory(cat);
    if (cat === 'story-tip' || cat === 'correction') {
      setTargetDivision('cybercrimenews');
    } else if (cat === 'victim') {
      setTargetDivision('ngo');
    } else if (cat === 'corporate') {
      setTargetDivision('tech');
    } else {
      setTargetDivision('founder');
    }
  };

  const handleAnonymityChange = (checked: boolean) => {
    setIsAnonymous(checked);
    if (checked) {
      setSenderName('CONFIDENTIAL_WHISTLEBLOWER_SOURCE');
    } else {
      setSenderName('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map(f => f.name);
      setAttachedFiles(prev => [...prev, ...names]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      const randomHex = Math.random().toString(16).substring(2, 10).toUpperCase();
      setTicketId(`CCN-SHA256-${randomHex}`);
    }, 1200);
  };

  // Filter FAQs based on searchQuery
  const filteredFaqs = FAQS.filter(faq => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      faq.q.toLowerCase().includes(q) ||
      faq.a.toLowerCase().includes(q) ||
      faq.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full flex flex-col bg-[#0e1321] min-h-screen text-[#dee2f6]">
      {/* Top Atmospheric Radial Lighting */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#4cd7f6]/10 blur-[130px] pointer-events-none rounded-full"></div>
        <div className="absolute top-24 -left-32 w-80 h-80 bg-[#0566d9]/15 blur-[110px] pointer-events-none rounded-full"></div>

        {/* Hero Header Unit */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          {/* Tactical Security Overline Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252a39] border border-[#303444] text-[#4cd7f6] text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping"></span>
              <span>OFFICIAL CONTACT & EDITORIAL DESK • 24x7 DIRECT COMMUNICATION</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161b2a] border border-[#252a39] text-[#bcc9cd] text-xs">
              <span className="material-symbols-outlined text-[14px] text-[#4cd7f6]">verified</span>
              <span>NGO REG: TS/2024/0397972</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
                Contact Us & Newsroom Leadership
              </h1>
              <p className="text-base text-[#bcc9cd] max-w-3xl leading-relaxed">
                We value reader feedback, confidential story tips, investigative leads, corrections, and strategic partnerships. Connect directly with our leadership, editorial team, and citizen cyber grievance triage desk.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2 bg-[#252a39]/80 border border-[#303444] backdrop-blur-md p-4 rounded-xl shadow-lg">
              <div className="flex items-center justify-between text-xs text-[#bcc9cd] font-mono">
                <span>NETWORK OPERATIONAL STATUS</span>
                <span className="text-[#4cd7f6] flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse"></span> ACTIVE
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">call</span>
                <div className="flex flex-col">
                  <span className="text-xs text-[#bcc9cd]">Direct Helpline</span>
                  <a
                    className="font-headline text-base text-white hover:text-[#4cd7f6] transition-colors tracking-tight font-bold"
                    href="tel:+919849606691"
                  >
                    +91 98496 06691
                  </a>
                </div>
              </div>
              <div className="pt-2 border-t border-[#303444] flex items-center justify-between text-[#bcc9cd] font-mono text-[11px]">
                <span>AES-256 E2E Guard</span>
                <span>0 ms Triage Latency</span>
              </div>
            </div>
          </div>

          {/* Trust Metrics Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#161b2a] border border-[#252a39] shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#252a39] flex items-center justify-center text-[#4cd7f6] shrink-0">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-white font-semibold truncate">TS/2024/0397972</span>
                <span className="text-[11px] text-[#bcc9cd] truncate">Certified Non-Profit</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#161b2a] border border-[#252a39] shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#252a39] flex items-center justify-center text-[#4cd7f6] shrink-0">
                <span className="material-symbols-outlined text-[18px]">encrypted</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-white font-semibold truncate">100% Confidential</span>
                <span className="text-[11px] text-[#bcc9cd] truncate">Whistleblower Seal</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#161b2a] border border-[#252a39] shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#252a39] flex items-center justify-center text-[#4cd7f6] shrink-0">
                <span className="material-symbols-outlined text-[18px]">translate</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-white font-semibold truncate">9 Regional Tongues</span>
                <span className="text-[11px] text-[#bcc9cd] truncate">Multilingual AI Desk</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#161b2a] border border-[#252a39] shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#252a39] flex items-center justify-center text-[#4cd7f6] shrink-0">
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-white font-semibold truncate">Autonomous AI</span>
                <span className="text-[11px] text-[#bcc9cd] truncate">Zero-Hour Verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col gap-12">
        {/* Section 1: Prominent Executive Profile Showcase of Aduri Inna Reddy */}
        <div
          id="founder-spotlight"
          className="relative w-full rounded-2xl bg-gradient-to-br from-[#1a1f2e] via-[#252a39] to-[#161b2a] border border-[#303444] p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#4cd7f6]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Founder Executive Image Frame */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-[#090e1c] shadow-2xl border border-[#303444]">
                <img
                  alt="Aduri Inna Reddy - Founder Chairman & Chief Editor"
                  className="w-full h-auto object-cover object-center max-h-[460px]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAko5CsSwGsl-cVUZ-x07dcStWmBTbthiZBYafXm9llS2ZdcOI-LkwHQPDUvD0oarvVhF-HsoY_d0kW6ZG9qTpVuYhE3pDxbwg_Og250KevfwezGX21v1J0bm46C5AzYP2PEcpo917sEtFgDLQ4tB0OrDjnx0j3kG1yjZ95IvrfqYLCoCNzwSz6KW-6Ct6OPK0ZBB_4uAMHzyr196YqG3l0cCThq5jNY6pRRztM9jr42aD9LhRdqoza_4B2vLKc8kE4BA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090e1c] via-transparent to-transparent opacity-90"></div>

                {/* Floating Overlay Card over Image Base */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#1a1f2e]/90 backdrop-blur-md border border-[#303444] flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                    <span className="text-xs text-white font-semibold uppercase tracking-wider">
                      Desk Head Active
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#4cd7f6]">ID: CH-FND-01</span>
                </div>
              </div>
            </div>

            {/* Founder Dossier & Bio */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[#06b6d4] text-[#00424f] text-xs font-bold">
                  LEADERSHIP SPOTLIGHT
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#303444] text-[#bcc9cd] text-xs font-mono">
                  HYDERABAD • TELANGANA
                </span>
              </div>

              <div>
                <h2 className="font-headline text-3xl sm:text-4xl text-white font-bold tracking-tight">
                  Aduri Inna Reddy
                </h2>
                <p className="font-headline text-lg text-[#4cd7f6] font-semibold mt-1">
                  Senior Journalist & Investigative Reporter
                </p>
              </div>

              {/* Triple Leadership Roles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#090e1c]/80 border border-[#252a39] flex flex-col gap-1 shadow-sm">
                  <span className="text-xs text-[#4cd7f6] font-bold">CHAIRMAN</span>
                  <p className="text-xs text-white leading-snug">
                    Cyber Helps NGO (Cyberhope Help Initiative Foundation)
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#090e1c]/80 border border-[#252a39] flex flex-col gap-1 shadow-sm">
                  <span className="text-xs text-[#4cd7f6] font-bold">CHAIRMAN</span>
                  <p className="text-xs text-white leading-snug">
                    CYBERHELPS TECHNOLOGIES PRIVATE LIMITED
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#090e1c]/80 border border-[#252a39] flex flex-col gap-1 shadow-sm">
                  <span className="text-xs text-[#4cd7f6] font-bold">CHIEF EDITOR</span>
                  <p className="text-xs text-white leading-snug">
                    cybercrimenews.net • Investigative Desk
                  </p>
                </div>
              </div>

              {/* Mission Quote */}
              <div className="p-4 rounded-xl bg-[#090e1c]/60 border-l-4 border-[#4cd7f6] relative">
                <p className="text-sm text-[#dee2f6] italic leading-relaxed">
                  “Dedicated to bringing sovereign cyber safety intelligence, empowering every citizen against fraud, and giving investigative journalism a technological backbone for a safer digital India.”
                </p>
              </div>

              {/* Contact Coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs text-[#bcc9cd]">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">call</span>
                  <span>
                    Direct:{' '}
                    <a className="text-white hover:text-[#4cd7f6] font-medium transition-colors" href="tel:+919849606691">
                      +91 98496 06691
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#bcc9cd]">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">chat</span>
                  <span>
                    WhatsApp:{' '}
                    <a
                      className="text-white hover:text-[#4cd7f6] font-medium transition-colors"
                      href="https://wa.me/919849606691"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 98496 06691
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#bcc9cd] truncate">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">mail</span>
                  <span className="truncate">founder@cyberhelpstechnologies.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#bcc9cd]">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">location_on</span>
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* Action Buttons Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#0566d9] text-[#003640] hover:brightness-110 font-bold text-xs sm:text-sm shadow-md transition-all"
                  href="tel:+919849606691"
                >
                  <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  <span>Call Chairman Directly</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#252a39] hover:bg-[#303444] border border-[#303444] text-white hover:text-[#4cd7f6] font-semibold text-xs sm:text-sm transition-all"
                  href="https://wa.me/919849606691?text=Hello%20Aduri%20Inna%20Reddy%20Sir,%20I%20would%20like%20to%20connect%20regarding%20Cyber%20Crime%20News%20/%20Assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#4cd7f6]">chat</span>
                  <span>WhatsApp Message</span>
                </a>
                <button
                  onClick={() => {
                    document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#161b2a] hover:bg-[#252a39] text-[#bcc9cd] hover:text-white text-xs sm:text-sm transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  <span>Editorial Briefing</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Tri-Organization Directory Routing Grid */}
        <div>
          <div className="flex flex-col gap-1.5 mb-6">
            <div className="flex items-center gap-2 text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
              <span>OPERATIONAL DEPARTMENTS • DIRECT ROUTING</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold tracking-tight">
              Three Dedicated Wings to Serve You
            </h2>
            <p className="text-sm text-[#bcc9cd] max-w-2xl">
              Direct your inquiry to the exact specialized division for immediate triage, response verification, or investigative dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Division 1: Editorial Desk */}
            <div className="p-6 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col justify-between shadow-lg hover:border-[#4cd7f6]/40 transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#252a39] flex items-center justify-center text-[#4cd7f6]">
                    <span className="material-symbols-outlined text-[22px]">newspaper</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#252a39] text-[#4cd7f6] font-mono text-[11px] font-semibold">
                    WING-01
                  </span>
                </div>
                <h3 className="font-headline text-base text-white font-bold">
                  Editorial & Newsroom Desk
                </h3>
                <span className="text-xs text-[#4cd7f6] font-mono">cybercrimenews.net</span>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Exclusive story tips, confidential whistleblower leaks, investigative journalism requests, retractions, and media syndication.
                </p>
                <div className="pt-2 flex flex-col gap-2 text-xs text-white border-t border-[#252a39]">
                  <div className="flex items-center gap-2 truncate">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">mail</span>
                    <a className="hover:text-[#4cd7f6] transition-colors truncate" href="mailto:editor@cybercrimenews.net">
                      editor@cybercrimenews.net
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">call</span>
                    <a className="hover:text-[#4cd7f6] transition-colors" href="tel:+919849606691">
                      +91 98496 06691
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#bcc9cd] text-[11px]">
                    <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">language</span>
                    <span>Supported in 9 Indian Languages</span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <a
                  className="w-full py-2.5 px-3 rounded-xl bg-[#252a39] hover:bg-[#303444] text-center text-xs font-semibold text-white hover:text-[#4cd7f6] block transition-colors border border-[#303444]"
                  href="mailto:editor@cybercrimenews.net"
                >
                  Email Newsroom Desk
                </a>
              </div>
            </div>

            {/* Division 2: NGO Helpline & Victim Support */}
            <div className="p-6 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col justify-between shadow-lg hover:border-[#4cd7f6]/40 transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#252a39] flex items-center justify-center text-[#4cd7f6]">
                    <span className="material-symbols-outlined text-[22px]">health_and_safety</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#252a39] text-[#4cd7f6] font-mono text-[11px] font-semibold">
                    WING-02
                  </span>
                </div>
                <h3 className="font-headline text-base text-white font-bold">
                  Cyber Helps NGO (CHHIF)
                </h3>
                <span className="text-xs text-[#4cd7f6] font-mono">Victim Support & Grievance Cell</span>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Immediate victim assistance, Golden Hour cyber fraud intake, digital arrest counseling, FIR drafting, and citizen legal guidance.
                </p>
                <div className="p-2.5 rounded-lg bg-red-950/30 border border-red-500/30 text-red-300 text-xs">
                  <strong className="font-semibold block text-white">Emergency Financial Fraud?</strong>
                  First dial <strong className="text-red-400">1930</strong> national portal, then notify our NGO desk.
                </div>
                <div className="pt-1 flex flex-col gap-2 text-xs text-white">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">support_agent</span>
                    <a className="hover:text-[#4cd7f6] transition-colors" href="tel:+919849606691">
                      +91 98496 06691
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">smart_toy</span>
                    <span>AI WhatsApp Bot: +91 7075741930</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#bcc9cd] text-[11px]">
                    <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">verified</span>
                    <span>Reg: TS/2024/0397972 (12A & 80G)</span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <a
                  className="w-full py-2.5 px-3 rounded-xl bg-[#252a39] hover:bg-[#303444] text-center text-xs font-semibold text-white hover:text-[#4cd7f6] block transition-colors border border-[#303444]"
                  href="https://wa.me/917075741930?text=HELP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with NGO Bot
                </a>
              </div>
            </div>

            {/* Division 3: Corporate & Tech Pvt Ltd */}
            <div className="p-6 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col justify-between shadow-lg hover:border-[#4cd7f6]/40 transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#252a39] flex items-center justify-center text-[#4cd7f6]">
                    <span className="material-symbols-outlined text-[22px]">corporate_fare</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#252a39] text-[#4cd7f6] font-mono text-[11px] font-semibold">
                    WING-03
                  </span>
                </div>
                <h3 className="font-headline text-base text-white font-bold">
                  Cyberhelps Technologies Pvt Ltd
                </h3>
                <span className="text-xs text-[#4cd7f6] font-mono">Enterprise AI & Threat Defense</span>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Institutional security partnerships, TRINETRA, SURAKSHA AI suites, Land Shield cyber checks, institutional MoUs, and law enforcement support.
                </p>
                <div className="pt-2 flex flex-col gap-2 text-xs text-white border-t border-[#252a39]">
                  <div className="flex items-center gap-2 truncate">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">mail</span>
                    <a className="hover:text-[#4cd7f6] transition-colors truncate" href="mailto:contact@cyberhelpstechnologies.com">
                      contact@cyberhelpstechnologies.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#bcc9cd] truncate">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">badge</span>
                    <span>CIN: U72900TG2022PTC160000</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#bcc9cd] text-[11px]">
                    <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">location_city</span>
                    <span>Cyberabad Tech Corridor, Hyd - 500081</span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <a
                  className="w-full py-2.5 px-3 rounded-xl bg-[#252a39] hover:bg-[#303444] text-center text-xs font-semibold text-white hover:text-[#4cd7f6] block transition-colors border border-[#303444]"
                  href="mailto:contact@cyberhelpstechnologies.com"
                >
                  Inquire Corporate Tech
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Interactive Multi-Purpose Contact & Whistleblower Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="contact-form-section">
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#1a1f2e] border border-[#303444] shadow-xl">
            <div className="flex flex-col gap-1 mb-5">
              <div className="flex items-center gap-2 text-xs text-[#4cd7f6] font-semibold">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span>END-TO-END ENCRYPTED INTAKE DISPATCH</span>
              </div>
              <h2 className="font-headline text-2xl text-white font-bold tracking-tight">
                Send a Secure Message or Whistleblower Tip
              </h2>
              <p className="text-xs text-[#bcc9cd]">
                All dispatches are handled under strict confidentiality protocols. Sources may opt for full anonymity.
              </p>
            </div>

            {/* Tab Selector */}
            <div className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-xl bg-[#161b2a] border border-[#252a39]">
              <button
                type="button"
                onClick={() => handleTabChange('story-tip')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === 'story-tip'
                    ? 'bg-[#06b6d4] text-[#003640] font-bold shadow'
                    : 'text-[#bcc9cd] hover:text-white'
                }`}
              >
                Investigative Tip / Whistleblower
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('victim')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === 'victim'
                    ? 'bg-[#06b6d4] text-[#003640] font-bold shadow'
                    : 'text-[#bcc9cd] hover:text-white'
                }`}
              >
                Victim Assistance
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('general')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === 'general'
                    ? 'bg-[#06b6d4] text-[#003640] font-bold shadow'
                    : 'text-[#bcc9cd] hover:text-white'
                }`}
              >
                General Query
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('corporate')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === 'corporate'
                    ? 'bg-[#06b6d4] text-[#003640] font-bold shadow'
                    : 'text-[#bcc9cd] hover:text-white'
                }`}
              >
                Corporate & Tech MoUs
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('correction')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === 'correction'
                    ? 'bg-[#06b6d4] text-[#003640] font-bold shadow'
                    : 'text-[#bcc9cd] hover:text-white'
                }`}
              >
                Correction / Grievance
              </button>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white font-semibold flex items-center justify-between">
                    <span>Full Name</span>
                    <span className="text-[#869397] font-normal text-[11px]">Optional if anonymous</span>
                  </label>
                  <input
                    type="text"
                    disabled={isAnonymous}
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Aduri Inna Reddy / Confidential Source"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs placeholder-[#869397] focus:outline-none focus:border-[#4cd7f6] disabled:opacity-50"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white font-semibold">Contact Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="+91 98496 06691"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs placeholder-[#869397] focus:outline-none focus:border-[#4cd7f6]"
                  />
                </div>
              </div>

              {/* Anonymous Toggle Option */}
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#161b2a] border border-[#252a39]">
                <input
                  type="checkbox"
                  id="anon-check"
                  checked={isAnonymous}
                  onChange={(e) => handleAnonymityChange(e.target.checked)}
                  className="w-4 h-4 rounded text-[#4cd7f6] bg-[#252a39] border-[#303444] cursor-pointer"
                />
                <label htmlFor="anon-check" className="text-xs text-white cursor-pointer select-none leading-snug">
                  <strong className="text-[#4cd7f6]">Protect my identity:</strong> Do not record IP or contact details in newsroom archives (Strict Whistleblower Protection).
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white font-semibold">Email Address</label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="contact@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs placeholder-[#869397] focus:outline-none focus:border-[#4cd7f6]"
                  />
                </div>

                {/* Target Division */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white font-semibold">Target Entity</label>
                  <select
                    value={targetDivision}
                    onChange={(e) => setTargetDivision(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs focus:outline-none focus:border-[#4cd7f6]"
                  >
                    <option value="cybercrimenews">cybercrimenews.net (Editorial & Whistleblower)</option>
                    <option value="ngo">Cyber Helps NGO (Victim Support & Grievances)</option>
                    <option value="tech">Cyberhelps Technologies Pvt Ltd (AI & Enterprise)</option>
                    <option value="founder">Executive Chairman Direct (Aduri Inna Reddy)</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white font-semibold">Subject / Incident Headline</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Evidence of Digital Arrest syndicate operating across Hyderabad & Secunderabad"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs placeholder-[#869397] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>

              {/* Message Body */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white font-semibold">Detailed Intelligence / Message Brief</label>
                <textarea
                  rows={4}
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Provide clear chronological timeline, suspected domains, phone numbers, or organizational context..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1c] border border-[#252a39] text-white text-xs placeholder-[#869397] focus:outline-none focus:border-[#4cd7f6] resize-y"
                />
              </div>

              {/* Evidence Upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white font-semibold flex items-center justify-between">
                  <span>Evidence Attachments</span>
                  <span className="text-[#869397] font-mono text-[10px]">Max 25MB • Encrypted</span>
                </label>
                <label className="p-4 rounded-xl bg-[#161b2a] border border-dashed border-[#303444] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#252a39] transition-colors">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Upload className="w-6 h-6 text-[#4cd7f6]" />
                  <span className="text-xs text-white font-medium">
                    {attachedFiles.length > 0
                      ? `${attachedFiles.length} file(s) attached: ${attachedFiles.slice(-2).join(', ')}`
                      : 'Click to upload screenshots, PDFs, or audio recordings'}
                  </span>
                  <span className="font-mono text-[10px] text-[#869397]">
                    PNG, JPG, PDF, MP3, TXT, ZIP up to 25MB
                  </span>
                </label>
              </div>

              {/* Legal Disclaimer */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#252a39] border border-[#303444] text-xs text-[#bcc9cd]">
                <Shield className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                <span>
                  <strong>Whistleblower Legal Safeguard:</strong> In alignment with Indian press freedom standards and the Press Council guidelines, cybercrimenews.net protects confidential communications under non-disclosure editorial protocols.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#0566d9] text-[#003640] hover:brightness-110 font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#003640] border-t-transparent rounded-full animate-spin"></div>
                      <span>Encrypting & Routing Intake...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Confidential Message / Tip</span>
                    </>
                  )}
                </button>

                {ticketId && (
                  <div className="mt-3 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Message securely routed! Intake ticket: <strong>{ticketId}</strong></span>
                    </div>
                    <span className="font-mono text-[10px] text-[#869397]">Desk review in &lt;2 hrs</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Verification & Trust Checklist */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Live Protocol Panel */}
            <div className="p-6 rounded-2xl bg-[#1a1f2e] border border-[#303444] shadow-xl flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-[#4cd7f6] font-semibold">
                <span className="material-symbols-outlined text-[16px]">sensors</span>
                <span>REAL-TIME DESK METRICS</span>
              </div>
              <h3 className="font-headline text-base text-white font-bold">
                Triage Protocol Status
              </h3>

              <div className="flex flex-col gap-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#dee2f6]">Average Desk Response</span>
                    <span className="text-[#4cd7f6] font-mono">&lt; 14 Mins</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#252a39] overflow-hidden">
                    <div className="w-[88%] h-full bg-[#4cd7f6] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#dee2f6]">Source Anonymity Guarantee</span>
                    <span className="text-[#4cd7f6] font-mono">100.0%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#252a39] overflow-hidden">
                    <div className="w-full h-full bg-[#4cd7f6] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#dee2f6]">Citizen Relief Resolution</span>
                    <span className="text-[#4cd7f6] font-mono">96.4%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#252a39] overflow-hidden">
                    <div className="w-[96%] h-full bg-[#4cd7f6] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* 256-Bit SVG Encryption Meter */}
              <div className="mt-2 p-4 rounded-xl bg-[#090e1c] border border-[#252a39] flex items-center justify-around">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-[#252a39]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    ></path>
                    <path
                      className="text-[#4cd7f6]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="92, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    ></path>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="font-mono text-sm text-white font-bold">256</span>
                    <span className="text-[9px] text-[#bcc9cd] font-mono">BIT</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 max-w-[130px]">
                  <span className="text-xs text-white font-semibold">Zero-Log Protocol</span>
                  <p className="text-[11px] text-[#bcc9cd] leading-tight">
                    All story tip metadata is scrubbed automatically post ingestion.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Launcher */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1f2e] to-[#252a39] border border-[#303444] shadow-xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#303444] flex items-center justify-center text-[#4cd7f6]">
                <span className="material-symbols-outlined text-[22px]">forum</span>
              </div>
              <h4 className="font-headline text-base text-white font-bold">
                Urgent WhatsApp Emergency
              </h4>
              <p className="text-xs text-[#bcc9cd]">
                Connect instantaneously with our Cyber Crime Helpline coordinator directly on WhatsApp.
              </p>
              <a
                className="mt-2 py-2.5 px-4 rounded-xl bg-[#090e1c] hover:bg-[#4cd7f6] text-center text-xs font-bold text-[#4cd7f6] hover:text-[#003640] transition-all flex items-center justify-center gap-2 border border-[#303444]"
                href="https://wa.me/919849606691?text=URGENT%20CYBER%20CRIME%20REPORT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>+91 98496 06691 (Direct)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 4: Operational Hubs, Map & Working Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Headquarters & Map Card with Hotlinked Image */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#1a1f2e] border border-[#303444] shadow-xl flex flex-col justify-between">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold">
                <span className="material-symbols-outlined text-[16px]">pin_drop</span>
                <span>PHYSICAL HEADQUARTERS & REGIONAL COVERAGE</span>
              </div>
              <h3 className="font-headline text-2xl text-white font-bold tracking-tight">
                Hyderabad Newsroom & Technology Labs
              </h3>
              <p className="text-xs text-[#bcc9cd]">
                Cyber Crime News • Cyberhelps Technologies Private Limited • Cyber Helps NGO Central Operations.
              </p>
            </div>

            {/* Dynamic Map Container with hotlinked image */}
            <div
              className="w-full h-64 rounded-xl bg-cover bg-center shadow-inner relative overflow-hidden flex items-end p-4 border border-[#303444]"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQKKd-vHLOG9IEDWb1k_MzJfcMQEtsKl4YUhpoFa4eXlOk-_uOiQL0OaJdX-y1CjQ1-LCbxa4qERq4HMDzkKwKCkZArdoqMH-1CJO9dhmWAfHZBMy0oIut4HSyCbSwmiKs20k_cSwZnR9JDrJUCG0jRF6a-2cOQrMutN_sBldw-A7fRFN8ODCwIxPtdo59n-WVZd86lx6z8uS9vjgO9aiYGYCmRx7zZncFrrMpM82Zu8LuDb3ntpmAMA')",
              }}
            >
              <div className="relative z-10 p-3 rounded-xl bg-[#0e1321]/90 backdrop-blur-md border border-[#303444] flex items-center gap-3 shadow-md max-w-sm">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">corporate_fare</span>
                <div className="flex flex-col">
                  <span className="text-xs text-white font-semibold">Hyderabad Headquarters</span>
                  <span className="text-[11px] text-[#bcc9cd] truncate">Cyberabad Corridor, Telangana 500081</span>
                </div>
              </div>
            </div>

            {/* Regional Operational Hubs Row */}
            <div className="pt-4">
              <span className="text-[11px] text-[#bcc9cd] uppercase tracking-wider block mb-2 font-mono">
                Regional Operational Hubs
              </span>
              <div className="flex flex-wrap gap-2">
                {['Hyderabad', 'Secunderabad', 'Warangal', 'Vijayawada', 'Visakhapatnam'].map(city => (
                  <span
                    key={city}
                    className="px-3 py-1 rounded-lg bg-[#252a39] border border-[#303444] text-white text-xs font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Working Hours & Timings Schedule */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#1a1f2e] border border-[#303444] shadow-xl flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>TIMINGS & AVAILABILITY</span>
              </div>
              <h3 className="font-headline text-2xl text-white font-bold tracking-tight">
                Operating Hours
              </h3>
              <p className="text-xs text-[#bcc9cd]">
                Emergency victim intake is active continuously. Editorial teams operate across extended shifts.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#090e1c] border border-[#252a39] flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px] mt-0.5">crisis_alert</span>
                  <div className="flex flex-col">
                    <span className="text-xs text-white font-bold">Citizen Helpline & WhatsApp AI</span>
                    <span className="text-xs text-[#4cd7f6] font-semibold">24 Hours • 7 Days a Week</span>
                    <span className="font-mono text-[10px] text-[#bcc9cd]">+91 7075741930 / +91 98496 06691</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#090e1c] border border-[#252a39] flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px] mt-0.5">newspaper</span>
                  <div className="flex flex-col">
                    <span className="text-xs text-white font-bold">Newsroom & Editorial Desk</span>
                    <span className="text-xs text-[#bcc9cd]">08:00 AM – 10:00 PM IST (All Days)</span>
                    <span className="font-mono text-[10px] text-[#bcc9cd]">editor@cybercrimenews.net</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#090e1c] border border-[#252a39] flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px] mt-0.5">domain</span>
                  <div className="flex flex-col">
                    <span className="text-xs text-white font-bold">Corporate Headquarters</span>
                    <span className="text-xs text-[#bcc9cd]">09:30 AM – 06:30 PM IST (Mon – Sat)</span>
                    <span className="font-mono text-[10px] text-[#bcc9cd]">contact@cyberhelpstechnologies.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="p-3 rounded-xl bg-[#252a39]/70 border border-[#303444] flex items-center gap-2.5 text-xs text-[#bcc9cd]">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">info</span>
                <span>In-person executive meetings strictly by confirmed appointment.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Frequently Asked Questions & Grievance Redressal Mechanism */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#1a1f2e] border border-[#303444] shadow-xl">
          <div className="flex flex-col gap-1.5 mb-6">
            <div className="flex items-center gap-2 text-xs text-[#4cd7f6] uppercase tracking-wider font-semibold">
              <span className="material-symbols-outlined text-[16px]">help</span>
              <span>EDITORIAL PROTOCOLS & TRANSPARENCY</span>
            </div>
            <h2 className="font-headline text-2xl text-white font-bold tracking-tight">
              Frequently Asked Questions & Grievance Redressal
            </h2>
            <p className="text-xs text-[#bcc9cd] max-w-2xl">
              Everything you need to know regarding tip confidentiality, leadership escalation, and correction procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#090e1c] border border-[#252a39] flex flex-col gap-2 hover:border-[#4cd7f6]/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-[#4cd7f6]">
                  <span className="material-symbols-outlined text-[20px]">help_outline</span>
                  <h4 className="font-headline text-xs sm:text-sm text-white font-bold">{faq.q}</h4>
                </div>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">{faq.a}</p>
                <span className="text-[10px] font-mono text-[#4cd7f6] mt-auto">Category: {faq.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
