'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  expertise: string[];
  duties: string[];
  badgeColor: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'WordPress Developer',
    company: 'RATLI',
    location: 'London, UK (Remote)',
    duration: '1.1 yrs',
    period: '01 Feb, 2025 – 01 Mar, 2026',
    expertise: ['ChatGPT (2 yrs)', 'Git Version Control (5 yrs)', 'HTML5 & CSS3 (5 yrs)', 'JavaScript ES6 (5 yrs)', 'PHP (OOP) (5 yrs)', 'ReactJS (2 yrs)', 'WordPress (5 yrs)'],
    duties: ['Develop WordPress Theme and Custom Plugin.', 'Architect clean, reusable code structures for international web platforms.', 'Integrate modern frontend tools with PHP backend engines.'],
    badgeColor: 'border-accent-violet/30 text-accent-violet-light bg-accent-violet/10',
  },
  {
    role: 'WordPress Developer',
    company: 'ARN Tech Limited',
    location: 'Merul Badda, Dhaka, Bangladesh',
    duration: '2.6 yrs',
    period: '13 Jul, 2022 – 01 Feb, 2025',
    expertise: ['ChatGPT (2 yrs)', 'Git (5 yrs)', 'HTML5 & CSS3 (5 yrs)', 'JavaScript ES6 (5 yrs)', 'PHP (OOP) (5 yrs)', 'ReactJS (2 yrs)', 'WordPress (5 yrs)'],
    duties: ['WordPress theme development from scratch and client support center.', 'Help & mentor junior developers in coding standards & debugging.', 'Optimize website loading speeds, responsiveness, and cross-browser support.'],
    badgeColor: 'border-accent-cyan/30 text-accent-cyan bg-accent-cyan/10',
  },
  {
    role: 'Front End Developer',
    company: 'WebExperts.Marketing',
    location: 'USA (Remote)',
    duration: '0.7 yrs',
    period: '18 Oct, 2021 – 12 Jul, 2022',
    expertise: ['WordPress (1 month)', 'HTML5/CSS3', 'JavaScript', 'Bootstrap/Tailwind'],
    duties: ['WordPress Website Design and Development from scratch.', 'Convert complex Figma / Adobe XD designs into dynamic responsive web pages.'],
    badgeColor: 'border-pink-500/30 text-pink-400 bg-pink-500/10',
  },
  {
    role: 'Front End Developer',
    company: 'XpeedStudio',
    location: 'Mohammadpur, Dhaka, Bangladesh',
    duration: '1.7 yrs',
    period: '01 Jan, 2020 – 05 Sep, 2021',
    expertise: ['WordPress (6 months)', 'HTML5/CSS3/SASS', 'JavaScript', 'PHP'],
    duties: ['WordPress theme development and Client support center.', 'Build high-performing themes for global marketplace users.'],
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
  },
  {
    role: 'Front End Developer',
    company: 'HRSOFT Bangladesh',
    location: 'Mohammadpur, Dhaka, Bangladesh',
    duration: '1 yr',
    period: '27 Dec, 2018 – 31 Dec, 2019',
    expertise: ['HTML & CSS (4 months)', 'JavaScript (4 months)', 'PHP (4 months)'],
    duties: ['Website Design and Development from scratch.', 'Implement clean UI components and handle front-end integrations.'],
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
  },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const line = lineRef.current;

    if (container && line) {
      const ctx = gsap.context(() => {
        // Animate the line drawing down
        gsap.fromTo(line, 
          { height: 0 },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top 60%',
              end: 'bottom 80%',
              scrub: 1, // Smooth scrub
            }
          }
        );

        // Stagger reveal the experience items
        const items = container.querySelectorAll('.exp-item');
        gsap.from(items, {
          x: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            toggleActions: 'play none none none',
          }
        });

        // Animate cards when they pin (hit top-32 which is 128px)
        items.forEach((item) => {
          const cardInner = item.querySelector('.exp-card-inner') as HTMLElement;
          if (!cardInner) return;

          ScrollTrigger.create({
            trigger: item,
            start: 'top 128px',
            end: 'bottom 200px',
            onEnter: () => {
              gsap.to(cardInner, {
                backgroundColor: '#150d2e', // Solid violet-tinted dark
                borderColor: 'rgba(139, 92, 246, 0.6)',
                boxShadow: '0 -4px 40px rgba(0,0,0,0.9), 0 0 30px rgba(139,92,246,0.15), 0 24px 60px rgba(0,0,0,0.7)',
                scale: 0.97,
                duration: 0.5,
                ease: 'power2.out',
              });
            },
            onLeaveBack: () => {
              gsap.to(cardInner, {
                backgroundColor: '#0d0d20',
                borderColor: 'rgba(255,255,255,0.05)',
                boxShadow: '0 -4px 40px rgba(0,0,0,0.8), 0 24px 60px rgba(0,0,0,0.6)',
                scale: 1,
                duration: 0.5,
                ease: 'power2.out',
              });
            },
          });
        });
      }, container);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-violet">
              Career Path
            </p>

            <div className="flex items-center justify-between w-full flex-wrap gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
                Work <span className="text-gradient-static">Experience</span>
              </h2>

              <span className="rounded-full bg-accent-violet/10 border border-accent-violet/30 px-4 py-1.5 text-sm font-mono font-semibold text-accent-violet-light">
                Total: 7.5 Years
              </span>
            </div>
          </div>

          <p className="mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
            My professional journey across software agencies, international companies, and client service centers.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={containerRef} className="relative mt-14 pl-6 sm:pl-8 pb-32">
          {/* Subtle background line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-glass-border" />
          
          {/* Animated active line */}
          <div ref={lineRef} className="absolute left-0 top-0 w-px bg-gradient-to-b from-accent-violet via-accent-cyan to-transparent shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.company + exp.period} 
              className="exp-item relative group sticky top-32 mb-12"
              style={{ 
                zIndex: index + 1, // Each card higher in z-order than the previous one
              }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-accent-violet bg-bg-primary group-hover:bg-accent-violet group-hover:scale-125 transition-all duration-300 shadow-md shadow-accent-violet/50 z-10" />

              {/* Solid background wrapper to block any bleed-through from cards below */}
              <div
                className="exp-card-inner rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl border border-white/5"
                style={{
                  backgroundColor: '#0d0d20', // Fully opaque — no transparency allowed
                  boxShadow: '0 -4px 40px rgba(0,0,0,0.8), 0 24px 60px rgba(0,0,0,0.6)',
                }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className={`inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full border ${exp.badgeColor} mb-2`}>
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-violet transition-colors">
                      {exp.role}{' '}
                      <span className="text-text-muted font-normal">at</span>{' '}
                      <span className="text-gradient-static font-semibold">{exp.company}</span>
                    </h3>
                    <p className="text-xs text-text-muted mt-0.5 flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-xs font-mono text-text-secondary bg-white/5 border border-glass-border px-3 py-1.5 rounded-lg inline-block">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Duties / Responsibilities */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                    Duties &amp; Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.duties.map((duty, idx) => (
                      <li key={idx} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="text-accent-violet mt-1">•</span>
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech / Expertise Tags */}
                <div className="mt-5 pt-4 border-t border-glass-border">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                    Area of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {exp.expertise.map((item) => (
                      <span key={item} className="rounded bg-white/5 px-2.5 py-1 text-text-secondary border border-glass-border">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
