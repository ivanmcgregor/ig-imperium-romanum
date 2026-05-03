"use client";

import { galleryImageBgValue } from "@/utils/galleryImageUrl";
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
  if (process.env.NODE_ENV !== "development") {
    return <img src={`${basePath}.webp`} alt={alt} className={className} />;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "330px",
        backgroundImage: galleryImageBgValue(basePath),
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      &nbsp;
    </div>
  );
};
