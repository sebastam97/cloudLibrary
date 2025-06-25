import { useEffect, useState } from "react";

export function useCardHoverAndImage() {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 100);

    return () => clearTimeout(timer);
  }, []);

  return {
    isHovered,
    setIsHovered,
    imageLoaded,
    setImageLoaded,
  };
}
