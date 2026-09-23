'use client';

import ScrollReveal from './ScrollReveal';

const ACADEMIC_ROWS = [
  {
    examTitle: 'B.Sc in CSE',
    major: 'Computer Science',
    institute: 'Hajee Mohammad Danesh Science and Technology University, Dinajpur',
    result: 'CGPA:2.76 out of 4',
    passingYear: '2017',
    duration: '4',
  },
  {
    examTitle: 'H.S.C',
    major: 'Science',
    institute: 'Joypurhat Government College, Joypurhat',
    result: 'GPA:5.00 out of 5',
    passingYear: '2010',
    duration: '2',
  },
  {
    examTitle: 'S.S.C',
    major: 'Science',
    institute: 'Teghor High School, Joypurhat',
    result: 'GPA:5.00 out of 5',
    passingYear: '2008',
    duration: '2',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-[60px] px-6 scroll-mt-24">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <div className="mx-auto max-w-[1024px] w-full">
        {/* Academic Information Table as requested */}
        <ScrollReveal>
          {/* Header Banner */}
          <div className="rounded-lg bg-[#1c448d] px-6 py-4 shadow-md mb-6 flex items-center">
            <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
              ACADEMIC INFORMATION
            </h3>
          </div>

          {/* Table Container */}
          <div className="w-full overflow-x-auto rounded-lg shadow-lg border border-slate-200">
            <table className="w-full min-w-[760px] text-left border-collapse border border-white text-sm sm:text-[15px] font-medium leading-relaxed">
              <thead>
                <tr className="bg-[#0074e8] text-white font-bold">
                  <th className="border border-white px-4 py-3.5 font-bold">Exam Title</th>
                  <th className="border border-white px-4 py-3.5 font-bold">Major</th>
                  <th className="border border-white px-4 py-3.5 font-bold">Institute name</th>
                  <th className="border border-white px-4 py-3.5 font-bold whitespace-nowrap">Result</th>
                  <th className="border border-white px-4 py-3.5 font-bold whitespace-nowrap">Passing Year</th>
                  <th className="border border-white px-4 py-3.5 font-bold whitespace-nowrap">Duration</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {ACADEMIC_ROWS.map((row) => (
                  <tr
                    key={row.examTitle}
                    className="bg-[#0891b2] transition-colors duration-200 hover:brightness-105"
                  >
                    <td className="border border-white px-4 py-3.5 font-semibold">
                      {row.examTitle}
                    </td>
                    <td className="border border-white px-4 py-3.5">
                      {row.major}
                    </td>
                    <td className="border border-white px-4 py-3.5">
                      {row.institute}
                    </td>
                    <td className="border border-white px-4 py-3.5 whitespace-nowrap">
                      {row.result}
                    </td>
                    <td className="border border-white px-4 py-3.5 whitespace-nowrap">
                      {row.passingYear}
                    </td>
                    <td className="border border-white px-4 py-3.5 whitespace-nowrap">
                      {row.duration}
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
