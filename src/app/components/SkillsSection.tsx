'use client';

import ScrollReveal from './ScrollReveal';

const SKILLS_COL_1 = [
  'HTML, CSS, BOOTSTRAP',
  'Javascript',
  'React',
  'Next JS',
  'jQuery',
  'Wordpress',
  'Elementor',
  'PHP/PHP OOP/Laravel',
  'Wordpress Support Center',
];

const SKILLS_COL_2 = [
  'Tailwind CSS',
  'Flexbox',
  'Ajax',
  'JSON',
  'Mysql',
  'Git / GitHub',
  'Photoshop, Adobe XD',
  'Wordpress Theme Development',
  'Wordpress Plugin Development',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-[60px] px-6 scroll-mt-24">
      <div id="skill" className="pointer-events-none absolute -top-24" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-violet/20 to-transparent" />

      <div className="mx-auto max-w-[1024px] w-full">
        <ScrollReveal>
          {/* Header Banner */}
          <div className="rounded-lg bg-[#1c448d] px-6 py-4 shadow-md mb-8 flex items-center">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
              SKILL LEVEL
            </h2>
          </div>

          {/* Two-Column Skill Cards without headings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card */}
            <div className="bg-[#0891b2] text-white p-7 sm:p-9 rounded-lg shadow-lg">
              <ul className="space-y-4">
                {SKILLS_COL_1.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-base sm:text-[17px] text-white font-normal">
                    <svg
                      className="w-5 h-5 text-white shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card */}
            <div className="bg-[#0891b2] text-white p-7 sm:p-9 rounded-lg shadow-lg">
              <ul className="space-y-4">
                {SKILLS_COL_2.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-base sm:text-[17px] text-white font-normal">
                    <svg
                      className="w-5 h-5 text-white shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
