'use client';

import ScrollReveal from './ScrollReveal';

interface ExperienceRow {
  company: string;
  duration: string;
  jobType: string;
  location: string;
  responsibilities: string;
}

const EXPERIENCES: ExperienceRow[] = [
  {
    company: 'RATLI',
    duration: '01 Feb, 2025 to Continue',
    jobType: 'Full Time',
    location: 'London, UK (Remote)',
    responsibilities: 'WordPress Developer',
  },
  {
    company: 'ARN Tech Limited',
    duration: '13 Jul, 2022 to 01 Feb, 2025',
    jobType: 'Full Time',
    location: 'Merul Badda, Dhaka, Bangladesh',
    responsibilities: 'WordPress Developer',
  },
  {
    company: 'WebExperts Marketing',
    duration: '18th October 2021 to 12th July 2022',
    jobType: 'Full Time',
    location: 'USA',
    responsibilities: 'Front End Developer',
  },
  {
    company: 'XpeedStudio',
    duration: '1st january 2020 to 5th september 2021',
    jobType: 'Full Time',
    location: 'Asad avenue, Nur Jahan Road, Dhaka, Bangladesh.',
    responsibilities: 'Front End Developer',
  },
  {
    company: 'HRSOFT Bangladesh',
    duration: '27 December 2018 to December 2019',
    jobType: 'Full Time',
    location: '12/6, Solimullah Road, Mohammadpur, Dhaka 1207, Bangladesh.',
    responsibilities: 'Front End Developer',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-[60px] px-6 scroll-mt-24">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-violet/20 to-transparent" />

      <div className="mx-auto max-w-[1024px] w-full">
        <ScrollReveal>
          {/* Header Banner matching screenshot */}
          <div className="rounded-lg bg-[#1c448d] px-6 py-4 shadow-md mb-6 flex items-center">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
              EXPERIENCE
            </h2>
          </div>

          {/* Experience Table */}
          <div className="w-full overflow-x-auto rounded-lg shadow-lg border border-slate-200">
            <table className="w-full min-w-[760px] text-left border-collapse border border-white text-sm sm:text-[15px] font-medium leading-relaxed">
              <thead>
                <tr className="bg-[#0074e8] text-white font-bold">
                  <th className="border border-white px-4 py-3.5 font-bold">Company Name</th>
                  <th className="border border-white px-4 py-3.5 font-bold whitespace-nowrap">Duration</th>
                  <th className="border border-white px-4 py-3.5 font-bold whitespace-nowrap">Job Type</th>
                  <th className="border border-white px-4 py-3.5 font-bold">Location</th>
                  <th className="border border-white px-4 py-3.5 font-bold whitespace-nowrap">Responsibilities</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {EXPERIENCES.map((exp) => (
                  <tr
                    key={exp.company}
                    className="bg-[#0891b2] transition-colors duration-200 hover:brightness-105"
                  >
                    <td className="border border-white px-4 py-3.5 font-semibold">
                      {exp.company}
                    </td>
                    <td className="border border-white px-4 py-3.5 whitespace-nowrap">
                      {exp.duration}
                    </td>
                    <td className="border border-white px-4 py-3.5 whitespace-nowrap">
                      {exp.jobType}
                    </td>
                    <td className="border border-white px-4 py-3.5">
                      {exp.location}
                    </td>
                    <td className="border border-white px-4 py-3.5 font-bold whitespace-nowrap">
                      {exp.responsibilities}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
