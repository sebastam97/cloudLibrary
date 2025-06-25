"use client";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import BookCard from "./components/Card/Card";
import {
  CarouselArrow,
  CarouselContainer,
  CarouselTitle,
  CarouselWrapper,
} from "./styles/Carousel.styles";

interface Book {
  id: string | number;
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isbn: string;
  publishedDate: string;
  pages: number;
}

interface CarouselProps {
  books: Book[];
  title?: string;
}

const Carousel: React.FC<CarouselProps> = ({ books, title }) => {
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

  return (
    <CarouselWrapper>
      {title && <CarouselTitle>{title}</CarouselTitle>}
      <CarouselArrow
        aria-label="Ver anterior"
        left={true}
        type="button"
        onClick={() => scroll("left")}
      >
        <BsChevronLeft size={22} />
      </CarouselArrow>
      <CarouselContainer ref={containerRef}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </CarouselContainer>
      <CarouselArrow
        aria-label="Ver siguiente"
        type="button"
        onClick={() => scroll("right")}
      >
        <BsChevronRight size={22} />
      </CarouselArrow>
    </CarouselWrapper>
  );
};

export default Carousel;
