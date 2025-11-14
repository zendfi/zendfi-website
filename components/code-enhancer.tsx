"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import "../styles/code-enhancer.css"

export default function CodeEnhancer() {
  const pathname = usePathname()

  useEffect(() => {
    console.log('[CodeEnhancer] Initializing for route:', pathname)

    // Check if Prism is already loaded globally
    const checkPrism = () => {
      return typeof window !== 'undefined' && (window as any).Prism
    }

    const addButtons = () => {
      const pres = Array.from(document.querySelectorAll('pre'))
      console.log('[CodeEnhancer] Found', pres.length, 'pre elements')

      pres.forEach((pre, idx) => {
        const code = pre.querySelector('code')
        if (!code) return

        const preEl = pre as HTMLElement
        preEl.style.position = 'relative'

        // Add copy button
        if (!pre.querySelector('.code-copy-btn')) {
          const btn = document.createElement('button')
          btn.type = 'button'
          btn.className = 'code-copy-btn'
          btn.setAttribute('aria-label', 'Copy code')
          btn.textContent = 'Copy'

          btn.addEventListener('click', async () => {
            try {
              await navigator.clipboard.writeText(code.textContent || '')
              btn.textContent = 'Copied!'
              setTimeout(() => (btn.textContent = 'Copy'), 1500)
            } catch (err) {
              btn.textContent = 'Error'
              setTimeout(() => (btn.textContent = 'Copy'), 1500)
            }
          })

          preEl.appendChild(btn)
          console.log('[CodeEnhancer] Added copy button to pre', idx)
        }

        // Add language label
        const classList = code.className || ''
        let lang = ''
        if (classList.includes('language-')) {
          lang = classList.split('language-')[1].split(' ')[0]
        }

        if (!lang) {
          const txt = (code.textContent || '').trim()
          if (txt.startsWith('{') || txt.startsWith('[')) lang = 'json'
          else if (txt.startsWith('<')) lang = 'html'
          else if (/^\/\//.test(txt) || txt.includes('const ') || txt.includes('function ')) lang = 'js'
        }

        if (lang && !pre.querySelector('.code-lang-label')) {
          const lbl = document.createElement('div')
          lbl.className = 'code-lang-label'
          lbl.textContent = lang.toUpperCase()
          preEl.appendChild(lbl)
          console.log('[CodeEnhancer] Added language label:', lang)
        }

        // If we inferred a language but the <code> element doesn't have a language class,
        // add it so Prism knows which grammar to use.
        if (lang && !(code as HTMLElement).className.includes(`language-`)) {
          (code as HTMLElement).classList.add(`language-${lang}`)
          console.log('[CodeEnhancer] Added class to code element:', `language-${lang}`)
        }

        // Highlight with Prism if available
        const Prism = checkPrism()
        if (Prism && Prism.highlightElement) {
          try {
            Prism.highlightElement(code as Element)
            console.log('[CodeEnhancer] Highlighted element', idx)
          } catch (e) {
            console.log('[CodeEnhancer] Highlighting error:', e)
          }
        }
      })
    }

    // Run immediately
    addButtons()

    // Also run after a small delay to catch dynamically added content
    const timer = setTimeout(addButtons, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
