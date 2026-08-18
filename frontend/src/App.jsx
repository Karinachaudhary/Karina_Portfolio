import { useState } from 'react'
import tailwindcss from 'tailwindcss'
import Navbar from './components/Navbar'
import IntroStory from './components/IntroStory'
 export default function App() {
  const [introFinished, setIntroFinished] = useState(false)

  return (
  <div className="min-h-screen bg-[#46308d] text-[#f5f0e8] selection:bg-[#274b41] selection:text-[#13241d]">
      {/* 1. Cinematic Intro Overlay */}
      {!introFinished && (
        <IntroStory onComplete={() => setIntroFinished(true)} />
      )}
      {/* 2. Main Portfolio Header */}
      <Navbar onStart={() => setIntroFinished(true)} />

    </div>
  )
}