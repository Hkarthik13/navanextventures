import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { ArrowUp } from 'lucide-react';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export const SmoothScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll with luxury easing
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    // RAF loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Scroll listener for Back to Top visibility
    const onScroll = () => {
      const isDown = window.scrollY > 400;
      setShowBackToTop((prev) => (prev !== isDown ? isDown : prev));
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Handle route / hash changes smoothly
  useEffect(() => {
    if (!window.__lenis) return;

    if (hash) {
      const target = document.getElementById(hash.substring(1));
      if (target) {
        window.__lenis.scrollTo(target, { offset: -70, duration: 1.2 });
        return;
      }
    }

    // Scroll to top on new page route
    window.__lenis.scrollTo(0, { immediate: true });
  }, [pathname, hash]);

  const handleScrollToTop = () => {
    window.__lenis?.scrollTo(0, { duration: 1.3 });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-[2px] bg-navy-950/90 text-gold-400 border border-gold-500/40 hover:border-gold-400 hover:text-white hover:bg-navy-900 shadow-dark-glow transition-all duration-300 transform-gpu cursor-pointer flex items-center justify-center ${
        showBackToTop
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default SmoothScrollManager;
