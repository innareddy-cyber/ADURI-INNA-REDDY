import React, { useState } from 'react';
import { Shield, Lock, Calculator, Eye, AlertTriangle, X, CheckCircle2 } from 'lucide-react';

interface StealthCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StealthCalculatorModal: React.FC<StealthCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [prevVal, setPrevVal] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [inVault, setInVault] = useState(false);
  const [duressTriggered, setDuressTriggered] = useState(false);

  if (!isOpen) return null;

  const handleDigit = (digit: string) => {
    if (display === '0') {
      setDisplay(digit);
    } else {
      setDisplay(display + digit);
    }

    // Secret duress trigger: if user types "9999" or "1337"
    const nextVal = (display === '0' ? '' : display) + digit;
    if (nextVal.endsWith('9999') || nextVal.endsWith('1337')) {
      setInVault(true);
    }
  };

  const handleOp = (operation: string) => {
    setPrevVal(parseFloat(display));
    setOp(operation);
    setDisplay('0');
  };

  const handleEqual = () => {
    if (prevVal !== null && op) {
      const current = parseFloat(display);
      let res = 0;
      if (op === '+') res = prevVal + current;
      if (op === '-') res = prevVal - current;
      if (op === '×') res = prevVal * current;
      if (op === '÷') res = current !== 0 ? prevVal / current : 0;
      setDisplay(res.toString());
      setPrevVal(null);
      setOp(null);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevVal(null);
    setOp(null);
  };

  const handleDuressPin = () => {
    setDuressTriggered(true);
    setTimeout(() => {
      setDuressTriggered(false);
      setInVault(false);
      setDisplay('0');
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#161b2a] border border-[#303444] rounded-2xl shadow-2xl overflow-hidden text-[#dee2f6]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0e1321] border-b border-[#303444]">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#4cd7f6]" />
            <span className="text-sm font-semibold tracking-wide">
              {inVault ? 'SURAKSHA ENCRYPTED VAULT' : 'SCIENTIFIC CALC v2.4 (CAMOUFLAGE)'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#252a39] text-[#bcc9cd] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!inVault ? (
          <div className="p-4 flex flex-col gap-3">
            <div className="p-3 bg-[#090e1c] rounded-xl border border-[#252a39] text-right font-mono text-2xl font-bold tracking-widest text-[#4cd7f6] overflow-x-auto min-h-[58px] flex items-center justify-end">
              {display}
            </div>

            <div className="text-xs text-[#bcc9cd] bg-[#1a1f2e] p-2.5 rounded-lg flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#4cd7f6]" />
                Stealth Vault PIN: Enter <strong className="text-white">9999</strong> to unlock
              </span>
              <button
                onClick={() => setInVault(true)}
                className="text-[#4cd7f6] hover:underline font-semibold text-[11px]"
              >
                Direct Unlock
              </button>
            </div>

            {/* Calculator Keypad */}
            <div className="grid grid-cols-4 gap-2 font-mono text-sm">
              <button onClick={handleClear} className="p-3 rounded-lg bg-[#252a39] hover:bg-[#303444] text-[#ffb4ab] font-bold">C</button>
              <button onClick={() => setDisplay((parseFloat(display) * -1).toString())} className="p-3 rounded-lg bg-[#252a39] hover:bg-[#303444]">±</button>
              <button onClick={() => setDisplay((parseFloat(display) / 100).toString())} className="p-3 rounded-lg bg-[#252a39] hover:bg-[#303444]">%</button>
              <button onClick={() => handleOp('÷')} className="p-3 rounded-lg bg-[#0566d9] hover:bg-[#06b6d4] text-white font-bold">÷</button>

              <button onClick={() => handleDigit('7')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">7</button>
              <button onClick={() => handleDigit('8')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">8</button>
              <button onClick={() => handleDigit('9')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">9</button>
              <button onClick={() => handleOp('×')} className="p-3 rounded-lg bg-[#0566d9] hover:bg-[#06b6d4] text-white font-bold">×</button>

              <button onClick={() => handleDigit('4')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">4</button>
              <button onClick={() => handleDigit('5')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">5</button>
              <button onClick={() => handleDigit('6')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">6</button>
              <button onClick={() => handleOp('-')} className="p-3 rounded-lg bg-[#0566d9] hover:bg-[#06b6d4] text-white font-bold">-</button>

              <button onClick={() => handleDigit('1')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">1</button>
              <button onClick={() => handleDigit('2')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">2</button>
              <button onClick={() => handleDigit('3')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">3</button>
              <button onClick={() => handleOp('+')} className="p-3 rounded-lg bg-[#0566d9] hover:bg-[#06b6d4] text-white font-bold">+</button>

              <button onClick={() => handleDigit('0')} className="p-3 col-span-2 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">0</button>
              <button onClick={() => handleDigit('.')} className="p-3 rounded-lg bg-[#1a1f2e] hover:bg-[#252a39]">.</button>
              <button onClick={handleEqual} className="p-3 rounded-lg bg-[#4cd7f6] hover:bg-[#06b6d4] text-[#003640] font-black">=</button>
            </div>
          </div>
        ) : (
          <div className="p-5 flex flex-col gap-4">
            <div className="flex items-center gap-3 p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl">
              <Shield className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">Zero-Trace Evidence Vault Armed</h4>
                <p className="text-xs text-[#bcc9cd]">AES-256 Sovereign Storage • BSA Sec 65B Certified</p>
              </div>
            </div>

            {duressTriggered && (
              <div className="p-3 bg-red-950/70 border border-red-500/50 rounded-xl text-xs text-red-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Duress Protocol Fired!</strong> Silent telemetry beacon dispatched to trusted contacts. Local forensic evidence locked behind decoy cache.
                </span>
              </div>
            )}

            <div className="space-y-2 text-xs">
              <span className="text-[#bcc9cd] font-semibold uppercase tracking-wider text-[10px]">
                Vaulted Evidence Records (3 Files)
              </span>
              <div className="p-3 bg-[#090e1c] rounded-lg border border-[#252a39] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">Audio_Distress_Capture_01.wav</p>
                  <p className="text-[#869397] font-mono text-[10px]">SHA256: 7f3b89...420a | 1.8 MB</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">VERIFIED</span>
              </div>
              <div className="p-3 bg-[#090e1c] rounded-lg border border-[#252a39] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">WhatsApp_Threat_Screenshots.pdf</p>
                  <p className="text-[#869397] font-mono text-[10px]">SHA256: 9e10ab...882c | 4.2 MB</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">ENCRYPTED</span>
              </div>
              <div className="p-3 bg-[#090e1c] rounded-lg border border-[#252a39] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">Extortion_Call_Metadata.json</p>
                  <p className="text-[#869397] font-mono text-[10px]">SHA256: b394ca...f190 | 128 KB</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">1930 READY</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleDuressPin}
                className="w-full py-2.5 px-3 rounded-lg bg-red-900/40 hover:bg-red-800/60 border border-red-500/40 text-red-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <AlertTriangle className="w-4 h-4" />
                Simulate Coercion / Duress PIN (Emergency Silent Wipe)
              </button>

              <button
                onClick={() => {
                  setInVault(false);
                  setDisplay('0');
                }}
                className="w-full py-2 px-3 rounded-lg bg-[#252a39] hover:bg-[#303444] text-xs font-medium text-[#bcc9cd] hover:text-white transition-colors"
              >
                Return to Calculator Camouflage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
