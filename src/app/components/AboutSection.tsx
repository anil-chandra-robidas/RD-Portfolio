'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

const STATS = [
  { value: '7.5 Yrs', label: 'Total Experience' },
  { value: '200+', label: 'URI Judge Solved' },
  { value: '5', label: 'Companies Worked With' },
  { value: 'B.Sc CSE', label: 'HSTU University' },
];

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current && containerRef.current) {
      const ctx = gsap.context(() => {
        // Watermark parallax
        gsap.to(textRef.current, {
          x: 400, // Move 400px to the right as we scroll
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom', // Start when section enters from bottom
            end: 'bottom top',   // End when section leaves from top
            scrub: 1, // Smooth scrub
          },
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative pt-40 pb-32 px-6 overflow-hidden">
      {/* Background Watermark text moving LEFT-TO-RIGHT when scrolling through About section */}
      <div
        ref={textRef}
        className="pointer-events-none absolute top-1/2 left-[-100px] -translate-y-1/2 z-0 w-full overflow-hidden select-none opacity-[0.04]"
      >
        <div className="flex whitespace-nowrap justify-start">
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-widest text-white leading-none">
            PORTFOLIO &amp; RESUME • ABOUT ME
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />

      <div className="mx-auto max-w-6xl relative z-10">
        <ScrollReveal className="flex flex-col items-center text-center mb-24">
          {/* Profile Image with Glowing Border & Status */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-pink opacity-70 blur-md transition duration-500 group-hover:opacity-100 group-hover:blur-xl" />
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-full border-2 border-white/20 bg-bg-secondary p-1 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/anil_profile.jpg"
                  alt="Anil Chandra Robidas"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 176px, 208px"
                />
              </div>
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-bg-primary/90 border border-white/10 px-3 py-1 text-[11px] font-medium text-text-primary shadow-lg backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-emerald-400 font-semibold">Available</span>
            </div>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Anil Chandra Robidas</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg md:text-xl">
            Senior <span className="text-text-primary font-semibold">WordPress Theme &amp; Plugin Developer</span> and{' '}
            <span className="text-text-primary font-semibold">Front-End Engineer</span> with experience at UK &amp; US firms (RATLI, WebExperts.Marketing, XpeedStudio, ARN Tech). Solved{' '}
            <span className="text-accent-cyan font-mono font-bold">200+ URI Judge</span> competitive programming problems.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2 font-mono text-xs">
            {['Next.js', 'WordPress Theme & Plugin', 'PHP (OOP)', 'React Core', 'JavaScript ES6', 'Elementor', 'Tailwind CSS', 'MySQL', 'ChatGPT'].map((badge) => (
              <span key={badge} className="rounded-full bg-white/5 border border-glass-border px-3.5 py-1 text-text-secondary">
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-violet">
            About Me
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Building robust software with{' '}
            <span className="text-gradient-static">sheer dedication &amp; precision</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Bio / Summary */}
          <ScrollReveal className="lg:col-span-3" delay={200}>
            <div className="glass rounded-2xl p-8 transition-all duration-500 hover:border-accent-violet/20">
              <h3 className="text-xl font-bold text-text-primary mb-3 text-gradient-static">
                Career Objective &amp; Overview
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                To pursue a challenging career and be part of a progressive organization that gives scope to enhance my knowledge, skills and to reach the pinnacle in the computing and research field with sheer determination, dedication and hard work.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Worked as a <span className="text-text-primary font-semibold">WordPress Theme Developer</span> at <span className="text-accent-cyan font-medium">RATLI (London, UK)</span>, <span className="text-accent-cyan font-medium">ARN Tech Limited</span>, <span className="text-accent-cyan font-medium">WebExperts Marketing (USA)</span>, <span className="text-accent-cyan font-medium">XpeedStudio</span>, and as a Front End Developer at <span className="text-accent-cyan font-medium">HRSOFTBD</span>.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Demonstrated strong problem-solving ability with <span className="text-text-primary font-bold font-mono">200+ URI Online Judge problems solved</span>, proficient in modern JavaScript (ES6+), ReactJS, PHP OOP, custom WordPress theme &amp; plugin development, and UI design workflows.
              </p>

              {/* Quick Info Grid */}
              <div className="mt-6 pt-6 border-t border-glass-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-text-muted">Degree:</span>{' '}
                  <span className="text-text-primary font-medium">B.Sc in Computer Science (HSTU)</span>
                </div>
                <div>
                  <span className="text-text-muted">Location:</span>{' '}
                  <span className="text-text-primary font-medium">Joypurhat / Dhaka, Bangladesh</span>
                </div>
                <div>
                  <span className="text-text-muted">Languages:</span>{' '}
                  <span className="text-text-primary font-medium">Bangla (Native), English (Proficient)</span>
                </div>
                <div>
                  <span className="text-text-muted">Specialty:</span>{' '}
                  <span className="text-text-primary font-medium">Themes, Plugins &amp; Front-End</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={300 + i * 100}>
                <div className="glass group flex h-full flex-col items-center justify-center rounded-2xl p-6 text-center transition-all duration-500 hover:border-accent-violet/30 hover:bg-bg-card-hover">
                  <span className="text-3xl font-extrabold text-gradient-static sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs font-medium text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
