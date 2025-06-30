import React from "react";

function useCarousel() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = React.useState(1);

  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;

      if (width >= 1200) setCardsPerView(4);
      else if (width >= 992) setCardsPerView(3);
      else if (width >= 576) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const card = containerRef.current.querySelector('div[role="card"]');
    const cardWidth = card ? (card as HTMLElement).offsetWidth : 280;
    const gap = parseInt(getComputedStyle(containerRef.current).gap) || 24;
    const scrollAmount = (cardWidth + gap) * cardsPerView;

    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return {
    containerRef,
    cardsPerView,
    scroll,
  };
}

export default useCarousel;
