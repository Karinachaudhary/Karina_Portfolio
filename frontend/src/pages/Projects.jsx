import React, { useState } from 'react'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('featured')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  // Projects Database
  const projectsData = [
    {
      id: 'paila',
      category: 'featured',
      badge: 'Hackathon',
      title: 'Paila — Tourism & Discovery Platform',
      shortDesc: 'Collaborative tourism platform built during a 24-hour hackathon sprint.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI', 'Maps API'],
      liveUrl: 'https://github.com/Karinachaudhary/Paila_with_You',
      githubUrl: 'https://github.com/Karinachaudhary/Paila_with_You',
      // screenshots: ['/paila1.png', '/paila2.png', '/paila3.png', '/hike.jpg'],
      caseStudy: {
        problem: 'Travelers often struggle to discover authentic local Nepalese trails and experiences due to scattered information and unreliable guides.',
        idea: 'An interactive tourism platform providing curated local trails, real-time map navigation, and community recommendations.',
        role: 'Frontend Lead · Project Lead · Deployment Lead',
        myContributions: 'Architected the React frontend component hierarchy under a strict 24-hour deadline, integrated map location APIs, handled Git team workflows, and delivered the final live pitch.',
        howItWorks: 'Users explore interactive maps, filter trails by difficulty, view crowdsourced reviews, and access offline emergency contacts.',
        challenges: 'Integrating real-time map data alongside smooth UI animations in 24 hours was challenging. We solved it by caching map coordinates locally.',
        outcome: 'Successfully delivered and presented live to hackathon judges, winning top honors for product execution.',
        whatILearned: 'Building under a deadline taught me that shipping a good product isn’t just about writing code — it’s about making decisions quickly and communicating with your team.',
      }
    },
    {
      id: 'ecosnap',
      category: 'featured',
      badge: '🤖 AI & Environment',
      title: 'EcoSnap — AI Waste Classifier',
      shortDesc: 'Real-time AI camera vision model that classifies waste for smart recycling.',
      tech: ['React', 'Node.js', 'AI Vision API', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Karinachaudhary',
      // screenshots: ['/image.png', '/lake.jpg'],
      caseStudy: {
        problem: 'Improper waste segregation damages recycling efficiency in urban communities.',
        idea: 'A mobile web app using computer vision to instantly identify waste types (organic, plastic, metal) and provide proper disposal instructions.',
        role: 'Fullstack Engineer & ML Integration',
        myContributions: 'Built the web camera capture interface, connected frontend state to backend classification endpoints, and designed glowing UI feedback cards.',
        howItWorks: 'Users snap a photo -> backend processes image tensor -> returns real-time classification & eco points.',
        challenges: 'Handling camera latency on mobile browsers required optimizing image compression before sending payloads.',
        outcome: 'Functional prototype tested with 90%+ classification accuracy for common household waste.',
        whatILearned: 'Taught me how to connect modern machine learning models with responsive user interfaces.',
      }
    },
    {
      id: 'librarylynx',
      category: 'fullstack',
      badge: '📚 Full-Stack Web',
      title: 'LibraryLynx — Library Management System',
      shortDesc: 'Enterprise library management system with role-based access & book telemetry.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Karinachaudhary/Librarylynx',
      screenshots: ['/projects/liblynx1.jpg', '/projects/liblynx2.jpg'],
      caseStudy: {
        problem: 'Manual college library record-keeping caused frequent book misplacements and slow checkout queues.',
        idea: 'A role-based digital library system for students and librarians with automated return reminders and inventory search.',
        role: 'Fullstack Developer',
        myContributions: 'Designed PostgreSQL relational schemas, built JWT authentication middleware, and created student search dashboards.',
        howItWorks: 'Students search books & reserve titles -> Librarians approve checkout with 1-click status updates.',
        challenges: 'Structuring complex SQL foreign keys for reservation queues required relational optimization.',
        outcome: 'Streamlined checkout workflows and eliminated paper record-keeping.',
        whatILearned: 'Solidified my understanding of relational database schema design, security, and fullstack API contracts.',
      }
    },
    {
      id: 'dotnet-api',
      category: 'experiments',
      badge: '⚡ .NET & C#',
      title: 'ASP.NET Core REST API Architecture',
      shortDesc: 'High-performance backend API exploring C# strongly-typed design patterns.',
      tech: ['C#', 'ASP.NET Core', 'PostgreSQL', 'Entity Framework'],
      githubUrl: 'https://github.com/Karinachaudhary',
      screenshots: ['/hike.jpg'],
      caseStudy: {
        problem: 'Exploring backend architectures beyond Node.js to master enterprise C# patterns.',
        idea: 'A strongly-typed backend service with dependency injection, DTO mapping, and Entity Framework ORM.',
        role: 'Backend Developer',
        myContributions: 'Wrote C# controllers, configured Entity Framework migrations, and structured clean repository layers.',
        howItWorks: 'REST endpoints handle CRUD operations with strict type validation and middleware exception logging.',
        challenges: 'Adapting from Node.js dynamic typing to C# strict type safety.',
        outcome: 'Deepened my backend engineering skills and prepared me for enterprise system architecture.',
        whatILearned: 'Strong typing prevents thousands of runtime bugs before code ever reaches production.',
      }
    }
  ]

  // LAB Experiments Data
  const labExperiments = [
    {
      title: 'ASP.NET Core API',
      domain: 'Backend Architecture',
      desc: 'Exploring C# dependency injection, DTOs, and Entity Framework ORM.',
      tech: 'C# / .NET',
      link: 'https://github.com/Karinachaudhary'
    }
    // ,
    // {
    //   title: 'Gemini AI Prototype',
    //   domain: 'AI & LLM Tooling',
    //   desc: 'Testing contextual prompt engineering and streaming responses in web apps.',
    //   tech: 'React / Gemini API',
    //   link: 'https://github.com/Karinachaudhary'
    // },
    // {
    //   title: 'Motion UI Physics',
    //   domain: 'UI / UX Interaction',
    //   desc: 'Building custom pointer-captured draggable canvas components.',
    //   tech: 'Framer Motion / Canvas',
    //   link: 'https://github.com/Karinachaudhary'
    // }
  ]

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab)

  return (
    <section id="explore" className="py-16 md:py-24 relative overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#7bcbb4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a2e1f]/80 border border-[#7bcbb4]/30 backdrop-blur-md">
            <span className="font-mono text-xs text-[#7bcbb4] uppercase tracking-widest">
              / projects • what i've built
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f5f0e8]">
            Featured <span className="text-[#7bcbb4]">Systems</span> & Experiments
          </h2>

          <p className="text-sm md:text-base text-[#f5f0e8]/75 max-w-2xl">
            Projects built to demonstrate product thinking, fullstack engineering, hackathon problem solving, and backend architecture.
          </p>
        </div>

        {/* 🏷️ CATEGORY TABS */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          {[
            { id: 'featured', label: '⭐ Featured' },
            { id: 'fullstack', label: '💻 Full-Stack' },
            { id: 'experiments', label: '🔬 Experiments' },
            { id: 'all', label: 'All Projects' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#7bcbb4] text-[#13241d] font-bold shadow-[0_0_12px_rgba(123,203,180,0.4)]'
                  : 'bg-[#1a2e1f]/80 text-[#f5f0e8]/70 hover:text-[#f5f0e8] border border-[#7bcbb4]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 🚀 PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl border-2 border-[#7bcbb4]/25 bg-[#0d1813]/90 p-6 shadow-xl backdrop-blur-md hover:border-[#7bcbb4] transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#1a2e1f] border border-[#7bcbb4]/30 text-[#7bcbb4]">
                    {project.badge}
                  </span>
                  <span className="font-mono text-[10px] text-[#a7d4c5]/60 uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl md:text-2xl font-bold text-[#f5f0e8] group-hover:text-[#7bcbb4] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#f5f0e8]/80 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px]">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#13241d] border border-[#7bcbb4]/20 text-[#a7d4c5]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
               <div className="pt-4 border-t border-[#7bcbb4]/15 flex items-center justify-between font-mono text-xs">
                {/* <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(project)}
                  className="px-4 py-2 rounded-xl bg-[#7bcbb4] hover:bg-[#6ab9a3] text-[#13241d] font-bold transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                >
                  <span>Read Case Study 📖</span>
                </button>  */}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7bcbb4] hover:underline flex items-center gap-1"
                >
                  GitHub →
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* 🧪 THE LAB: BUILDING IN PUBLIC */}
        <div className="space-y-6 pt-12 border-t border-[#7bcbb4]/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#f5f0e8] font-mono">
                🧪 THE LAB <span className="text-xs font-normal text-[#7bcbb4] ml-2">• Building in Public</span>
              </h3>
              <p className="text-xs text-[#f5f0e8]/70 font-mono mt-1">
                Small experiments, prototypes, and continuous learning projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {labExperiments.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#13241d]/80 border border-[#7bcbb4]/25 space-y-3 hover:border-[#7bcbb4] transition-all group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#7bcbb4]">
                  <span>{exp.domain}</span>
                  <span className="px-2 py-0.5 rounded bg-[#1a2e1f] border border-[#7bcbb4]/20 text-[10px]">{exp.tech}</span>
                </div>

                <h4 className="text-lg font-bold text-[#f5f0e8] group-hover:text-[#7bcbb4] transition-colors">
                  {exp.title}
                </h4>

                <p className="text-xs text-[#f5f0e8]/75 leading-relaxed">
                  {exp.desc}
                </p>

                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#7bcbb4] hover:underline pt-2"
                >
                  Explore Code →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 💡 DIDN'T FIND WHAT YOU'RE LOOKING FOR? ENDING BANNER */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1a2e1f] to-[#13241d] border-2 border-[#7bcbb4]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#f5f0e8]">
              Didn't find what you're looking for?
            </h3>
            <p className="text-xs md:text-sm text-[#f5f0e8]/80 font-mono">
              I'm always building something new and exploring system architectures.
            </p>
          </div>

          <a
            href="#experience"
            className="px-6 py-3.5 rounded-xl bg-[#7bcbb4] hover:bg-[#6ab9a3] text-[#13241d] font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(123,203,180,0.3)] shrink-0"
          >
            See what I'm learning →
          </a>
        </div>

      </div>

      {/* 🌟 DEDICATED CASE STUDY MODAL WITH INFINITE SCREENSHOT CAROUSEL */}
      {selectedCaseStudy && (
        <div
          onClick={() => setSelectedCaseStudy(null)}
          className="fixed inset-0 z-50 bg-[#0d1813]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#13241d] border-2 border-[#7bcbb4]/40 rounded-3xl p-6 md:p-8 max-w-3xl w-full space-y-6 shadow-2xl relative my-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#1a2e1f] text-[#7bcbb4] hover:text-[#f5f0e8] border border-[#7bcbb4]/30 text-xs font-mono cursor-pointer"
            >
              ✕ Close
            </button>

            {/* Header */}
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#7bcbb4]/10 text-[#7bcbb4] border border-[#7bcbb4]/30">
                {selectedCaseStudy.badge}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-[#f5f0e8]">
                {selectedCaseStudy.title}
              </h3>
              <p className="font-mono text-xs text-[#7bcbb4]">
                My Role: {selectedCaseStudy.caseStudy.role}
              </p>
            </div>

            {/* 🌟 INFINITE SCREENSHOT CAROUSEL */}
            <div className="space-y-2">
              <p className="font-mono text-xs text-[#a7d4c5]/70">📷 Project Screenshots & UI Preview</p>
              <div className="relative overflow-hidden rounded-2xl border border-[#7bcbb4]/30 bg-[#0d1813] p-4">
                <div className="flex gap-4 overflow-x-auto py-2 snap-x">
                  {selectedCaseStudy.screenshots.map((imgSrc, sIdx) => (
                    <div key={sIdx} className="shrink-0 w-64 h-40 rounded-xl overflow-hidden border border-[#7bcbb4]/20 snap-center bg-[#1a2e1f]">
                      <img
                        src={imgSrc}
                        alt="Screenshot"
                        onError={(e) => { e.target.style.display = 'none'; }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CASE STUDY SECTIONS GRID */}
            <div className="space-y-5 font-sans text-xs md:text-sm leading-relaxed">
              
              {/* Problem & Idea */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#1a2e1f] border border-[#7bcbb4]/20 space-y-1.5">
                  <h4 className="font-mono text-xs font-bold text-[#7bcbb4]">🎯 THE PROBLEM</h4>
                  <p className="text-[#f5f0e8]/85">{selectedCaseStudy.caseStudy.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1a2e1f] border border-[#7bcbb4]/20 space-y-1.5">
                  <h4 className="font-mono text-xs font-bold text-[#7bcbb4]">💡 THE IDEA</h4>
                  <p className="text-[#f5f0e8]/85">{selectedCaseStudy.caseStudy.idea}</p>
                </div>
              </div>

              {/* My Role & Contributions */}
              <div className="p-4 rounded-xl bg-[#1a2e1f] border border-[#7bcbb4]/20 space-y-1.5">
                <h4 className="font-mono text-xs font-bold text-[#7bcbb4]">🛠️ MY CONTRIBUTIONS</h4>
                <p className="text-[#f5f0e8]/85">{selectedCaseStudy.caseStudy.myContributions}</p>
              </div>

              {/* Challenges & Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#1a2e1f] border border-[#7bcbb4]/20 space-y-1.5">
                  <h4 className="font-mono text-xs font-bold text-[#7bcbb4]">⚠️ CHALLENGES</h4>
                  <p className="text-[#f5f0e8]/85">{selectedCaseStudy.caseStudy.challenges}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#1a2e1f] border border-[#7bcbb4]/20 space-y-1.5">
                  <h4 className="font-mono text-xs font-bold text-[#7bcbb4]">🏆 OUTCOME</h4>
                  <p className="text-[#f5f0e8]/85">{selectedCaseStudy.caseStudy.outcome}</p>
                </div>
              </div>

              {/* What I Learned */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1d352b] to-[#1a2e1f] border border-[#7bcbb4]/40 space-y-2">
                <h4 className="font-mono text-xs font-bold text-[#7bcbb4] flex items-center gap-1.5">
                  <span>🧠</span> WHAT I LEARNED
                </h4>
                <p className="text-[#f5f0e8] italic font-medium">
                  "{selectedCaseStudy.caseStudy.whatILearned}"
                </p>
              </div>

            </div>

            {/* Links */}
            <div className="pt-4 border-t border-[#7bcbb4]/20 flex items-center justify-between font-mono text-xs">
              <a
                href={selectedCaseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#7bcbb4] text-[#13241d] font-bold hover:bg-[#6ab9a3] transition-colors"
              >
                View Repository on GitHub →
              </a>
              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="text-[#f5f0e8]/60 hover:text-[#f5f0e8]"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}