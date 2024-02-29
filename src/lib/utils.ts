import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getActiveBreakpoint() {
  if (window && window.matchMedia('(min-width: 1280px)').matches) {
      return 'xl';
  } else if (window && window.matchMedia('(min-width: 1024px)').matches) {
      return 'lg';
  } else if (window && window.matchMedia('(min-width: 768px)').matches) {
      return 'md';
  } else if (window && window.matchMedia('(min-width: 640px)').matches) {
      return 'sm';
  } else {
      return 'default';
  }
};
