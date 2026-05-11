'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 font-sans text-sm text-charcoal/60 hover:text-folk-red transition-colors group"
    >
      <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span>
      Back
    </button>
  )
}
