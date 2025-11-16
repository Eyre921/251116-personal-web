import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isCoarsePointer(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(hover: none)').matches
}

export function isMobileOrTablet(): boolean {
  if (typeof window !== 'undefined') {
    const byViewport = window.innerWidth <= 1024
    const coarse = isCoarsePointer()
    return coarse || byViewport
  }
  return false
}
