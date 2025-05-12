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
  
  // Always use the /portv2 prefix for GitHub Pages
  // This is simpler and more reliable than trying to detect the environment
  return `/portv2/${cleanPath}`;
}
