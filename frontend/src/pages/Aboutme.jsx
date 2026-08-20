import React, { useState, useRef, useCallback, useEffect } from 'react'

export default function Aboutme() {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  
  // Active Hobby Tab ('exploring' | 'books' | 'music')
  const [activeHobby, setActiveHobby] = useState('exploring')
  
  // Selected Photo Modal
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  
  // 🎵 Audio Playback State
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const containerRef = useRef(null)
  // Initialize Audio instance
  useEffect(() => {
    audioRef.current = new Audio()
    
    // Reset state when track ends
    const handleEnded = () => setIsPlaying(false)
    audioRef.current.addEventListener('ended', handleEnded)
    return () => {
      audioRef.current.pause()
      audioRef.current.removeEventListener('ended', handleEnded)
    }
  }, [])
  // 🎵 Play / Pause Music Handler
  const togglePlayTrack = (item) => {
    if (!item.audioUrl) return
    if (currentTrack?.title === item.title) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play().catch(err => console.log('Audio play error:', err))
        setIsPlaying(true)
      }
    } else {
      audioRef.current.src = item.audioUrl
      audioRef.current.play().catch(err => console.log('Audio play error:', err))
      setCurrentTrack(item)
      setIsPlaying(true)
    }
  }
    // 🎵 Stop Music and Close Floating Player
  const handleStopAndCloseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentTrack(null)
  }

  useEffect(() => {
    if (!containerRef.current) return
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100
    if (percentage <= 0) percentage = 0
    if (percentage >= 100) percentage = 100
    setSliderPos(percentage)
  }, [])

  const handlePointerDown = (e) => {
    setIsDragging(true)
    e.target.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = (e) => {
    setIsDragging(false)
    try {
      e.target.releasePointerCapture(e.pointerId)
    } catch (err) {}
  }

  const hobbyData = {
    exploring: {
      title: "Places I've Explored",
      desc: "Hiking trails, mountain vistas, and weekend getaways outside the city.",
      items: [
        { title: "Hike", location: "Chinde Dada", img: "/hike.jpg" },
        { title: "Lake View", location: "Illam", img: "/lake.jpg" },
        { title: "Sunset Peak", location: "Tinjure, Basantapur", img: "/image.png" },
      ]
    },
    // books: {
    //   title: "Books I've Read 📚",
    //   desc: "Engineering mindset, system design, and inspiring literature.",
    //   items: [
    //     { title: "Designing Data-Intensive Apps", location: "Tech Architecture", img: "/book1.jpg" },
    //     { title: "Clean Code", location: "Craftsmanship", img: "/book2.jpg" },
    //     { title: "Atomic Habits", location: "Self Improvement", img: "/book3.jpg" },
    //   ]
    // },
    music: {
      title: "Music & Beats 🎧",
      desc: "Chill vibe, coding beats and late night grind.",
      items: [
        { title: "Sunflower", location: "Chill Vibe", img: "/sunflower.jpg",
          audioUrl:"music/Sunflower.mp3"
         },
        { title: "Freakin' Out", location: "Coding Vibe", img: "/freakin.jpg",
          audioUrl:"/music/freakin.mp3"
         },
        { title: "Interstellar beats", location: "Late Night Build", img: "/interstellar.jpg",
          audioUrl:"/music/Interstellar.mp3"
        },
      ]
    }
  }

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#7bcbb4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a2e1f]/80 border border-[#7bcbb4]/30 backdrop-blur-md">
            <span className="font-mono text-xs text-[#7bcbb4] uppercase tracking-widest">
              / about_me • two sides of me
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f5f0e8]">
            The <span className="text-[#7bcbb4]">Builder</span> & The <span className="text-[#a7d4c5]">Explorer</span>
          </h2>

          <p className="text-sm md:text-base text-[#f5f0e8]/75 max-w-2xl">
            Click on the tabs in the LIFE side to see my real photos, books, and travel adventures!
          </p>
        </div>

        {/* 🌟 SLIDER WITH ISOLATED PHOTO POINTER EVENTS */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full h-115 sm:h-125 rounded-3xl border-2 border-[#7bcbb4]/30 overflow-hidden shadow-2xl select-none cursor-ew-resize bg-[#0d1813] touch-none"
        >
          {/* RIGHT PANEL: LIFE (The Explorer) - Layer z-0 */}
          <div className="absolute inset-0 z-0 bg-[#162720] flex flex-col justify-between p-5 sm:p-8 text-[#f5f0e8]">
            
            {/* Header + Interactive Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs text-[#7bcbb4] uppercase tracking-widest bg-[#13241d]/80 px-3 py-1.5 rounded-full border border-[#7bcbb4]/20">
                🌱 LIFE • The Explorer
              </span>

              {/* Category Buttons */}
              <div
                onPointerDown={(e) => e.stopPropagation()}
                className="flex items-center gap-2 pointer-events-auto"
              >
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActiveHobby('exploring'); }}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeHobby === 'exploring'
                      ? 'bg-[#7bcbb4] text-[#13241d] font-bold shadow-[0_0_10px_rgba(123,203,180,0.4)]'
                      : 'bg-[#13241d]/60 text-[#f5f0e8]/70 hover:text-[#f5f0e8]'
                  }`}
                >
                Exploring
                </button>

                {/* <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActiveHobby('books'); }}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeHobby === 'books'
                      ? 'bg-[#7bcbb4] text-[#13241d] font-bold shadow-[0_0_10px_rgba(123,203,180,0.4)]'
                      : 'bg-[#13241d]/60 text-[#f5f0e8]/70 hover:text-[#f5f0e8]'
                  }`}
                >
                  📚 Books
                </button> */}

                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActiveHobby('music'); }}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeHobby === 'music'
                      ? 'bg-[#7bcbb4] text-[#13241d] font-bold shadow-[0_0_10px_rgba(123,203,180,0.4)]'
                      : 'bg-[#13241d]/60 text-[#f5f0e8]/70 hover:text-[#f5f0e8]'
                  }`}
                >
                  🎧 Music
                </button>
              </div>
            </div>

            {/* Dynamic Hobby Gallery Content */}
            <div className="space-y-4 max-w-lg ml-auto text-right my-2">
              <h3 className="text-xl sm:text-3xl font-bold text-[#f5f0e8]">
                {hobbyData[activeHobby].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#f5f0e8]/80 leading-relaxed">
                {hobbyData[activeHobby].desc}
              </p>

             {/* Photo & Song Cards Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 pointer-events-auto">
                {hobbyData[activeHobby].items.map((item, idx) => {
                  const isThisPlaying = isPlaying && currentTrack?.title === item.title
                  return (
                    <div
                      key={idx}
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (activeHobby === 'music') {
                          togglePlayTrack(item)
                        } else {
                          setSelectedPhoto(item)
                        }
                      }}
                      className={`group relative rounded-xl overflow-hidden border bg-[#1d352b] h-24 sm:h-28 cursor-pointer transition-all shadow-md ${
                        isThisPlaying ? 'border-[#7bcbb4] ring-2 ring-[#7bcbb4]/50' : 'border-[#7bcbb4]/30 hover:border-[#7bcbb4]'
                      }`}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 pointer-events-none"
                      />
                      
                      {/* Song Playing Equalizer Indicator */}
                      {activeHobby === 'music' && (
                        <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-[#13241d]/90 text-[10px] font-mono text-[#7bcbb4] flex items-center gap-1 border border-[#7bcbb4]/30">
                          {isThisPlaying ? (
                            <>
                              <span className="animate-pulse">▶</span>
                              <span className="font-bold">PLAYING</span>
                            </>
                          ) : (
                            <span>▶ PLAY</span>
                          )}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13241d] via-transparent to-transparent flex flex-col justify-end p-2 text-left pointer-events-none">
                        <p className="font-bold text-[10px] sm:text-xs text-[#f5f0e8] truncate">{item.title}</p>
                        <p className="font-mono text-[9px] text-[#7bcbb4] truncate">{item.location}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="text-right text-[11px] font-mono text-[#a7d4c5]/60">
              [ {activeHobby === 'music' ? 'Click any track to Play/Pause 🎵' : 'Click photos to view'} ]
            </div>
          </div>

          {/* LEFT PANEL: CODE (The Builder) - Layer z-10 */}
          <div
            style={{ width: `${sliderPos}%` }}
            className="absolute inset-y-0 left-0 bg-[#0d1813] border-r-2 border-[#7bcbb4] overflow-hidden z-10 pointer-events-none"
          >
            <div
              style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
              className="h-full flex flex-col justify-between p-5 sm:p-8 text-[#f5f0e8]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#7bcbb4] uppercase tracking-widest bg-[#1a2e1f] px-3 py-1.5 rounded-full border border-[#7bcbb4]/30">
                  ⚡ CODE • The Builder
                </span>
                <span className="text-xl">💻 🤖 🧠 ⚙️</span>
              </div>

              <div className="space-y-4 max-w-md">
                <h3 className="text-xl sm:text-3xl font-bold text-[#7bcbb4]">
                  Turning Ideas into Systems
                </h3>
                <p className="text-xs sm:text-sm text-[#f5f0e8]/80 leading-relaxed">
                  I enjoy turning abstract ideas into working software products, understanding low-level systems, and experimenting with hardware IoT.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 font-mono text-[10px] sm:text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-[#1a2e1f] border border-[#7bcbb4]/30 text-[#7bcbb4]">React</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#1a2e1f] border border-[#7bcbb4]/30 text-[#7bcbb4]">Node.js</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#1a2e1f] border border-[#7bcbb4]/30 text-[#7bcbb4]">PostgreSQL</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#1a2e1f] border border-[#7bcbb4]/30 text-[#7bcbb4]">C++ / ASP.NET</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#1a2e1f] border border-[#7bcbb4]/30 text-[#7bcbb4]">Hardware / IoT</span>
                </div>
              </div>

              <div className="text-left text-[11px] font-mono text-[#a7d4c5]/60">
                [ Slide Right to reveal Personal World ]
              </div>
            </div>
          </div>

          {/* ↕ SLIDER HANDLE - Layer z-20 */}
          <div
            style={{ left: `${sliderPos}%` }}
            className="absolute top-0 bottom-0 z-20 -translate-x-1/2 flex items-center justify-center pointer-events-none"
          >
            <div className="w-1 h-full bg-[#7bcbb4] shadow-[0_0_15px_#7bcbb4]" />
            <div className="absolute px-3 py-2 rounded-full bg-[#7bcbb4] text-[#13241d] font-mono text-xs font-bold shadow-[0_0_20px_#7bcbb4] flex items-center gap-1">
              <span>◄</span>
              <span className="text-[10px] uppercase tracking-wider">drag</span>
              <span>►</span>
            </div>
          </div>
        </div>

        {/* PHOTO LIGHTBOX MODAL */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-[#0d1813]/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a2e1f] border-2 border-[#7bcbb4]/40 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-[#7bcbb4] hover:text-[#f5f0e8] text-sm font-mono cursor-pointer"
              >
                ✕ Close
              </button>
              
              <h4 className="text-xl font-bold text-[#f5f0e8]">{selectedPhoto.title}</h4>
              <p className="font-mono text-xs text-[#7bcbb4]">{selectedPhoto.location}</p>

              <div className="rounded-2xl overflow-hidden border border-[#7bcbb4]/20 bg-[#13241d] h-64 flex items-center justify-center">
                <img
                  src={selectedPhoto.img}
                  alt={selectedPhoto.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  className="w-full h-full object-cover"
                />
                {/* <span className="text-xs text-[#a7d4c5]/60 font-mono absolute">
                  
                </span> */}
              </div>
            </div>
          </div>
        )}
        
        {/* 🎵 FLOATING MINI MUSIC PLAYER BAR */}
        {currentTrack && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#13241d]/95 border-2 border-[#7bcbb4] px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-4 text-xs font-mono text-[#f5f0e8]">
            <div className="flex items-center gap-2">
              <span className="animate-spin text-[#7bcbb4]">💿</span>
              <div>
                <p className="font-bold text-[#7bcbb4]">{currentTrack.title}</p>
                <p className="text-[10px] text-[#a7d4c5]/70">{currentTrack.location}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => togglePlayTrack(currentTrack)}
              className="px-3 py-1.5 rounded-full bg-[#7bcbb4] text-[#13241d] font-bold hover:bg-[#6ab9a3] transition-colors cursor-pointer"
            >
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </button>
            
      {/* ✕ Stop & Close Button */}
      <button
        type="button"
        onClick={handleStopAndCloseMusic}
        title="Stop & Close Music"
        className="w-7 h-7 rounded-full bg-[#1a2e1f] border border-[#7bcbb4]/40 text-[#a7d4c5] hover:text-red-400 hover:border-red-400/50 flex items-center justify-center transition-colors cursor-pointer font-bold text-xs"
      >
        ✕
      </button>
    
          </div>
        )}

      </div>
    </section>
  )
}