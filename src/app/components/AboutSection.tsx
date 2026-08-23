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

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/anil-chandra-robidas',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    hoverColor: 'hover:text-white hover:border-white/40 hover:bg-white/10 hover:shadow-white/10',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anil-kumer/',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    hoverColor: 'hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 hover:shadow-[#0a66c2]/20',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/8801838233177',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.125.556 4.12 1.527 5.86l-1.627 5.94 6.103-1.601c1.688.92 3.616 1.447 5.669 1.447 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    hoverColor: 'hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:shadow-[#25D366]/20',
  },
  {
    name: 'URI Judge',
    href: 'https://www.urionlinejudge.com.br/judge/en/profile/12487',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    hoverColor: 'hover:text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/10 hover:shadow-accent-cyan/20',
  },
  {
    name: 'Email',
    href: 'mailto:anilkumer.cse@gmail.com',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    hoverColor: 'hover:text-accent-pink hover:border-accent-pink/50 hover:bg-accent-pink/10 hover:shadow-accent-pink/20',
  },
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

          {/* Hero CTA & Social Media Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-violet/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-violet/40 cursor-pointer"
              >
                <span>Get In Touch</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full glass border border-glass-border px-6 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer"
              >
                <span>View Projects</span>
              </a>
            </div>

            {/* Divider on Desktop */}
            <div className="hidden sm:block h-6 w-px bg-white/15" />

            {/* Social Media Buttons */}
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={item.name}
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-xl glass border border-glass-border text-text-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.hoverColor}`}
                >
                  {item.icon}
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-bg-secondary border border-glass-border px-2 py-0.5 text-[11px] font-medium text-text-primary opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
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
