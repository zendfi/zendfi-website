"use client"

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    // Add smooth scrolling class to html element
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Optimize scroll performance with CSS containment
    document.documentElement.style.contain = 'layout style paint'
    
    // Enable GPU acceleration for smoother scrolling
    document.body.style.transform = 'translateZ(0)'
    document.body.style.backfaceVisibility = 'hidden'
    document.body.style.perspective = '1000px'
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = ''
      document.documentElement.style.contain = ''
      document.body.style.transform = ''
      document.body.style.backfaceVisibility = ''
      document.body.style.perspective = ''
    }
  }, [])
}
