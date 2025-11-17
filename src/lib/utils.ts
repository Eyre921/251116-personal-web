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
    const coarse = isCoarsePointer()
    const ua = window.navigator?.userAgent || ''
    const uaMobile = /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(ua)
    return coarse || uaMobile
  }
  return false
}
