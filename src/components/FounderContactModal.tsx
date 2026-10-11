import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, X, Check, ExternalLink, ShieldCheck } from 'lucide-react';

interface FounderContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FounderContactModal: React.FC<FounderContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#161b2a] border border-[#303444] rounded-2xl shadow-2xl overflow-hidden text-[#dee2f6]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0e1321] border-b border-[#252a39]">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            <span className="text-[#4cd7f6] font-bold uppercase tracking-wider">
              FOUNDER CHAIRMAN DIRECT CONTACT DOSSIER
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#252a39] text-[#bcc9cd] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            {/* Portrait */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-[#090e1c] border-2 border-[#4cd7f6]/40 shrink-0 shadow-lg">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAko5CsSwGsl-cVUZ-x07dcStWmBTbthiZBYafXm9llS2ZdcOI-LkwHQPDUvD0oarvVhF-HsoY_d0kW6ZG9qTpVuYhE3pDxbwg_Og250KevfwezGX21v1J0bm46C5AzYP2PEcpo917sEtFgDLQ4tB0OrDjnx0j3kG1yjZ95IvrfqYLCoCNzwSz6KW-6Ct6OPK0ZBB_4uAMHzyr196YqG3l0cCThq5jNY6pRRztM9jr42aD9LhRdqoza_4B2vLKc8kE4BA"
                alt="Aduri Inna Reddy"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute bottom-1 left-1 right-1 text-[9px] font-mono text-center bg-black/70 text-[#4cd7f6] rounded px-1">
                ID: CH-FND-01
              </span>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#06b6d4] text-[#00424f] text-[10px] font-bold uppercase">
                  LEADERSHIP SPOTLIGHT
                </span>
                <span className="text-[10px] text-[#bcc9cd] font-mono">HYDERABAD • TELANGANA</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
                Aduri Inna Reddy
              </h3>
              <p className="text-xs sm:text-sm text-[#4cd7f6] font-semibold">
                Senior Journalist & Investigative Reporter
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] text-[#bcc9cd]">
                <span className="bg-[#252a39] px-2 py-0.5 rounded">Chairman: Cyber Helps NGO</span>
                <span className="bg-[#252a39] px-2 py-0.5 rounded">Chairman: CYBERHELPS TECHNOLOGIES</span>
                <span className="bg-[#252a39] px-2 py-0.5 rounded">Chief Editor: cybercrimenews.net</span>
              </div>
            </div>
          </div>

          {/* Contact Coordinates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#252a39]">
            {/* Phone */}
            <div className="p-3.5 rounded-xl bg-[#0e1321] border border-[#252a39] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#869397] uppercase font-mono block">Direct Phone</span>
                  <a href="tel:+919849606691" className="text-sm font-bold text-white hover:text-[#4cd7f6] font-mono">
                    +91 98496 06691
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('+919849606691', 'phone')}
                className="text-xs text-[#bcc9cd] hover:text-white p-1.5"
                title="Copy Number"
              >
                {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : 'Copy'}
              </button>
            </div>

            {/* WhatsApp */}
            <div className="p-3.5 rounded-xl bg-[#0e1321] border border-[#252a39] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#869397] uppercase font-mono block">Direct WhatsApp</span>
                  <a
                    href="https://wa.me/919849606691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-green-400 font-mono"
                  >
                    +91 98496 06691
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/919849606691?text=Hello%20Aduri%20Inna%20Reddy%20Sir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-green-400 font-bold hover:underline"
              >
                Chat
              </a>
            </div>

            {/* Email */}
            <div className="p-3.5 rounded-xl bg-[#0e1321] border border-[#252a39] flex items-center justify-between sm:col-span-2">
              <div className="flex items-center gap-3 truncate">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-[#4cd7f6] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-[#869397] uppercase font-mono block">Official Email</span>
                  <a
                    href="mailto:founder@cyberhelpstechnologies.com"
                    className="text-xs sm:text-sm font-bold text-white hover:text-[#4cd7f6] font-mono truncate block"
                  >
                    founder@cyberhelpstechnologies.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('founder@cyberhelpstechnologies.com', 'email')}
                className="text-xs text-[#bcc9cd] hover:text-white p-1.5 shrink-0"
              >
                {copied === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : 'Copy'}
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href="tel:+919849606691"
              className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#0566d9] text-[#003640] hover:brightness-110 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Chairman Directly</span>
            </a>
            <a
              href="https://wa.me/919849606691?text=Hello%20Aduri%20Inna%20Reddy%20Sir,%20connecting%20regarding%20Cyber%20Crime%20News%20/%20Cyberhelps%20Technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-[#252a39] hover:bg-[#303444] border border-[#303444] text-white hover:text-[#4cd7f6] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
