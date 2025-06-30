"use client";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import BookCard from "./components/Card/Card";
import useCarousel from "./hooks/useCarousel/useCarousel";
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
  const { containerRef, scroll } = useCarousel();

  return (
    <CarouselWrapper>
      {title && <CarouselTitle>{title}</CarouselTitle>}
      <CarouselArrow
        $left={true}
        aria-label="Ver anterior"
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
