'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'URI Online Judge Solutions',
    category: 'Competitive Programming',
    description:
      'Solved 200+ algorithms and data structure problems over URI Online Judge platform demonstrating strong algorithmic efficiency and logical skills.',
    image: '/projects/dashboard.png',
    tags: ['C / C++', 'Algorithms', 'Data Structures', 'Problem Solving'],
    liveUrl: 'https://www.urionlinejudge.com.br/judge/en/profile/12487',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Custom WordPress Theme Development',
    category: 'WordPress Theme Dev',
    description:
      'Custom Gutenberg and Elementor compatible WordPress themes engineered from scratch with clean PHP OOP architecture, custom post types, and speed optimizations.',
    image: '/projects/ecommerce.png',
    tags: ['WordPress', 'PHP (OOP)', 'JavaScript ES6', 'SASS / CSS3', 'Elementor'],
    liveUrl: 'https://anil-chandra-robidas.github.io/unique-portfolio/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Custom WordPress Plugin & Extension',
    category: 'WordPress Plugin Dev',
    description:
      'Feature-rich custom WordPress plugins with admin options panels, AJAX data handling, REST API endpoints, and seamless database integration.',
    image: '/projects/ai-chat.png',
    tags: ['WordPress Plugin', 'PHP', 'AJAX', 'MySQL', 'REST API'],
    liveUrl: 'https://anil-chandra-robidas.github.io/unique-portfolio/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Modern Next.js & React Web Applications',
    category: 'Next.js & Front End',
    description:
      'Pixel-perfect, high-performance web applications and responsive user interfaces built from Figma and Adobe XD prototypes using Next.js framework, React Core, Tailwind CSS, and modern JavaScript.',
    image: '/projects/analytics.png',
    tags: ['Next.js', 'ReactJS', 'JavaScript ES6', 'Tailwind CSS', 'Figma to Code'],
    liveUrl: 'https://anil-chandra-robidas.github.io/unique-portfolio/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
];

export default function ProjectsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.project-card');
      
      const ctx = gsap.context(() => {
        gsap.from(cards, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        });
      }, cardsRef);
      
      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Portfolio Highlights
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Featured <span className="text-gradient-static">Projects &amp; Code</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            A selection of Next.js web applications, custom themes, plugins, and competitive programming achievements.
          </p>
        </ScrollReveal>

        <div ref={cardsRef} className="mt-14 grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <div key={project.title} className="project-card">
              <article className="glass gradient-border group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:bg-bg-card-hover hover:shadow-2xl hover:shadow-accent-violet/10 hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-bg-primary/80 backdrop-blur-md border border-glass-border px-3.5 py-1 text-xs font-mono font-semibold text-accent-cyan">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-violet transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent-violet/10 px-3 py-1 text-xs font-medium text-accent-violet-light font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 pt-4 border-t border-glass-border flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors hover:text-accent-violet"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live / Profile
                    </a>
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent-cyan"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        GitHub Profile
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
