import { useRef } from "react"

const MagneticButton = ({ children, className = "", ...props }) => {
  const ref = useRef()

  // 🧲 Magnetic movement
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  // Reset position
  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px, 0px)`
  }

  // 💥 Ripple effect
  const handleClick = (e) => {
    const button = ref.current

    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`
    circle.classList.add("ripple")

    const ripple = button.getElementsByClassName("ripple")[0]
    if (ripple) ripple.remove()

    button.appendChild(circle)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative overflow-hidden inline-block transition-transform duration-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default MagneticButton