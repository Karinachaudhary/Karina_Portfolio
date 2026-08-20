import React, { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const emailAddress = 'karinachaudharyyy@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="pt-16 md:pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7bcbb4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a2e1f]/80 border border-[#7bcbb4]/30 backdrop-blur-md">
            <span className="font-mono text-xs text-[#7bcbb4] uppercase tracking-widest">
              / contact • let's build together
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f5f0e8]">
            Got a project or <span className="text-[#7bcbb4]">hackathon</span> idea?
          </h2>

          <p className="text-sm md:text-base text-[#f5f0e8]/75 max-w-xl">
            Whether you want to collaborate on a fullstack system, invite me to a hackathon, or discuss hardware IoT — my inbox is always open!
          </p>
        </div>

        {/* CONTACT GRID: Left Direct Links + Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Direct Info & Social Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#13241d]/90 border border-[#7bcbb4]/30 shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#7bcbb4] uppercase tracking-wider">
                  📫 Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#7bcbb4]/10 border border-[#7bcbb4]/30 text-[#7bcbb4] hover:bg-[#7bcbb4]/20 transition-all cursor-pointer"
                >
                  {copied ? 'Copied! ✓' : 'Copy Email 📋'}
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="text-base sm:text-lg font-mono font-bold text-[#f5f0e8] hover:text-[#7bcbb4] transition-colors break-all block"
              >
                {emailAddress}
              </a>
              
              <p className="text-xs text-[#f5f0e8]/70">
                Click to copy or open your default mail app.
              </p>
            </div>

            {/* Social Links Matrix */}
            <div className="p-6 rounded-3xl bg-[#13241d]/90 border border-[#7bcbb4]/30 shadow-xl backdrop-blur-md space-y-4">
              <span className="font-mono text-xs text-[#7bcbb4] uppercase tracking-wider block">
                🌐 Social & Developer Hubs
              </span>

              <div className="space-y-3 font-mono text-xs sm:text-sm">
                
                {/* GitHub */}
                <a
                  href="https://github.com/Karinachaudhary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#1a2e1f]/80 border border-[#7bcbb4]/20 hover:border-[#7bcbb4] text-[#f5f0e8] hover:text-[#7bcbb4] transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <span><img src="/icons/github.png" alt="GitHub" className="w-5 h-5" /></span> GitHub
                  </span>
                  <span className="text-[#7bcbb4] group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/karina-chaudhary-b783b1306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#1a2e1f]/80 border border-[#7bcbb4]/20 hover:border-[#7bcbb4] text-[#f5f0e8] hover:text-[#7bcbb4] transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <span><img src="/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5" /></span> LinkedIn
                  </span>
                  <span className="text-[#7bcbb4] group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Location */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a2e1f]/40 border border-[#7bcbb4]/10 text-[#f5f0e8]/70">
                  <span className="flex items-center gap-2">
                    <span>📍</span> Location
                  </span>
                  <span className="font-bold text-[#7bcbb4]">Nepal (UTC+5:45)</span>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Terminal-styled Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border-2 border-[#7bcbb4]/30 bg-[#0d1813]/95 p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-6">
              
              {/* Form Window Header */}
              <div className="flex items-center justify-between border-b border-[#7bcbb4]/20 pb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-[#7bcbb4] font-bold ml-2">SEND_MESSAGE.SH</span>
                </div>
                <span className="text-[#a7d4c5]/60 hidden sm:inline">$ ./submit_form.sh</span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#1a2e1f] border border-[#7bcbb4] text-center space-y-3 animate-fade-in">
                  <p className="text-3xl">⚡</p>
                  <h4 className="text-xl font-bold text-[#7bcbb4]">Message Transmitted!</h4>
                  <p className="text-xs font-mono text-[#f5f0e8]/80">
                    Thank you for reaching out, {formData.name || 'friend'}! I'll get back to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs sm:text-sm">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[#7bcbb4] block font-semibold">
                      $ set your_name =
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-[#13241d] border border-[#7bcbb4]/30 rounded-xl px-4 py-3 text-[#f5f0e8] focus:outline-none focus:border-[#7bcbb4] transition-colors placeholder-[#a7d4c5]/40"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-[#7bcbb4] block font-semibold">
                      $ set your_email =
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#13241d] border border-[#7bcbb4]/30 rounded-xl px-4 py-3 text-[#f5f0e8] focus:outline-none focus:border-[#7bcbb4] transition-colors placeholder-[#a7d4c5]/40"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-[#7bcbb4] block font-semibold">
                      $ cat your_message =
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hey Karina, let me know if you're interested in joining our hackathon..."
                      className="w-full bg-[#13241d] border border-[#7bcbb4]/30 rounded-xl px-4 py-3 text-[#f5f0e8] focus:outline-none focus:border-[#7bcbb4] transition-colors placeholder-[#a7d4c5]/40 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#7bcbb4] hover:bg-[#6ab9a3] text-[#13241d] font-bold font-mono text-sm transition-all shadow-[0_0_20px_rgba(123,203,180,0.3)] hover:shadow-[0_0_30px_rgba(123,203,180,0.5)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Execute Transmission ⚡</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

         
      </div>
    </section>
  )
}