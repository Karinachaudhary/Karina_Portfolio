import React, { useEffect, useState } from 'react'

export default function AsciiPortrait({ imageSrc, width = 65 }) {
  const [asciiText, setAsciiText] = useState('')

  useEffect(() => {
    const img = new Image()
    img.src = imageSrc

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      // Adjust height for font aspect ratio (ASCII characters are ~2x taller than wide)
      const aspect = img.height / img.width
      const canvasWidth = width
      const canvasHeight = Math.floor(width * aspect * 0.5)

      canvas.width = canvasWidth
      canvas.height = canvasHeight

      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)

      // Read image pixel data
      const imgData = ctx.getImageData(0, 0, canvasWidth, canvasHeight)
      const data = imgData.data

      // Character density gradient from dark to light
      const density = ' .:-=+*#%@'
      let asciiResult = ''

      for (let y = 0; y < canvasHeight; y++) {
        for (let x = 0; x < canvasWidth; x++) {
          const offset = (y * canvasWidth + x) * 4
          const r = data[offset]
          const g = data[offset + 1]
          const b = data[offset + 2]

          // Calculate brightness
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b
          const charIndex = Math.floor((brightness / 255) * (density.length - 1))
          asciiResult += density[charIndex] || ' '
        }
        asciiResult += '\n'
      }

      setAsciiText(asciiResult)
    }
  }, [imageSrc, width])

  return (
    <div className="flex justify-center items-center">
      <pre className="font-mono text-[7px] sm:text-[9px] md:text-[10px] leading-[8px] sm:leading-[9px] md:leading-[10px] text-[#7bcbb4] select-none font-bold tracking-tighter drop-shadow-[0_0_12px_rgba(123,203,180,0.6)]">
        {asciiText || 'Loading ASCII Art...'}
      </pre>
    </div>
  )
}