export default function customImageLoader({ src, width, quality }) {
  // Make sure all image URLs start with /portv2
  if (src.startsWith('/')) {
    // If it starts with a slash but not with /portv2, add /portv2
    if (!src.startsWith('/portv2/')) {
      src = `/portv2${src}`;
    }
  } else {
    // If it doesn't start with a slash, add /portv2/
    src = `/portv2/${src}`;
  }
  
  // Return the modified URL
  return src;
} 