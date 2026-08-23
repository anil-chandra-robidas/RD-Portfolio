'use client';

import ScrollReveal from './ScrollReveal';

const EDUCATION = [
  {
    degree: 'Bachelor of Science (B.Sc) in Computer Science & Engineering',
    institution: 'Hajee Mohammad Danesh Science and Technology University (HSTU)',
    location: 'Dinajpur, Bangladesh',
    year: '2016 (4 Years)',
    result: '2.76 out of 4.00',
    achievement: 'B.Sc in CSE Degree Certificate',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Joypurhat Government College',
    location: 'Joypurhat, Bangladesh',
    year: '2010 (2 Years)',
    result: 'GPA 5.00 out of 5.00',
    achievement: 'HSC Certificate (Perfect GPA)',
    icon: '🏫',
  },
  {
    degree: 'Secondary School Certificate (SSC) — Science',
    institution: 'Teghor High School',
    location: 'Joypurhat, Bangladesh',
    year: '2008 (2 Years)',
    result: 'GPA 5.00 out of 5.00',
    achievement: 'SSC Certificate (Perfect GPA)',
    icon: '📜',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Academic Background
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Education &amp; <span className="text-gradient-static">Certifications</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Degrees, academic achievements, and professional qualifications.
          </p>
        </ScrollReveal>

        {/* Education Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {EDUCATION.map((edu, idx) => (
            <ScrollReveal key={edu.degree} delay={idx * 150}>
              <div className="glass gradient-border rounded-2xl p-6 h-full flex flex-col justify-between transition-all duration-500 hover:bg-bg-card-hover hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{edu.icon}</span>
                    <span className="text-xs font-mono font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                    {edu.degree}
                  </h3>

                  <p className="mt-2 text-sm text-text-secondary font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    {edu.location}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-glass-border">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-muted">Result:</span>
                    <span className="font-mono font-bold text-gradient-static">{edu.result}</span>
                  </div>
                  <div className="mt-1 text-xs text-emerald-400 flex items-center gap-1 font-medium">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {edu.achievement}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Professional Certification Card */}
        <ScrollReveal delay={450}>
          <div className="mt-10 glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-l-4 border-l-accent-violet">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-violet-light bg-accent-violet/10 px-3 py-1 rounded-full">
                Professional Qualification
              </span>
              <h3 className="mt-3 text-xl font-bold text-text-primary">
                WordPress Theme &amp; Plugin Development Certification
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                Issued by <span className="text-text-primary font-semibold">XpeedStudio</span> — Mohammadpur, Dhaka, Bangladesh
              </p>
            </div>
            <div className="sm:text-right shrink-0">
              <span className="text-sm font-mono text-text-muted bg-white/5 border border-glass-border px-4 py-2 rounded-xl inline-block">
                01 Jan, 2020 – 05 Jul, 2021
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
