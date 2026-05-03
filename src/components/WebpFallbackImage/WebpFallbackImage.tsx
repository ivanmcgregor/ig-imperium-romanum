"use client";

import { useState } from "react";

interface WebpFallbackImageProps {
  basePath: string;
  alt: string;
  className?: string;
}

export const WebpFallbackImage = ({
  basePath,
  alt,
  className,
}: WebpFallbackImageProps) => {
  const [useJpgFallback, setUseJpgFallback] = useState(false);
  const webp = `${basePath}.webp`;
  const jpg = `${basePath}.jpg`;
  const src = useJpgFallback ? jpg : webp;

  const handleError = () => {
    if (!useJpgFallback) {
      setUseJpgFallback(true);
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};
