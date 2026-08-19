import React, { useState } from 'react'

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('all')

  const stats = [
    { value: '5+', label: 'Projects Built' },
    { value: '3', label: 'Hackathons / Events' },
    { value: '8+', label: 'Tech Explored' },
    { value: '∞', label: 'Things Still Learning' },
  ]

  const experiences = [
    {
      id: 'intrahack',
      category: 'hackathon',
      date: '08.2026',
      title: 'IntraHack 1.0 — Team HackHer',
      subtitle: 'Built Paila — Tourism Platform in 24 Hours',
      roles: ['Deployment', 'Frontend Lead', 'Project Lead'],
      whatIDid: 'Built Paila, a tourism platform, collaboratively during a high-stakes 24-hour hackathon. Managed React frontend architecture, Git version control, deployment pipeline, and final product presentation.',
      whatItTaughtMe: 'Building under a deadline taught me that shipping a good product isn’t just about writing code — it’s about making decisions quickly and communicating effectively with your team.',
      link: '#explore',
      tech: ['React', 'Tailwind CSS', 'Vite', 'Git', 'REST API'],
    },
    {
      id: 'backend',
      category: 'current',
      date: '2026 — PRESENT',
      title: 'C# / ASP.NET Core & Systems Deep Dive',
      subtitle: 'Backend & Enterprise Architecture',
      roles: ['Fullstack Systems', 'Backend Explorer'],
      whatIDid: 'Going deeper into C# and ASP.NET Core to master strongly-typed backend architecture, REST API design, database ORMs, and scalable server structures.',
      whatItTaughtMe: 'Understanding strongly-typed backend architecture makes frontend state management and API integration significantly cleaner and less error-prone.',
      tech: ['C#', 'ASP.NET Core', 'PostgreSQL', 'REST APIs'],
    },
    {
      id: 'fellowship',
      category: 'fellowship',
      date: '2025 — 2026',
      title: 'EXCESS Data Fellowship Program',
      subtitle: 'DataCamp / Applied Tech Opportunity',
      roles: ['Selected Participant'],
      whatIDid: 'Selected participant in an intensive data fellowship exploring data analysis, AI integration, and practical data technology skills.',
      whatItTaughtMe: 'Strengthened my ability to work with data, learn unfamiliar technologies independently, and turn technical concepts into practical solutions',
      tech: ['Data Analysis', 'Python', 'AI Tooling', 'Pipelines'],
    },
    {
      id: 'education',
      category: 'education',
      date: '2024 — PRESENT',
      title: "Bachelor's in Computer Science & IT (BSc CSIT)",
      subtitle: '6th Semester • Core CS Curriculum',
      roles: ['CSIT Student'],
      whatIDid: 'Studying core computer science fundamentals: Operating Systems, Database Management Systems, Data Structures & Algorithms, and Software Architecture.',
      whatItTaughtMe: 'Core computer science fundamentals give you the mental model to understand how computers work under the hood and learn any new framework in days.',
      tech: ['Data Structures', 'Algorithms', 'DBMS', 'OS', 'C++'],
    },
  ]

  const filteredExperiences = activeFilter === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === activeFilter)

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#7bcbb4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a2e1f]/80 border border-[#7bcbb4]/30 backdrop-blur-md">
            <span className="font-mono text-xs text-[#7bcbb4] uppercase tracking-widest">
              / experience.log • journey & milestones
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f5f0e8]">
            Work, <span className="text-[#7bcbb4]">Hackathons</span> & Growth
          </h2>

          <p className="text-sm md:text-base text-[#f5f0e8]/75 max-w-2xl">
            A developer changelog documenting hackathons, project leads, academic foundations, and key lessons learned along the way.
          </p>
        </div>

        {/* 📊 VERIFIED STATS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#13241d]/80 border border-[#7bcbb4]/25 shadow-lg backdrop-blur-md text-center space-y-1 group hover:border-[#7bcbb4]/50 transition-all"
            >
              <p className="text-3xl md:text-4xl font-bold font-mono text-[#7bcbb4] group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-xs font-mono text-[#f5f0e8]/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 🏷️ CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          {['all', 'hackathon', 'current', 'fellowship', 'education'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-full font-mono text-xs capitalize transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-[#7bcbb4] text-[#13241d] font-bold shadow-[0_0_12px_rgba(123,203,180,0.4)]'
                  : 'bg-[#1a2e1f]/80 text-[#f5f0e8]/70 hover:text-[#f5f0e8] border border-[#7bcbb4]/20'
              }`}
            >
              {tab === 'all' ? 'All Logs' : tab}
            </button>
          ))}
        </div>

        {/* 💻 DEVELOPER CHANGELOG WINDOW (EXPERIENCE.LOG) */}
        <div className="rounded-3xl border-2 border-[#7bcbb4]/30 bg-[#0d1813]/95 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between bg-[#13241d] px-6 py-4 border-b border-[#7bcbb4]/20 font-mono text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-[#7bcbb4] font-bold ml-2">EXPERIENCE.LOG</span>
            </div>
            <span className="text-[#a7d4c5]/60 hidden sm:inline">&gt; loading journey... 100% compiled</span>
          </div>

          {/* Changelog Entries List */}
          <div className="p-6 md:p-10 space-y-10 font-mono">
            {filteredExperiences.map((exp, idx) => (
              <div key={exp.id} className="relative pl-6 md:pl-10 border-l-2 border-[#7bcbb4]/30 space-y-4 group">
                
                {/* Branch Node Indicator */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#13241d] border-2 border-[#7bcbb4] group-hover:bg-[#7bcbb4] transition-colors" />

                {/* Log Header: Date & Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-[#7bcbb4] font-bold tracking-wider">
                    {exp.date} ├─ .{exp.category.toUpperCase()}
                  </span>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {exp.roles.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#1a2e1f] border border-[#7bcbb4]/30 text-[#a7d4c5]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Log Title */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#f5f0e8] font-sans">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#7bcbb4]/90 font-mono mt-1">{exp.subtitle}</p>
                </div>

                {/* WHAT I DID & WHAT IT TAUGHT ME BOXES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-sans">
                  
                  {/* What I Did */}
                  <div className="p-4 rounded-xl bg-[#162720]/80 border border-[#7bcbb4]/20 space-y-2">
                    <p className="font-mono text-xs text-[#7bcbb4] font-semibold flex items-center gap-1.5">
                      <span>⚡</span> WHAT I DID
                    </p>
                    <p className="text-xs md:text-sm text-[#f5f0e8]/85 leading-relaxed">
                      {exp.whatIDid}
                    </p>
                  </div>

                  {/* What It Taught Me */}
                  <div className="p-4 rounded-xl bg-[#162720]/80 border border-[#7bcbb4]/20 space-y-2">
                    <p className="font-mono text-xs text-[#a7d4c5] font-semibold flex items-center gap-1.5">
                      <span>💡</span> WHAT IT TAUGHT ME
                    </p>
                    <p className="text-xs md:text-sm text-[#f5f0e8]/85 leading-relaxed italic">
                      "{exp.whatItTaughtMe}"
                    </p>
                  </div>

                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[#7bcbb4]/80">
                      #{t}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Terminal Footer */}
          <div className="bg-[#13241d] px-6 py-3 border-t border-[#7bcbb4]/20 font-mono text-xs text-[#a7d4c5]/60 flex items-center justify-between">
            <span>[ End of changelog ]</span>
            <span>Status: Ready for Next Challenge ⚡</span>
          </div>

        </div>

      </div>
    </section>
  )
}