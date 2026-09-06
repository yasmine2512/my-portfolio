"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import MagicRings from "./MagicRings";
import Iridescence from './Iridescence';
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
    <div>
      <div className="fixed inset-0 z-0 ">
      {resolvedTheme === "dark" ? (

  <MagicRings
    color="#8655f7"
    colorTwo="#b71cec"
    ringCount={6}
    speed={1}
    attenuation={10}
    lineThickness={2}
    baseRadius={0.35}
    radiusStep={0.1}
    scaleRate={0.1}
    opacity={1}
    blur={0}
    noiseAmount={0.1}
    rotation={0}
    ringGap={1.5}
    fadeIn={0.7}
    fadeOut={0.5}
    followMouse={true}
    mouseInfluence={0.2}
    hoverScale={1.2}
    parallax={0.05}
    clickBurst={false}
  />

      ) : (
      <Iridescence
  color={[0.8470588235294118,0.8823529411764706,0.9568627450980393]}
  mouseReact
  amplitude={0.1}
  speed={1}
/>


      )}
      </div>
      {/* Overlay for better text readability */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, backgroundColor: resolvedTheme === 'dark' ? 'rgba(10, 10, 20, 0.6)' : 'rgba(255, 255, 255, 0.7)' }} />
    </div>
  )
}
