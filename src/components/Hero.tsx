import { useState, useRef } from 'react';
import { ChevronDown, Sparkles, ArrowDown } from 'lucide-react';
import { ProfileInfo } from '../types';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

interface HeroProps {
  profile?: ProfileInfo;
  onOpenCV?: () => void;
  onSelectExperience?: () => void;
}

interface FloatingPointConfig {
  id: string;
  label: string;
  left: string;
  top: string;
  tier: 'supporting' | 'primary' | 'flagship';
  color: 'gold' | 'blue';
  shineDelay: string;
}

const FLOATING_POINTS: FloatingPointConfig[] = [
  // --- TOP BAND ---
  {
    id: 'p1',
    label: '14+ Years Exp',
    left: '12%',
    top: '10%',
    tier: 'supporting',
    color: 'gold',
    shineDelay: '-1.5s',
  },
  {
    id: 'p2',
    label: 'Advanced Excel',
    left: '32%',
    top: '14%',
    tier: 'supporting',
    color: 'gold',
    shineDelay: '-4.2s',
  },
  {
    id: 'p3',
    label: 'Financial Reporting',
    left: '50%',
    top: '11%',
    tier: 'flagship',
    color: 'gold',
    shineDelay: '-1.0s',
  },
  {
    id: 'p4',
    label: 'ERP Software',
    left: '68%',
    top: '14%',
    tier: 'supporting',
    color: 'blue',
    shineDelay: '-3.8s',
  },
  {
    id: 'p5',
    label: 'MS Office',
    left: '88%',
    top: '10%',
    tier: 'supporting',
    color: 'blue',
    shineDelay: '-6.5s',
  },

  // --- LEFT FLANK ---
  {
    id: 'p6',
    label: 'QuickBooks',
    left: '11%',
    top: '30%',
    tier: 'supporting',
    color: 'gold',
    shineDelay: '-5.0s',
  },
  {
    id: 'p7',
    label: 'Cash Handling',
    left: '20%',
    top: '45%',
    tier: 'supporting',
    color: 'blue',
    shineDelay: '-2.5s',
  },
  {
    id: 'p8',
    label: 'VAT Reports & Submission',
    left: '10%',
    top: '60%',
    tier: 'primary',
    color: 'blue',
    shineDelay: '-3.5s',
  },
  {
    id: 'p9',
    label: 'Monthly Closing',
    left: '21%',
    top: '74%',
    tier: 'primary',
    color: 'blue',
    shineDelay: '-5.2s',
  },

  // --- RIGHT FLANK ---
  {
    id: 'p10',
    label: 'Oracle',
    left: '89%',
    top: '30%',
    tier: 'supporting',
    color: 'gold',
    shineDelay: '-4.0s',
  },
  {
    id: 'p11',
    label: 'Qoyod',
    left: '80%',
    top: '45%',
    tier: 'supporting',
    color: 'blue',
    shineDelay: '-6.2s',
  },
  {
    id: 'p12',
    label: 'Receivables',
    left: '90%',
    top: '60%',
    tier: 'primary',
    color: 'gold',
    shineDelay: '-2.2s',
  },
  {
    id: 'p13',
    label: 'Costing',
    left: '79%',
    top: '74%',
    tier: 'supporting',
    color: 'blue',
    shineDelay: '-4.8s',
  },

  // --- BOTTOM BAND ---
  {
    id: 'p14',
    label: 'Payables',
    left: '10%',
    top: '88%',
    tier: 'primary',
    color: 'blue',
    shineDelay: '-5.8s',
  },
  {
    id: 'p15',
    label: 'Reconciliations',
    left: '30%',
    top: '87%',
    tier: 'primary',
    color: 'gold',
    shineDelay: '-3.2s',
  },
  {
    id: 'p16',
    label: 'Petty Cash',
    left: '50%',
    top: '89%',
    tier: 'supporting',
    color: 'gold',
    shineDelay: '-7.0s',
  },
  {
    id: 'p17',
    label: 'P&L Account',
    left: '70%',
    top: '87%',
    tier: 'primary',
    color: 'gold',
    shineDelay: '-1.8s',
  },
  {
    id: 'p18',
    label: 'Balance Sheet',
    left: '90%',
    top: '88%',
    tier: 'primary',
    color: 'blue',
    shineDelay: '-5.5s',
  },
];

export function Hero(_props: HeroProps) {
  const { isRTL } = useLanguage();
  // Center button state: 'portfolio' (initial) -> 'accountant' (after first click)
  const [buttonState, setButtonState] = useState<'portfolio' | 'accountant'>('portfolio');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const clickSoundTimeout = useRef<number | null>(null);

  const handleCenterButtonClick = () => {
    if (buttonState === 'portfolio') {
      // First click: smoothly transition label to ACCOUNTANT
      setIsTransitioning(true);
      if (clickSoundTimeout.current) clearTimeout(clickSoundTimeout.current);
      clickSoundTimeout.current = window.setTimeout(() => {
        setButtonState('accountant');
        setIsTransitioning(false);
      }, 260);
    } else {
      // Second click: smoothly scroll to the website's existing About section
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        const navbarHeight = 80;
        const targetTop = aboutEl.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
        try {
          window.history.pushState(null, '', '#about');
        } catch {}
      }
    }
  };

  return (
    <section
      id="home"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="hero-container relative min-h-[calc(100svh-5rem)] w-full overflow-hidden select-none lg:h-[calc(100svh-5rem)]"
      aria-label="Portfolio Hero Section"
    >
      {/* 3D Depth Background & Ambient Lighting */}
      <div className="hero-depth-bg absolute inset-0" aria-hidden="true">
        <div className="ambient-orb ambient-orb-gold absolute" />
        <div className="ambient-orb ambient-orb-blue absolute" />
        <div className="ambient-grid absolute inset-0" />
        <div className="ambient-vignette absolute inset-0" />
      </div>

      {/* Main Relative Canvas for 3D Floating Elements and Center Command */}
      <div className="relative mx-auto h-full min-h-[calc(100svh-5rem)] w-full max-w-[1920px]">
        {/*
          =======================================================
          18 3D FLOATING PROFESSIONAL POINTS
          - Nested wrapper architecture: Anchor (position) -> Motion (12-25px keyframe) -> Fade (staggered opacity) -> Pill
          - Natural 50/50 mix of Champagne Gold and Executive Blue
          - Two-tier visual hierarchy (Primary vs Supporting)
          - Flagship Point: "Financial Reporting" has strongest aura
          - Rounded 3D pills with bright borders & controlled specular shine sweep
          - Multi-directional continuous floating animations (vertical, horizontal, diagonal, orbital, 3D depth)
          - Staggered appear/disappear timing (always 14+ visible at once)
          - Zero collision with screen boundaries or center button
          =======================================================
        */}
        <div className="points-constellation absolute inset-0 pointer-events-none" aria-label="Professional Points">
          {FLOATING_POINTS.map((pt) => (
            <div
              key={pt.id}
              className={`point-anchor point-anchor-${pt.id}`}
              style={{ left: pt.left, top: pt.top }}
            >
              <div className={`point-motion motion-${pt.id}`}>
                <div className={`point-fade fade-${pt.id}`}>
                  <div
                    className={`hero-pill pill-${pt.color} pill-${pt.tier} ${
                      pt.tier === 'flagship' ? 'pill-flagship' : ''
                    }`}
                    style={{ '--shine-delay': pt.shineDelay } as React.CSSProperties}
                  >
                    <span className="pill-dot" />
                    <span className="pill-text">{pt.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*
          =======================================================
          CENTER 3D INTERACTIVE COMMAND BUTTON
          - Placed in exact center of Home screen
          - State 1: PORTFOLIO (Click 1 transitions to ACCOUNTANT)
          - State 2: ACCOUNTANT (Click 2 scrolls to #about)
          - Layered 3D tactile elevation with metallic bevel & shine
          =======================================================
        */}
        <div className="center-command-anchor absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          {/* Ambient Outer Halo */}
          <div className="center-btn-halo" aria-hidden="true" />

          <button
            type="button"
            onClick={handleCenterButtonClick}
            className={`center-3d-button group relative cursor-pointer outline-none ${
              isTransitioning ? 'button-is-flipping' : ''
            } ${buttonState === 'accountant' ? 'state-accountant' : 'state-portfolio'}`}
            aria-label={
              buttonState === 'portfolio'
                ? 'Portfolio Button: Click to reveal Accountant role'
                : 'Accountant Button: Click to navigate to About section'
            }
          >
            {/* 3D Border Glow Wrapper */}
            <div className="button-border-frame" aria-hidden="true" />

            {/* Inner Tactile Bevel Core */}
            <div className="button-tactile-core flex flex-col items-center justify-center">
              {/* Dynamic Label Display */}
              <div className="label-viewport relative flex items-center justify-center overflow-hidden">
                <span
                  className={`main-label tracking-[0.22em] uppercase font-black transition-all duration-300 ${
                    buttonState === 'portfolio' ? 'text-portfolio' : 'text-accountant'
                  }`}
                >
                  {buttonState === 'portfolio' ? 'PORTFOLIO' : 'ACCOUNTANT'}
                </span>
              </div>

              {/* Sub-Indicator Prompt */}
              <div className="sub-prompt flex items-center gap-1.5 transition-all duration-300">
                {buttonState === 'portfolio' ? (
                  <>
                    <Sparkles className="w-3 h-3 text-[#D8B56A] opacity-80 animate-pulse" />
                    <span className="text-[9.5px] font-semibold tracking-wider text-[#CBD5E1]/90 uppercase">
                      {isRTL ? 'انقر للاستكشاف' : 'Click to Reveal'}
                    </span>
                    <Sparkles className="w-3 h-3 text-[#38BDF8] opacity-80 animate-pulse" />
                  </>
                ) : (
                  <>
                    <ArrowDown className="w-3 h-3 text-[#38BDF8] animate-bounce" />
                    <span className="text-[9.5px] font-semibold tracking-wider text-[#D8B56A] uppercase">
                      {isRTL ? 'عرض النبذة المهنية' : 'View About Profile'}
                    </span>
                    <ChevronDown className="w-3 h-3 text-[#D8B56A] animate-pulse" />
                  </>
                )}
              </div>
            </div>

            {/* Specular Light Sweep */}
            <div className="button-specular-sweep" aria-hidden="true" />
          </button>
        </div>
      </div>

    </section>
  );
}
