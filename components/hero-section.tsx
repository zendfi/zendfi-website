"use client"

import { Suspense, useRef, useEffect, useState, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Icosahedron, MeshDistortMaterial, Stars } from "@react-three/drei"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Sparkles, Zap, Layers, Orbit, ArrowDown } from "lucide-react"
import Orb from './ui-pro/orb';
import * as THREE from "three"

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
      {/* Enhanced gradient overlay with mouse-reactive shimmer */}
      <motion.div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          x: springX,
          y: springY,
          scale: scale,
        }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className={`absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] ${isDark ? 'bg-violet-500/10' : 'bg-violet-500/5'}`} />
      </motion.div>

      {/* 3D Canvas - Full screen background */}
      {isDark ? (
        <Canvas className="absolute inset-0 z-10" camera={{ position: [0, 0, 5], fov: 50 }}>
          <Scene isDark={isDark} />
        </Canvas>
      ) : (
        <div className="absolute hidden sm:flex inset-0 z-0">
          <Orb hue={50} hoverIntensity={0.3} />
  <div
  className="absolute bottom-0 left-0 w-full h-40
             backdrop-blur-md pointer-events-none
             bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.6),rgba(255,255,255,0.8),rgba(255,255,255,0.9),white)]"
/>


</div>

      )}


      {/* Main Content - Centered */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tight drop-shadow-lg dark:drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            One integration. <br /> <span className="bg-clip-text text-accent">Every crypto payment experience.</span>
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
            <motion.a
              href="/signup"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-4 rounded-xl text-white font-bold text-base sm:text-lg bg-accent"
            >
              Get Started
            </motion.a>
            <motion.a
              href="https://blog.zendfi.tech/article/agentic-intent-protocol"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 sm:px-10 py-4 rounded-xl border-2 border-accent/60 backdrop-blur-sm font-bold text-base sm:text-lg transition-all duration-200 flex items-center justify-center gap-2 ${isDark
                ? 'bg-transparent text-white hover:border-accent hover:bg-white/12'
                : 'bg-transparent text-gray-900 hover:border-accent hover:bg-white'
                }`}
            >
              Explore AIP-1
            </motion.a>
          </motion.div>

          
        </div>
      </div>
    </section>
  )
}