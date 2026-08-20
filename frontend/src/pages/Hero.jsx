import React, { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', text: "Welcome to Karina's interactive dev terminal! 🚀" },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ])

  const terminalOutputRef = useRef(null)

  // ✅ Scroll ONLY inside the terminal container (no page scrolling!)
useEffect(() => {
  if (terminalOutputRef.current) {
    terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight
  }
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
     <section id="hero" className="min-h-[85vh] w-full max-w-full overflow-x-hidden flex flex-col justify-center relative pt-20 sm:pt-24 md:pt-28 pb-12">
      
      {/* Background Ambient Glow - Safely Centered */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 md:w-96 h-72 md:h-96 bg-[#7bcbb4]/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Photo + Info + Bio */}
        <div className="lg:col-span-5 space-y-5 md:space-y-6 flex flex-col items-center lg:items-stretch w-full max-w-full">
          
          {/* 1. Photo in Glowing Frame */}
          <div className="relative group w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[340px] mx-auto">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#7bcbb4] to-[#3d6b4f] opacity-40 blur-xl group-hover:opacity-75 transition duration-500" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#7bcbb4]/40 bg-[#1a2e1f]/80 p-2 shadow-2xl backdrop-blur-md">
              <img
                src="/Karina.jpeg"
                alt="Karina"
                className="w-full h-[260px] sm:h-[320px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {/* 2. Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#1a2e1f]/80 border border-[#7bcbb4]/30 backdrop-blur-md max-w-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7bcbb4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7bcbb4]"></span>
            </span>
            <span className="font-mono text-[11px] sm:text-xs text-[#7bcbb4] tracking-wider uppercase truncate">
              Fullstack Engineer & Hardware Tech
            </span>
          </div>
          {/* 3. Headline with Blinking Cursor */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f0e8] leading-tight">
            hi, <span className="text-[#7bcbb4]">karina</span> here<span className="animate-pulse text-[#7bcbb4]">.│</span>
          </h1>
          {/* 4. Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#f5f0e8]/80 leading-relaxed max-w-xl">
            BSc CSIT student (6th Sem) aiming for the serious tech engineers. I build high-performance web systems, love competitive programming, and experiment with hardware & IoT microcontrollers.
          </p>
          {/* 5. CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border-2 border-[#7bcbb4] text-[#7bcbb4] hover:bg-[#7bcbb4] hover:text-[#13241d] font-semibold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(123,203,180,0.2)] flex items-center gap-2"
            >
              ✉️ Say hi!
            </a>
            <a
              href="#explore"
              className="px-5 py-3 rounded-xl bg-[#1a2e1f]/80 hover:bg-[#2d523c] border border-[#7bcbb4]/30 text-[#f5f0e8] font-medium text-xs sm:text-sm transition-all"
            >
              View Projects →
            </a>
          </div>
          {/* 6. Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-[#7bcbb4]/15">
            <div>
              <p className="text-base sm:text-lg font-bold font-mono text-[#7bcbb4]">6th Sem</p>
              <p className="text-[10px] sm:text-xs text-[#f5f0e8]/60 font-mono">BSc CSIT</p>
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold font-mono text-[#7bcbb4]">Tech Girl</p>
              <p className="text-[10px] sm:text-xs text-[#f5f0e8]/60 font-mono">Engineer Target</p>
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold font-mono text-[#7bcbb4]">Fullstack</p>
              <p className="text-[10px] sm:text-xs text-[#f5f0e8]/60 font-mono">+ Hardware IoT</p>
            </div>
          </div>
        </div>
        {/* RIGHT COLUMN: Interactive Terminal */}
        <div className="lg:col-span-7 w-full max-w-full">
          <div className="rounded-2xl border border-[#7bcbb4]/30 bg-[#0d1813]/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl font-mono text-xs sm:text-sm h-[380px] max-h-[380px] sm:h-150 sm:max-h-130 flex flex-col justify-between overflow-hidden w-full">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-[#7bcbb4]/20 pb-2.5 shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] sm:text-xs text-[#a7d4c5]/60 font-mono">karina@dev-terminal:~</span>
            </div>
            {/* Scrollable History Output - Added ref={terminalOutputRef} */}
<div
      ref={terminalOutputRef}
      className="flex-1 min-h-0 overflow-y-auto my-2 space-y-2 pr-1.5 text-[11px] sm:text-xs md:text-sm"
    >
      {history.map((item, idx) => (
        <div key={idx} className={item.type === 'command' ? 'text-[#7bcbb4] font-semibold' : 'text-[#f5f0e8]/90 whitespace-pre-line break-words leading-relaxed'}>
          {item.text}
        </div>
      ))}
    </div>
            {/* Terminal Input Form */}
           <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-[#7bcbb4]/20 pt-2.5 shrink-0">
      <span className="text-[#7bcbb4] font-bold text-xs sm:text-sm">$</span>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="type 'help', 'whoami', 'skills'..."
        className="flex-1 bg-transparent text-[#f5f0e8] focus:outline-none font-mono text-[11px] sm:text-xs md:text-sm placeholder-[#a7d4c5]/40 min-w-0"
      />
      <button type="submit" className="text-[10px] sm:text-xs text-[#7bcbb4] hover:underline cursor-pointer font-medium px-2 py-1 rounded bg-[#7bcbb4]/10 hover:bg-[#7bcbb4]/20">
        Send ↵
      </button>
    </form>
  </div>
</div>
      </div>
    </section>
  )
}