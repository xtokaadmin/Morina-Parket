import React, { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  // Try to handle different path formats
  const processedSrc = imgSrc.startsWith("./src")
    ? imgSrc.replace("./src", "")
    : imgSrc.startsWith("/src")
      ? imgSrc.replace("/src", "")
      : imgSrc;

  return (
    <img
      src={processedSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
