import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Building2, Cpu, Layers, Briefcase, ChevronRight } from 'lucide-react';

interface LogoSummonIntroProps {
  onComplete: () => void;
}

export const LogoSummonIntro: React.FC<LogoSummonIntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'summon' | 'expand' | 'ready' | 'exit'>('summon');
  const [statusText, setStatusText] = useState('INITIALIZING GROUP INFRASTRUCTURE...');

  useEffect(() => {
    // Escape key listener to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Progress counter (0 to 100% over 2.6 seconds)
    const startTime = Date.now();
    const duration = 2600;

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current < 35) {
        setStatusText('INITIALIZING CONGLOMERATE FOUNDATION...');
      } else if (current < 70) {
        setStatusText('CONNECTING 4 OPERATING DIVISIONS...');
        setPhase('expand');
      } else if (current < 100) {
        setStatusText('SYNCHRONIZING ENTERPRISE ASSETS...');
      } else {
        setStatusText('VENTURES READY • WELCOME TO navanextventures');
        setPhase('ready');
        clearInterval(progressTimer);
      }
    }, 40);

    // Auto-enter timer after a generous 8 seconds if user doesn't click
    const autoEnterTimer = setTimeout(() => {
      handleEnter();
    }, 8500);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(progressTimer);
      clearTimeout(autoEnterTimer);
    };
  }, []);

  const handleEnter = () => {
    setPhase('exit');
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div
      onClick={handleEnter}
      className={`fixed inset-0 z-[9999] bg-[#03070E] text-white flex flex-col justify-between items-center py-6 sm:py-10 px-4 sm:px-8 select-none transition-all duration-500 ease-out transform-gpu will-change-transform cursor-pointer overflow-hidden ${
        phase === 'exit' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Navanext Title Card Loading Screen"
    >
      {/* Cinematic Golden Ambient Beams & Architectural Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Fine Architectural Grid */}
        <div className="w-full h-full opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"></div>
        
        {/* Center Golden Flare Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] bg-[#C6A66B]/15 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Diagonal Light Beams */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Cinematic Letterbox Framing Lines */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"></div>
      </div>

      {/* TOP BAR: Production Title & Direct Skip */}
      <div className="relative z-10 w-full max-w-5xl flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase border-b border-slate-800/80 pb-3 sm:pb-4">
        <div className="flex items-center gap-2.5 text-gold-400 font-bold">
          <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
          <span>navanextventures</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-slate-500">
            <span>CONSOLIDATED PORTFOLIO</span>
            <span className="text-slate-700">•</span>
            <span className="text-gold-400 font-mono">EDITION 2026</span>
          </div>

          {/* Quick Enter / Skip Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleEnter();
            }}
            className="px-3 py-1 bg-slate-900 hover:bg-gold-500 hover:text-navy-950 text-slate-300 font-mono text-[10px] uppercase tracking-widest border border-slate-700 hover:border-gold-400 rounded-[2px] transition-all flex items-center gap-1.5"
          >
            <span>Skip [ESC]</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* CENTER THEATRICAL TITLE CARD */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl my-auto py-4 sm:py-6">
        {/* Animated Brand Mark Summoning Box */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 sm:mb-8 flex items-center justify-center">
          {/* navanextventures angular N mark */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_0_25px_rgba(77,151,112,0.45)]"
          >
            <path
              d="M6 32V8L34 32V8M6 32L20 20L34 32"
              stroke="#205344"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeDasharray="120"
              strokeDashoffset={120 - (progress / 100) * 120}
              className="transition-all duration-100"
            />
          </svg>

          {/* Central Flash Burst on Completion */}
          {progress >= 95 && (
            <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl animate-ping pointer-events-none"></div>
          )}
        </div>

        {/* Wordmark Title Card Typography */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-gold-500"></span>
            <span className="text-[10px] sm:text-xs font-mono lowercase tracking-[0.2em] text-emerald-300 font-bold">
              navanextventures
            </span>
            <span className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-gold-500"></span>
          </div>

          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[0.01em] lowercase text-white">
            navanextventures<span className="text-emerald-300">.</span>
          </h1>

          <p className="font-serif italic text-base sm:text-2xl text-slate-200 tracking-wide font-light max-w-xl mx-auto">
            One Group. Multiple Possibilities.
          </p>
        </div>

        {/* The 4 Operating Pillars (Cinema Credits Strip) */}
        <div
          className={`mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 w-full transition-all duration-700 ${
            phase === 'summon' ? 'opacity-40 translate-y-3' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="p-3 bg-navy-950/90 border border-slate-800/90 hover:border-gold-500/40 rounded-[2px] flex items-center gap-2.5 text-left transition-colors">
            <Building2 className="w-4 h-4 text-gold-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-[9px] font-mono text-gold-400 font-bold truncate">01 BUILDERS</div>
              <div className="text-[10px] text-slate-300 truncate">Construction</div>
            </div>
          </div>

          <div className="p-3 bg-navy-950/90 border border-slate-800/90 hover:border-gold-500/40 rounded-[2px] flex items-center gap-2.5 text-left transition-colors">
            <Cpu className="w-4 h-4 text-gold-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-[9px] font-mono text-gold-400 font-bold truncate">02 SOFTWARE</div>
              <div className="text-[10px] text-slate-300 truncate">Technology</div>
            </div>
          </div>

          <div className="p-3 bg-navy-950/90 border border-slate-800/90 hover:border-gold-500/40 rounded-[2px] flex items-center gap-2.5 text-left transition-colors">
            <Layers className="w-4 h-4 text-gold-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-[9px] font-mono text-gold-400 font-bold truncate">03 REAL ESTATE</div>
              <div className="text-[10px] text-slate-300 truncate">Properties</div>
            </div>
          </div>

          <div className="p-3 bg-navy-950/90 border border-slate-800/90 hover:border-gold-500/40 rounded-[2px] flex items-center gap-2.5 text-left transition-colors">
            <Briefcase className="w-4 h-4 text-gold-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-[9px] font-mono text-gold-400 font-bold truncate">04 ADVISORY</div>
              <div className="text-[10px] text-slate-300 truncate">Enterprise</div>
            </div>
          </div>
        </div>

        {/* High-Impact "ENTER GROUP PORTFOLIO" Button */}
        <div className="mt-8 sm:mt-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleEnter();
            }}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 font-display font-extrabold text-xs sm:text-sm uppercase tracking-[0.22em] rounded-[2px] transition-all duration-300 shadow-[0_0_30px_rgba(198,166,107,0.5)] hover:shadow-[0_0_45px_rgba(198,166,107,0.8)] hover:scale-105 active:scale-95"
          >
            <span>ENTER GROUP PORTFOLIO</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="text-[10px] font-mono text-slate-400 mt-2.5 tracking-wider">
            Click anywhere or press Enter to begin
          </div>
        </div>
      </div>

      {/* BOTTOM CONSOLE: Progress Meter & Telemetry */}
      <div className="relative z-10 w-full max-w-5xl space-y-3 pt-3 sm:pt-4 border-t border-slate-800/80">
        <div className="h-[2px] w-full bg-slate-900 overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-200 transition-all duration-100 ease-out shadow-gold-glow"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[10.5px] font-mono text-slate-400 gap-1 sm:gap-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span className="text-slate-300">{statusText}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gold-400 font-bold font-mono">[{progress}% LOADED]</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">PORTFOLIO DEMONSTRATION</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSummonIntro;
