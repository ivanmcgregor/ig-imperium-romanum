/**
 * CSS background-image value for a gallery image.
 * Production: webp only. Development: webp with jpg fallback.
 */
export function galleryImageBgValue(basePath: string): string {
  const webp = `url(${basePath}.webp)`;
  if (process.env.NODE_ENV === "development") {
    return `${webp}, url(${basePath}.jpg)`;
  }
  return webp;
}
