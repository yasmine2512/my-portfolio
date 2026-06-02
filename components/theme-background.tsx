"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="pointer-events-none">
      {resolvedTheme === "dark" ? (
        // Video background for dark mode
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 -z-20 h-full w-full object-cover opacity-10"
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -10, opacity: 0.5 }}
        >
          <source src="/images/vid1.mp4" type="video/mp4" />
        </video>
      ) : (
       <img
          src="/images/im5.jpg"
          alt=""
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -8,opacity: 0.8  }}
        />
      )}
      {/* Overlay for better text readability */}
       <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10, backgroundColor: resolvedTheme === 'dark' ? 'rgba(10, 10, 20, 0.75)' : 'rgba(255, 255, 255, 0.65)' }} />
    </div>
  )
}
