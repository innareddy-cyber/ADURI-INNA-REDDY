import React, { useState } from 'react';
import {
  Shield,
  Activity,
  PhoneCall,
  Lock,
  Play,
  FileText,
  AlertTriangle,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { DEFENSE_STEPS, CORE_MODULES, LEGAL_FRAMEWORKS, HELPLINES } from '../data/platformData';

interface PlatformArchitectureProps {
  searchQuery: string;
  onOpenSos: () => void;
  onOpenCalculator: () => void;
  onSwitchToNews: () => void;
}

export const PlatformArchitecture: React.FC<PlatformArchitectureProps> = ({
  searchQuery,
  onOpenSos,
  onOpenCalculator,
  onSwitchToNews,
}) => {
  // Simulator scenario state
  const [simScenario, setSimScenario] = useState<'voice-sos' | 'grooming' | 'blackmail'>('voice-sos');

  // Filter defense steps based on searchQuery
  const filteredSteps = DEFENSE_STEPS.filter(step => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      step.title.toLowerCase().includes(q) ||
      step.summary.toLowerCase().includes(q) ||
      step.description.toLowerCase().includes(q) ||
      step.badge.toLowerCase().includes(q) ||
      step.capabilities.some(c => c.label.toLowerCase().includes(q))
    );
  });

  // Filter core modules based on searchQuery
  const filteredModules = CORE_MODULES.filter(mod => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      mod.title.toLowerCase().includes(q) ||
      mod.description.toLowerCase().includes(q) ||
      mod.highlights.some(h => h.toLowerCase().includes(q))
    );
  });

  // Filter legal frameworks
  const filteredLegal = LEGAL_FRAMEWORKS.filter(law => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      law.title.toLowerCase().includes(q) ||
      law.description.toLowerCase().includes(q) ||
      law.sections.toLowerCase().includes(q)
    );
  });

  // Filter helplines
  const filteredHelplines = HELPLINES.filter(hl => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      hl.number.toLowerCase().includes(q) ||
      hl.name.toLowerCase().includes(q) ||
      hl.category.toLowerCase().includes(q) ||
      hl.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION */}
      <div className="relative w-full overflow-hidden bg-[#0e1321]">
        {/* Ambient Glow Aura */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-gradient-to-b from-[#4cd7f6]/15 via-[#0566d9]/10 to-transparent blur-[120px] pointer-events-none"></div>

        <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16 max-w-7xl mx-auto w-full">
          {/* Institutional Top Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#252a39] text-[#4cd7f6] border border-[#4cd7f6]/20">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping"></span>
              <span className="text-[11px] tracking-wider uppercase font-semibold">
                DUAL-LAYER CITIZEN & POLICE DEFENSE MATRIX • SOVEREIGN SECURE
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#bcc9cd] text-xs">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 112 Triage Online
              </span>
              <span>•</span>
              <span className="text-[#adc6ff] font-medium">Sec. 65B BSA Certified</span>
            </div>
          </div>

          {/* Hero Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Mission Statement & Direct CTA */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-[#4cd7f6] text-xs font-semibold tracking-wider uppercase">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>Technology That Protects. Intelligence That Responds.</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#dee2f6] font-bold tracking-tight leading-[1.1]">
                SURAKSHA <span className="text-[#4cd7f6]">AI</span> Safety Sentinel Platform
              </h1>

              <p className="text-base sm:text-lg text-[#bcc9cd] max-w-2xl leading-relaxed">
                Autonomous threat prediction, real-time physical & digital hazard interception, digital forensic chain-of-custody preservation, and sub-12 second verified multi-agency emergency dispatch. Engineered for women, children, and vulnerable citizens across sovereign cyber-physical zones.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#defense-lifecycle"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#06b6d4] text-[#00424f] hover:bg-[#4cd7f6] font-bold text-sm tracking-wide shadow-lg shadow-[#06b6d4]/20 transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">timeline</span>
                  <span>Explore 6-Step Defense Lifecycle</span>
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById('simulation-workbench');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#252a39] hover:bg-[#303444] text-[#dee2f6] font-semibold text-sm transition-colors border border-[#303444]"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#4cd7f6]">play_circle</span>
                  <span>Simulate Live SOS Triage</span>
                </button>
              </div>

              {/* Institutional Synergy Endorsement */}
              <div className="p-3.5 rounded-xl bg-[#161b2a] border border-[#252a39] flex items-center gap-3 mt-1">
                <div className="w-9 h-9 rounded-lg bg-[#1a1f2e] flex items-center justify-center text-[#4cd7f6] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                </div>
                <div className="text-xs text-[#bcc9cd] leading-snug">
                  <span>
                    Joint Mission:{' '}
                    <strong className="text-white">Cyber Helps Technology Pvt. Ltd.</strong> &{' '}
                    <strong className="text-white">Cyberhope Help Initiative Foundation</strong>{' '}
                    (Sec 8 Reg. TS/2024/0397972)
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Real-Time Tactical Emblem & Telemetry Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4cd7f6]/20 via-[#b395ff]/10 to-transparent rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl bg-[#1a1f2e]/90 border border-[#303444] backdrop-blur-xl p-5 sm:p-6 shadow-2xl flex flex-col gap-4">
                {/* Shield Header Motif */}
                <div className="flex items-center justify-between pb-3 border-b border-[#252a39]">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#0566d9] flex items-center justify-center text-[#003640] shadow-[0_0_24px_rgba(6,182,212,0.4)]">
                      <span className="material-symbols-outlined text-[32px] text-white">shield_with_heart</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline text-base text-white font-bold">SENTINEL KERNEL v4.8</span>
                      <span className="text-xs text-[#4cd7f6] font-mono font-semibold">STATUS: AUTONOMOUS SHIELD ARMED</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
                    ACTIVE MESH
                  </span>
                </div>

                {/* Mini Live Vector Tracker */}
                <div className="p-3 rounded-xl bg-[#090e1c] flex flex-col gap-2 font-mono text-xs border border-[#252a39]">
                  <div className="flex items-center justify-between text-[#bcc9cd]">
                    <span className="text-[11px]">TELEMETRY FEED (NATIONWIDE)</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-ping"></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#869397]">Continuous Anomaly Heuristics</span>
                    <span className="text-emerald-400 font-bold">99.98% RELIABILITY</span>
                  </div>
                  <div className="w-full bg-[#252a39] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#4cd7f6] h-full w-[94%] rounded-full shadow-[0_0_8px_#4cd7f6]"></div>
                  </div>
                </div>

                {/* 2x2 Telemetry Fast Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-[#252a39] flex flex-col">
                    <span className="font-mono text-[11px] text-[#bcc9cd]">PROTECTED CITIZENS</span>
                    <span className="font-headline text-xl text-[#4cd7f6] font-bold">128,400+</span>
                    <span className="text-emerald-400 text-[11px] mt-0.5">↑ 1,420 Active Today</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#252a39] flex flex-col">
                    <span className="font-mono text-[11px] text-[#bcc9cd]">AVG DISPATCH SPEED</span>
                    <span className="font-headline text-xl text-white font-bold">&lt; 12 Sec</span>
                    <span className="text-[#4cd7f6] text-[11px] mt-0.5">Automated Packet Triage</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#252a39] flex flex-col">
                    <span className="font-mono text-[11px] text-[#bcc9cd]">CHAIN OF CUSTODY</span>
                    <span className="font-headline text-xl text-[#adc6ff] font-bold">100% Tamper</span>
                    <span className="text-[#bcc9cd] text-[11px] mt-0.5">SHA-256 Court-Admissible</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#252a39] flex flex-col">
                    <span className="font-mono text-[11px] text-[#bcc9cd]">SYNCED HELPLINES</span>
                    <span className="font-headline text-xl text-[#d0bcff] font-bold">112 / 1098</span>
                    <span className="text-[#bcc9cd] text-[11px] mt-0.5">+ 181 / 1930 Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. THE 6-STEP DEFENSE LIFECYCLE */}
      <section className="w-full bg-[#090e1c] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#252a39]" id="defense-lifecycle">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-1.5 text-[#4cd7f6] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
                <span>END-TO-END AUTONOMOUS THREAT PIPELINE</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold">
                The 6-Step Defense Lifecycle
              </h2>
              <p className="text-sm text-[#bcc9cd] max-w-2xl">
                A continuous, intelligent defensive ring translating predictive telemetry into rapid human and law enforcement intervention.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-[#252a39] text-[#dee2f6] font-mono text-xs">
                STEP SEQUENCER: 01 → 06
              </span>
            </div>
          </div>

          {/* 6 Sequenced Steps Pipeline */}
          <div className="flex flex-col gap-4">
            {filteredSteps.map((step, idx) => (
              <React.Fragment key={step.number}>
                <div className="rounded-2xl bg-[#1a1f2e] border border-[#303444] p-5 sm:p-6 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-[#4cd7f6]/40 transition-colors">
                  <div className="flex items-start lg:items-center gap-4 w-full lg:w-3/5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0 ${step.numBg}`}
                    >
                      {step.number}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold tracking-wide uppercase text-white">
                          {step.title}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${step.badgeColor}`}>
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="font-headline text-base text-[#dee2f6] font-semibold mt-1">
                        {step.summary}
                      </h3>
                      <p className="text-xs text-[#bcc9cd] mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Side Capabilities Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full lg:w-2/5">
                    {step.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-2.5 rounded-xl bg-[#252a39] border border-[#303444]/60 flex items-center gap-2 text-xs"
                      >
                        <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">
                          {cap.icon}
                        </span>
                        <span className="font-mono text-[11px] text-[#dee2f6] truncate">{cap.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connector Arrow if not last */}
                {idx < filteredSteps.length - 1 && (
                  <div className="flex justify-center -my-2">
                    <span className="material-symbols-outlined text-[#869397] text-[24px]">
                      keyboard_arrow_down
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}

            {filteredSteps.length === 0 && (
              <div className="p-8 text-center bg-[#1a1f2e] rounded-2xl border border-[#303444] text-[#bcc9cd]">
                <p>No defense lifecycle steps matching "{searchQuery}".</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. CORE SPECIALIZED MODULES (4 ARCHITECTURE PANELS) */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="core-modules">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase">
              TACTICAL MODULE MATRIX
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold">
              Four Sovereign Defense Pillars
            </h2>
            <p className="text-sm text-[#bcc9cd] max-w-2xl">
              Modular algorithmic engines designed to address the unique threat vectors encountered by women and minors across Indian jurisdictional environments.
            </p>
          </div>

          {/* Bento Grid for 4 Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredModules.map((mod) => (
              <div
                key={mod.id}
                className="rounded-2xl bg-[#1a1f2e] border border-[#303444] p-6 flex flex-col justify-between shadow-xl hover:border-[#4cd7f6]/40 transition-colors group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${mod.iconBg}`}>
                      <span className="material-symbols-outlined text-[28px]">{mod.icon}</span>
                    </div>
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full bg-[#252a39] ${mod.textColor} font-semibold`}>
                      {mod.code}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg text-white font-bold">{mod.title}</h3>
                  <p className="text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 bg-[#252a39]/50 p-3 rounded-xl flex flex-wrap gap-2 border border-[#303444]/40">
                  {mod.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="text-xs font-mono text-[#dee2f6]">
                      • {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SIMULATION WORKBENCH */}
      <section className="w-full bg-[#090e1c] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#252a39]" id="simulation-workbench">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase">
                TACTICAL TESTING SANDBOX
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold">
                Live Incident Triage Simulator
              </h2>
              <p className="text-xs sm:text-sm text-[#bcc9cd] max-w-xl">
                Simulate how Suraksha AI intercepts vectors and auto-synthesizes emergency response packets in real-time.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-mono text-xs flex items-center gap-1.5 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> SANDBOX ENGINE LIVE
              </span>
            </div>
          </div>

          {/* Workbench Container */}
          <div className="rounded-2xl bg-[#1a1f2e] border border-[#303444] p-5 sm:p-6 shadow-2xl flex flex-col gap-5">
            {/* Scenario Selector Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => setSimScenario('voice-sos')}
                className={`p-3.5 rounded-xl text-left flex items-start gap-3 transition-all border ${
                  simScenario === 'voice-sos'
                    ? 'ring-1 ring-[#4cd7f6]/60 bg-[#252a39] border-[#4cd7f6]'
                    : 'bg-[#252a39]/70 border-[#303444] hover:bg-[#252a39]'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mic</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-sm text-white font-semibold">Scenario A: Night Distress</span>
                  <span className="text-xs text-[#bcc9cd]">Ambient Voice SOS trigger</span>
                </div>
              </button>

              <button
                onClick={() => setSimScenario('grooming')}
                className={`p-3.5 rounded-xl text-left flex items-start gap-3 transition-all border ${
                  simScenario === 'grooming'
                    ? 'ring-1 ring-[#4cd7f6]/60 bg-[#252a39] border-[#4cd7f6]'
                    : 'bg-[#252a39]/70 border-[#303444] hover:bg-[#252a39]'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">forum</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-sm text-white font-semibold">Scenario B: Minor Grooming</span>
                  <span className="text-xs text-[#bcc9cd]">Predatory text message intercept</span>
                </div>
              </button>

              <button
                onClick={() => setSimScenario('blackmail')}
                className={`p-3.5 rounded-xl text-left flex items-start gap-3 transition-all border ${
                  simScenario === 'blackmail'
                    ? 'ring-1 ring-[#4cd7f6]/60 bg-[#252a39] border-[#4cd7f6]'
                    : 'bg-[#252a39]/70 border-[#303444] hover:bg-[#252a39]'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">security_update_warning</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-sm text-white font-semibold">Scenario C: Sextortion Threat</span>
                  <span className="text-xs text-[#bcc9cd]">Blackmail hash extraction & 1930</span>
                </div>
              </button>
            </div>

            {/* Active Scenario Output Card */}
            <div className="p-5 rounded-xl bg-[#090e1c] border border-[#252a39] flex flex-col gap-4">
              {/* Dynamic Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#252a39]">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                      simScenario === 'voice-sos'
                        ? 'bg-red-500'
                        : simScenario === 'grooming'
                        ? 'bg-amber-400'
                        : 'bg-purple-400'
                    }`}
                  ></span>
                  <span className="font-headline text-sm font-bold text-white tracking-wide">
                    {simScenario === 'voice-sos' && 'VOICE DISTRESS DETECTED — TRIAGE IN PROGRESS'}
                    {simScenario === 'grooming' && 'COERCIVE MESSAGE INTERCEPT — MINOR SHIELD ACTIVE'}
                    {simScenario === 'blackmail' && 'ONLINE SEXTORTION INTERCEPT — VAULT LOCKED'}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#4cd7f6]">
                  {simScenario === 'voice-sos' && 'SHA256: 8f4a132e...b910408d'}
                  {simScenario === 'grooming' && 'SHA256: 3c9b741a...e12a809f'}
                  {simScenario === 'blackmail' && 'SHA256: 51df98b4...670c3221'}
                </span>
              </div>

              {/* Step Progression Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                {simScenario === 'voice-sos' && (
                  <>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">1. Trigger Vector</span>
                      <span className="text-white font-semibold text-xs">Keyword "Bachao" detected</span>
                      <span className="text-red-400 text-[11px]">Audio Confidence: 99.4%</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">2. On-Device Action</span>
                      <span className="text-white font-semibold text-xs">Encrypted Audio Recording</span>
                      <span className="text-[#4cd7f6] text-[11px]">Mic Locked • Screen Silent</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">3. Emergency Telemetry</span>
                      <span className="text-white font-semibold text-xs">GPS Ping 17.3850 N, 78.4867 E</span>
                      <span className="text-emerald-400 text-[11px]">Location Mesh Dispatched</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">4. Inter-Agency Uplink</span>
                      <span className="text-white font-semibold text-xs">National 112 Triage Packet</span>
                      <span className="text-[#adc6ff] font-mono text-[11px]">Dispatch Ack: &lt;8.2 sec</span>
                    </div>
                  </>
                )}

                {simScenario === 'grooming' && (
                  <>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">1. Trigger Vector</span>
                      <span className="text-white font-semibold text-xs">Grooming Language Flagged</span>
                      <span className="text-amber-400 text-[11px]">NLP Threat Index: 94%</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">2. On-Device Action</span>
                      <span className="text-white font-semibold text-xs">Obscene Content Quarantined</span>
                      <span className="text-[#4cd7f6] text-[11px]">Zero-Knowledge Shield</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">3. Guidance Trigger</span>
                      <span className="text-white font-semibold text-xs">Supportive Card Displayed</span>
                      <span className="text-purple-400 text-[11px]">1098 Childline Synced</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">4. Inter-Agency Uplink</span>
                      <span className="text-white font-semibold text-xs">Guardian Dossier Encrypted</span>
                      <span className="text-emerald-400 font-mono text-[11px]">No Privacy Snooping</span>
                    </div>
                  </>
                )}

                {simScenario === 'blackmail' && (
                  <>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">1. Trigger Vector</span>
                      <span className="text-white font-semibold text-xs">Extortion Demand Detected</span>
                      <span className="text-purple-400 text-[11px]">Bank / Crypto Wallet Tag</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">2. Evidence Vault</span>
                      <span className="text-white font-semibold text-xs">StopNCII Hash Generated</span>
                      <span className="text-[#4cd7f6] text-[11px]">SHA-256 BSA Sec 65B</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">3. Psychological Aid</span>
                      <span className="text-white font-semibold text-xs">HOPE-1 Crisis Counselor</span>
                      <span className="text-emerald-400 text-[11px]">Do Not Pay Guidance</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#252a39] border border-[#303444] flex flex-col gap-1">
                      <span className="text-[#bcc9cd] text-[10px] uppercase font-mono">4. Inter-Agency Uplink</span>
                      <span className="text-white font-semibold text-xs">1930 Cyber Cell Drafted</span>
                      <span className="text-[#adc6ff] font-mono text-[11px]">Freeze Request Armed</span>
                    </div>
                  </>
                )}
              </div>

              {/* Action Log Box */}
              <div className="p-3.5 rounded-lg bg-[#161b2a] border border-[#252a39] flex flex-col gap-1.5 font-mono text-xs text-[#bcc9cd]">
                <div className="text-[#4cd7f6] font-semibold">[SURAKSHA KERNEL TELEMETRY LOG]</div>
                {simScenario === 'voice-sos' && (
                  <>
                    <div>&gt; 23:14:02.040 • Audio sensor detected acoustic distress frequency match (Class 4 urgency)</div>
                    <div>&gt; 23:14:02.120 • Sovereign Vault initialized. Section 65B hash generated for incoming audio stream</div>
                    <div>&gt; 23:14:02.890 • Automated SMS/WhatsApp beacon relayed to 3 registered guardians with live tracking link</div>
                  </>
                )}
                {simScenario === 'grooming' && (
                  <>
                    <div>&gt; 16:22:18.012 • NLP Classifier detected coercive isolation markers in unverified chat</div>
                    <div>&gt; 16:22:18.045 • Sensitive image attachment obfuscated via zero-knowledge on-device neural filter</div>
                    <div>&gt; 16:22:18.089 • Child prompted with supportive helpline card (1098 Childline link established)</div>
                  </>
                )}
                {simScenario === 'blackmail' && (
                  <>
                    <div>&gt; 11:05:44.200 • Demand message tagged with extortion keywords. Automated evidence collector armed</div>
                    <div>&gt; 11:05:44.240 • Section 65B compliant screenshot snapshot taken with court-admissible metadata</div>
                    <div>&gt; 11:05:45.010 • HOPE-1 crisis counselor prompt surfaced: Do not pay, we are here to support you</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATUTORY COMPLIANCE & LEGAL FRAMEWORK */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs font-semibold text-[#4cd7f6] tracking-wider uppercase">
              SOVEREIGN LEGAL ALIGNMENT
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-white font-bold">
              Constitutional & Statutory Rigor
            </h2>
            <p className="text-sm text-[#bcc9cd]">
              Built from the ground up to support Indian jurisprudence, ensuring digital evidence holds up in court while protecting constitutional citizen privacy.
            </p>
          </div>

          {/* Legal Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredLegal.map((law, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#1a1f2e] border border-[#303444] flex flex-col gap-2.5 shadow-md hover:border-[#4cd7f6]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#252a39] flex items-center justify-center text-[#4cd7f6]">
                  <span className={`material-symbols-outlined text-[24px] ${law.iconColor}`}>{law.icon}</span>
                </div>
                <span className="font-headline text-base text-white font-semibold mt-1">{law.title}</span>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">{law.description}</p>
                <div className="pt-2 mt-auto border-t border-[#252a39] text-[10px] font-mono text-[#869397]">
                  {law.sections}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Helpline Callout Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-[#1a1f2e] via-[#252a39] to-[#1a1f2e] border border-[#303444] p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                <span className="material-symbols-outlined text-[32px]">call</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-base sm:text-lg text-white font-bold">
                  24x7 Direct Operational Helplines
                </span>
                <span className="text-xs sm:text-sm text-[#bcc9cd] mt-0.5">
                  National Emergency: <strong className="text-[#4cd7f6]">112</strong> • Cyber Crime:{' '}
                  <strong className="text-[#4cd7f6]">1930</strong> • Childline:{' '}
                  <strong className="text-[#4cd7f6]">1098</strong> • Women:{' '}
                  <strong className="text-[#4cd7f6]">181 / 1091</strong>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="tel:112"
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold transition-colors shadow-lg shadow-red-600/20"
              >
                Emergency 112
              </a>
              <a
                href="tel:1930"
                className="px-5 py-2.5 rounded-xl bg-[#252a39] hover:bg-[#303444] border border-[#303444] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                Cyber 1930
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
