import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prepends the correct base path to asset URLs for GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For production on GitHub Pages, use the /portv2 prefix
  // For development, use no prefix
  const basePath = typeof window !== 'undefined' && window.location.hostname !== 'localhost' 
    ? '/portv2' 
    : '';
  
  return `${basePath}/${cleanPath}`;
}
