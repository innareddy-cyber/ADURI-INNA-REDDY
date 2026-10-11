import React, { useState, useEffect } from 'react';
import { ShieldAlert, PhoneCall, Radio, AlertOctagon, X, MapPin, Mic, CheckCircle } from 'lucide-react';
import { HELPLINES } from '../data/platformData';

interface SosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SosModal: React.FC<SosModalProps> = ({ isOpen, onClose }) => {
  const [countdown, setCountdown] = useState(5);
  const [dispatched, setDispatched] = useState(false);
  const [micArmed, setMicArmed] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && countdown > 0 && !dispatched) {
      timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    } else if (countdown === 0 && !dispatched) {
      setDispatched(true);
    }
    return () => clearTimeout(timer);
  }, [isOpen, countdown, dispatched]);

  if (!isOpen) return null;

  const resetAndClose = () => {
    setCountdown(5);
    setDispatched(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#161b2a] border border-red-500/40 rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.3)] overflow-hidden text-[#dee2f6]">
        {/* Top Alert Banner */}
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 px-4 py-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
            <span className="font-bold tracking-wider text-sm uppercase">SURAKSHA EMERGENCY DISPATCH GRID</span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1 rounded-md hover:bg-black/20 text-white/90 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">
          {!dispatched ? (
            <div className="text-center flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center text-red-400">
                <span className="text-4xl font-black font-mono animate-ping">{countdown}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">DISPATCHING 112 MULTI-AGENCY SOS</h3>
                <p className="text-xs text-[#bcc9cd] mt-1 max-w-sm">
                  Sub-12s automated telemetry handshake armed. Encrypted audio beacon and live GPS link preparing broadcast.
                </p>
              </div>

              <div className="w-full flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setDispatched(true)}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg transition-all"
                >
                  Send Immediately
                </button>
                <button
                  onClick={resetAndClose}
                  className="px-5 py-2.5 rounded-xl bg-[#252a39] hover:bg-[#303444] text-[#bcc9cd] font-semibold text-sm transition-colors"
                >
                  Cancel Distress
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Emergency Packet Broadcast Complete</h4>
                  <p className="text-xs text-emerald-300">National 112 & Trusted Contacts Notified with Live Telemetry</p>
                </div>
              </div>

              {/* Telemetry packet details */}
              <div className="p-3.5 bg-[#090e1c] rounded-xl border border-[#252a39] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-[#869397]">
                  <span>PACKET ID: #SRK-2026-99124</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Radio className="w-3.5 h-3.5 animate-pulse" /> LIVE STREAMING
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-[#4cd7f6]" />
                  <span>GPS: 17.385044° N, 78.486671° E (Hyderabad Metro Ring)</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Mic className="w-4 h-4 text-red-400" />
                  <span>Acoustic Distress: Bachao / Help Detected (Confidence: 99.4%)</span>
                </div>
                <div className="text-[#869397] text-[11px]">
                  <span>SHA256 VAULT RECORD: c488319f0a...d872e4 (Sec 65B Certified)</span>
                </div>
              </div>
            </div>
          )}

          {/* Quick Helplines Dial Row */}
          <div>
            <span className="text-xs font-semibold text-[#bcc9cd] uppercase tracking-wider block mb-2">
              Direct Emergency Helplines
            </span>
            <div className="grid grid-cols-2 gap-2">
              {HELPLINES.slice(0, 4).map(hl => (
                <a
                  key={hl.number}
                  href={`tel:${hl.number}`}
                  className="p-2.5 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39] border border-[#303444] flex items-center justify-between text-xs transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-white">{hl.name.split(' ')[0]}</span>
                    <span className="text-[10px] text-[#bcc9cd] truncate">{hl.category}</span>
                  </div>
                  <span className="text-base font-black font-mono text-[#4cd7f6]">{hl.number}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
