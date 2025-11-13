"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScheduleDemoButton } from "./schedule-demo"
import { useRef, useEffect } from "react"

export function SquaresBackground({
  direction = "diagonal",
  speed = 0.3,
  borderColor = "rgba(139, 92, 246, 0.15)",
  squareSize = 60,
  hoverFillColor = "rgba(13, 92, 246, 0.8)",
}: {
  direction?: "diagonal" | "up" | "right" | "down" | "left"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number | null>(null)
  const gridOffset = useRef({ x: 0, y: 0 })
  const hoveredSquareRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize)
          const squareY = y - (gridOffset.current.y % squareSize)

          // Highlight hovered square
          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          ctx.strokeStyle = borderColor
          ctx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }
    }

    const animate = () => {
      const s = Math.max(speed, 0.1)
      switch (direction) {
        case "right":
          gridOffset.current.x = (gridOffset.current.x - s + squareSize) % squareSize
          break
        case "left":
          gridOffset.current.x = (gridOffset.current.x + s + squareSize) % squareSize
          break
        case "up":
          gridOffset.current.y = (gridOffset.current.y + s + squareSize) % squareSize
          break
        case "down":
          gridOffset.current.y = (gridOffset.current.y - s + squareSize) % squareSize
          break
        case "diagonal":
          gridOffset.current.x = (gridOffset.current.x - s + squareSize) % squareSize
          gridOffset.current.y = (gridOffset.current.y - s + squareSize) % squareSize
          break
      }

      drawGrid()
      requestRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      hoveredSquareRef.current = {
        x: Math.floor((mouseX + gridOffset.current.x - startX) / squareSize),
        y: Math.floor((mouseY + gridOffset.current.y - startY) / squareSize),
      }
    }

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [direction, speed, borderColor, hoverFillColor, squareSize])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.5 }}
    />
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-background">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 overflow-hidden">
        <SquaresBackground direction="diagonal" speed={0.4} />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-white dark:to-background" />
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-15">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8 mb-10 sm:mb-16"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-tight text-balance">
              <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">Seven lines of code.</span>
              <span className="text-accent block">Boom! Payments live.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium px-2">
              The crypto payment SDK developers actually want to use. 0.6% all-inclusive. <span className="text-accent font-bold">Gas fees on us.</span> No blockchain degree required.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto"
                >
                  Get Started Free
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/docs">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-accent text-accent font-semibold hover:bg-transparent hover:text-accent px-8 py-6 text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  View Live Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-2 gap-6 sm:gap-8 pt-12 border-t border-border/30"
          >
            {[
              { label: "Uptime", value: "99.9%" },
              { label: "Settlement", value: "<400ms" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}