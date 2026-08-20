import React from 'react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-[#7bcbb4]/20 bg-[#0d1813]/60 backdrop-blur-md py-8 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#a7d4c5]/70">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7bcbb4] animate-pulse" />
          <span>Built with Passion and Care</span>
        </div>

        {/* Centered Copyright */}
        <div className="text-center font-semibold text-[#f5f0e8] text-sm tracking-wider">
          Karina © 2026
        </div>

        {/* Back to Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="hover:text-[#7bcbb4] transition-colors cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#13241d] border border-[#7bcbb4]/20 hover:border-[#7bcbb4]/50"
        >
          <span>Back to top</span>
          <span className="text-[#7bcbb4]">↑</span>
        </button>

      </div>
    </footer>
  )
}