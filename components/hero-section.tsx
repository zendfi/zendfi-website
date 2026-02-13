"use client"

import { Suspense, useRef, useEffect, useState, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Icosahedron, MeshDistortMaterial, Stars } from "@react-three/drei"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Sparkles, Zap, Layers, Orbit, ArrowDown, ExternalLink } from "lucide-react"
import Orb from './ui-pro/orb';
import * as THREE from "three"
import { Button } from "./ui/button"
import Link from "next/link"

// Hook to detect dark mode based on Tailwind's dark class on document root
export function useIsDark() {
  const [isDark, setIsDark] = useState(false);

  function checkIsDark() {
    const html = document.documentElement;
    const body = document.body;

    return (
      html.classList.contains("dark") ||
      body.classList.contains("dark") ||
      html.dataset.theme === "dark" ||
      body.dataset.theme === "dark"
    );
  }

  useEffect(() => {
    setIsDark(checkIsDark());

    const observer = new MutationObserver(() => {
      setIsDark(checkIsDark());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}


// Enhanced 3D Animated Orb Component with better distortion and glow
function AnimatedOrb() {
  return (
    // Just use your current Orb in a normal div
    <div className="w-full h-[600px]">
      <Orb hue={50} hoverIntensity={0.3} />
    </div>

  )
}

// Dark mode: Cosmic starfield
function DarkParticles() {
  const particlesRef = useRef<THREE.Group>(null)
  const time = useRef(0)

  useFrame(({ clock }) => {
    time.current = clock.elapsedTime
    if (!particlesRef.current) return
    particlesRef.current.rotation.x = Math.sin(time.current * 0.01) * 0.1 + time.current * 0.02
    particlesRef.current.rotation.y = Math.cos(time.current * 0.015) * 0.15 + time.current * 0.05
  })

  return (
    <group ref={particlesRef}>
      <Stars
        radius={100}
        depth={60}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
    </group>
  )
}



// Enhanced Canvas Scene with better lighting and environment
function Scene({ isDark }: { isDark: boolean }) {
  return (
    <>
      <pointLight position={[10, 10, 10]} intensity={isDark ? 1.2 : 0.8} color="#8b5cf6" decay={0.5} />
      <pointLight position={[-10, -10, 10]} intensity={isDark ? 1.0 : 0.6} color="#d8b4fe" decay={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={isDark ? 0.3 : 0.5} color="#ffffff" />

      <Suspense fallback={null}>
        <DarkParticles />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        enableDamping
        dampingFactor={0.03}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Dynamic background with gradient */}
      <color attach="background" args={[isDark ? "#0a0a0a" : "#ffffff"]} />
    </>
  )
}

export function HeroSection() {
  const isDark = useIsDark()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 15 })
  const scale = useTransform(springX, (x) => 1 + Math.abs(x) / 2000)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative w-full h-[120vh] bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[size:40px_40px] zendfi-grid-pattern opacity-[0.45] pointer-events-none" />

      {/* Main Content - Centered */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tighter"
          >
            One integration. <br /> <span className="block text-accent">Every crypto payment experience.</span>
          </motion.h1>

          {/* HERO TEXT ALERT 🚨: SUBTEXT – The supporting cast with all the deets */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 sm:mt-8 text-gray-600 dark:text-gray-200/95 text-base sm:text-md md:text-lg lg:text-xl leading-8 sm:leading-10 max-w-2xl"
          >
            ZendFi gives you a complete crypto payment stack — on-chain checkouts, gasless payments, multi-chain support, powerful APIs and SDKs, plus AIP-1 for secure autonomous agent spending all through one integration.

          </motion.p>

          {/* HERO TEXT ALERT 🚨: CTA BUTTONS – Action heroes ready to launch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center"
          >
            <Link href="https://dashboard.zendfi.tech/login" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-accent max-w-60 p-6 hover:text-accent transition-all duration-300 group bg-transparent dark:bg-accent text-accent cursor-pointer w-full sm:w-auto"
              >
                Get Started <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Link>
            <Button size={"lg"} className="border-border max-w-60 p-6 transition-all hover:bg-accent duration-300 group bg-accent dark:bg-accent text-white cursor-pointer w-full sm:w-auto">
              View Documentation
            </Button>
          </motion.div>


        </div>
      </div>
    </section>
  )
}