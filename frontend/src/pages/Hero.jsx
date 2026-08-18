import React, { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', text: "Welcome to Karina's interactive dev terminal! 🚀" },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ])

  const terminalEndRef = useRef(null)

  // Auto-scroll terminal to bottom when output changes
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  // Handle Command Submission
  const handleCommand = (e) => {
    e.preventDefault()
    const cmd = inputVal.trim().toLowerCase()
    if (!cmd) return

    const newHistory = [...history, { type: 'command', text: `$ ${inputVal}` }]

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available commands:\n • whoami    - Learn about Karina\n • skills    - Fullstack, Hardware & CP skills\n • projects  - Featured projects list\n • hackathon - Hackathon & competition log\n  • contact   - Get in touch\n • clear     - Clear terminal screen\n • sudo      - Try admin access'
        })
        break

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'Karina • BSc CSIT (6th Semester)\nTarget: Fullstack Engineer.\nLoves Competitive Programming, Hackathons, and building IoT systems.'
        })
        break

      case 'skills':
        newHistory.push({
          type: 'output',
          text: '⚡ Fullstack: React, Node.js, Express, PostgreSQL, Tailwind\nAlgorithms: Data Structures, C++, JavaScript, CP Problem Solving'
        // 🤖 Hardware: ESP32, Arduino, Microcontrollers, Sensors\n🧠  
        
        })
        break

      case 'projects':
        newHistory.push({
          type: 'output',
          text: '🚀 Projects:\n 1. Paila with You - Interactive story & web system\n 2. LibraryLynx - Fullstack Library Management System'
        //    3. IoT Edge Monitor - ESP32 Sensor Grid'
        })
        break

      case 'hackathon':
        newHistory.push({
          type: 'output',
          text: '🏆 Hackathon Mindset:\nLove fast-paced 24-48h hackathons, rapid prototyping, and solving real-world hardware & software challenges.'
        })
        break

    //   case 'hardware':
    //     newHistory.push({
    //       type: 'output',
    //       text: '📟 Hardware & Embedded:\nExperienced with ESP32 Wi-Fi/BT modules, Arduino C/C++, sensor telemetry, and circuit integration.'
    //     })
    //     break

      case 'contact':
        newHistory.push({
          type: 'output',
          text: '📫 Contact Links:\n • GitHub: https://github.com/Karinachaudhary\n • LinkedIn: https://www.linkedin.com/in/karina-chaudhary-b783b1306/\n • Email: karinachaudharyyy@gmail.com'
        })
        break

      case 'clear':
        setHistory([])
        setInputVal('')
        return

      case 'sudo':
        newHistory.push({
          type: 'output',
          text: ' Access Denied: You need root privileges (or hire first! 😎)'
        })
        break

      default:
        newHistory.push({
          type: 'output',
          text: `Command not found: "${cmd}". Type "help" for available commands.`
        })
        break
    }

    setHistory(newHistory)
    setInputVal('')
  }

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative pt-12 pb-16">
      
      {/* Background Ambient Glow */}
      <div className="absolute -top-10 left-1/4 w-96 h-96 bg-[#7bcbb4]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headline & Bio */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a2e1f]/80 border border-[#7bcbb4]/30 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7bcbb4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7bcbb4]"></span>
            </span>
            <span className="font-mono text-xs text-[#7bcbb4] tracking-wider uppercase">
              BSc CSIT 6th Sem • Open for Hackathons
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Building <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7bcbb4] to-[#a7d4c5]">Fullstack Systems</span> & Hardware Tech
          </h1>

          <p className="text-lg text-[#f5f0e8]/80 leading-relaxed">
            Computer Science student striving for top-tier software architecture, hardware hacking, and competitive programming.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#explore"
              className="px-6 py-3.5 rounded-xl bg-[#7bcbb4] hover:bg-[#6ab9a3] text-[#13241d] font-semibold text-sm transition-all shadow-[0_0_20px_rgba(123,203,180,0.3)]"
            >
              Explore Projects 🚀
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-[#1a2e1f]/80 hover:bg-[#2d523c] border border-[#7bcbb4]/30 text-[#f5f0e8] font-medium text-sm transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#7bcbb4]/15">
            <div>
              <p className="text-2xl font-bold font-mono text-[#7bcbb4]">6th Sem</p>
              <p className="text-xs text-[#a7d4c5]/70 font-mono">BSc CSIT</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-[#7bcbb4]">Top developer</p>
              <p className="text-xs text-[#a7d4c5]/70 font-mono">Engineering Target</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-[#7bcbb4]">Fullstack</p>
              <p className="text-xs text-[#a7d4c5]/70 font-mono">+ Hardware & IoT</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-[#7bcbb4]/30 bg-[#0d1813]/95 p-5 shadow-2xl backdrop-blur-xl font-mono text-sm h-[420px] flex flex-col justify-between">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-[#7bcbb4]/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-[#a7d4c5]/60">karina@dev-terminal:~</span>
            </div>

            {/* Scrollable History Output */}
            <div className="flex-1 overflow-y-auto my-3 space-y-2 pr-2 text-xs md:text-sm">
              {history.map((item, idx) => (
                <div key={idx} className={item.type === 'command' ? 'text-[#7bcbb4] font-semibold' : 'text-[#f5f0e8]/90 whitespace-pre-line'}>
                  {item.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-[#7bcbb4]/20 pt-3">
              <span className="text-[#7bcbb4] font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'whoami', 'skills', 'projects'..."
                className="flex-1 bg-transparent text-[#f5f0e8] focus:outline-none font-mono text-xs md:text-sm placeholder-[#a7d4c5]/40"
              />
              <button type="submit" className="text-xs text-[#7bcbb4] hover:underline cursor-pointer">
                Send ↵
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  )
}