'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const curveRef = useRef<SVGSVGElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !overlayRef.current ||
      !counterRef.current ||
      !progressBarRef.current ||
      !curveRef.current
    ) return;

    // Prevent page scroll while preloader is active
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        setVisible(false);
      },
    });

    // 1. Count from 0 → 100
    const counter = { val: 0 };
    tl.to(counter, {
      val: 100,
      duration: 2.2,
      ease: 'power1.inOut',
      onUpdate() {
        const v = Math.round(counter.val);
        if (counterRef.current) counterRef.current.textContent = v + '%';
        if (progressBarRef.current) progressBarRef.current.style.width = v + '%';
      },
    });

    // 2. Brief pause at 100
    tl.to({}, { duration: 0.3 });

    // 3. Slide the overlay + curve up and off screen
    tl.to(
      [overlayRef.current, curveRef.current],
      {
        y: '-105%',
        duration: 1.0,
        ease: 'power4.inOut',
      },
      '>'
    );

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Counter */}
      <div className="flex flex-col items-center gap-6 select-none">
        <span
          ref={counterRef}
          className="font-mono text-[clamp(4rem,12vw,9rem)] font-black leading-none text-white tracking-tight"
        >
          0%
        </span>

        {/* Progress bar */}
        <div className="w-48 h-px bg-white/10 overflow-hidden rounded-full">
          <div
            ref={progressBarRef}
            className="h-full bg-white rounded-full"
            style={{ width: '0%', transition: 'none' }}
          />
        </div>

        <p className="text-white/30 text-xs font-mono uppercase tracking-[0.3em]">
          Loading portfolio
        </p>
      </div>

      {/* Curved bottom edge — sweeps up with the overlay */}
      <svg
        ref={curveRef}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full translate-y-[calc(100%-1px)] pointer-events-none"
        style={{ height: '120px' }}
      >
        <path
          d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z"
          fill="#000000"
        />
      </svg>
    </div>
  );
}
