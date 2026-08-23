'use client';

import ScrollReveal from './ScrollReveal';

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; note?: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'WordPress & Backend',
    icon: '⚡',
    skills: [
      { name: 'WordPress Theme Dev', level: 95, note: 'Custom themes from scratch' },
      { name: 'WordPress Plugin Dev', level: 90, note: 'Custom plugins & extensions' },
      { name: 'PHP (OOP)', level: 88, note: '5 yrs experience' },
      { name: 'Elementor Page Builder', level: 92, note: 'Custom widgets & layouts' },
      { name: 'MySQL Database', level: 82, note: 'Schema & queries' },
    ],
  },
  {
    title: 'Frontend & React',
    icon: '💻',
    skills: [
      { name: 'JavaScript (ES6+)', level: 92, note: '5 yrs experience' },
      { name: 'HTML5 & CSS3 / SASS', level: 95, note: '5 yrs experience' },
      { name: 'React Core & ReactJS', level: 85, note: '2 yrs experience' },
      { name: 'Tailwind CSS & Bootstrap', level: 92, note: 'Responsive design' },
      { name: 'jQuery & AJAX', level: 90, note: 'Asynchronous UI updates' },
    ],
  },
  {
    title: 'Tools, AI & Design',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 92, note: 'Version control (5 yrs)' },
      { name: 'ChatGPT Prompting', level: 88, note: 'Development workflow (2 yrs)' },
      { name: 'Gulp / Grunt', level: 80, note: 'Asset compilation' },
      { name: 'Figma & Adobe XD', level: 85, note: 'UI design to code' },
      { name: 'Adobe Photoshop', level: 82, note: 'Image editing & slicing' },
    ],
  },
];

function SkillBar({ name, level, note, delay }: { name: string; level: number; note?: string; delay: number }) {
  return (
    <ScrollReveal delay={delay} animation="animate-fade-in">
      <div className="group">
        <div className="flex items-center justify-between mb-1.5">
          <div>
            <span className="text-sm font-medium text-text-primary">{name}</span>
            {note && <span className="ml-2 text-xs text-text-muted hidden sm:inline-block">({note})</span>}
          </div>
          <span className="text-xs font-mono text-accent-violet-light font-semibold">{level}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan transition-all duration-1000 ease-out group-hover:shadow-md group-hover:shadow-accent-violet/40"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent-violet/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl relative">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-violet">
            Technical Stack
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Special Qualifications &amp; <span className="text-gradient-static">Skills</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Complete tech stack listed in my resume — refined over 7.5 years of hands-on commercial development.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <ScrollReveal key={category.title} delay={catIdx * 150}>
              <div className="glass rounded-2xl p-6 h-full transition-all duration-500 hover:border-accent-violet/30 hover:bg-bg-card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      note={skill.note}
                      delay={catIdx * 150 + skillIdx * 80}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
