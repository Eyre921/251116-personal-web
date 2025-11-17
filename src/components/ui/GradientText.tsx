import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface GradientTextProps {
  children: ReactNode
  className?: string
  colors?: string[]
}

export default function GradientText({ 
  children, 
  className,
  colors = ['#40ffaa', '#4079ff', '#ff40aa']
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: '200% 100%',
    animation: 'gradient 3s ease infinite',
  }

  return (
    <>
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      <span
        className={cn(
          'bg-clip-text text-transparent font-bold inline-block pb-[0.15em]',
          className
        )}
        style={gradientStyle}
      >
        {children}
      </span>
    </>
  )
}
