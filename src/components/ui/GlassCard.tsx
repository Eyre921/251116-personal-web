import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  blur?: string
}

export default function GlassCard({ children, className, blur = 'md' }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'rounded-2xl p-6',
        'border border-gray-200 bg-white/90 backdrop-blur shadow-lg',
        'dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
        `backdrop-blur-${blur}`,
        className
      )}
    >
      {children}
    </motion.div>
  )
}
