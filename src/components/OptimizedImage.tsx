import React, { useState } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export default function OptimizedImage({
  src,
  alt = "",
  className = "",
  containerClassName = "",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-surface ${containerClassName}`}>
      {/* Subtle skeleton shimmer placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-white/[0.04]" />
      )}

      {/* Actual image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover transition-all duration-700 ease-out ${
            isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm"
          } ${className}`}
          {...props}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-surface font-mono text-xs text-muted">
          Preview unavailable
        </div>
      )}
    </div>
  );
}
