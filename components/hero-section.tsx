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
            <h1 className="text-6xl bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-tight text-balance">
              <span className="block">Crypto Payments</span>
              <span className="text-accent block">Without Limits</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light px-2">
              Accept USDC, USDT, or SOL and settle in seconds. No intermediaries. No fees. Just pure velocity on the blockchain.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-24"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <ScheduleDemoButton />
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/docs">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border transition-all duration-300 hover:text-black w-full sm:w-auto"
                >
                  View Docs
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-row justify-center sm:justify-between items-center gap-8 sm:gap-6 pt-8 text-center sm:text-left"
          >
            {[
              { label: "Settlement time", value: "2.5s" },
              { label: "Setup fees", value: "$0" },
              { label: "Uptime SLA", value: "99.9%" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}