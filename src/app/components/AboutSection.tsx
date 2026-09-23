'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';





export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 overflow-hidden scroll-mt-24">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-violet/20 to-transparent" />

      <div className="mx-auto max-w-[1024px] w-full relative z-10">
        {/* Hero Area */}
        <div className="flex flex-col justify-center pt-[170px] sm:pt-[190px] pb-[60px]">
          <ScrollReveal className="w-full">
            <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10 lg:gap-14">
              
              {/* Left Column: Cover Letter Intro */}
              <div className="flex-1 text-left space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  Dear Manager/HR,
                </h1>
                
                <p className="text-base sm:text-lg leading-relaxed text-slate-800">
                  Hello, At first take my Greetings. My name is{' '}
                  <span className="text-[#0070f3] font-medium">Anil Chandra Robidas</span> and I have completed my B.Sc. in Computer Science and Engineering (CSE) from Hajee Mohammad Danesh Science and Technology University. I am a Front End Developer since 2019. My skills are{' '}
                  <span className="text-[#0070f3] font-medium">
                    HTML, CSS, FLEXBOX, GRID, SASS, BOOTSTRAP, JAVASCRIPT, REACT, NEXT JS, JQUERY, PHP/PHP OOP/Laravel, Wordpress, Elementor, Gulp, Git/Github.
                  </span>{' '}
                  I want to learn more by joining your company.
                </p>

                <p className="text-base sm:text-lg leading-relaxed text-slate-800">
                  Please see my resume for additional information on my experience. Thank you for your time and consideration. I look forward to speaking with you about this employment opportunity.
                </p>

                <div className="pt-2 pb-1">
                  <a
                    href="/Anil_Chandra_Robidas_CV.pdf"
                    download="Anil_Chandra_Robidas_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-lg bg-[#0070f3] hover:bg-[#005bb5] text-white font-semibold px-6 py-3 text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download CV</span>
                  </a>
                </div>

                <p className="text-base sm:text-lg text-slate-800">
                  Thanks in advance.
                </p>

                {/* Social Icons matching screenshot */}
                <div className="flex items-center gap-2 pt-1">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/anil.cse"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded bg-[#1877f2] text-white hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/anil-kumer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded bg-[#0077b5] text-white hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/anil-chandra-robidas"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-9 w-9 items-center justify-center rounded bg-[#0070f3] text-white hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/8801838233177"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded bg-[#25D366] text-white hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.125.556 4.12 1.527 5.86l-1.627 5.94 6.103-1.601c1.688.92 3.616 1.447 5.669 1.447 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column: Framed Portrait */}
              <div className="flex-shrink-0 self-center md:self-start mt-6 md:mt-10">
                <div className="rounded border border-slate-300 bg-white p-1.5 shadow-sm">
                  <div className="relative w-56 sm:w-60 md:w-64 aspect-square overflow-hidden rounded-sm">
                    <Image
                      src="/anil_suit.png"
                      alt="Anil Chandra Robidas"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 224px, 256px"
                    />
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
