import { useEffect, useState } from "react"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [follower, setFollower] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", moveCursor)
    return () => document.removeEventListener("mousemove", moveCursor)
  }, [])

  // Smooth follower animation
  useEffect(() => {
    const follow = () => {
      setFollower((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }))
      requestAnimationFrame(follow)
    }
    follow()
  }, [position])

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed w-3 h-3 bg-indigo-400 rounded-full pointer-events-none z-[9999]"
        style={{
          left: position.x - 6,
          top: position.y - 6,
        }}
      />

      {/* Outer Glow Circle */}
      <div
        className="fixed w-10 h-10 border border-indigo-400 rounded-full pointer-events-none z-[9998]"
        style={{
          left: follower.x - 20,
          top: follower.y - 20,
          boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
        }}
      />
    </>
  )
}

export default CustomCursor