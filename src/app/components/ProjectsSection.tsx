'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

type TabId = 'all' | 'wordpress' | 'woocommerce' | 'plugin' | 'next-react' | 'html-template';

interface Project {
  title: string;
  category: string;
  tabTypes: TabId[];
  description?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'woocommerce', label: 'WooCommerce' },
  { id: 'plugin', label: 'Plugins' },
  { id: 'next-react', label: 'Next.js & React Template' },
  { id: 'html-template', label: 'HTML Template' },
];

const PROJECTS: Project[] = [
  {
    title: 'Flexio - Multipurpose WordPress Theme',
    category: 'WordPress Theme Dev',
    tabTypes: ['all', 'wordpress'],
    image: '/live-image-1.png',
    tags: ['PHP', 'WordPress', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://demo.themeim.com/wp/flexio/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Palace - Hotel & Resort WordPress Theme',
    category: 'WordPress Theme Dev',
    tabTypes: ['all', 'wordpress'],
    description:
      'A luxury hotel, resort, and accommodation booking WordPress theme crafted with responsive layout templates, clean PHP architecture, and speed optimization.',
    image: '/live-image-2.png',
    tags: ['PHP', 'WordPress', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://data.themeim.com/wp/palace/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Palace - Hotel & Resort HTML Template',
    category: 'HTML5 Template Dev',
    tabTypes: ['all', 'html-template'],
    description:
      'A luxury hotel, resort, and booking responsive HTML5 website template built with clean Bootstrap styling, jQuery animations, and modern JavaScript components.',
    image: '/live-image-2.png',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'JavaScript'],
    liveUrl: 'https://demo.themeim.com/html/palace/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Vroom - Biker & Hiker Business HTML Template',
    category: 'HTML5 Template Dev',
    tabTypes: ['all', 'html-template'],
    description:
      'A bold, high-energy HTML5 business template designed for biker clubs, outdoor hiking adventures, cycling gear, and rental services with responsive Bootstrap layouts.',
    image: '/vroom.jpg',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'JavaScript'],
    liveUrl: 'https://data.themeim.com/html/vroom/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Braine - AI Artificial Intelligence Startup HTML Template',
    category: 'HTML5 Template Dev',
    tabTypes: ['all', 'html-template'],
    description:
      'A futuristic, responsive HTML5 business website template crafted for AI startups, machine learning agencies, and tech SaaS products with modern Bootstrap layouts and animations.',
    image: '/live-image-5.png',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'JavaScript'],
    liveUrl: 'https://demo.themeim.com/html/braine/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Rulify - Law & Legal Business HTML Template',
    category: 'HTML5 Template Dev',
    tabTypes: ['all', 'html-template'],
    description:
      'A professional, responsive HTML5 law business template engineered for law firms, attorneys, legal advisors, and consultants featuring clean Bootstrap layouts.',
    image: '/live-image-4.png',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'JavaScript'],
    liveUrl: 'https://data.themeim.com/html/rulify/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'KidsCamp - Summer Camp & Activities HTML Template',
    category: 'HTML5 Template Dev',
    tabTypes: ['all', 'html-template'],
    description:
      'A vibrant, responsive HTML5 template designed for kids summer camps, outdoor activities, sports clubs, and children adventure programs with responsive Bootstrap layouts.',
    image: '/live-image-3.jpg',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'JavaScript'],
    liveUrl: 'https://demo.themeim.com/html/kidscamp/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'KidsCamp - Summer Camp WordPress Theme',
    category: 'WordPress Theme Dev',
    tabTypes: ['all', 'wordpress'],
    description:
      'A vibrant, dynamic WordPress theme for children camps, outdoor activities, and events built with responsive layouts, customizable widgets, and fast loading performance.',
    image: '/live-image-3.jpg',
    tags: ['PHP', 'WordPress', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://data.themeim.com/wp/kidscamp/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Rulify - Lawyer & Legal WordPress Theme',
    category: 'WordPress Theme Dev',
    tabTypes: ['all', 'wordpress'],
    description:
      'A professional WordPress theme engineered for law firms, legal advisors, and attorneys featuring clean PHP architecture, case study layouts, and cross-browser responsiveness.',
    image: '/live-image-4.png',
    tags: ['PHP', 'WordPress', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://demo.themeim.com/wp/rulify/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Braine - AI & Tech Startup WordPress Theme',
    category: 'WordPress Theme Dev',
    tabTypes: ['all', 'wordpress'],
    description:
      'A futuristic WordPress theme tailored for AI startups, SaaS products, and technology companies with cutting-edge layouts, smooth animations, and optimized code.',
    image: '/live-image-5.png',
    tags: ['PHP', 'WordPress', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://data.themeim.com/wp/braine/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Bajaar - Multi-Vendor WooCommerce Theme',
    category: 'WooCommerce Theme Dev',
    tabTypes: ['all', 'woocommerce', 'wordpress'],
    description:
      'A high-converting, feature-rich WooCommerce theme built for multi-vendor marketplaces with Elementor page builder, custom product layouts, and lightning-fast checkout flow.',
    image: '/bazar-theme.jpeg',
    tags: ['WooCommerce', 'WordPress', 'PHP', 'HTML5', 'CSS3', 'Elementor', 'JavaScript'],
    liveUrl: 'https://demo.xpeedstudio.com/bajaar/landing/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'ThemeCrave - WordPress Themes Marketplace',
    category: 'WordPress & Marketplace',
    tabTypes: ['all', 'wordpress'],
    description:
      'A modern digital marketplace platform offering premium WordPress themes, HTML templates, and web assets with seamless product browsing and responsive UI.',
    image: '/live-image-6.png',
    tags: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://themecrave.com/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'RATLI - London UK Digital Agency',
    category: 'WordPress & Agency Dev',
    tabTypes: ['all', 'wordpress'],
    description:
      'Corporate agency website engineered for a leading London UK digital consulting firm, featuring custom theme architecture, modern animations, and responsive UI.',
    image: '/live-image-7.png',
    tags: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://ratli.co.uk/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'FolioCrave - Developer Portfolio Template',
    category: 'Portfolio & Front End',
    tabTypes: ['all', 'wordpress'],
    description:
      'A sleek, high-converting modern developer portfolio template featuring dark mode aesthetics, interactive showcases, smooth animations, and ultra-fast page speed.',
    image: '/live-image-8.png',
    tags: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://foliocrave.themecrave.com/developer/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Creative Designer - Portfolio & Agency Website',
    category: 'Creative Design & Web',
    tabTypes: ['all', 'wordpress'],
    description:
      'A visually stunning starter website built for creative designers, art directors, and digital agencies featuring bespoke portfolio showcases and responsive typography.',
    image: '/live-image-9.png',
    tags: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    liveUrl: 'https://themecrave.com/starter-websites/creative-designer/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'EcomVora - Modern Next.js E-Commerce',
    category: 'Next.js & Full-Stack',
    tabTypes: ['all', 'next-react', 'woocommerce'],
    description:
      'A full-stack, high-performance e-commerce platform built with Next.js, React, Prisma ORM, and Tailwind CSS deployed on Vercel with seamless shopping workflows.',
    image: '/live-image-10.png',
    tags: ['Next.js', 'Vercel', 'React', 'Prisma', 'Tailwind CSS'],
    liveUrl: 'https://ecomvora-ecommerce.vercel.app/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'JobNestly - Job Portal & Career Platform',
    category: 'Next.js & Full-Stack',
    tabTypes: ['all', 'next-react'],
    description:
      'A full-featured modern job search and recruitment portal built with Next.js, React, Prisma, and Tailwind CSS deployed on Vercel with real-time job listings and applicant tracking.',
    image: '/live-image-12.png',
    tags: ['Next.js', 'Vercel', 'React', 'Prisma', 'Tailwind CSS'],
    liveUrl: 'https://job-nestly.vercel.app/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'BDM-Ecommerce - Online Shopping Platform',
    category: 'Next.js & Full-Stack',
    tabTypes: ['all', 'next-react'],
    description:
      'A modern, high-performance online shopping storefront built with Next.js App Router, React, and Tailwind CSS hosted on Vercel with responsive product showcases, cart, and wishlist.',
    image: '/live-image-13.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://bdecommerce-olive.vercel.app/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'MimoCorp - Digital Business Solutions',
    category: 'Next.js & Full-Stack',
    tabTypes: ['all', 'next-react'],
    description:
      'A sleek, enterprise-grade digital business and agency platform developed with Next.js App Router, React, TypeScript, and Tailwind CSS deployed on Vercel.',
    image: '/live-image-14.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AWS', 'Vercel'],
    liveUrl: 'https://mimo-corp-business-website.vercel.app/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'AI Automation Expert Portfolio',
    category: 'Next.js & AI Systems',
    tabTypes: ['all', 'next-react'],
    description:
      'A high-performance AI automation engineer portfolio web application built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion deployed on Vercel.',
    image: '/live-image-15.png',
    tags: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Vercel'],
    liveUrl: 'https://ai-automation-portfolio-smoky.vercel.app/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'ElementsKit - Elementor Addon & Modular Plugin',
    category: 'WordPress Plugin Dev',
    tabTypes: ['all', 'plugin'],
    description:
      'Contributed to core widget development, module extensions, and performance enhancements for ElementsKit, an industry-leading Elementor addon powering 1M+ active websites worldwide.',
    image: '/projects/ai-chat.png',
    tags: ['WordPress Plugin', 'Elementor', 'PHP', 'JavaScript', 'REST API', 'OOP'],
    liveUrl: 'https://wpmet.com/plugin/elementskit/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Scroll to Top - WordPress Plugin',
    category: 'WordPress Plugin Dev',
    tabTypes: ['all', 'plugin'],
    description:
      'A lightweight and customizable WordPress plugin that adds smooth, responsive scroll-to-top buttons with custom icons, animations, colors, and admin settings.',
    image: '/projects/ai-chat.png',
    tags: ['WordPress Plugin', 'PHP', 'JavaScript', 'CSS3', 'Settings API'],
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'WooCommerce Profit Tracker',
    category: 'WooCommerce Plugin Dev',
    tabTypes: ['all', 'plugin', 'woocommerce'],
    description:
      'A comprehensive financial analytics plugin for WooCommerce calculating cost of goods sold (COGS), gross & net profit margins, and sales metrics in real-time.',
    image: '/projects/analytics.png',
    tags: ['WooCommerce Plugin', 'PHP', 'AJAX', 'MySQL', 'Analytics API'],
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'WooCommerce Office Hours',
    category: 'WooCommerce Plugin Dev',
    tabTypes: ['all', 'plugin', 'woocommerce'],
    description:
      'An automated store schedule manager for WooCommerce enabling business hours configuration, custom holiday closures, and order acceptance controls.',
    image: '/projects/ecommerce.png',
    tags: ['WooCommerce Plugin', 'PHP', 'WordPress Hooks', 'AJAX', 'REST API'],
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Quiz & Answer - WordPress Plugin',
    category: 'WordPress Plugin Dev',
    tabTypes: ['all', 'plugin'],
    description:
      'An interactive quiz and survey builder plugin for WordPress featuring multiple question types, automated grading, instant score display, and answer tracking.',
    image: '/projects/dashboard.png',
    tags: ['WordPress Plugin', 'PHP', 'JavaScript', 'AJAX', 'Database API'],
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'Unique Developer Portfolio',
    category: 'React & Front End',
    tabTypes: ['all', 'next-react'],
    description:
      'A creative and responsive developer portfolio web application built with React, Tailwind CSS, and Firebase integration featuring modern interactive UI and smooth animations.',
    image: '/live-image-11.png',
    tags: ['React', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://anil-chandra-robidas.github.io/unique-portfolio/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'React & Tailwind Personal Portfolio',
    category: 'React & Front End',
    tabTypes: ['all', 'next-react'],
    description:
      'A sleek, responsive personal portfolio single-page application crafted with React and Tailwind CSS hosted on Vercel with smooth interactive components.',
    image: '/live-image-16.png',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://react-tailwind-personal-portfolio-ivory.vercel.app/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
  {
    title: 'AI PDF Summarizer',
    category: 'Next.js & AI Systems',
    tabTypes: ['all', 'next-react'],
    description:
      'An intelligent document summarization web application powered by Gemini AI, designed to extract key decisions, insights, study notes, and actionable takeaways from PDF documents.',
    image: '/live-image-17.png',
    tags: ['Next.js', 'React', 'Gemini AI', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://pdfsummarizer-ochre.vercel.app/',
    codeUrl: 'https://github.com/anil-chandra-robidas',
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const cardsRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tabTypes.includes(activeTab));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.project-card');
      
      const ctx = gsap.context(() => {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
          }
        );
      }, cardsRef);
      
      return () => ctx.revert();
    }
  }, [activeTab]);

  return (
    <section id="projects" className="relative py-[60px] px-6 scroll-mt-24">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <div className="mx-auto max-w-[1024px] w-full">
        <ScrollReveal>
          {/* Header Banner matching screenshot */}
          <div className="rounded-lg bg-[#1c448d] px-6 py-4 shadow-md mb-8 flex items-center">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
              PROJECTS
            </h2>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ease-out cursor-pointer outline-none ${
                  isActive
                    ? 'bg-black text-white border border-black shadow-sm font-semibold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-black hover:border-black hover:bg-slate-50 active:scale-95'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div ref={cardsRef} className="mt-10 grid gap-8 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <div key={project.title} className="project-card">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-1 transform-gpu [backface-visibility:hidden]">
                {/* Image */}
                <div className="overflow-hidden rounded-t-2xl bg-slate-100 h-[250px]">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </a>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 -mt-[1px] flex flex-1 flex-col p-6 bg-[#0891b2] text-white">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title flex items-start justify-between gap-2"
                    >
                      <h3 className="text-xl font-bold text-white group-hover/title:text-white/80 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <svg
                        className="h-4 w-4 shrink-0 mt-1 text-white/80 transition-transform duration-300 group-hover/title:text-white group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <div className="group/title flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/20 border border-white/30 px-3 py-1 text-xs font-medium text-white font-mono backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
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
