import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * Cinematic 5-Stage Opening Intro for Portfolio
 * Includes a skippable button and session memory.
 */
export default function IntroStory({ onComplete }) {
  const [stage, setStage] = useState(1)
  const [skipped, setSkipped] = useState(false)

  useEffect(() => {
    // Check if intro has already been seen in this session
    const hasSeen = sessionStorage.getItem('portfolio_intro_seen')
    if (hasSeen) {
      onComplete?.()
      return
    }

    // Stage progression timings
    const timers = [
      setTimeout(() => setStage(2), 2400), // Stage 2 at 2.4s
      setTimeout(() => setStage(3), 4800), // Stage 3 at 4.8s
      setTimeout(() => setStage(4), 7200), // Stage 4 at 7.2s
      setTimeout(() => {
        handleFinish()
      }, 10400), // Complete at 10.4s
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  const handleFinish = () => {
    sessionStorage.setItem('portfolio_intro_seen', 'true')
    setSkipped(true)
    setTimeout(() => {
      onComplete?.()
    }, 400)
  }

  if (skipped) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#13241d] text-[#f5f0e8] overflow-hidden px-6"
    >
      {/* Skip Intro Button */}
      <button
        type="button"
        onClick={handleFinish}
        className="absolute top-8 right-8 text-xs font-mono tracking-widest uppercase text-[#a7d4c5]/70 hover:text-[#f5f0e8] transition-colors cursor-pointer px-4 py-2 rounded-full border border-[#a7d4c5]/20 hover:border-[#a7d4c5]/50"
      >
        Skip intro →
      </button>

      {/* Background soft misty glow */}
      <div className="absolute inset-0 bg-radial from-[#1e3d32]/30 via-transparent to-transparent pointer-events-none" />

      <AnimatePresence mode="wait">
        {/* Stage 01 — Silence */}
        {stage === 1 && (
          <motion.div
            key="stage1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center max-w-lg"
          >
            <p className="font-display text-2xl md:text-4xl font-light leading-relaxed text-[#f5f0e8]/90">
              Hey, there <br />
              <span className="italic text-[#7bcbb4]">I'm Karina</span>Software Developer?
            </p>
          </motion.div>
        )}

        {/* Stage 02 — The First Step & Trail */}
        {stage === 2 && (
          <motion.div
            key="stage2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center max-w-xl flex flex-col items-center gap-6"
          >
            {/* Animated glowing footprint trail */}
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="overflow-visible">
              <motion.path
                d="M 10 20 C 40 5, 80 35, 110 20"
                stroke="#7bcbb4"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="110"
                cy="20"
                r="4"
                fill="#7bcbb4"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ delay: 1.3, duration: 0.4 }}
              />
            </svg>
            <p className="font-display text-xl md:text-3xl font-light text-[#f5f0e8]/85 leading-relaxed">
            Welcome to my Profile though..
            </p>
          </motion.div>
        )}

        {/* Stage 03 — Introduce Paila */}
        {stage === 3 && (
          <motion.div
            key="stage3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center max-w-lg"
          >
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-wider text-[#f5f0e8] mb-4">
              Let's get into it
            </h1>
            <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-[#7bcbb4]">
              Your friendly neighbour.
            </p>
          </motion.div>
        )}

        {/* Stage 04 — Paila Speaks */}
        {stage === 4 && (
          <motion.div
            key="stage4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-xl md:text-2xl text-[#f5f0e8]/70 mb-6"
            >
              I can show you my projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="font-display text-2xl md:text-4xl font-light text-[#7bcbb4] leading-relaxed"
            >
              But I'd rather show you <em className="italic font-normal">my passion and interest.</em>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
