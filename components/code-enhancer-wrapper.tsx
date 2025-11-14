'use client'

import dynamic from 'next/dynamic'

const CodeEnhancer = dynamic(() => import('./code-enhancer'), { ssr: false })

export default function CodeEnhancerWrapper() {
  return <CodeEnhancer />
}
