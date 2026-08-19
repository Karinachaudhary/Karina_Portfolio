import React, { useState, useEffect } from 'react'

export default function Navbar({ onStart, onRegister, onDashboard, isLoggedIn }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 border-b border-[#140938]/20 shadow-lg backdrop-blur-md bg-[#140938]/90 text-[#f5f0e8]'
            : 'py-5 bg-transparent text-[#f5f0e8]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="font-display text-xl font-semibold tracking-wider hover:text-[#9290ba] transition-colors">
            Karina
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#7bcbb4] transition-colors">
              About Me
            </a>
            <a href="#explore" className="hover:text-[#7bcbb4] transition-colors">
              Explore Projects
            </a>
            <a href="#experience" className="hover:text-[#7bcbb4] transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#7bcbb4] transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="md:hidden p-2 focus:outline-none cursor-pointer text-[#f5f0e8] hover:text-[#2b5f50]"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileDrawerOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#13241d]/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <div
            className="absolute top-20 left-4 right-4 bg-[#321268] border border-[#7bcbb4]/20 rounded-2xl p-6 shadow-xl space-y-4 text-[#f5f0e8]"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-3 font-medium">
              <a
                href="#about"
                onClick={() => setMobileDrawerOpen(false)}
                className="py-2 hover:text-[#7e72c7] transition-colors"
              >
                About Me
              </a>
              <a
                href="#explore"
                onClick={() => setMobileDrawerOpen(false)}
                className="py-2 hover:text-[#7bcbb4] transition-colors"
              >
                Explore Projects
              </a>
              <a
                href="#experience"
                onClick={() => setMobileDrawerOpen(false)}
                className="py-2 hover:text-[#7bcbb4] transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setMobileDrawerOpen(false)}
                className="py-2 hover:text-[#7bcbb4] transition-colors"
              >
                Contact
              </a>
            </nav>


          </div>
        </div>
      )}
    </>
  )
}
